import React from 'react';
import './App.css';
import TitleCard from './components/TitleCard';
import ProfileCard from './components/ProfileCard';
import ContactCard from './components/ContactCard';
import EducationCard from './components/EducationCard';
import SkillsCard from './components/SkillsCard';
import ExperienceCard from './components/ExperienceCard';
import HobbiesCard from './components/HobbiesCard';

function App() {
  return (
    <div className="App">
      <TitleCard />
      <div className="content-container">
        <div className="left-container">
          <ProfileCard />
          <ContactCard />
          <SkillsCard />
        </div>

        <div className="right-container">
          <EducationCard />
          <ExperienceCard />
          <HobbiesCard />
        </div>
      </div>
    </div>
  );
}

export default App;
