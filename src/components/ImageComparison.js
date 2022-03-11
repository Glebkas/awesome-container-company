import React from 'react';
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';

function ImageComparison() {
    return (
        <div className='image-comparison'>
            <ReactCompareSlider
                className='image-comparison__slider'
                boundsPadding={0}
                handle={
                    <div className='image-comparison__slider-line'>
                        <button className='image-comparison__slider-handle'>{`< >`}</button>
                    </div>
                }
                itemOne={
                    <ReactCompareSliderImage
                        alt='Image one'
                        src='https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1784&q=70'
                    />
                }
                itemTwo={
                    <ReactCompareSliderImage
                        alt='Image two'
                        src='https://images.unsplash.com/photo-1437809781432-a957377661ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1784&q=70'
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
}

export default ImageComparison;
