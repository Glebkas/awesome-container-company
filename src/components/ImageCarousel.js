import React from 'react';
import { motion } from 'framer-motion';

export const ImageCarousel = React.forwardRef(({ appData }, ref) => {
    const slides = React.useMemo(
        () => appData.solution.slider,
        [appData.solution.slider]
    );
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slidesLength = React.useMemo(() => slides.length, [slides]);

    const nextSlide = React.useCallback(() => {
        setCurrentSlide(
            currentSlide === slidesLength - 1 ? 0 : currentSlide + 1
        );
    }, [currentSlide, slidesLength]);

    const prevSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? slidesLength - 1 : currentSlide - 1
        );
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return Array.isArray(slides) || slides.length <= 0 ? (
        <div ref={ref} className='image-carousel'>
            <div
                className='image-carousel__button'
                onClick={prevSlide}
            >{`<`}</div>
            {slides.map((slide, index) => (
                <div
                    className={
                        index === currentSlide ? 'slide slide_active' : 'slide'
                    }
                    key={slide.id}
                >
                    {index === currentSlide && (
                        <>
                            <img
                                alt='test'
                                className='slide__image'
                                src={slide.image}
                            ></img>
                            <div className='slide__points-container'>
                                <p className='slide__points-title'>Features</p>
                                <ul className='slide__points-list'>
                                    {slide.featurePoints.map(
                                        (featurepoint, index) => (
                                            <li
                                                key={index}
                                                className='slide__points-item'
                                            >
                                                {featurepoint}
                                            </li>
                                        )
                                    )}
                                </ul>

                                <p className='slide__points-title'>Sizing</p>
                                <ul className='slide__points-list'>
                                    {slide.sizingPoints.map(
                                        (sizingPoints, index) => (
                                            <li
                                                key={index}
                                                className='slide__points-item'
                                            >
                                                {sizingPoints}
                                            </li>
                                        )
                                    )}
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
    ) : (
        <div>death</div>
    );
});

export const MImageCarousel = motion(ImageCarousel);
