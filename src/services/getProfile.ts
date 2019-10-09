import { Profile } from '../components/ProfileEditor';

export async function getProfile(webId: string): Promise<Profile> {
  return Promise.resolve({
    name: 'Dummy name',
    nickname: 'Dummy nickname',
  });
}
