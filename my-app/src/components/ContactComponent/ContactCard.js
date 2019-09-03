import React from 'react';
//import phone from '../img/phone.png';
import {ContainerDiv, ContactH1, ContactSubContainers, Image, SubHeadings} from './contact-styles';

function ContactCard (props) {
    return (
        <ContainerDiv>
            <ContactH1>Contact</ContactH1>
            <ContactSubContainers>
                <Image src={require('../../img/phone.png')} alt="phone icon"/>
                <SubHeadings>+1 (502) 229 - 2383</SubHeadings>
            </ContactSubContainers>

            <ContactSubContainers>
                <Image src={require('../../img/email.png')} alt="email icon"/>
                <SubHeadings>jtingle0@gmail.com</SubHeadings>
            </ContactSubContainers>

            <ContactSubContainers>
                <Image src={require('../../img/location.png')} alt="location icon"/>
                <SubHeadings>Kentucky, USA</SubHeadings>
            </ContactSubContainers>
        </ContainerDiv>
    )
}

export default ContactCard;