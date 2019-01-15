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
    flex: 3;
    padding: 10px 20px;
    text-align: center;
    align-items: center;
    border-left: 1px solid silver;
    ${media.tablet`flex: 2;padding: 10px;border-left: 1px solid lightgrey;`}
`
const Benefit = styled(Column) `
    height: 95px;
    justify-content: center;
    & > p {
        margin: 0;
        font-size: 1em;
        line-height: 1.2em;
        ${media.tablet`height:110px;font-size:0.9em;line-height:1.1em;font-weight:420;`}
    }
`

export default PlanBenefits;