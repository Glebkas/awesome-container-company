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
            <img
                className='points-box__background-image'
                src={props.backgroundImage} alt="background decoration"
            />
            <div className='points-box_container'>
                <motion.p
                    variants={pointsBoxAnimation}
                    className='points-box__title'
                    custom={1}
                >
                    {props.title}
                </motion.p>
                <ul className='points-box__list'>
                    {props.points.map((point, index) => (
                        <React.Fragment key={`points${index}`}>
                            <motion.div
                                variants={pointsBoxAnimation}
                                custom={index + 3}
                                key={Math.random}
                                className='points-box__point'
                            />
                            <motion.li
                                variants={pointsBoxAnimation}
                                custom={index + 3}
                                key={Math.random + 1}
                                className='points-box__list-item'
                            >
                                {point}
                            </motion.li>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default PointsBox;
