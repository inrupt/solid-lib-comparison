import data from '@solid/query-ldflex';
import { Profile } from '../components/ProfileEditor';

export async function updateProfile(webId: string, profile: Profile): Promise<void> {
  await data[webId].name.set(profile.name);
  await data[webId].nick.set(profile.nickname);
}
