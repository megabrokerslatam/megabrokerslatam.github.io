import styled from 'styled-components'
// importing media queries function
import { media } from './MediaQueries'

const Logo = styled.img `
    width: auto;
    height: 58px;
    ${media.tablet`height: 54px;`}
    ${media.phone`height: 48px`}
`
const Button = styled.button`
    height: 42px;
    width: 150px;
    color: white;
    margin: auto 0;
    cursor: pointer;
    font-size: 0.9em;
    line-height: 30px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid white;
    background-color: #40B4E5;
    &:hover {
        color: #40B4E5;
        background-color: transparent;
        border-color: #40B4E5;
    }
    &:focus {
        outline: none;
    }
    ${media.desktop``}
    ${media.tablet``}
    ${media.phone``}
`
const Anchor = styled.a`
    text-decoration: none;
    color: dimgray;
    font-size: 1em;
    font-weight: 150;
    ${media.desktop``}
    ${media.tablet`font-size: 1.3em;
    font-weight: 180;`}
    ${media.phone`font-size: 1.1em;
    font-weight: 120;`}
`
const Icon = styled.img`
    height: 26px;
    width: auto;
    ${media.phone`height: 20px;`}
`
export { Logo, Button, Anchor, Icon};