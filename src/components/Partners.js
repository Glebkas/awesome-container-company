import React from 'react';

function Partners({appData}) {
    return (
        <section className='partners'>
            <h2 className='partners__title'>{appData.partners.title}</h2>
            <div className='partners__logos-container'>
                {appData.partners.logos.map((logo, index) => (
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
