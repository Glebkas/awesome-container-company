import React from 'react';
import ContactButton from './ContactButton';

function Pricing(props) {
    return (
        <section id='pricing' className='pricing'>
            <div className='pricing__top'>
                <div className='pricing__title-container'>
                    <h2 className='pricing__top-title'>
                        {props.appData.pricing.title}
                    </h2>
                    <p className='pricing__top-description'>
                        {props.appData.pricing.description}
                    </p>
                </div>
                <img
                    className='pricing__top-image'
                    src={props.appData.pricing.image}
                    alt='container ilustration'
                />
            </div>
            <div className='pricing__bottom'>
                <h3 className='pricing__bottom-title'>
                    {props.appData.pricing.title2}
                </h3>
                <div className='pricing__bottom-ilustration-container'>
                    <img src={props.appData.pricing.image2}
                        alt='container ilustration'
                        className='pricing__bottom-ilustration-image'
                    />
                    <div className='pricing__bottom-ilustration-bubble'>
                        <p className='pricing__bottom-ilustration-callout'>
                            {props.appData.pricing.bubble}
                        </p>
                    </div>
                </div>
            </div>
            <ContactButton openPopUp={props.openPopUp} class='contact-button' />
            <p className='pricing__contact-subtitle'>
                {props.appData.pricing.contact}
            </p>
        </section>
    );
}

export default Pricing;
