import React from 'react';
// import styled components
import styled from 'styled-components'
// importing flex components
import { Row, Flex1 } from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import group from '../assets/images/Asesores.png'

const Mision = props => {
    return (
        <MisionContainer>
            <Flex1 />
            <Circle />
            <MisionText>
                <span>NUESTRA MISION </span> es ayudarte a que estes correctamente asesorado y que cuentes con una <Bold>protección personalizada</Bold>. Por eso ponemos <span style={{color:"#61B3E0",fontWeight:"400"}}>tus necesidades y las de tu familia o empresa</span> por encima de todo.
            </MisionText>
        </MisionContainer>
    );
}

const MisionContainer = styled(Row) `
    width: 100%;
    margin-top: 100px;
`
const Circle = styled.div `
    width: 280px;
    height: 280px;
    border-radius: 50%;
    margin-right: -1.5%;
    background-color: #e5dcef;
    background-size: 100% 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    background-image: url(${group});
    ${media.tablet`width: 200px; height: 200px`}
    ${media.phone`background-image:none;width: 460px; height: 460px;margin-right: -110%;`}
`
const MisionText = styled.div`
    flex: 3;
    z-index: 1;
    height: 100%;
    font-size: 2.1em;
    margin: auto 0;
    font-weight: 200;
    line-height: 1.4em;
    margin-right: 100px;
    vertical-align: middle;
    ${media.tablet`font-size: 1.4em;margin-right: 50px;line-height: 1.3em;`}
    ${media.phone`flex: 4;font-size: 1em;margin-right:25px;line-height: 1.5em;`}
`
const Bold = styled.span `
    font-weight: 350;
    ${media.tablet`font-weight: 450;`}
    ${media.phone`font-weight: 550;`}
`
export default Mision;