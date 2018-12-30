import React from 'react'
// importing styleed components
import styled from 'styled-components'
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
import Sidenav from './Sidenav';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sidenav: false}
    }
    toggleSidenav = () => {
        const oldSidenav = this.state.sidenav;
        this.setState({
            sidenav: !oldSidenav
        });
    }
    render() {
        return (
            <HeaderContainer>
                <FakeHeader />
                <TopBar>
                    <Link to="/"><Logo alt="megabrokerslatam logo" src={logo} /></Link>
                    {/* <Link to="/companies"><HeaderItem>COMPANIAS</HeaderItem></Link> */}
                    <Flex1 />
                    <Link to="/about"><HeaderItem>NOSOTROS</HeaderItem></Link>
                    <Link to="/blog"><HeaderItem>BLOG</HeaderItem></Link>
                    <Link to="/testimonies"><HeaderItem>TESTIMONIOS</HeaderItem></Link>
                    <Link to="/plans"><HeaderButton>Encuentra tu Plan</HeaderButton></Link>
                    <HeaderIcon alt="burger menu" src={burger} onClick={this.toggleSidenav}/>
                </TopBar>
                <Sidenav show = {this.state.sidenav} toggle = {this.toggleSidenav }/>
            </HeaderContainer>
        )
    }
}

const HeaderContainer = styled.div `
    width: 100%;
`
const FakeHeader = styled.div `
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #e5dcef;
`
const TopBar = styled(Row) `
    top: 0;
    left: 0;
    z-index: 5;
    width: 90vw;
    height: 60px;
    padding: 0 5vw;
    position: fixed;
    align-items: center;
    background-color: rgba(255,255,255,0.9);
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
    width: auto;
    height: 58px;
    color: #40BBF5;
    padding: 0 20px;
    font-size: 0.8em;
    line-height: 58px;
    text-align: center;
    &:hover {
        color: #5B3091;
        background-color: rgba(220,220,220,0.3);
    }
    ${media.phone`display:none`}
`
const HeaderButton = styled(Button)`
    margin-left: 10px;
    outline: none;
    ${media.phone`display:none`}
`
const HeaderIcon = styled.img `
    height: 24px;
    width: auto;
    display:none;
    ${media.tablet`display:none`}
    ${media.phone`display:block`}
`
