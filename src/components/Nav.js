import React from 'react';
import ContactButton from './ContactButton';

import { HashLink } from 'react-router-hash-link';

function Nav(props) {
    return (
        <nav className={props.open ? 'nav nav_type_mobile' : 'nav'}>
            <ul
                className={
                    props.open
                        ? 'nav__links nav__links_type_mobile'
                        : 'nav__links'
                }
            >
                <HashLink
                    style={{ textDecoration: 'none' }}
                    smooth
                    to='/#problem'
                >
                    <li className='nav__link'>The Problem</li>
                </HashLink>
                <HashLink
                    style={{ textDecoration: 'none' }}
                    smooth
                    to='/#solution'
                >
                    <li className='nav__link'>Sustainable Solution</li>
                </HashLink>
                <HashLink
                    style={{ textDecoration: 'none' }}
                    smooth
                    to='/#impact'
                >
                    <li className='nav__link'>Impact</li>
                </HashLink>
                <HashLink
                    style={{ textDecoration: 'none' }}
                    smooth
                    to='/#pricing'
                >
                    <li className='nav__link'>Pricing</li>
                </HashLink>
                <HashLink style={{ textDecoration: 'none' }} smooth to='/#team'>
                    <li className='nav__link'>Team</li>
                </HashLink>
                <HashLink
                    style={{ textDecoration: 'none' }}
                    smooth
                    to='/#contacts'
                >
                    <li className='nav__link'>Contacts</li>
                </HashLink>
            </ul>
            {props.open && (
                <ContactButton
                    openPopUp={props.openPopUp}
                    class='contact-button contact-button_type_mobile'
                />
            )}
        </nav>
    );
}

export default Nav;
