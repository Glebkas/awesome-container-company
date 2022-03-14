import { motion } from 'framer-motion';
import React from 'react';

export const Chat = React.forwardRef((props, ref) => {
    return( <div  ref={ref} div className='chat'>Chat</div>
    );
});

export const MChat = motion(Chat);
