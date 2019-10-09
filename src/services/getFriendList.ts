import { fetchDocument } from 'tripledoc';
import { foaf } from 'rdf-namespaces';

export async function getFriendNames(webId: string): Promise<string[]> {
  const profileDoc = await fetchDocument(webId);
  const person = profileDoc.getSubject(webId);

  const friends = person.getAllNodeRefs(foaf.knows);
  const friendNames = await Promise.all(friends.map(async (friendWebId) => {
    const friendDoc = await fetchDocument(friendWebId);
    const friend = friendDoc.getSubject(friendWebId);
    const name = friend.getLiteral(foaf.name);
    return (typeof name === 'string') ? name : friendWebId;
  }));

  return friendNames;
}
