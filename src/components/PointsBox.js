import React from 'react';

function PointsBox(props) {
    return (
        <div className='points-box'>
            <p className='points-box__title'>{props.title}</p>
            <ul className='points-box__list'>
                {props.points.map((point, index) => (
                    <>
                        <div className='points-box__point' />
                        <li key={index} className='points-box__list-item'>
                            {point}
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
}

export default PointsBox;
