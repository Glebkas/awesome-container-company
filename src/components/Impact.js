import React from 'react';
import data from '../utils/data';
import PointsBox from './PointsBox';
function Impact() {
    return (
        <section id='impact' className='impact'>
            <h2 className='impact__title'>{data.impact.title}</h2>
            <div className='impact__points-container'>
                {data.impact.pointsBoxs.map((pointsBox, index) => (
                    <PointsBox
                        key={pointsBox.id}
                        id={pointsBox.id}
                        title={pointsBox.title}
                        points={pointsBox.points}
                    />
                ))}
            </div>
            
        </section>
    );
}

export default Impact;
