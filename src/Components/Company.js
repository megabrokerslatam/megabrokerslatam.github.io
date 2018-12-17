import React from 'react';
// import styled components
import styled from 'styled-components'
// importing flex components
import { Flex1, Flex3, Column, Row} from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'

const Company = props => {
    return (
        <CompanyContainer>
            <img alt={props.company} src={props.url} />
            {props.company && 
                <h4>{props.company}</h4>
            }
            {props.description &&
                <p>{props.description}</p>
            }
        </CompanyContainer>
    );
}

const CompanyContainer = styled.div `
    flex: 1;    
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    ${media.desktop``}
    ${media.tablet`margin: 0 auto 25px`}
    ${media.phone`margin: 0 auto 20px`}
    & > img {
        width: 150px;
        height: auto;
    }
    & > h4 {
        margin-top:15px;
        margin-bottom: 25px;
        font-size: 1.2em;
        font-weight: 150;
        color: grey;
        ${media.tablet`font-size: 1.5em;`}
        ${media.phone`font-size: 1.4em;`}
    }
`

export default Company;