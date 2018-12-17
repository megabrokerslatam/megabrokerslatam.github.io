import React, { Component } from 'react'
// import styled components
import styled from 'styled-components'
// Component imports
import Testimony from './Testimony'
// importing flex components
import { Flex1, Flex2, Column, RowBetween} from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'

class Blogs extends Component {
  render() {
    return (
      <TestimoniesContainer>
        <Testimony quote='"Ahora puedo seguir viendo a mis hijos crecer"' person="Edgar Gonzales" />
      </TestimoniesContainer>
    );
  }
}

const TestimoniesContainer = styled.div `
  z-index: 1;
  width: 100vw;
  height: 450px;
  position: relative;
  background-color: white;
  overflow: hidden;
  ${media.tablet`height: 450px;`}
  ${media.phone`height: 400px;`}
`

export default Blogs;