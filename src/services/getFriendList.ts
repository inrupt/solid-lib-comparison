import data from '@solid/query-ldflex';

export async function getFriendNames(webId: string): Promise<string[]> {
  const person = data[webId];

  const friends = [];
  for await (const friend of person.friends) {
    friends.push(await data[friend].name);
  }
  return friends.map(friend => friend.toString());
}
