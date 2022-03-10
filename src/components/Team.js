import React from 'react';
import data from '../utils/data';

function Team() {
    return (
        <section className='team'>
            <h2 className='team__title'>Team</h2>

            <div className='team__container'>
                {data.team.members.map((member) => (
                    <div>
                        <img></img>
                        <p></p>
                        <div></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;
