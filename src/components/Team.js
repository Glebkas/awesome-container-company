import React from 'react';

function Team(props) {
    return (
        <section id='team' className='team'>
            <h2 className='team__title'>An Awesome Team</h2>

            <div className='team__container'>
                {props.appData.team.members.map((member) => (
                    <div key={member.id} className='team-member'>
                        <img
                            className='team-member__image'
                            alt={member.name}
                            src={member.image}
                        ></img>
                        <p className='team-member__name'>{member.name}</p>
                        <p className='team-member__title'>{member.title}</p>
                        <div className='team-member__link'></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;
