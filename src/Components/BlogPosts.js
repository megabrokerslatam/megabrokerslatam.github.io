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
// importing axios for http requests
import axios from 'axios';

export default class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        // axios.get(`https://megabrokerslatam.co/wp-json/wp/v2/posts?filter[orderby]=date&order=desc`)
        //     .then(response => {
        //         const tempPosts = [];
        //         for (let post in response.data) {
        //             tempPosts.push(response.data[post]);
        //         }
        //         this.setState({
        //             posts : tempPosts
        //         })
        //     }, error => {
        //         console.log("ERROR");
        //         console.error(error);
        //     });
    }
    render() {
        return (
            <BlogGroup>
                {/* {this.state.posts.map(function(d, idx){
                    return (<li key={idx}>{d.name}</li>)
                })} */}
                <BlogDetail title="La Importancia del Seguro Médico Internacional Para Viajar Al Extranjero" summary="Los accidentes, enfermedades o malestares pueden arruinar tu viaje. Para esto existen los seguros médicos que te permiten viajar tranquilo y seguro, sabiendo que ante un inconveniente recibirás ayuda y contención" imageUrl="https://pcdnetwork.org/wp-content/uploads/2017/10/gishealth.png"></BlogDetail>
            </BlogGroup>
        );
    }
}

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
