import React from 'react';
import {ContentContainerDiv, EducationSubContainer, SectionTitle, SubSectionTitle, DateText, Ptext} from './styles';

function EducationCard (props) {
    return (
        <ContentContainerDiv>
            <SectionTitle>EDUCATION</SectionTitle>
            <EducationSubContainer>
                <SubSectionTitle>Lambda School</SubSectionTitle>
                <DateText>MAY 2019 - SEP 2020</DateText>
                <Ptext>Certificate in Full Stack Web Development</Ptext>
            </EducationSubContainer>

            <EducationSubContainer>
                <SubSectionTitle>Georgetown College</SubSectionTitle>
                <DateText>AUG 2009 - MAY 2014</DateText>
                <Ptext>Bachelor of Arts in Art w/ emphasis in Digital Imaging</Ptext>
            </EducationSubContainer>
        </ContentContainerDiv>
    )
}

export default EducationCard;