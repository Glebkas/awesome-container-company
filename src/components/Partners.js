import React from 'react';
import { motion } from 'framer-motion';
import { textAnimation, partnerAnimation } from '../utils/animation';

function Partners({ appData }) {
    return (
        <motion.section
            viewport={{ amount: 0.23, once: true }}
            initial='hidden'
            whileInView='visible'
            className='partners'
        >
            <motion.h2 variants={textAnimation} className='partners__title'>
                {appData.partners.title}
            </motion.h2>
            <div className='partners__logos-container'>
                {appData.partners.logos.map((logo, index) => (
                    <motion.img
                        variants={partnerAnimation}
                        custom={index + 3}
                        key={`partner${index}`}
                        className='partners__logo-image'
                        alt='partner '
                        src={logo}
                    ></motion.img>
                ))}
            </div>
        </motion.section>
    );
}

export default Partners;
