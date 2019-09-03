import React from 'react';
import {SkillsCardContainer, SkillsH1, SkillsContentContainer, SkillsList, SkillsList2} from './skills-styles';


function SkillsCard (props) {
    return (
        <SkillsCardContainer>
            <SkillsH1>SKILLS</SkillsH1>
            <SkillsContentContainer>
                <SkillsList>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>LESS</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>JavaScript</li>
                </SkillsList>
                
                <SkillsList2>    
                    <li>InDesign</li>
                    <li>React</li>
                    <li>SASS</li>
                    <li>Styled-Components</li>
                    <li>Command Line</li>
                </SkillsList2>
            </SkillsContentContainer>
        </SkillsCardContainer>
    )
}

export default SkillsCard;