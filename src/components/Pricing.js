import React from 'react';
import PriceBox from './PriceBox';
import data from '../utils/data';
import ContactButton from './ContactButton';

function Pricing(props) {
    return (
        <section id='pricing' className='pricing'>
            <div className='pricing__top'>
                <div className='pricing__title-container'>
                    <h2 className='pricing__top-title'>{data.pricing.title}</h2>
                    <p className='pricing__top-description'>
                        {data.pricing.description}
                    </p>
                </div>
                <img
                    className='pricing__top-image'
                    src={data.pricing.image}
                    alt='container ilustration'
                ></img>
            </div>
            <div className='pricing__bottom'>
                <h3 className='pricing__bottom-title'>{data.pricing.title2}</h3>
                {/* <div className='pricing__price-boxes-container'>
                    {data.pricing.priceboxs.map((pricebox) => (
                        <PriceBox
                            key={pricebox.id}
                            title={pricebox.title}
                            price={pricebox.price}
                        />
                    ))}
                </div> */}
            </div>
            <ContactButton openPopUp={props.openPopUp} class='contact-button' />
            <p className='pricing__contact-subtitle'>{data.pricing.contact}</p>
        </section>
    );
}

export default Pricing;
