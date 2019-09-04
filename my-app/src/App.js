import React from 'react';
import './App.css';
import TitleCard from './components/TitleCard';
import ProfileCard from './components/ProfileCard';
import ContactCard from './components/ContactCard';
import EducationCard from './components/EducationCard';
import SkillsCard from './components/SkillsCard';
import ExperienceCard from './components/ExperienceCard';
import HobbiesCard from './components/HobbiesCard';
import SocialsCard from './components/SocialsCard';
import {Ptext} from './components/styles';

function App() {
  return (
    <div className="App">
      <TitleCard />
      <div className="content-container">
        <div className="left-container">
          <ProfileCard />
          <ContactCard />
          <SkillsCard />
          <SocialsCard />
          <div className="print-div">
            <Ptext>Download a print version of my resume <a href="./Jesse-Tingle-Web Development-Resume.pdf" download>here.</a></Ptext>
          </div>
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
