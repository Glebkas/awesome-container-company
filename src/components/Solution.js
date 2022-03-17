import React from 'react';
import { MImageCarousel } from './ImageCarousel';
import { motion } from 'framer-motion';
import {
    solutionCaruselAnimation,
    solutionTextAnimation,
    solutionIconAnimation,
} from '../utils/animation';

function Solution({ appData }) {
    return (
        <section id='solution' className='solution'>
            <motion.span
                viewport={{ amount: 0.5, once: true }}
                initial='hidden'
                whileInView='visible'
            >
                <motion.h2
                    variants={solutionTextAnimation}
                    custom={1}
                    className='solution__title'
                >
                    {appData.solution.title}
                </motion.h2>
                <motion.p
                    variants={solutionTextAnimation}
                    custom={2}
                    className='solution__subtitle'
                >
                    <span className='solution__subtitle solution__subtitle_type_orange'>
                        {appData.hero.companyname}
                    </span>
                    {appData.solution.subtitle}
                </motion.p>
            </motion.span>
            <MImageCarousel
                viewport={{ amount: 0.5, once: true }}
                initial='hidden'
                whileInView='visible'
                variants={solutionCaruselAnimation}
                appData={appData}
            ></MImageCarousel>

            <div className='soulution__ilustrations'>
                <motion.div
                    viewport={{ amount: 0.5, once: true }}
                    initial='hidden'
                    whileInView='visible'
                    variants={solutionIconAnimation}
                    className='solution__icon-container'
                >
                    <div className='solution__icon-inner-container'>
                        <img
                            src={appData.solution.ilustrations.logistics.image}
                            className='solution__icon solution__icon_type_top'
                            alt={
                                appData.solution.ilustrations.logistics.caption
                            }
                        />
                        <p className='solution__icon-caption'>
                            {appData.solution.ilustrations.logistics.caption}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    viewport={{ amount: 0.5, once: true }}
                    initial='hidden'
                    whileInView='visible'
                    variants={solutionIconAnimation}
                    className='solution__icon-container solution__icon-container_type_center'
                >
                    <div className='solution__icon-inner-container'>
                        <img
                            src={appData.solution.ilustrations.costs.image}
                            className='solution__icon solution__icon_type_midlle'
                            alt={appData.solution.ilustrations.costs.caption}
                        />
                        <p className='solution__icon-caption'>
                            {appData.solution.ilustrations.costs.caption}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    viewport={{ amount: 0.5, once: true }}
                    initial='hidden'
                    whileInView='visible'
                    variants={solutionIconAnimation}
                    className='solution__icon-container solution__icon-container_type_bottom'
                >
                    <div className='solution__icon-inner-container'>
                        <img
                            src={appData.solution.ilustrations.space.image}
                            className='solution__icon solution__icon_type_bottom'
                            alt={appData.solution.ilustrations.space.caption}
                        />
                        <p className='solution__icon-caption'>
                            {appData.solution.ilustrations.space.caption}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Solution;
