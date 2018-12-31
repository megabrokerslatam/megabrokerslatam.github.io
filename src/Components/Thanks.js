import React from 'react';
// import styled components
import styled from 'styled-components'
// importing flex components
import { Column, Flex2, Flex3 } from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import abuelos from '../assets/images/Abuelos.png'

const BlogDetail = props => {
    return (
        <ThanksContainer>
            <h2> Muchas gracias, nos pondremos en contacto pronto</h2>
            <ThanksImage />
        </ThanksContainer>
    );
}
const ThanksContainer = styled(Column)`
    align-items: center;
    & > h2 {
        width: 85%;
        color: dimgray;
        font-size: 2.7em;
        font-weight: 300;
        line-height: 1.3em;
        text-align: center;
        margin: 45px auto 25px;
        ${media.tablet`font-size: 2.4em;margin: 35px auto 25px;font-weight: 300;line-height:1.35em`}
        ${media.phone`font-size: 1.6em;margin: 30px auto 15px;font-weight: 350;line-height:1.25em;width:80%`}
    }
`
const ThanksImage = styled.div`
    width: 350px;
    height: 350px;
    margin-top: 35px;
    margin-bottom: 50px
    background-position: center;
    background-size: 100% 100%;
    background-image: url(${abuelos});
    ${media.tablet`width:300px;height:300px;margin-top:35px;`}
    ${media.phone`width:250px;height:250px;margin-top:25px;`}
`
export default BlogDetail;