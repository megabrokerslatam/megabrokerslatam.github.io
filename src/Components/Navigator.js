import React from 'react'
// importing styleed components
import styled, { css } from 'styled-components'
//importing routing elements
import { Link } from 'react-router-dom'
// importing styled components
import { Logo, Button } from './Helpers/Styled'
// importing flex components
import { Flex1, Row } from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import logo from '../assets/images/logo.png'
import burger from '../assets/images/menu.png'
import close from '../assets/images/close.png'
import logoWhite from '../assets/images/LogoAllWhite.png'

export default class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sidenav: false}
    }
    toggleSidenav = () => {
        const oldSidenav = this.state.sidenav;
        this.setState({
            sidenav : !oldSidenav
        });
    }
    render() {
        return (
            <div>
                <Sidenav className={this.state.sidenav? 'show' : 'hide'}>
                    <Header>
                        <Logo alt="megabrokerslatam logo" src={logoWhite} />
                        <Flex1 />
                        <HeaderIcon alt="close" src={close} onClick={this.toggleSidenav}/>
                    </Header>
                    <SidenavItem><Link to="/plans">PLANES</Link></SidenavItem>
                    <SidenavItem><Link to="/companies">COMPANIAS</Link></SidenavItem>
                    <SidenavItem><Link to="/about">NOSOTROS</Link></SidenavItem>
                    <SidenavItem><Link to="/testimonies">TESTIMONIOS</Link></SidenavItem>
                    <SidenavItem><Link to="/blog">BLOG</Link></SidenavItem>
                    <Row>
                        <SidenavSmallItem><Link to="/blog">Poliza de Privacidad</Link></SidenavSmallItem>
                        <SidenavSmallItem><Link to="/blog">Terminos y Condiciones</Link></SidenavSmallItem>
                    </Row>
                </Sidenav>
                {!this.state.sidenav && <FakeHeader />}
                <FloatingHeader className={!this.state.sidenav? 'show' : 'hide'}>
                    <Logo alt="megabrokerslatam logo" src={logo} />
                    <Link to="/companies"><HeaderItem>COMPANIAS</HeaderItem></Link>
                    <Link to="/about"><HeaderItem>NOSOTROS</HeaderItem></Link>
                    <Link to="/testimonios"><HeaderItem>TESTIMONIOS</HeaderItem></Link>
                    <Link to="/blog"><HeaderItem>BLOG</HeaderItem></Link>
                    <Flex1 />
                    <Link to="/plans"><HeaderButton>Encuentra tu Plan</HeaderButton></Link>
                    <HeaderIcon alt="burger menu" src={burger} onClick={this.toggleSidenav}/>
                </FloatingHeader>
            </div>
        )
    }
}

const FakeHeader = styled.div `
    top: 0;
    width: 100vw;
    height: 60px;
    background-color: white;
`
const Header = styled(Row) `
    width: 90vw;
    height: 60px;
    padding: 0 5vw;
    align-items: center;
    background-color: transparent;
`
const FloatingHeader = styled(Header)`
    top: 0;
    z-index: 7;
    position: fixed;
    background-color: white;
    border-bottom: 0.5px solid gainsboro;
    &.hide {
        display: none;
        transform: translate3d(-100vw, 0, 0);
    }
    &.show {
        dsiplay: flex;
        transform: translate3d(0vw, 0, 0);
    }
`
const HeaderItem = styled.div `
    height: 58px;
    width: auto;
    color: #40BBF5;
    padding: 0 20px;
    font-size: 0.8em;
    line-height: 58px;
    text-align: center;
    &:hover {
        color: #5B3091;
        background-color: rgba(220,220,220,0.3);
    }
    ${media.desktop``}
    ${media.tablet`display:none`}
    ${media.phone`display:none`}
`
const HeaderButton = styled(Button)`
    ${media.desktop``}
    ${media.tablet`display:none`}
    ${media.phone`display:none`}
`
const HeaderIcon = styled.img `
    height: 32px;
    width: auto;
    display:none;
    ${media.desktop`display:none`}
    ${media.tablet`display:block`}
    ${media.phone`display:block`}
`
const Sidenav = styled.div `
    position: fixed:
    left: 0;
    top: 0;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    display:none;
    flex-direction: column;
    background-color: #40B4E5;
    transform: translate3d(100vw, 0, 0);
    &.hide {
        display: none;
        transform: translate3d(100vw, 0, 0);
    }
    &.show {
        display: flex;
        transform: translate3d(0vw, 0, 0);
    }
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