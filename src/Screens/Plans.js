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
    width: 100vw;
    display: flex;
    min-height: 83vh;
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
        ${media.desktop``}
        ${media.tablet`font-size: 1.9em;margin: 35px 55px 30px;font-weight: 250;line-height:1.7em`}
        ${media.phone`font-size: 1.2em;margin: 30px 35px 40px;font-weight: 100;line-height:1.9em`}
    }
    & > h3 {
        font-size: 1.8em;
        font-weight: 200;
        color: darkgray;
        margin: 15px auto 75px;
        ${media.tablet`font-size: 1.4em`}
        ${media.phone`font-size: 1.1em`}
    }
`
const PlanGroup = styled(RowAround)`
    width: 100%;
    flex-wrap: wrap;
`
const PlansButton = styled.div `
    width: 420px;
    height: 450px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    & > h3 {
        width: 350px;
        font-size: 1.05em;
        font-weight: 150;
        margin: 25px 10px;
        line-height: 1.5em;
        ${media.phone`font-size:0.9em;font-weight: 100;margin-top:10px;`}
    }
    ${media.tablet`width: 300px;height:300px;`}
    ${media.phone`width: 190px;height:190px;`}
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
    ${media.phone`transform: translate3d(0,0,0);margin-bottom:20px;`}
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