import React from 'react';
import Nav from './Nav';
import ContactButton from './ContactButton';

function Header(props) {
    const [open, setOpen] = React.useState(false);

    function handleHumburgerClick() {
        setOpen(!open);
    }
    return (
        <header className='header'>
            <div className='header__left-container'>
                <div className='header__logo'></div>
                <p className='header__title'>Awesome Container Company</p>
            </div>
            <div className='header__right-container'>
                <button
                    onClick={handleHumburgerClick}
                    className={
                        open
                            ? 'header__hamburger header__hamburger_close'
                            : 'header__hamburger'
                    }
                ></button>
                <Nav></Nav>
                <ContactButton
                    openPopUp={props.openPopUp}
                    class='contact-button contact-button_type_header'
                />
            </div>
        </header>
    );
}

export default Header;
