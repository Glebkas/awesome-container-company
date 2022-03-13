import React from 'react';
import data from '../utils/data';

function Partners() {
    return (
        <section className='partners'>
            <h2 className='partners__title'>{data.partners.title}</h2>
            <div className='partners__logos-container'>
                {data.partners.logos.map((logo) => (
                    <img
                        className='partners__logo-image'
                        alt='partner '
                        src={logo}
                    ></img>
                ))}
            </div>
        </section>
    );
}

export default Partners;
