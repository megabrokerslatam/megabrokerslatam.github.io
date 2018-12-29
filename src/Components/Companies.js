import React, { Component } from 'react';
// import styled components
import styled from 'styled-components'
// Component imports
import Company from './Company'
// importing flex components
import { RowBetween} from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing imagies
import allianz from '../assets/images/companies/allianz.png'
import bmi from '../assets/images/companies/bmi.png'
import best from '../assets//images/companies/bestdoctors.png'
import bupa from '../assets/images/companies/bupa.png'
import morgan from '../assets/images/companies/morgan.png'
import redbridge from '../assets/images/companies/redbridge.png'
import vumi from '../assets/images/companies/vumi.png'

class Companies extends Component {
  render() {
    return (
      <CompaniesContainer>
        <h2>Trabajamos con las aseguradoras de mejor reputacion en la industria</h2>
        <CompanyGroup>
            {/* <Company url={bupa}></Company> */}
            <Company url={best}></Company>
            <Company url={bmi}></Company>
            <Company url={allianz}></Company>
            <Company url={vumi}></Company>
            <Company url={redbridge}></Company>
            <Company url={morgan}></Company>
        </CompanyGroup>
      </CompaniesContainer>
    );
  }
}

const CompaniesContainer = styled.div `
    z-index: 1;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    flex-direction: column;
    background-color: #e5dcef;
    justify-content: space-between;
    & > h2 {
        margin: 15px auto 10px;
        font-weight: 180;
        font-size: 1.9em;
        color: dimgray;
        width: 90%;
        ${media.desktop``}
        ${media.tablet`font-size: 1.6em;margin: 35px 55px 30px;font-weight: 250;line-height:1.8em`}
        ${media.phone`font-size: 1.2em;margin: 30px 35px 40px;font-weight: 100;line-height:2em`}
    }
`
const CompanyGroup = styled(RowBetween) `
    margin-bottom: 15px;
    flex-wrap: wrap;
    width: 90%;
`

export default Companies;