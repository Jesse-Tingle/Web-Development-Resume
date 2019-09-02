import React from 'react';
import {ContainerDiv, ProfileH1, ParagraphText} from './profile-styles';

function ProfileCard (props) {
    return (
        <ContainerDiv>
            <ProfileH1>PROFILE</ProfileH1>
            <ParagraphText>I'm currently attending school at Lambda in their Full Stack Web Development program. I am constantly growing my skill set. One of the things I absolutely love about the technology industry is that it's constantly growing and changing. I love learning knew things and challenging myself to be better every day.</ParagraphText>
        </ContainerDiv>
    )
}

export default ProfileCard;