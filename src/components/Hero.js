import React from 'react';
import Chat from './Chat';
import ImageComparison from './ImageComparison';

function Hero() {
    return (
        <section className='hero'>
            <h2 className='hero__title'>
                Help our environment by eliminating single-use plastics from
                your delivery with<br></br>
                <span className='hero__title_type_orange'>
                    Awesome Container Company
                </span>
            </h2>

            <div className='hero__interactive-container'>
                <ImageComparison />
                <Chat></Chat>
            </div>
        </section>
    );
}

export default Hero;
