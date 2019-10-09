import React from 'react';
import { getProfile } from '../services/getProfile';
import { updateProfile } from '../services/updateProfile';

interface Props {
  webId: string;
};

export interface Profile {
  name?: string;
  nickname?: string;
};

export const ProfileEditor: React.FC<Props> = (props) => {
  const [isSaving, setIsSaving] = React.useState(false);
  const [profileData, setProfileData] = React.useState<Profile>();
  const [nameField, setNameField] = React.useState<string>();
  const [nicknameField, setNickameField] = React.useState<string>();

  React.useEffect(() => {
    getProfile(props.webId).then(setProfileData);
  }, [props.webId]);

  if (!profileData) {
    return <>Loading&hellip;</>;
  }

  const onSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();

    setIsSaving(true);

    updateProfile(
      props.webId,
      {
        name: (typeof nameField === 'string') ? nameField : profileData.name,
        nickname: (typeof nicknameField === 'string') ? nicknameField : profileData.nickname,
      },
    ).then(() => setIsSaving(false));
  };

  const buttonClass = isSaving ? 'is-loading button is-primary' : 'button is-primary';

  return <>
    <section className="section">
      <form onSubmit={onSubmit}>
        <div className="field">
          <div className="control">
            <label htmlFor="name" className="label">Name:</label>
            <input
              id="name"
              value={(typeof nameField === 'string') ? nameField : profileData.name}
              onChange={(e) => setNameField(e.target.value)}
              type="text"
              className="input"
              disabled={isSaving}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label htmlFor="nickname" className="label">Nickname:</label>
            <input
              id="nickname"
              value={(typeof nicknameField === 'string') ? nicknameField : profileData.nickname}
              onChange={(e) => setNickameField(e.target.value)}
              type="text"
              className="input"
              disabled={isSaving}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button type="submit" className={buttonClass}>Update</button>
          </div>
        </div>
      </form>
    </section>
  </>;
};
