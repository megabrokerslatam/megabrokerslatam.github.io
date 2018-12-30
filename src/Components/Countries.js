import React from 'react';
// import styled components
import styled from 'styled-components'
// importing flex components
import { Row, Column } from '../Components/Helpers/Flex'
// Component imports
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// importing images
import PeruFlag from '../assets/images/flags/Peru.png'
import ParaguayFlag from '../assets/images/flags/Paraguay.png'
import Flags from '../assets/images/flags/Banderas.jpg'

const Countries = props => {
    return (
        <CountriesContainer>
            <span>Elige tu pais:</span>
            <select
        </CountriesContainer>
    );
}

const CountriesContainer = styled(Row) ` 
    flex: 3;
    flex-wrap: wrap;
`

export default Countries;