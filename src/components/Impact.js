import React from 'react';
import PointsBox from './PointsBox';
function Impact(props) {
    return (
        <section id='impact' className='impact'>
            <h2 className='impact__title'>{props.appData.impact.title}</h2>
            <div className='impact__points-container'>
                {props.appData.impact.pointsBoxs.map((pointsBox, index) => (
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
