import styled from 'styled-components';

let mainFont = 'Hammersmith One';
let secondaryFont = 'Montserrat';
let mainFontColor = '#5AD2CC';
let subHeadingColor = '#3E6B89';

export const MainHeader = styled.h1`
    font-family: ${mainFont};
    font-size: 5rem;
    margin-bottom: 0px;
    color: ${mainFontColor};
`;

export const SubHeader = styled.h2`
    font-family: ${secondaryFont};
    font-size: 2rem;
    margin-top: 0px;
    color: ${subHeadingColor};
`;

export const HR = styled.hr`
    margin-left: 5%;
    margin-right: 5%;
    height: 10px;
    background-color: ${mainFontColor};
    border: none;
`;

export const SectionTitle = styled.h3`
    font-family: ${mainFont};
    color: ${mainFontColor};
    font-size: 2rem;
`;

export const Ptext = styled.p`
    font-family: ${secondaryFont};
    color: ${subHeadingColor};
    line-height: 2rem;
`;

export const SubSectionTitle = styled.h4`
    font-family: ${secondaryFont};
    color: ${subHeadingColor};
    font-weight: bold;
    font-size: 1.2rem;
`;

export const ContentContainerDiv = styled.div`
    width: 80%;
    text-align: left;
    margin-left: 9%;
`;

export const ContactSubContainers = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 20px;
`;

export const EducationSubContainer = styled.div`

`;


export const SkillsContentContainer = styled.div`
    display: flex;
    font-family: ${secondaryFont};
    color: ${subHeadingColor};
`;

export const SkillsList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    text-align: left;
    line-height: 2rem;
    font-size: 1.2rem;
    padding-left: 0px;
`;

export const SkillsList2 = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    text-align: left;
    line-height: 2rem;
    font-size: 1.2rem;
    padding-left: 50px;
`;

export const ExperienceListUl = styled.ul`
    font-family: ${secondaryFont};
    color: ${subHeadingColor};
    list-style-type: circle;
`;

export const Image = styled.img`
    height: 25px;
`;

export const ContactInfo = styled.h2`
    padding-left: 5%;
    font-family: ${secondaryFont};
    color: ${subHeadingColor};
    font-size: 1rem;
`;

export const DateText = styled.p`
    font-family: ${secondaryFont};
    color: ${mainFontColor};
`;