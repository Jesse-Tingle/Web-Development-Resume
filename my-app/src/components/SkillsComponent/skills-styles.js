import styled from 'styled-components';

let mainFont = 'Hammersmith One';
let secondaryFont = 'Montserrat';
let mainFontColor = '#5AD2CC';
let subHeadingColor = '#3E6B89';

export const SkillsCardContainer = styled.div`
    width: 60%;
    text-align: left;
    margin-left: 9%;
`;

export const SkillsH1 = styled.h1`
    font-family: ${mainFont};
    color: ${mainFontColor};
    // text-align: left;
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