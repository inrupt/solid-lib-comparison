import React from 'react';
import { LibraryDemo } from './components/LibraryDemo';
import { LoggedOut, LoginButton, LoggedIn } from '@solid/react';

const App: React.FC = () => {
  return <>
    <LoggedOut>
      <section className="section">
        <p className="content">This app requires you to log in.</p>
        <LoginButton popup="popup.html" className="button is-large is-primary">Log in</LoginButton>
      </section>
    </LoggedOut>
    <LoggedIn>
      <LibraryDemo/>
    </LoggedIn>
  </>;
}

export default App;
