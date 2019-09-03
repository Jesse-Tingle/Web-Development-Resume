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


export const ContactH1 = styled.h1`
    font-family: ${mainFont};
    color: ${mainFontColor};
`;

export const ContactSubContainers = styled.div`
    display: flex;
    align-items: center;
    font-family: ${secondaryFont};
    color: ${subHeadingColor};
    font-size: .6rem;
    padding-bottom: 20px;
`;

export const Image = styled.img`
    height: 25px;
`;

export const SubHeadings = styled.h2`
    padding-left: 5%;
`;