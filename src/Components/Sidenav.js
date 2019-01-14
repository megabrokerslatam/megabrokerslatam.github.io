import React from 'react'
// importing styleed components
import styled from 'styled-components'
// importing flex components
import { Flex1, Row, RowAround } from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
//importing routing elements
import { Link } from 'react-router-dom'
// importing styled components
import { Logo } from './Helpers/Styled'
// importing images
import close from '../assets/images/close.png'
import logoWhite from '../assets/images/LogoAllWhite.png'

const Sidenav = props => {
    return (
        // <SidenavContainer>
        <SidenavContainer className={props.show? 'show' : 'hide'}>
            <Header>
                <Link to="/"><Logo alt="megabrokerslatam logo" src={logoWhite} /></Link>
                <Flex1 />
                <HeaderIcon alt="close" src={close} onClick={props.toggle}/>
            </Header>
            <SidenavItem onClick={props.toggle}><Link to="/plans">PLANES</Link></SidenavItem>
            {/* <SidenavItem><Link to="/companies">COMPANIAS</Link></SidenavItem> */}
            <SidenavItem onClick={props.toggle}><Link to="/about">NOSOTROS</Link></SidenavItem>
            <SidenavItem onClick={props.toggle}><Link to="/blog">BLOG</Link></SidenavItem>
            <SidenavItem onClick={props.toggle}><Link to="/testimonies">TESTIMONIOS</Link></SidenavItem>
            <RowAround>
                <SidenavSmallItem onClick={props.toggle}><Link to="/blog">Poliza de Privacidad</Link></SidenavSmallItem>
                <SidenavSmallItem onClick={props.toggle}><Link to="/blog">Terminos y Condiciones</Link></SidenavSmallItem>
            </RowAround>
        </SidenavContainer>
    );
}

export default Sidenav;

const SidenavContainer = styled.div `
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 1;
    width: 100%;
    height: 100vh;
    display: none;
    position: fixed;
    transition: 0.4s;
    overflow-x: hidden;
    overflow-y: hidden;
    flex-direction: column;
    background-color: #40B4E5;
    &.hide {
        height: 0;
        opacity: 0;
    }
    &.show {
        opacity: 1;
        height: 100vh;
    }
    ${media.phone`display:flex`}
`
const SidenavItem = styled.div `
    color: white;
    flex: 2;
    display: flex;
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 10px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-bottom: 0.1px white solid;
`
const SidenavSmallItem = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1em;
`

const Header = styled(Row) `
    z-index: 5;
    width: 90vw;
    height: 60px;
    padding: 0 5vw;
    align-items: center;
    background-color: transparent;
`
const HeaderIcon = styled.img `
    height: 32px;
    width: auto;
    display:none;
    ${media.tablet`display:none`}
    ${media.phone`display:block`}
`