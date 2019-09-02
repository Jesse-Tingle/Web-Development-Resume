import React from 'react';
import './App.css';
import TitleCard from './components/TitleComponent/TitleCard';
import ProfileCard from './components/ProfileComponent/ProfileCard';
import ContactCard from './components/ContactComponent/ContactCard';
import EducationCard from './components/EducationComponent/EducationCard';
import SkillsCard from './components/SkillsComponent/SkillsCard';
import ExperienceCard from './components/ExperienceComponent/ExperienceCard';
import HobbiesCard from './components/HobbiesComponent/HobbiesCard';

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
