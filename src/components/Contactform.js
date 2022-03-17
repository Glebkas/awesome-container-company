import React from 'react';
import { motion } from 'framer-motion';

import { contactFormAnimation } from '../utils/animation';

function Contactform(props) {
    return (
        <div className='contact-form'>
            <motion.div
                closed='hidden'
                open='visible'
                variants={contactFormAnimation}
                className='contact-form__container'
                exit={{ opacity: 0 }}
            >
                <div
                    onClick={props.closePopup}
                    type='button'
                    className='contact-form__close-button'
                ></div>
                <p class='contact-form__title'>
                    Leave your contacts and request, and our manager will reach
                    out to you to establish our futher parntership!
                </p>
                <form novalidate className='form' name='contact-form'>
                    <label className='form__label'>
                        Personal or company name *
                    </label>
                    <input
                        className='form__input'
                        type='text'
                        id='profile-name'
                        name='name'
                        minlength='2'
                        required
                    />
                    <span
                        id='profile-name-error'
                        className='form__error'
                    ></span>
                    <label className='form__label'>Email *</label>
                    <input
                        className='form__input'
                        type='email'
                        id='profile-about-me'
                        name='about'
                        maxlength='200'
                        minlength='2'
                        required
                    />
                    <label className='form__label'>
                        Your request / interest
                    </label>
                    <input
                        className='form__input'
                        type='text'
                        id='profile-about-me'
                        name='about'
                        maxlength='200'
                        minlength='2'
                    />
                    <span
                        id='profile-about-me-error'
                        className='form__error'
                    ></span>
                    <button
                        type='submit'
                        className='form__submit form__submit_disabled'
                    >
                        Save
                    </button>
                </form>
            </motion.div>
        </div>
    );
}

export default Contactform;
