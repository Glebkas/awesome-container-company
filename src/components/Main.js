import React from 'react';
import Hero from './Hero';
import Impact from './Impact';
import Pricing from './Pricing';
import Problem from './Problem';
import Solution from './Solution';
import Team from './Team';
import WorkPlan from './WorkPlan';
import Partners from './Partners';

function Main(props) {
    return (
        <>
            <Hero />
            <Problem />
            <Solution appData={props.appData} />
            <WorkPlan />
            <Impact />
            <Pricing openPopUp={props.openPopUp} />
            <Team />
            <Partners />
        </>
    );
}

export default Main;
