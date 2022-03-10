import React from 'react';
import data from '../utils/data';

function ImageCarousel() {
    const slides = data.solution.slider;
    const [currentslide, setCurrentslide] = React.useState(0);
    const slidesLength = slides.length;

    const nextSlide = () => {
        setCurrentslide(
            currentslide === slidesLength - 1 ? 0 : currentslide + 1
        );
    };

    const prevSlide = () => {
        setCurrentslide(
            currentslide === 0 ? slidesLength - 1 : currentslide - 1
        );
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='image-carousel'>
            <div
                className='image-carousel__button'
                onClick={prevSlide}
            >{`<`}</div>
            {slides.map((slide, index) => (
                <div
                    className={
                        index === currentslide ? 'slide slide_active' : 'slide'
                    }
                    key={index}
                >
                    {index === currentslide && (
                        <>
                            <img
                                alt='test'
                                className='slide__image'
                                src={slide.image}
                            ></img>
                            <div className='slide__points-container'>
                                <p className='slide__points-title'>Features</p>
                                <ul className='slide__points-list'>
                                    {slide.featurepoints.map((featurepoint) => (
                                        <li className='slide__points-item'>
                                            {featurepoint}
                                        </li>
                                    ))}
                                </ul>

                                <p className='slide__points-title'>Sizing</p>
                                <ul className='slide__points-list'>
                                    {slide.sizingpoints.map((sizingpoints) => (
                                        <li className='slide__points-item'>
                                            {sizingpoints}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            ))}

            <div
                className='image-carousel__button image-carousel__button_type_right'
                onClick={nextSlide}
            >{`>`}</div>
        </div>
    );
}

export default ImageCarousel;
