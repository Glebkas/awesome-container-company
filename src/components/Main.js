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
            <Hero openPopUp={props.openPopUp} />
            <Problem appData={props.appData} />
            <Solution appData={props.appData} />
            <WorkPlan appData={props.appData} />
            <Impact appData={props.appData} />
            <Pricing appData={props.appData} openPopUp={props.openPopUp} />
            <Team appData={props.appData} />
            <Partners appData={props.appData} />
        </>
    );
}

export default Main;
