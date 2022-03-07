import React from 'react';
import InfoGraphic from './InfoGraphic';
import data from '../utils/data';

function Problem() {
    return (
        <section id='problem' className='problem'>
            <div className='problem__stats'>
                <InfoGraphic></InfoGraphic>
                <div className='problem__stats-info'>
                    <h2 className='problem__stats-info-title'>
                        Single-use packaging: <br />
                        bad for the planet, bad for business
                    </h2>
                    <p className='problem__stats-info-description'>
                        Millions of tons of single-use packaging
                        <span className='problem__stats-info-description '>
                            end up in landfills and oceans{' '}
                        </span>{' '}
                        while only
                        <span className='problem__stats-info-description problem__stats-info-description_type_orange'>
                            {' '}
                            9% of single-use waste gets recycled
                        </span>
                        . Meanwhile, single-use containers are expensive and
                        restaurants need to track inventory / restock weekly.
                    </p>
                </div>
            </div>
            <div className='problem__image-grid'>
                <div className='problem__image-container'>
                    <img
                        src={data.problem.images.image1.src}
                        className='problem__image'
                        alt=''
                    ></img>
                    <figcaption className='problem__image-caption'>
                        Single-use plastics pollute oceans and kill marine
                        species
                    </figcaption>
                </div>
                <div>
                    <img
                        src={data.problem.images.image2.src}
                        className='problem__image'
                        alt=''
                    ></img>
                    <figcaption className='problem__image-caption'>
                        Single-use plastics pollute landfills and emit dangerous
                        chemicals and greenshouse gases
                    </figcaption>
                </div>
                <div>
                    <img
                        src={data.problem.images.image3.src}
                        className='problem__image'
                        alt=''
                    ></img>
                    <figcaption className='problem__image-caption'>
                        Not all of the single-use plastics are recyclable
                    </figcaption>
                </div>
            </div>
        </section>
    );
}

export default Problem;
