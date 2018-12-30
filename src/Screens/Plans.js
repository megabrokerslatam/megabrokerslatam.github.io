import React from 'react'
// import styled components
import styled from 'styled-components'
// importing styled components
import Bubbles from "../Components/Bubbles";
//importing routing elements
import { Link } from 'react-router-dom'
// importing flex components
import { Flex1, Column, RowAround } from '../Components/Helpers/Flex'
// importing media queries function
import { media } from '../Components/Helpers/MediaQueries'
// importing images
import family from '../assets/images/Family.png'
import group from '../assets/images/Group.png'
import waves from '../assets/images/waves.png'

const Plans = (props) => {
    return (
        <PlansContainer>
            <h2>Seguros de salud para todos</h2>
            <h3>Protege a ti y a tu familia o a tu empresa </h3>
            <PlanGroup>
                <FamilyPlans>
                    <Link to="/family"><FamImage /></Link>
                    <h3>La protección más COMPLETA para ti y tus seres queridos</h3>
                </FamilyPlans>
                <GroupPlans>
                    <Link to="/group"><GroupImage /></Link>
                    <h3>Moderniza la cobertura de tu compañía con planes hechos a medida</h3>
                </GroupPlans>
            </PlanGroup>
        </PlansContainer>
    );
}

const PlansContainer = styled.div `
    z-index: 1;
    width: 100vw;
    display: flex;
    // min-height: 80vh;
    text-align: center;
    align-items: center;
    flex-direction: column;
    // background-color: black;
    justify-content: space-between;
    & > h2 {
        margin: 50px auto 0px;
        font-size: 3em;
        font-weight: 180;
        color: dimgray;
        ${media.tablet`font-size: 1.9em;margin: 35px auto 30px;font-weight: 250;`}
        ${media.phone`font-size: 1.5em;margin: 20px auto 0px;font-weight: 300;`}
    }
    & > h3 {
        font-size: 1.8em;
        font-weight: 200;
        color: darkgray;
        margin: 15px auto 75px;
        ${media.tablet`font-size: 1.4em`}
        ${media.phone`font-size: 1.1em;margin: 10px auto 15px;`}
    }
`
const PlanGroup = styled(RowAround)`
    width: 100%;
    flex-wrap: wrap;
    background-image: url(${waves});
`
const PlansButton = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    & > h3 {
        width: 280px;
        font-size: 1.05em;
        font-weight: 150;
        margin: 25px 10px;
        line-height: 1.5em;
        ${media.phone`font-size:0.9em;font-weight:100;margin:20px 0 0`}
    }
    ${media.phone`margin:15px 0 15px`}
`
const FamilyPlans = styled(PlansButton) `
    transform: translate3d(10px, 0px, 0);
    &:hover {
        z-index: 2;
        border-color: white;
        transform: translate3d(10px, 0, 0) scale(1.01);
        ${media.tablet`transform: translate3d(10px, 0, 0);`}
        ${media.phone`transform: translate3d(0,0,0);`}
    }
    ${media.tablet`transform: translate3d(25px, 0, 0);`}
    ${media.phone`transform: translate3d(0,0,0);`}
`
const GroupPlans = styled(PlansButton)`
    transform: translate3d(-10px, 0px, 0);
    &:hover {
        z-index: 2;
        border-color: white;
        transform: translate3d(-10px, 0, 0) scale(1.01);
        ${media.tablet`transform: translate3d(-10px, 0, 0);`}
        ${media.phone`transform: translate3d(0,0,0);`}
    }
    ${media.tablet`transform: translate3d(-25px, 0, 0);`}
    ${media.phone`transform: translate3d(0,0,0);`}
`
const Circle = styled.div `
    width: 300px;
    height: 300px
    border-radius: 50%;
    background-size: 100% 100%;
    background-position: center;
    border: 1px solid rgba(184,237,255,0.9);
    &:hover {
        border-color: white;
        background-color: #B8EDFF;
        background-size: 105% 105%;
    }
    ${media.tablet`width: 250px;height:250px;`}
    ${media.phone`width: 150px;height:150px;`}
`
const FamImage = styled(Circle) `
    background-image: url(${family})
`
const GroupImage = styled(Circle) `
    background-image: url(${group})
`

export default Bubbles(Plans);