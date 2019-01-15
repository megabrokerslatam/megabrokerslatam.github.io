import React from 'react';
// import styled components
import styled from 'styled-components'
// importing flex components
import { Column } from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'

const PlanBenefits = props => {
    return (
        <BenefitsContainer>
            {props.benefits.map((benefit, index) => (
                <Benefit key={index}>
                    <p>{benefit.description}</p>
                </Benefit>
            ))}
        </BenefitsContainer>
    );
}

const BenefitsContainer = styled(Column) `
    flex: 1;
    height: 100%;
    display: none;
    padding: 10px 15px;
    text-align: center;
    align-items: center;
    border-left: 1px solid silver;
    ${media.phone`display: flex;flex: 1;`}
`
const Benefit = styled(Column) `
    height: 100px;
    justify-content: center;
    & > p {
        margin: 0;
        font-size: 0.8em;
        line-height: 1.2em;
        font-weight: 400;
    }
`

export default PlanBenefits;