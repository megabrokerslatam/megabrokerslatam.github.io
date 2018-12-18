import React, { Component } from 'react';
// import styled components
import styled from 'styled-components'
// Component imports
import Catch from "../Components/Catch";
import Companies from "../Components/Companies";
import Blogs from "../Components/BlogLanding";
import Testimonies from "../Components/TestimonyLanding";
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
        <Footer />
      </LandingContainer>
    );
  }
}

const LandingContainer = styled.div `
    width: 100vw;
    overflow: hidden;
`

export default Landing;