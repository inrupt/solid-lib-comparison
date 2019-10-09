import { graph, Fetcher, NamedNode } from 'rdflib';
import { foaf } from 'rdf-namespaces';

export async function getFriendNames(webId: string): Promise<string[]> {
  const store = graph();
  const fetcher = new Fetcher(store, {});
  await fetcher.load(webId);

  const person = new NamedNode(webId);
  const friendWebIds = store.each(person, new NamedNode(foaf.knows), null, person.doc());
  await Promise.all(friendWebIds.map(((friendWebId) => fetcher.load(friendWebId.value))));
  const names = friendWebIds.map((friend) => store.any(friend, new NamedNode(foaf.name), null, (friend as NamedNode).doc()));
  return names.map(nameNode => nameNode ? nameNode.value : 'hoi');
}
