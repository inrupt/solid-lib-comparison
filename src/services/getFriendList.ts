import data from '@solid/query-ldflex';

export async function getFriendNames(webId: string): Promise<string[]> {
  return data[webId].friends.toArray((friend: any) => data[friend].name.value);
}
