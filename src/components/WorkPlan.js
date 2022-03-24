import React from 'react';
import { motion } from 'framer-motion';
import { textAnimation, workPlanAnimation } from '../utils/animation';
import ContactButton from './ContactButton';

function WorkPlan(props) {
    return (
        <motion.div
            viewport={{ amount: 0.4, once: true }}
            initial='hidden'
            whileInView='visible'
            className='workplan'
        >
            <motion.h2
                variants={textAnimation}
                custom={1}
                className='workplan__title'
            >
                {props.appData.workPlan.title}
            </motion.h2>
            <motion.div className='workplan__ilustrations-container'>
                {props.appData.workPlan.steps.map((step, index) => (
                    <React.Fragment key={`workplanStep${index}`}>
                        <motion.div
                            variants={workPlanAnimation}
                            custom={index + 1}
                            className={`workplan__ilustration-container workplan__ilustration-container_type_${step.classType}`}
                        >
                            <img
                                src={step.image}
                                className='workplan__ilustration-image'
                                alt={step.caption}
                            ></img>
                            <p className='workplan__ilustration-number'>
                                {step.number}
                            </p>
                            <p className='workplan__ilustration-caption'>
                                {step.caption}
                            </p>
                        </motion.div>
                        <motion.div
                            variants={workPlanAnimation}
                            custom={index + 1}
                            className={`workplan__arrow workplan__arrow_type_${step.classType}`}
                        />
                    </React.Fragment>
                ))}
                <p className='workplan__caption'>Circular ecosystem</p>

            </motion.div>
            <ContactButton openPopUp={props.openPopUp} class='contact-button' />{' '}
        </motion.div>
    );
}

export default WorkPlan;
