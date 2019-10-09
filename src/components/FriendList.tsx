import React from 'react';
import { getFriendNames } from '../services/getFriendList';

interface Props {
  webId: string;
};

export const FriendList: React.FC<Props> = (props) => {
  const [friendList, setFriendList] = React.useState<string[]>();

  React.useEffect(() => {
    getFriendNames(props.webId).then((friends) => {
      setFriendList(friends);
    });
  }, [props.webId]);

  if (!friendList) {
    return <>Loading friends&hellip;</>;
  }

  return <>
    <section className="section content">
      <h2>Friends:</h2>
      <ul>
        {friendList.map((friend, i) => <li key={`friend${i}`}>{friend}</li>)}
      </ul>
    </section>
  </>;
};
