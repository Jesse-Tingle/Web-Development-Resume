import React from 'react';
import {SectionTitle, ContentContainerDiv, ContactSubContainers, Image, InfoLink} from './styles';


function SocialsCard (props) {
    return (
        <ContentContainerDiv>
            <SectionTitle>SOCIALS</SectionTitle>
            <ContactSubContainers>
                <Image src={require('../img/github.png')} alt="phone icon"/>
                <InfoLink href="https://github.com/Jesse-Tingle">github.com/Jesse-Tingle</InfoLink>
            </ContactSubContainers>

            <ContactSubContainers>
                <Image src={require('../img/linkedin.png')} alt="email icon"/>
                <InfoLink href="https://www.linkedin.com/in/Jesse-Tingle">linkedin.com/in/Jesse-Tingle</InfoLink>
            </ContactSubContainers>

            <ContactSubContainers>
                <Image src={require('../img/twitter.png')} alt="location icon"/>
                <InfoLink href="https://twitter.com/JesseTingle">@JesseTingle</InfoLink>
            </ContactSubContainers>
        </ContentContainerDiv>
    )
}

export default SocialsCard;