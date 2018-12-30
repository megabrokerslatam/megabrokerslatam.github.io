import React from 'react';
// import styled components
import styled from 'styled-components'
// importing flex components
import { Row, Flex1 } from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import groupActive from '../assets/images/GroupActive.png'
import waves from '../assets/images/waves.png'

const Nosotros = props => {
    return (
        <NosotrosContainer>
            <NosotrosText>
                <span>NOSOTROS SOMOS </span>un grupo de brokers cambiando la industria al <Bold>enfocarnos en el cliente</Bold> y haciendo el proceso mas transparente y sencillo. Utilizamos nuestro recorrido para <span style={{color:"#c2aeed",fontWeight:"400"}}>facilitarte el acceso a una red de acesores</span> con incansable experiencia en seguros de salud con cobertura internacional.
            </NosotrosText>
            <Circle />
            <Flex1 />
        </NosotrosContainer>
    );
}

const NosotrosContainer = styled(Row) `
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
    background-position:center;
    background-image: url(${waves});
`
const Circle = styled.div `
    width: 360px;
    height: 360px;
    margin-left: -2%;
    border-radius: 50%;
    background-size: 95% 95%;
    background-position: bottom;
    background-repeat: no-repeat;
    background-image: url(${groupActive});
    background-color: rgba(184,237,255,1);
    ${media.tablet`width: 300px; height: 300px;margin-left: -8%;`}
    ${media.phone`background-image:none;width: 520px; height: 520px;margin-left:-125%;`}
`
const NosotrosText = styled.div`
    flex: 3;
    z-index: 1;
    height: 100%;
    font-size: 2.1em;
    margin: auto 0;
    font-weight: 200;
    line-height: 1.4em;
    margin-left: 100px;
    vertical-align: middle;
    ${media.tablet`flex:5;font-size: 1.4em;margin-left: 50px;line-height: 1.3em;`}
    ${media.phone`flex: 6;font-size: 1em;margin-left:25px;line-height: 1.5em;`}
`
const Bold = styled.span `
    font-weight: 350;
    ${media.tablet`font-weight: 450;`}
    ${media.phone`font-weight: 550;`}
`
export default Nosotros;