import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export const Contactform = React.forwardRef((props, ref) => {
    const [formSent, setformSent] = React.useState(false);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onChange' });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        setformSent(true);
        reset();
    };

    return (
        <div className='contact-form'>
            <div ref={ref} className='contact-form__container'>
                <div
                    onClick={props.closePopup}
                    type='button'
                    className='contact-form__close-button'
                ></div>
                {!formSent && (
                    <div>
                        <p className='contact-form__title'>
                            Leave your contacts and request, and our manager
                            will reach out to you to establish our futher
                            parntership!
                        </p>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            className='form'
                            name='contact-form'
                        >
                            {errors.name ? (
                                <label className='form__label form__label_error'>
                                    {errors.name.message}
                                </label>
                            ) : (
                                <label className='form__label'>
                                    Personal or company name*
                                </label>
                            )}
                            <input
                                className={
                                    errors.name
                                        ? 'form__input form__input_error'
                                        : 'form__input'
                                }
                                type='text'
                                {...register('name', {
                                    required: `Personal or company name* This field is
                                required)`,
                                    minLength: {
                                        value: 2,
                                        message: `Personal or company name* (Must be at least 2 charcters long)`,
                                    },
                                })}
                            />
                            <div
                                id='profile-name-error'
                                className='form__error'
                            ></div>

                            {errors.email ? (
                                <label className='form__label form__label_error'>
                                    {errors.email.message}
                                </label>
                            ) : (
                                <label className='form__label'>Email *</label>
                            )}

                            <input
                                className={
                                    errors.email
                                        ? 'form__input form__input_error'
                                        : 'form__input'
                                }
                                {...register('email', {
                                    required: `Email * (This field is
                                required)`,
                                    minLength: {
                                        value: 2,
                                        message: `Email * (Must be at least 2 charcters long)`,
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                        message: `Email * (Please enter a valid email)`,
                                    },
                                })}
                            />
                            <label className='form__label'>
                                Your request / interest
                            </label>
                            <textarea
                                className='form__input'
                                type='text'
                                rows='5'
                                {...register('message')}
                            />

                            <button
                                disabled={!isValid}
                                type='submit'
                                className={
                                    !isValid
                                        ? `form__submit form__submit_disabled`
                                        : 'form__submit'
                                }
                            >
                                Send
                            </button>
                        </form>
                    </div>
                )}
                {formSent && (
                    <p className='form__msg-sent'>
                        Thanks! We will get in touch with you soon!
                    </p>
                )}
            </div>
        </div>
    );
});

export const MContactForm = motion(Contactform);
