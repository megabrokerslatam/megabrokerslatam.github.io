import React from 'react';
// import styled components
import styled from 'styled-components'
// importing flex components
import { Flex2, Flex3 } from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import caratula from '../assets/images/CaratulaBlog.png'

const BlogDetail = props => {
    return (
        <BlogContainer>
            <BlogCircle>
                <Flex2 />
                <h4>{props.title}</h4>
                <p>{props.summary}</p>
                <Flex3 />
            </BlogCircle>
        </BlogContainer>
    );
}

const BlogContainer = styled.div `
    width: 310px;   
    height: 310px;
    border-radius: 50%;
    margin: 20px 20px 50px;
    background-position: center;
    background-size: 100% 100%;
    background-image: url(${caratula});
    ${media.desktop``}
    ${media.tablet`margin: 10px auto 25px`}
    ${media.phone`margin: 10px auto 30px`}
`
const BlogCircle = styled.div`
    width: 310px;   
    height: 310px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid rgb(229,220,239);
    background-color: rgba(255,255,255,0.8);
    &:hover {
        border-color: white;
        background-color: rgba(229,220,239,0.8);
    }
    & > h4 {
        color: dimgray;
        font-size: 1em;
        font-weight: 450;
        line-height: 1.4em;
        margin: 8px 50px auto;
        ${media.phone`font-size: 1.1em;font-weight: 500;`}
    }
    & > p {
        color: dimgray;
        font-size: 0.9em;
        font-weight: 420;
        line-height: 1.6em;
        margin: 15px 20px auto;
        ${media.phone`font-size: 0.8em;margin: 15px 25px auto;`}
    }
`

export default BlogDetail;