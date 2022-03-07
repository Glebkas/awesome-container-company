import React from 'react';
import Nav from './Nav';

function Header() {
    return (
        <header className='header'>
            <div className='header__left-container'>
                <div className='header__logo'></div>
                <p className='header__title'>Awesome Container Company</p>
            </div>
            <div className='header__right-container'>
                <Nav></Nav>
                <button className='header__button'>Work with us</button>
            </div>
        </header>
    );
}

export default Header;
