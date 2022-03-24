import React from 'react';

function Footer({ appData }) {
    return (
        <section id='contacts' className='footer'>
            <div className='footer__top'>
                <div className='footer-section'>
                    <p className='footer-section__title'>
                        {appData.footer.section1.title}
                    </p>
                    <p className='footer-section__item'>
                        {appData.footer.section1.email}
                    </p>
                    <p className='footer-section__item'>
                        {appData.footer.section1.address}
                    </p>
                </div>
                <div className='footer-section'>
                    <p className='footer-section__title'>
                        {appData.footer.section2.title}
                    </p>
                    {appData.footer.section2.socials.map((social) => (
                        <div key={social.id} className='footer-section__item'>
                            <img
                                className='footer-section__social-icon'
                                src={social.image}
                                alt='social link'
                            ></img>
                            <a
                                className='footer-section__item footer-section__item_type_link'
                                href={social.url}
                            >
                                {social.title}
                            </a>
                        </div>
                    ))}
                </div>
                <div className='footer-section footer-section_type_place'>
                    <p className='footer-section__title'>
                        {appData.footer.section3.title}
                    </p>

                    <p className='footer-section__item footer-section__item_type_location'>
                        {appData.footer.section3.currentPlaces.title}
                    </p>
                    <div className='footer-section__place-container'>
                        {appData.footer.section3.currentPlaces.places.map(
                            (currentPlace, index) => (
                                <p
                                    key={`currentPlace${index}`}
                                    className='footer-section__item footer-section__item_type_place'
                                >
                                    {currentPlace}
                                </p>
                            )
                        )}
                    </div>
                    <p className='footer-section__item footer-section__item_type_location'>
                        {appData.footer.section3.planedPlaces.title}
                    </p>
                    <div className='footer-section__place-container'>
                        {appData.footer.section3.planedPlaces.places.map(
                            (planedPlace, index) => (
                                <p
                                    key={`planedPlace${index}`}
                                    className='footer-section__item footer-section__item_type_place'
                                >{`${planedPlace}`}</p>
                            )
                        )}
                    </div>
                </div>
            </div>
            <div className='footer__bottom'>
                <p className='footer__bottom-item'>
                    Awesome Container Compnay © {new Date().getFullYear()}
                </p>
                <p className='footer__bottom-item'>Terms of Use</p>
            </div>
        </section>
    );
}

export default Footer;
