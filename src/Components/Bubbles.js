import React from 'react';
// import styled components
import styled from 'styled-components'
// Component imports
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Bubbles = (BubblesContent) => props => {
    return (
        <OutterContainer>
            <Header />
            <BubbleContainer>
                <BubblesContent />
            </BubbleContainer>
            <Footer fixed="true" />
        </OutterContainer>
    );
}

const OutterContainer = styled.div `  
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`
const BubbleContainer = styled.div `
    position:absolute;
    top:60px; bottom:80px;
    left:0px; right:0px;
    overflow:auto;
`

export default Bubbles;