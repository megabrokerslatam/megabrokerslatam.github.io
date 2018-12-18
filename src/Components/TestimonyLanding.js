import React, { Component } from 'react'
// import styled components
import styled from 'styled-components'
// Component imports
import Testimony from './Testimony'
// importing media queries function
import { media } from './Helpers/MediaQueries'

class TestimonyLanding extends Component {
  render() {
    return (
      <TestimonyContainer>
        <Testimony large="true" quote='"La seguridad que yo siento cuando me subo a un caballo para jugar un deporte de mucho riesgo es algo que yo considero invalorable. Me da la tranquilidad de pensar en lo que tengo que hacer y elimina todo tipo de miedos"' person="Santiago Stirling" url="https://www.youtube.com/watch?v=9sh79GGVvuI"/>
      </TestimonyContainer>
    );
  }
}

const TestimonyContainer = styled.div `
  z-index: 1;
  width: 160vw;
  height: 450px;
  overflow: hidden;
  margin-left: -30vw;
  position: relative;
  ${media.tablet`height: 450px;`}
  ${media.phone`height: 400px;`}
`


export default TestimonyLanding;