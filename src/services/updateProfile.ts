import { graph, Fetcher, NamedNode, UpdateManager, st, Literal } from 'rdflib';
import { foaf } from 'rdf-namespaces';

import { Profile } from '../components/ProfileEditor';

export async function updateProfile(webId: string, profile: Profile): Promise<void> {
  const store = graph();
  const fetcher = new Fetcher(store, {});
  await fetcher.load(webId);
  const updater = new UpdateManager(store);
  const person = new NamedNode(webId);
  const nameNode = new NamedNode(foaf.name);
  const nicknameNode = new NamedNode(foaf.nick);

  const statementsToDelete = store.statementsMatching(person, nameNode, null, person.doc())
    .concat(
      store.statementsMatching(person, nicknameNode, null, person.doc())
    );
  const statementsToAdd = [];

  if (profile.name) {
    statementsToAdd.push(
      st(person, nameNode, new Literal(profile.name), person.doc()),
    );
  }
  if (profile.nickname) {
    statementsToAdd.push(
      st(person, nicknameNode, new Literal(profile.nickname), person.doc()),
    );
  }

  return updater.update(statementsToDelete, statementsToAdd, () => {});
}
