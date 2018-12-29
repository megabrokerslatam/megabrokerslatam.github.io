import React  from 'react';
// import styled components
import styled from 'styled-components'
// Component imports
import Footer from "../Components/Footer";
import Header from "../Components/Header";
// importing flex components
import { Flex1, Flex3, Column } from '../Components/Helpers/Flex'
// importing media queries function
import { media } from '../Components/Helpers/MediaQueries'
// importing images
import abuelos from '../assets/images/Abuelos.png'

const NotFound = props => {
    return (
        <NotFoundContainer>
            <Header />
            <Flex1 />
            <h2>Pagina no encontrada</h2>
            <NotFoundImage />
            <Flex3 />
            <Footer fixed="true" />
        </NotFoundContainer>
    );
}

const NotFoundContainer = styled(Column) `\
    height: 100vh;
    width: 100vw;
    align-items: center;
    overflow-x: hidden;
    & > h2 {
    width: 85%;
    color: dimgray;
    font-size: 3em;
    font-weight: 300;
    line-height: 1.4em;
    text-align: center;
    margin: 75px auto 75px;
    ${media.tablet`font-size: 2.4em;margin: 35px auto 25px;font-weight: 300;line-height:1.35em`}
    ${media.phone`font-size: 1.6em;margin: 30px auto 15px;font-weight: 350;line-height:1.25em;width:80%`}
`
const NotFoundImage = styled.div `
    width: 400px;
    height: 400px;
    magin-top: 45px;
    background-position: center;
    background-size: 100% 100%;
    background-image: url(${abuelos});
    ${media.tablet`width:300px;height:300px;margin-top:35px;`}
    ${media.phone`width:250px;height:250px;margin-top:25px;`}
`

export default NotFound;