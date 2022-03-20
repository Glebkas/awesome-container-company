import { motion } from 'framer-motion';
import { chatMsgAnimationUser, chatMsgAnimationAdmin } from '../utils/animation';
import React from 'react';

export const Chat = React.forwardRef((props, ref) => {
    return (
        <motion.div
            viewport={{ once: true }}
            initial='hidden'
            whileInView='visible'
            ref={ref}
            className='chat'
        >
            <div className='chat__avatar'></div>
            <motion.div
                custom={1}
                variants={chatMsgAnimationUser}
                className='chat__msg-container'
            >
                <p className='chat__msg'>What do you do?</p>
            </motion.div>
            <motion.div
                custom={3}
                variants={chatMsgAnimationAdmin}
                className='chat__msg-container chat__msg-container_type_admin'
            >
                <p className='chat__msg chat__msg_type_admin'>
                    We provide reusable containers for restaurants, pick them up
                    from users, clean them and give them back to your restaurant
                </p>
            </motion.div>
            <motion.div
                custom={4}
                variants={chatMsgAnimationUser}
                className='chat__msg-container'
            >
                <p className='chat__msg'>Awesome!</p>
            </motion.div>
            <motion.div
                custom={5}
                variants={chatMsgAnimationUser}
                className='chat__msg-container chat__msg-container_type_button'
            >
                <p className='chat__msg chat__msg_type_button' onClick={props.openPopUp}>
                    I want to work with you!
                </p>
            </motion.div>
            <motion.div
                custom={6}
                variants={chatMsgAnimationAdmin}
                className='chat__msg-container chat__msg-container_type_admin'
            >
                <p className='chat__msg chat__msg_type_admin'>
                    Cool! We operate in Singapore and are planning to open in
                    Many onther countires soon!
                </p>
            </motion.div>
            <motion.div
                custom={2}
                variants={chatMsgAnimationAdmin}
                className='chat__avatar chat__avatar_type_admin'
            ></motion.div>
        </motion.div>
    );
});

export const MChat = motion(Chat);
