import React from 'react';

function ContactButton(props) {
    return <button onClick={props.openPopUp} className={props.class}>Work with us</button>;
}

export default ContactButton;
