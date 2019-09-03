import React from 'react';
import {ContentContainerDiv, SectionTitle, SkillsContentContainer, SkillsList, SkillsList2} from './styles';


function SkillsCard (props) {
    return (
        <ContentContainerDiv>
            <SectionTitle>SKILLS</SectionTitle>
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
        </ContentContainerDiv>
    )
}

export default SkillsCard;