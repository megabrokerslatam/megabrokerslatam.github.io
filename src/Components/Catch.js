import React, { Component } from 'react';
// import styled components
import styled from 'styled-components'
//importing routing elements
import { Link } from 'react-router-dom'
// Component imports

// importing flex components
import { Flex1, Flex2, Column } from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import family from '../assets/images/Family.png'
import familyAlt from '../assets/images/FamilyActive.png'
import group from '../assets/images/Group.png'
import groupAlt from '../assets/images/GroupActive.png'

class Catch extends Component {
  render() {
    return (
      <CatchContainer>
        <Intro>
            <Flex2 />
                <Column>
                    <Title>Protección mundial a tu alcance</Title>
                    <Subtitle style={{marginTop: 0}}>La manera mas facil de encontrar un seguro internacional con asesores enfocados en tu bienestar</Subtitle>
                </Column>
            <Flex2 />
        </Intro>
        <Hook>
            <FamilyPlans>
                <Link to="/family"><FamImage /></Link>
                <h3>Planes para ti y tu familia</h3>
            </FamilyPlans>
            <GroupPlans>
                <Link to="/group"><GroupImage /></Link>
                <h3>Planes para tu grupo</h3>
            </GroupPlans>
        </Hook>
      </CatchContainer>
    );
  }
}

const CatchContainer = styled.div `
    z-index: 1;
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    min-height: 500px;
    margin: 15px auto 15px;
    flex-direction: row;
    background-color: white;
    ${media.phone`flex-direction: column;height: 85vh;`}
`
const Intro = styled.div `
    flex: 4;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    // background-color: #40B4E5;
    & > * {
        width: 70%;
    }
`
const Title = styled.h1 `
    font-size: 3.2em;
    font-weight: 300;
    line-height: 1.2em;
    ${media.tablet`
        font-size: 3.1em;
        font-weight: 345;
        line-height: 1.2em;
    `}
    ${media.phone`
        font-size: 1.8em;
        font-weight: 400;
        line-height: 1.3em;
    `}
`
const Subtitle = styled.h3 `
    font-size: 1.85em;
    font-weight: 100;
    line-height: 1.5em;
    ${media.tablet`
        font-size: 1.7em;
        font-weight: 250;
        line-height: 1.5em;
    `}
    ${media.phone`
        margin-top: 40px;
        font-size: 1.1em;
        font-weight: 300;
        line-height: 1.5em;
    `}
`
const Hook = styled.div `
    flex: 5;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    // background-color: #5B3091;
    & > h1, h3 {
        margin: 0;
    }
    ${media.tablet`margin-bottom: 10px;`}
    ${media.phone`flex-direction:column;margin-bottom: 15px;`}
`
const PlansButton = styled.div `
    width: 355px;
    height: 355px
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    & > h3 {
        font-size: 1.05em;
        font-weight: 150;
        margin: 25px 10px;
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
export default Catch;