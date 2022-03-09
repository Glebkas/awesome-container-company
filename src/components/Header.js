import React from 'react';
import Nav from './Nav';
import ContactButton from './ContactButton';

function Header(props) {
    return (
        <header className='header'>
            <div className='header__left-container'>
                <div className='header__logo'></div>
                <p className='header__title'>Awesome Container Company</p>
            </div>
            <div className='header__right-container'>
                <Nav></Nav>
                <ContactButton class='contact-button contact-button_type_header' />
            </div>
        </header>
    );
}

export default Header;
