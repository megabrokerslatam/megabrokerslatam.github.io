import React from 'react';
// import styled components
import styled from 'styled-components'
// importing flex components
import { Flex2, Flex3, Column, Row} from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'

const Blog = props => {
    return (
        <BlogContainer>
            <Flex2 />
            <h4>{props.title}</h4>
            <p>{props.summary}</p>
            <Flex3 />
        </BlogContainer>
    );
}

const BlogContainer = styled.div `
    width: 255px;   
    height: 255px;
    display: flex;
    border-radius: 50%;
    margin: 20px 15px 50px;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid rgb(229,220,239);
    background-color: white;
    &:hover {
        border-color: white;
        background-color: rgba(229,220,239,0.7);
    }
    ${media.desktop``}
    ${media.tablet`margin: 10px auto 25px`}
    ${media.phone`margin: 10px auto 30px`}
    & > h4 {
        color: dimgray;
        font-size: 1.2em;
        font-weight: 150;
        margin: auto 20px 0;
        ${media.phone`font-size: 1.1em;font-weight: 150;`}
    }
    & > p {
        color: grey;
        font-size: 0.9em;
        line-height: 1.5em;
        margin: 15px 11px auto;
        ${media.phone`font-size: 0.7em;`}
    }
`

export default Blog;