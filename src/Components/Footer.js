import React from 'react'
// import styled components
import styled from 'styled-components'
// importing styled components
import { Icon } from './Helpers/Styled'
//importing routing elements
import { Link } from 'react-router-dom'
// importing flex components
import { Flex1, Column, Row} from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import linked from '../assets/icons/linkedin.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import youtube from '../assets/icons/youtube.svg'

const Footer = props => {
    return (
        <FooterContainer>
            <h4>Llamanos: 800-304-4566</h4>
            <Flex1 />
            <FooterItem><Link to="/policy">Poliza de Privacidad</Link></FooterItem>
            <FooterItem><Link to="/condicions">Terminos y Condiciones</Link></FooterItem>
            <Flex1 />
            <FooterIcon alt="LinkedIn" src={linked} />
            <FooterIcon alt="Facebook" src={facebook} />
            <FooterIcon alt="Instagram" src={instagram} />
            <FooterIcon alt="Youtube" src={youtube} />
        </FooterContainer>
    )
}

const FooterContainer = styled(Row) `
    width: 90vw;
    height: 80px;
    padding: 0 5vw;
    align-items: center;
    background-color: white;
    & > h4 {
        color: grey;
        font-weight: 420;
        ${media.desktop``}
        ${media.tablet`font-size:1em;`}
        ${media.phone`font-size:0.8em;`}
    }
`
const FooterItem = styled.div `
    height: 58px;
    width: auto;
    color: grey;
    margin: 0 15px;
    font-size: 0.8em;
    line-height: 58px;
    text-align: center;
    &:hover {
        color: #40BBF5;;
    }
    ${media.desktop``}
    ${media.tablet`display:none;`}
    ${media.phone`display:none`}
`
const FooterIcon = styled(Icon) `
    margin-left: 28px;
    ${media.desktop``}
    ${media.tablet`margin-left: 20px;`}
    ${media.phone`margin-left: 8px;`}
`
export default Footer;