import React from 'react';
import { ContentContainerDiv, SectionTitle, Ptext } from './styles';

function ProfileCard (props) {
    return (
        <ContentContainerDiv>
            <SectionTitle>PROFILE</SectionTitle>
            <Ptext>I'm currently attending school at Lambda in their Full Stack Web Development program. I am constantly growing my skill set. One of the things I absolutely love about the technology industry is that it's constantly growing and changing. I love learning knew things and challenging myself to be better every day.</Ptext>
        </ContentContainerDiv>
    )
}

export default ProfileCard;