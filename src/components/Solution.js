import React from 'react';
import ImageCarousel from './ImageCarousel';
import data from '../utils/data';
function Solution() {
    return (
        <section id='solution' className='solution'>
            <h2 className='solution__title'>{data.solution.title}</h2>
            <p className='solution__subtitle'>
                <span className='solution__subtitle solution__subtitle_type_orange'>
                    {data.hero.companyname}
                </span>
                {data.solution.subtitle}
            </p>
            <ImageCarousel></ImageCarousel>

            <div className='solution__icon-container'>
                <div className='solution__icon solution__icon_type_top'></div>
                <p className='solution__icon-caption'></p>
            </div>
            <div className='solution__icon-container solution__icon-container_type_center'>
                <div className='solution__icon solution__icon_type_top'></div>
                <p className='solution__icon-caption'></p>
            </div>
            <div className='solution__icon-container solution__icon-container_type_bottom'>
                <div className='solution__icon solution__icon_type_top'></div>
                <p className='solution__icon-caption'></p>
            </div>
        </section>
    );
}

export default Solution;
