import React from 'react';
import {SectionTitle, ContentContainerDiv, ContactSubContainers, Image, ContactInfo} from './styles';


function ContactCard (props) {
    return (
        <ContentContainerDiv>
            <SectionTitle>CONTACT</SectionTitle>
            <ContactSubContainers>
                <Image src={require('../img/phone.png')} alt="phone icon"/>
                <ContactInfo>+1 (502) 229 - 2383</ContactInfo>
            </ContactSubContainers>

            <ContactSubContainers>
                <Image src={require('../img/email.png')} alt="email icon"/>
                <ContactInfo>jtingle0@gmail.com</ContactInfo>
            </ContactSubContainers>

            <ContactSubContainers>
                <Image src={require('../img/location.png')} alt="location icon"/>
                <ContactInfo>Kentucky, USA</ContactInfo>
            </ContactSubContainers>
        </ContentContainerDiv>
    )
}

export default ContactCard;