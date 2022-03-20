import React from 'react';

import { motion } from 'framer-motion';

import {
    problemTextAnimation,
    problemImageAnimation,
    problemGraphAnimation,
} from '../utils/animation';

function Problem(props) {
    return (
        <section id='problem' className='problem'>
            <motion.div
                viewport={{ amount: 0.5, once: true }}
                initial='hidden'
                whileInView='visible'
                className='problem__stats'
            >
               
                <img className='problem__infographic'
                    src={props.appData.problem.infographicsImage}
                    alt='only 9% of the total waste gets recycled'
                ></img>
                <div className='problem__stats-info'>
                    <motion.h2
                        variants={problemTextAnimation}
                        custom={1}
                        className='problem__stats-info-title'
                    >
                        Single-use packaging: <br />
                        bad for the planet, bad for business
                    </motion.h2>
                    <motion.p
                        custom={2}
                        variants={problemTextAnimation}
                        className='problem__stats-info-description'
                    >
                        Millions of tons of single-use packaging
                        <span className='problem__stats-info-description '>
                            end up in landfills and oceans{' '}
                        </span>{' '}
                        while only
                        <span className='problem__stats-info-description problem__stats-info-description_type_orange'>
                            {' '}
                            9% of single-use waste gets recycled
                        </span>
                        . Meanwhile, single-use containers are expensive and
                        restaurants need to track inventory / restock weekly.
                    </motion.p>
                </div>
            </motion.div>
            <motion.ul
                viewport={{ amount: 0.23, once: true }}
                initial='hidden'
                whileInView='visible'
                className='problem__image-grid'
            >
                {props.appData.problem.images.map((image, index) => (
                    <motion.li
                        variants={problemImageAnimation}
                        custom={index + 1}
                        key={index}
                        className='problem__image-container'
                    >
                        <img
                            src={image.src}
                            className='problem__image'
                            alt=''
                        ></img>
                        <figcaption className='problem__image-caption'>
                            {image.imagecaption}
                        </figcaption>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    );
}

export default Problem;
