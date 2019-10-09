import { graph, Fetcher, NamedNode } from 'rdflib';
import { foaf } from 'rdf-namespaces';

import { Profile } from '../components/ProfileEditor';

export async function getProfile(webId: string): Promise<Profile> {
  const store = graph();
  const fetcher = new Fetcher(store, {});
  await fetcher.load(webId);

  const person = new NamedNode(webId);
  const name = store.any(person, new NamedNode(foaf.name), null, person.doc());
  const nick = store.any(person, new NamedNode(foaf.nick), null, person.doc());

  return Promise.resolve({
    name: name ? name.value : undefined,
    nickname: nick ? nick.value : undefined,
  });
}
