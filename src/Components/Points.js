import React from 'react';
// import styled components
import styled from 'styled-components'
// importing flex components
import { RowAround, Column } from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'

const Points = props => {
    return (
        <PointsContainer>
            <Point>
                <svg style={{width:'180px',height:'180px'}} viewBox="0 0 24 24">
                    <path fill="dimgrey" d="M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M15.6,8.34C16.67,8.34 17.53,9.2 17.53,10.27C17.53,11.34 16.67,12.2 15.6,12.2A1.93,1.93 0 0,1 13.67,10.27C13.66,9.2 14.53,8.34 15.6,8.34M9.6,6.76C10.9,6.76 11.96,7.82 11.96,9.12C11.96,10.42 10.9,11.5 9.6,11.5C8.3,11.5 7.24,10.42 7.24,9.12C7.24,7.81 8.29,6.76 9.6,6.76M9.6,15.89V19.64C7.2,18.89 5.3,17.04 4.46,14.68C5.5,13.56 8.13,13 9.6,13C10.13,13 10.8,13.07 11.5,13.21C9.86,14.08 9.6,15.23 9.6,15.89M12,20C11.72,20 11.46,20 11.2,19.96V15.89C11.2,14.47 14.14,13.76 15.6,13.76C16.67,13.76 18.5,14.15 19.44,14.91C18.27,17.88 15.38,20 12,20Z" />
                </svg>
                <h2>15,000</h2>
                <h3>Familias aseguradas</h3>
            </Point>
            <Point>
                <svg style={{width:'180px',height:'180px'}} viewBox="0 0 24 24">
                    <path fill="dimgrey" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
                <h2>10</h2>
                <h3>Paises en Latinoamerica</h3>
            </Point>
            <Point>
                <svg style={{width:'180px',height:'180px'}} viewBox="0 0 24 24">
                    <path fill="dimgrey" d="M10,3L8,5V7H5C3.85,7 3.12,8 3,9L2,19C1.88,20 2.54,21 4,21H20C21.46,21 22.12,20 22,19L21,9C20.88,8 20.06,7 19,7H16V5L14,3H10M10,5H14V7H10V5M11,10H13V13H16V15H13V18H11V15H8V13H11V10Z" />
                </svg>
                <h2>120,000</h2>
                <h3>Reclamos procesados</h3>
            </Point>
        </PointsContainer>
    );
}

const PointsContainer = styled(RowAround) `
    width: 100%;
    flex-wrap: wrap;
    padding-bottom: 15px;
    background-color: #e5dcef;
    ${media.phone`padding-bottom:25px;`}
`
const Point = styled(Column) `
    align-items: center;
    text-align: center;
    margin: auto 20px;
    & > svg {
        margin-top: 25px;
    }
    & > h2 {
        width: 90%;
        color: dimgray;
        font-size: 2.4em;
        font-weight: 300;
        text-align: center;
        margin: 25px auto 15px;
        ${media.tablet`font-size: 1.95em;margin: 20px auto 0px;font-weight: 250;line-height:1.7em`}
        ${media.phone`font-size: 1.6em;margin: 15px auto 0px;font-weight: 280;line-height:1.9em`}
    }
    & > h3 {
        font-size: 1.8em;
        font-weight: 180;
        margin: 0 auto 35px;
        ${media.tablet`font-size: 1.5em;margin-bottom: 30px;font-weight: 190;line-height:1.4em`}
        ${media.phone`font-size: 1.5em;margin-bottom: 25px;font-weight: 200;line-height:1.2em`}
    }
`

export default Points;