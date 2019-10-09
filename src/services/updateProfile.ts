import data from '@solid/query-ldflex';
import { Profile } from '../components/ProfileEditor';

export async function updateProfile(webId: string, profile: Profile): Promise<void> {
  const person = data[webId];
  await person.name.set(profile.name);
  await person.nick.set(profile.nickname);
}
