import React from 'react';
import { motion } from 'framer-motion';
import { teamAnimation, textAnimation } from '../utils/animation';

function Team({ appData }) {
    return (
        <motion.section
            viewport={{ amount: 0.23, once: true }}
            initial='hidden'
            whileInView='visible'
            id='team'
            className='team'
        >
            <motion.h2 variants={textAnimation} className='team__title'>
                An Awesome Team
            </motion.h2>

            <div className='team__container'>
                {appData.team.members.map((member, index) => (
                    <motion.div
                        variants={teamAnimation}
                        custom={index + 3}
                        key={member.id}
                        className='team-member'
                    >
                        <img
                            className='team-member__image'
                            alt={member.name}
                            src={member.image}
                        ></img>
                        <p className='team-member__name'>{member.name}</p>
                        <p className='team-member__title'>{member.title}</p>
                        <div className='team-member__link'></div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Team;
