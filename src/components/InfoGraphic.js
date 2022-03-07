import React from 'react';

function InfoGraphic() {
    return (
        <div className='infographic'>
            <p className='infographic__title'>Single-use plastics</p>
            <div className='infographic__graph-wrap'>
                <div className='infographic__graph-circle'></div>
                <div className='infographic__graph-fill'></div>
                <div className='infographic__graph-inside-circle'>
                    <p className='infographic__graph-description'>91% Waste</p>
                    <p className='infographic__graph-description infographic__graph-description_type_bottom'>
                        9% Recycled
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InfoGraphic;