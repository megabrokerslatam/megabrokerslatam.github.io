import React from 'react';
// import styled components
import styled from 'styled-components'
// importing styled components
// import { Anchor } from './Helpers/Styled'
// importing flex components
import { Flex1, Flex2, Flex3 } from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'

const Testimony = props => {
    return (
        <TestimonyContainer>
            {props.large ? (
                <LargeTestimony>
                    <Flex3 />
                    <h4>{props.quote}</h4>
                    <p>{props.person}</p>
                    <Flex1 />
                    <VideoLink href={props.url} target="_blank">
                        Ver Historia
                        <svg style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
                            <path fill="dimgray" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                        </svg>
                    </VideoLink>
                    <Flex2 />
                </LargeTestimony>
            ) : (
                <OvalTestimony>
                    <Flex3 />
                    <h4>{props.quote}</h4>
                    <p>{props.person}</p>
                    <Flex1 />
                    <VideoLink href={props.url} target="_blank">
                        Ver Historia
                        <svg style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
                            <path fill="dimgray" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                        </svg>
                    </VideoLink>
                    <Flex2 />
                </OvalTestimony>
            )}
        </TestimonyContainer>
    );
}

const TestimonyContainer = styled.div `
    width: 100%;
    height: 100%;
`
const VideoLink = styled.a`
    display: flex;
    height: 42px;
    width: 150px;
    flex-direction: row;
    align-items: center;
    border: 1px solid #a0e2ff;
    justify-content: center;
`
const LargeTestimony = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    border-radius: 50%;
    border-radius: 50%;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(184,237,255,0.5);
    &:hover {
        background-color: rgba(184,237,255,0.7);
        & > h4 {
            transform: scale(1.08);
        }
        & > p {
            transform: scale(1.08);
        }
        & > a {
            border-color: grey;
        }
    } 
    & > * {
        transition: all 0.4s ease-in;
    }
    & > h4 {
        color: dimgray;
        font-size: 1.5em;
        font-weight: 220;
        line-height: 1.8em;
        margin: auto 40vw 20px;
        transition-delay: 0s;
        ${media.desktop``}
        ${media.tablet`font-size: 1.2em;`}
        ${media.phone`font-size: 1em;`}
    }
    & > p {
        color: grey;
        font-weight: 350;
        font-size: 1.4em;
        margin-top: 15px;
        margin: 15px 10px auto;
        transition-delay: 0.2s;
        ${media.desktop``}
        ${media.tablet`font-size: 1.2em;`}
        ${media.phone`font-size: 1em;`}
    }
    & > a {
        transition-delay: 0.4s;
    }
`
const OvalTestimony = styled(TestimonyContainer) `
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 50%;
    border-radius: 50%;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(255,255,255,0.6);
    border: 1px solid rgba(184,237,255,0.7);
    &:hover {
        border-color: white;
        background-color: rgba(184,237,255,0.7);
        & > h4 {
            transform: scale(1.05);
        }
        & > p {
            transform: scale(1.05);
        }
        & > a {
            border-color: grey;
        }
    } 
    & > * {
        transition: all 0.4s ease-in;
    }
    & > h4 {
        color: dimgray;
        font-size: 1.1em;
        font-weight: 200;
        line-height: 1.2em;
        margin: auto 50px 0;
        transition-delay: 0s;
        ${media.desktop``}
        ${media.tablet`font-size: 1.2em;`}
        ${media.phone`font-size: 1em;`}
    }
    & > p {
        color: grey;
        font-weight: 500;
        font-size: 1em;
        margin: 15px 20px auto;
        transition-delay: 0.2s;
        ${media.desktop``}
        ${media.tablet`font-size: 1.2em;`}
        ${media.phone`font-size: 1em;`}
    }
    & > a {
        transition-delay: 0.4s;
    }
`

export default Testimony