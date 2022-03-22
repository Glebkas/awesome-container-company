import React from 'react';
import { MChat } from './Chat';
import { motion } from 'framer-motion';
import {
    heroTextAnimation,
    imageComparisonAnimation,
    chatAnimation,
} from '../utils/animation';
import { MImageComparison } from './ImageComparison';

function Hero(props) {
    return (
        <motion.section
            viewport={{ once: true }}
            initial='hidden'
            whileInView='visible'
            className='hero'
        >
            <motion.h2
                custom={1}
                variants={heroTextAnimation}
                className='hero__title'
            >
                Help our environment by eliminating single-use plastics from
                your delivery with&nbsp; 
                <motion.span
                    custom={3}
                    variants={heroTextAnimation}
                    className='hero__title_type_orange'
                >
                    Awesome Container Company
                </motion.span>
            </motion.h2>

            <div className='hero__interactive-container'>
                <MImageComparison
                    variants={imageComparisonAnimation}
                    custom={3}
                />
                <MChat
                    openPopUp={props.openPopUp}
                    variants={chatAnimation}
                    custom={3}
                ></MChat>
            </div>
        </motion.section>
    );
}

export default Hero;
