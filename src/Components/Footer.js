import React from 'react'
// import styled components
import styled from 'styled-components'
// importing styled components
import { Icon } from './Helpers/Styled'
//importing routing elements
import { Link } from 'react-router-dom'
// importing flex components
import { Flex1, Row} from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import linked from '../assets/icons/linkedin.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import youtube from '../assets/icons/youtube.svg'

const Footer = (props) => {
    return (
        <div>
            {props.fixed ? (
                <div>
                    <FakeFooter />
                    <FixedFooter>
                        <h4>Llamanos: 800-304-4566</h4>
                        <Flex1 />
                        <FooterItem><Link to="/policy">Poliza de Privacidad</Link></FooterItem>
                        <FooterItem><Link to="/condicions">Terminos y Condiciones</Link></FooterItem>
                        <Flex1 />
                        <FooterIcon alt="LinkedIn" src={linked} />
                        <FooterIcon alt="Facebook" src={facebook} />
                        <FooterIcon alt="Instagram" src={instagram} />
                        <FooterIcon alt="Youtube" src={youtube} />
                    </FixedFooter>
                </div>
            ) :  (
                <FooterContainer>
                    <h4>Llamanos: 800-304-4566</h4>
                    <Flex1 />
                    <FooterItem><Link to="/policy">Poliza de Privacidad</Link></FooterItem>
                    <FooterItem><Link to="/condicions">Terminos y Condiciones</Link></FooterItem>
                    <Flex1 />
                    <a href="https://www.facebook.com/megabrokerslatam/" target="_blank" rel="noopener noreferrer">
                        <FooterIcon>
                            <svg style={{width:'28px',height:'28px'}} viewBox="0 0 24 24">
                                <path fill="#696969" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                            </svg>
                        </FooterIcon>
                    </a>
                    <a href="https://www.facebook.com/megabrokerslatam/" target="_blank" rel="noopener noreferrer">
                        <FooterIcon>
                            <svg style={{width:'28px',height:'28px'}} viewBox="0 0 24 24">
                                <path fill="#696969" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                            </svg>
                        </FooterIcon>
                    </a>
                    <a href="https://www.instagram.com/megabrokerslatam/" target="_blank" rel="noopener noreferrer">
                        <FooterIcon>
                            <svg style={{width:'28px',height:'28px'}} viewBox="0 0 24 24">
                                <path fill="#696969" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                            </svg>
                        </FooterIcon>
                    </a>
                </FooterContainer>
            )}
        </div>
    );
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
const FixedFooter = styled(FooterContainer)`
    left: 0;
    bottom: 0;
    color: white;
    position: fixed;
    overflow: hidden;
    position: absolute;
    background-color: #e5dcef;
`
const FakeFooter = styled.div `
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 80px;
    position: fixed;
    background-color: white;
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
const FooterIcon = styled.div `
    opacity: 0.8;
    margin-left: 35px;
    ${media.desktop``}
    ${media.tablet`margin-left: 20px;`}
    ${media.phone`margin-left: 8px;`}
    &:hover {
        transform: scale(1.1);
        opacity: 1;
    }
`
export default Footer;