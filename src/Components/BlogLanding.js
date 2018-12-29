import React, { Component } from 'react'
// import styled components
import styled from 'styled-components'
// Component imports
import Blogs from './BlogPosts'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import wave from '../assets/images/wave.png'

class BlogLanding extends Component {
  render() {
    return (
        <BlogsContainer>
            <TopBlock></TopBlock>
            <h2>Recursos para mantener una vida segura y saludable</h2>
            <Blogs />
        </BlogsContainer>
    );
  }
}

const BlogsContainer = styled.div `
  z-index: 1;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  // background-color: #e5dcef;
  background-color: transparent;
  text-align: center;
  justify-content: space-between;
  & > h2 {
      margin: 30px auto 25px;
      font-size: 2em;
      font-weight: 220;
      color: dimgray;
      ${media.desktop``}
      ${media.tablet`font-size: 1.9em;margin: 35px 55px 30px;font-weight: 250;line-height:1.6em`}
      ${media.phone`font-size: 1.2em;margin: 30px 35px 40px;font-weight: 100;line-height:1.9em`}
  }
`
const TopBlock = styled.div`
  height: 50px;
  width: 100%;
  background-size:100% 100%;
  background-image: url(${wave});
  ${media.tablet`height: 42px;`}
  ${media.phone`height: 15px;`}
`

export default BlogLanding;