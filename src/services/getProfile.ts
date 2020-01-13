import data from '@solid/query-ldflex';
import { Profile } from '../components/ProfileEditor';

export async function getProfile(webId: string): Promise<Profile> {
  return {
    name: await data[webId].name,
    nickname: await data[webId].nick,
  };
}
