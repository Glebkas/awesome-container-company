import React from 'react';
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';

import { motion } from 'framer-motion';

import data from '../utils/data';

export const ImageComparison = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className='image-comparison'>
            <ReactCompareSlider
                className='image-comparison__slider'
                boundsPadding={0}
                handle={
                    <div className='image-comparison__slider-line'>
                        <button className='image-comparison__slider-handle'/>
                    </div>
                }
                itemOne={
                    <ReactCompareSliderImage
                        alt='Image one'
                        src={data.hero.imageslider.image1}
                    />
                }
                itemTwo={
                    <ReactCompareSliderImage
                        alt='Image two'
                        src={data.hero.imageslider.image2}
                    />
                }
                position={50}
            />
            <div className='image-comparison__caption-container'>
                <p className='image-comparison__caption'>Now</p>
                <p className='image-comparison__caption'>
                    With Awesome Containers
                </p>
            </div>
        </div>
    );
});

export const MImageComparison = motion(ImageComparison);
