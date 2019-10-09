import data from '@solid/query-ldflex';
import { Profile } from '../components/ProfileEditor';

export async function getProfile(webId: string): Promise<Profile> {
  const person = data[webId];

  const name = await person.name;
  const nickname = await person.nick;

  return { name, nickname };
}
