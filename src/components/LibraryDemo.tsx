import React from 'react';
import { useWebId } from '@solid/react';
import { ProfileEditor } from './ProfileEditor';
import { FriendList } from './FriendList';

export const LibraryDemo: React.FC = () => {
  const webId = useWebId();

  if (!webId) {
    return <>
      Loading&hellip;
    </>;
  }

  return <>
    <ProfileEditor webId={webId}/>
    <FriendList webId={webId}/>
  </>;
};
