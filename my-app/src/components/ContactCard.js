import React from 'react';
import {SectionTitle, ContentContainerDiv, ContactSubContainers, Image, InfoLink} from './styles';


function ContactCard (props) {
    return (
        <ContentContainerDiv>
            <SectionTitle>CONTACT</SectionTitle>
            <ContactSubContainers>
                <Image src={require('../img/phone.png')} alt="phone icon"/>
                <InfoLink>+1 (502) 229 - 2383</InfoLink>
            </ContactSubContainers>

            <ContactSubContainers>
                <Image src={require('../img/email.png')} alt="email icon"/>
                <InfoLink>jtingle0@gmail.com</InfoLink>
            </ContactSubContainers>

            <ContactSubContainers>
                <Image src={require('../img/location.png')} alt="location icon"/>
                <InfoLink>Kentucky, USA</InfoLink>
            </ContactSubContainers>
        </ContentContainerDiv>
    )
}

export default ContactCard;