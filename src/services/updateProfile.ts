import { fetchDocument } from 'tripledoc';
import { foaf } from 'rdf-namespaces';
import { Profile } from '../components/ProfileEditor';

export async function updateProfile(webId: string, profile: Profile): Promise<void> {
  const profileDocument = await fetchDocument(webId);
  const person = profileDocument.getSubject(webId);

  if (profile.name) {
    person.setLiteral(foaf.name, profile.name);
  }
  if (profile.nickname) {
    person.setLiteral(foaf.nick, profile.nickname);
  }

  await profileDocument.save();
}
