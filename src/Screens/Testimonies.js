import React  from 'react';
// import styled components
import styled from 'styled-components'
// Component imports
import Bubbles from "../Components/Bubbles";
import Testimony from '../Components/Testimony'
// importing flex components
import { RowBetween} from '../Components/Helpers/Flex'
// importing media queries function
import { media } from '../Components/Helpers/MediaQueries'
// importing images
import waves from '../assets/images/waves.png'

const Testimonies = props => {
    return (
        <TestimonyContainer>
            <h2>Para nosotros cada persona es una historia</h2>
            <TestimonyGroup>
                <TestimonyFrame><Testimony quote='"La seguridad y la tranquilidad que yo siento cuando me subo a un caballo para jugar un deporte de mucho riesgo es algo que yo considero invalorable. Me da la tranquilidad de pensar en lo que tengo que hacer y elimina todo tipo de miedos con mi bien estar."' person="Santiago Stirling" url="https://www.youtube.com/watch?v=9sh79GGVvuI"/></TestimonyFrame>
                <TestimonyFrame><Testimony quote='"Tengo otra nueva oportunidad y quiero aprovecharla."' person="Carlos" url="https://www.youtube.com/watch?v=e6UazAkjr8o" /></TestimonyFrame>
            </TestimonyGroup>
        </TestimonyContainer>
    );
}

// const getTestimonies = () => {
//     return (
//         <TestimonyDetail title="Diabetes" summary="Deberias cuidar tus niveles de azucar siempre" />
//     )
// }

const TestimonyContainer = styled.div`
    z-index: 1;
    width: 100vw;
    display: flex;
    min-height: 84vh;
    text-align: center;
    align-items: center;
    flex-direction: column;
    background-color: #e5dcef;
    background-color: transparent;
    justify-content: space-between;
    & > h2 {
        font-size: 2.7em;
        font-weight: 200;
        color: dimgray;
        margin: 42px auto 50px;
        ${media.tablet`font-size: 2.2em;margin: 45px 55px 30px;font-weight: 300;line-height:1.7em`}
        ${media.phone`font-size: 1.6em;margin: 35px 35px 40px;font-weight: 250;line-height:1.4em`}
    }
`
const TestimonyGroup = styled(RowBetween) `
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-image: url(${waves});
  ${media.tablet`background-size: 100% auto;background-repeat: repeat`}
  ${media.phone`background-size: 100% auto;bacground-repeat:repeat`}
`
const TestimonyFrame = styled.div `
    width: 550px;
    height: 350px;
    margin: 25px 15px;
`

export default Bubbles(Testimonies);