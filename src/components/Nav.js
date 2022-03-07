import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Nav() {
    return (
        <nav className='nav'>
            <ul className='nav__links'>
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
                <HashLink
                    style={{ textDecoration: 'none' }}
                    smooth
                    to='/#team'
                >
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
        </nav>
    );
}

export default Nav;
