import React from 'react';
import './App.css';
import TitleCard from './components/TitleCard';
import ProfileCard from './components/ProfileCard';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className="App">
      <TitleCard />
      <ProfileCard />

      <ContactCard />
      
    </div>
  );
}

export default App;
