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
            <Hero></Hero>
            <Problem></Problem>
            <Solution></Solution>
            <WorkPlan></WorkPlan>
            <Impact></Impact>
            <Pricing openPopUp={props.openPopUp}></Pricing>
            <Team></Team>
            <Partners></Partners>
        </>
    );
}

export default Main;
