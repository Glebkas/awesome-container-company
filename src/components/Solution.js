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

            <div className='soulution__ilustrations'>
                <div className='solution__icon-container'>
                    <div className='solution__icon-inner-container'>
                        <img
                            src={data.solution.ilustrations.logistics.image}
                            className='solution__icon solution__icon_type_top'
                            alt='data.solution.ilustrations.logistics.caption'
                        />
                        <p className='solution__icon-caption'>
                            {data.solution.ilustrations.logistics.caption}
                        </p>
                    </div>
                </div>
                <div className='solution__icon-container solution__icon-container_type_center'>
                    <div className='solution__icon-inner-container'>
                        <img
                            src={data.solution.ilustrations.costs.image}
                            className='solution__icon solution__icon_type_midlle'
                            alt={data.solution.ilustrations.costs.caption}
                        />
                        <p className='solution__icon-caption'>
                            {data.solution.ilustrations.costs.caption}
                        </p>
                    </div>
                </div>
                <div className='solution__icon-container solution__icon-container_type_bottom'>
                    <div className='solution__icon-inner-container'>
                        <img
                            src={data.solution.ilustrations.space.image}
                            className='solution__icon solution__icon_type_bottom'
                            alt={data.solution.ilustrations.space.caption}
                        />
                        <p className='solution__icon-caption'>
                            {data.solution.ilustrations.space.caption}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Solution;
