import React  from 'react';
// import styled components
import styled from 'styled-components'
// Component imports
import Bubbles from "../Components/Bubbles";
import BlogPosts from "../Components/BlogPosts";
// importing media queries function
import { media } from '../Components/Helpers/MediaQueries'

const BlogScreen = props => {
    return (
        <BlogCont>
            <h2>Recursos para mantener una vida segura y saludable</h2>
            <BlogPosts />
        </BlogCont>
    );
}

const BlogCont = styled.div `
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
      font-size: 3em;
      font-weight: 180;
      color: dimgray;
      margin: 50px auto 75px;
      ${media.tablet`font-size: 1.9em;margin: 35px 55px 30px;font-weight: 250;line-height:1.7em`}
      ${media.phone`font-size: 1.2em;margin: 30px 35px 40px;font-weight: 100;line-height:1.9em`}
  }
`

export default Bubbles(BlogScreen);