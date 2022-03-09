import React from 'react';

function PriceBox(props) {
    return (
        <div className='price-box'>
            <p className='price-box__title'>{props.title}</p>
            <div className='price-box__arrow'></div>
            <p className='price-box__price'>{props.price}</p>
        </div>
    );
}

export default PriceBox;
