import styled from 'styled-components';

let mainFont = 'Hammersmith One';
let secondaryFont = 'Montserrat';
let mainFontColor = '#5AD2CC';
let subHeadingColor = '#3E6B89';

export const ContainerDiv = styled.div`
    width: 60%;
    text-align: left;
    margin-left: 9%;
`;

export const ProfileH1 = styled.h1`
    font-family: ${mainFont};
    color: ${mainFontColor};
`;

export const ParagraphText = styled.p`
    font-family: ${secondaryFont};
    color: ${subHeadingColor};
    line-height: 2rem;
`;
