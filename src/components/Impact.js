import React from 'react';
import PointsBox from './PointsBox';
import { motion } from 'framer-motion';
import { textAnimation } from '../utils/animation';

function Impact(props) {
    return (
        <section id='impact' className='impact'>
            <motion.h2
                viewport={{ amount: 0.23, once: true }}
                initial='hidden'
                whileInView='visible'
                variants={textAnimation}
                className='impact__title'
            >
                {props.appData.impact.title}
            </motion.h2>
            <div className='impact__points-container'>
                {props.appData.impact.pointsBoxs.map((pointsBox, index) => (
                    <PointsBox
                        key={pointsBox.id}
                        id={pointsBox.id + index}
                        title={pointsBox.title}
                        points={pointsBox.points}
                        backgroundImage ={pointsBox.backgroundImage}
                    />
                ))}
            </div>
        </section>
    );
}

export default Impact;
