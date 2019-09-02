import styled from 'styled-components';

let mainFont = 'Hammersmith One';
let secondaryFont = 'Montserrat';
let mainFontColor = '#5AD2CC';
let subHeadingColor = '#3E6B89';

export const Title = styled.h1`
    font-family: ${mainFont};
    font-size: 5rem;
    margin-bottom: 0px;
    color: ${mainFontColor};
`;

export const SubHeading = styled.h2`
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