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
      <ProfileCard />

      <ContactCard />
      <SkillsCard />
      <EducationCard />
      <ExperienceCard />
      <HobbiesCard />
      
    </div>
  );
}

export default App;
