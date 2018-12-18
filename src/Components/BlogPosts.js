import React  from 'react';
// import styled components
import styled from 'styled-components'
// Component imports
import BlogDetail from './Blog'
// importing flex components
import { RowBetween} from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import waves from '../assets/images/waves.png'

const Blogs = props => {
    return (
        <BlogGroup>
            <BlogDetail title="La Importancia del Seguro Médico Internacional Para Viajar Al Extranjero" summary="Los accidentes, enfermedades o malestares pueden arruinar tu viaje. Para esto existen los seguros médicos que te permiten viajar tranquilo y seguro, sabiendo que ante un inconveniente recibirás ayuda y contención" imageUrl="https://pcdnetwork.org/wp-content/uploads/2017/10/gishealth.png"></BlogDetail>
        </BlogGroup>
    );
}

// const getPosts = () => {
//     return (
//         <Blog title="Diabetes" summary="Deberias cuidar tus niveles de azucar siempre" />
//     )
// }

const BlogGroup = styled(RowBetween) `
  width: 100vw;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-image: url(${waves});
  ${media.tablet`background-size: 100% auto;background-repeat: repeat`}
  ${media.phone`background-size: 100% auto;bacground-repeat:repeat`}
`

export default Blogs;