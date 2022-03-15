import React from 'react';

function Partners(props) {
    return (
        <section className='partners'>
            <h2 className='partners__title'>{props.appData.partners.title}</h2>
            <div className='partners__logos-container'>
                {props.appData.partners.logos.map((logo, index) => (
                    <img
                        key={`partner${index}`}
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
