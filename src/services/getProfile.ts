import { fetchDocument } from 'tripledoc';
import { foaf } from 'rdf-namespaces';
import { Profile } from '../components/ProfileEditor';

export async function getProfile(webId: string): Promise<Profile> {
  const profileDocument = await fetchDocument(webId);
  const person = profileDocument.getSubject(webId);

  const name = person.getString(foaf.name);
  const nick = person.getString(foaf.nick);
  const profile: Profile = {
    name: (typeof name === 'string') ? name : undefined,
    nickname: (typeof nick === 'string') ? nick : undefined,
  };
  return profile;
}
