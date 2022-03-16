import React from 'react';
import { motion } from 'framer-motion';
import { pointsBoxAnimation } from '../utils/animation';

function PointsBox(props) {
    return (
        <motion.div
            viewport={{ amount: 0.5, once: true }}
            initial='hidden'
            whileInView='visible'
            className='points-box'
            variants={pointsBoxAnimation}
            custom={1}
        >
            <motion.p
                variants={pointsBoxAnimation}
                className='points-box__title'
                custom={1}
            >
                {props.title}
            </motion.p>
            <ul className='points-box__list'>
                {props.points.map((point, index) => (
                    <>
                        <motion.div
                            variants={pointsBoxAnimation}
                            custom={index + 1}
                            className='points-box__point'
                        />
                        <motion.li
                            variants={pointsBoxAnimation}
                            custom={index + 1}
                            key={index}
                            className='points-box__list-item'
                        >
                            {point}
                        </motion.li>
                    </>
                ))}
            </ul>
        </motion.div>
    );
}

export default PointsBox;
