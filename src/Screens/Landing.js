import React, { Component } from 'react';
// import styled components
import styled from 'styled-components'
// Component imports
import Catch from "../Components/Catch";
import Companies from "../Components/Companies";
import Blogs from "../Components/Blogs";
import Testimonies from "../Components/Testimonies";
import Navigator from "../Components/Navigator";
import Footer from "../Components/Footer";

class Landing extends Component {
  render() {
    return (
      <LandingContainer>
        <Navigator />
        <Catch />
        <Companies />
        <Blogs />
        <Testimonies />
        <Footer static="false"/>
      </LandingContainer>
    );
  }
}

const LandingContainer = styled.div `
    width: 100vw;
`

export default Landing;