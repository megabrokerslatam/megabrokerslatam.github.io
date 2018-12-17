import React, { Component } from 'react'
// import styled components
import styled from 'styled-components'
// Component imports
import Blog from './Blog'
// importing flex components
import { Flex1, Flex2, Column, RowBetween} from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import wave from '../assets/images/wave.png'
import waves from '../assets/images/waves.png'

class Blogs extends Component {
  render() {
    return (
      <BlogsContainer>
        <TopBlock></TopBlock>
        <h2>Recursos para mantener una vida saludable</h2>
        <BlogGroup>
            <Blog title="Como parar indigestion" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image=""></Blog>
            <Blog title="La Dieta Keto" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image=""></Blog>
            <Blog title="Reduciendo el Cholesterol" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image=""></Blog>
            <Blog title="La importancia de ejercicio para musculos saludables" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image=""></Blog>
            <Blog title="El buen sueño" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></Blog>
            {/* <Blog title="Reduciendo el Cholesterol" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image=""></Blog>
            <Blog title="La importancia de ejercicio para musculos saludables" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image=""></Blog>
            <Blog title="El buen sueño" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></Blog>
            <Blog title="La importancia de ejercicio para musculos saludables" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image=""></Blog>
            <Blog title="El buen sueño" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></Blog> */}
        </BlogGroup>
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
      ${media.tablet`font-size: 1.9em;margin: 35px 55px 30px;font-weight: 250;line-height:1.7em`}
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
const BlogGroup = styled(RowBetween) `
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  background-size: 100% 100%;
  background-image: url(${waves});
  ${media.tablet`background-size: 100% auto;background-repeat: repeat`}
  ${media.phone`background-size: 100% auto;bacground-repeat:repeat`}
`

export default Blogs;