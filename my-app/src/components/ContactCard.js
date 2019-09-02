import React from 'react';
//import phone from '../img/phone.png';

function ContactCard (props) {
    return (
        <>
            <h1>Contact</h1>
            <div>
                <img src={require('../img/iPhone.png')} alt="phone icon"/>
                <h2>+1 (502) 229 - 2383</h2>
            </div>

            <div>
                <img src={require('../img/email.png')} alt="email icon"/>
                <h2>jtingle0@gmail.com</h2>
            </div>

            <div>
                <img src={require('../img/location.png')} alt="location icon"/>
                <h2>Kentucky, USA</h2>
            </div>
        </>
    )
}

export default ContactCard;