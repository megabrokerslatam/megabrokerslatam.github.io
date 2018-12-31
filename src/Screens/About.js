import React, { Component } from 'react';
// import styled components
import styled from 'styled-components'
// Component imports
import Mision from "../Components/Mision";
import Nosotros from "../Components/Nosotros";
import Points from "../Components/Points";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
// importing media queries function
import { media } from '../Components/Helpers/MediaQueries'
// importing images
import waveR from '../assets/images/waveR.png'

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <Header />
        <h2>Creemos que la vida es el regalo mas grande que tenemos y por eso vale mucho cuidarla</h2>
        <Mision />
        <Nosotros />
        <WaveBlock style={{marginBottom: "-1px"}}/>
        <Points />
        <Footer />
      </AboutContainer>
    );
  }
}

const AboutContainer = styled.div `
    width: 100vw;
    overflow-x: hidden;
    & > h2 {
      width: 85%;
      color: dimgray;
      font-size: 3em;
      font-weight: 300;
      line-height: 1.4em;
      text-align: center;
      margin: 75px auto 75px;
      ${media.tablet`font-size: 2.1em;margin: 35px auto 25px;font-weight: 300;line-height:1.35em`}
      ${media.phone`font-size: 1.6em;margin: 30px auto 15px;font-weight: 350;line-height:1.4em;width:80%`}
  }
`
const WaveBlock = styled.div`
  height: 50px;
  width: 100%;
  background-size:100% 100%;
  background-image: url(${waveR});
  ${media.tablet`height: 42px;`}
  ${media.phone`height: 15px;`}
`

export default About;