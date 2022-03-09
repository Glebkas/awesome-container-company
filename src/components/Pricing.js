import React from 'react';
import PriceBox from './PriceBox';
import data from '../utils/data';
import ContactButton from './ContactButton';

function Pricing(props) {
    return (
        <section id='pricing' className='pricing'>
            <div className='pricing__top'>
                <div>
                    <h2></h2>
                    <p></p>
                </div>
                <img></img>
            </div>
            <div>
                <h3></h3>
                <div className='pricing__price-boxes-container'>
                    {data.pricing.priceboxs.map((pricebox) => (
                        <PriceBox
                            key={pricebox.id}
                            title={pricebox.title}
                            price={pricebox.price}
                        />
                    ))}
                </div>
            </div>
            <ContactButton class='contact-button' />
            <p className='pricing__contact-subtitle'>{data.pricing.contact}</p>
        </section>
    );
}

export default Pricing;
