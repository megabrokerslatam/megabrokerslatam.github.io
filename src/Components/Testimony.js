import React from 'react';
// import styled components
import styled from 'styled-components'
// importing styled components
import { Anchor, Icon } from './Helpers/Styled'
// importing flex components
import { Flex1, Flex2, Flex3, Column, Row} from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import play from '../assets/icons/play.svg'

const Testimony = props => {
    return (
        <TestimonyContainer>
            <Flex3 />
            <h4>{props.quote}</h4>
            <p>{props.person}</p>
            <Flex1 />
            <VideoLink>
                {/* <Icon src={play}></Icon> */}
                <Anchor href="https://youtube.com" target="_blank">Ver Historia</Anchor>
                <svg style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
                    <path fill="dimgray" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                </svg>
            </VideoLink>
            <Flex2 />
        </TestimonyContainer>
    );
}

const TestimonyContainer = styled.div `
    width: 160%;
    height: 100%;
    margin-left: -30%;
    display: flex;
    border-radius: 50%;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    // background-color: #B8EDFF;
    background-color: rgba(184,237,255,0.5);
    &:hover {
        background-color: rgba(184,237,255,0.7);
        & > h4 {
            font-size: 2em;
            font-weight: 160
        }
        & > p {
            font-size: 1.8em;
            font-weight: 160;
        }
        & > div {
            border-color: grey;
            & > a {
                font-size: 1.1em;
            }
        }
    } 
    & > * {
        transition: all 0.4s ease-in;
    }
    & > h4 {
        color: dimgray;
        font-size: 1.7em;
        font-weight: 150;
        margin: auto 18px 0;
        transition-delay: 0s;
        ${media.desktop``}
        ${media.tablet`font-size: 1.2em;`}
        ${media.phone`font-size: 1em;`}
    }
    & > p {
        color: grey;
        font-weight: 150;
        font-size: 1.5em;
        margin-top: 15px;
        margin: 15px 10px auto;
        transition-delay: 0.2s;
        ${media.desktop``}
        ${media.tablet`font-size: 1.2em;`}
        ${media.phone`font-size: 1em;`}
    }
    & > div {
        transition-delay: 0.4s;
        & > a {
            transition-delay: 0.4s;
        }
    }
`
const VideoLink = styled.div`
    display: flex;
    height: 42px;
    width: 150px;
    // padding: auto 20px;
    flex-direction: row;
    align-items: center;
    border: 1px solid #a0e2ff;
    justify-content: center;
`

export default Testimony;