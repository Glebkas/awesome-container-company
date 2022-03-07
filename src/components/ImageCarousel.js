import React from 'react';

function ImageCarousel() {
    return (
        <div className='image-carousel'>
            <div className='image-carousel__button'>{`<`}</div>
            <div className='image-carousel__container'></div>
            <div className='image-carousel__button image-carousel__button_type_right'>{`>`}</div>
        </div>
    );
}

export default ImageCarousel;
