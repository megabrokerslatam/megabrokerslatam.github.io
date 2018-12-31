import React from 'react'
// importing styleed components
import styled from 'styled-components'
// importing styled components
import { Logo, Button } from '../Components/Helpers/Styled'
// importing flex components
import { Flex1, Flex2, Column, RowAround, RowBetween } from '../Components/Helpers/Flex'
// importing components
import Loading from '../Components/Loader/Loader';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfoForm from '../Components/InfoForm';
import ContactForm from '../Components/ContactForm';
// importing media queries function
import { media } from '../Components/Helpers/MediaQueries'
// importing axios for http requests
import axios from 'axios';

export default class Assessment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            default: false,
            loading: true,
            clusterName: '',
            clusterDescription: '',
            bronzeRates: [],
            silverRates: [],
            goldRates: [],
            selectedBronze: null,
            selectedSilver: null,
            selectedGold: null,
            benefitTitles: [],
            bronzeBenefits: [],
            silverBenefits: [],
            goldBenefits: [],
            activeTab: 1,
            firstName: '',
            lastName: '',
            telephone: '',
            deductibleDescription: 'El deducible es el monto que debe pagar el asegurado antes de ser cubierto por la póliza',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    componentDidMount() {
        if (this.props.match.params.planType === "1") {
            console.log("getting personal quote");
            this.getPersonalQuote()
        } else if (this.props.match.params.planType === "2") {
            console.log("getting couple quote");
            this.getCoupleQuote()
        } else if (this.props.match.params.planType === "3") {
            console.log("getting kids quote");
            this.getKidsQuote();
        } else {
            console.log("getting other quote");
            this.getOtherQuote();
        }
    }
    getPersonalQuote() {
        axios.get(`https://megabrokerslatam.co/wp-json/quoting/v1/quote/?main_age=${this.props.match.params.mainAge}&plan_type=1&country=${this.props.match.params.country}`)
            .then(res => {
                if (res.data) {
                    console.log("getting data");
                    const clusterInfo = res.data[0];
                    this.setState({
                        clusterName: clusterInfo.cluster_name,
                        clusterDescription: clusterInfo.cluster_info,
                        bronzeRates: res.data[1].Bronze.rates.reverse(),
                        silverRates: res.data[2].Plata.rates.reverse(),
                        goldRates: res.data[3].Oro.rates.reverse(),
                        bronzeBenefits: res.data[1].Bronze.benefits,
                        silverBenefits: res.data[2].Plata.benefits,
                        goldBenefits: res.data[3].Oro.benefits,
                    })
                    this.setState({
                        benefitTitles: this.state.bronzeBenefits.map(a => a.name),
                        selectedBronze: this.state.bronzeRates[0].biyearly_rate,
                        selectedSilver: this.state.silverRates[0].biyearly_rate,
                        selectedGold: this.state.goldRates[0].biyearly_rate,
                        loading: false,
                    })
                    console.log("finished setting state");
                } else {
                    console.log("no quote");
                    this.setState({
                        default: true,
                        loading: false,
                    })
                }
            }, error => {
                console.log("Error");
                console.log(error);
            })
    }
    getCoupleQuote() {
        axios.get(`https://megabrokerslatam.co/wp-json/quoting/v1/quote/?main_age=${this.props.match.params.mainAge}&second_age=${this.props.match.params.secondAge}&plan_type=2&country=${this.props.match.params.country}`)
        .then(res => {
            if (res.data) {
                const clusterInfo = res.data[0];
                    this.setState({
                        clusterName: clusterInfo.cluster_name,
                        clusterDescription: clusterInfo.cluster_info,
                        bronzeRates: res.data[1].Bronze.rates.reverse(),
                        silverRates: res.data[2].Plata.rates.reverse(),
                        goldRates: res.data[3].Oro.rates.reverse(),
                        bronzeBenefits: res.data[1].Bronze.benefits,
                        silverBenefits: res.data[2].Plata.benefits,
                        goldBenefits: res.data[3].Oro.benefits,
                    })
                    this.setState({
                        benefitTitles: this.state.bronzeBenefits.map(a => a.name),
                        selectedBronze: this.state.bronzeRates[0].biyearly_rate,
                        selectedSilver: this.state.silverRates[0].biyearly_rate,
                        selectedGold: this.state.goldRates[0].biyearly_rate,
                        loading: false
                    })
            } else {
                console.log("no quote");
                this.setState({
                    default: true,
                    loading: false,
                })
            }
        }, error => {
            console.log("Error");
            console.log(error);
        })
    }
    getKidsQuote() {
        axios.get(`https://megabrokerslatam.co/wp-json/quoting/v1/quote/?main_age=${this.props.match.params.mainAge}&second_age=${this.props.match.params.secondAge}&num_kids=${this.props.match.params.numKids}&plan_type=3&country=${this.props.match.params.country}`)
        .then(res => {
            if (res.data) {
                const clusterInfo = res.data[0];
                    this.setState({
                        clusterName: clusterInfo.cluster_name,
                        clusterDescription: clusterInfo.cluster_info,
                        bronzeRates: res.data[1].Bronze.rates.reverse(),
                        silverRates: res.data[2].Plata.rates.reverse(),
                        goldRates: res.data[3].Oro.rates.reverse(),
                        bronzeBenefits: res.data[1].Bronze.benefits,
                        silverBenefits: res.data[2].Plata.benefits,
                        goldBenefits: res.data[3].Oro.benefits,
                    })
                    this.setState({
                        benefitTitles: this.state.bronzeBenefits.map(a => a.name),
                        selectedBronze: this.state.bronzeRates[0].biyearly_rate,
                        selectedSilver: this.state.silverRates[0].biyearly_rate,
                        selectedGold: this.state.goldRates[0].biyearly_rate,
                        loading: false
                    })
            } else {
                console.log("no quote");
                this.setState({
                    default: true,
                    loading: false,
                })
            }
        }, error => {
            console.log("Error");
            console.log(error);
        })
    }
    getOtherQuote() {
        axios.get(`https://megabrokerslatam.co/wp-json/quoting/v1/quote/?main_age=${this.props.match.params.mainAge}&plan_type=4&country=${this.props.match.params.country}`)
        .then(res => {
            if (res.data) {
                const clusterInfo = res.data[0];
                    this.setState({
                        clusterName: clusterInfo.cluster_name,
                        clusterDescription: clusterInfo.cluster_info,
                        bronzeRates: res.data[1].Bronze.rates.reverse(),
                        silverRates: res.data[2].Plata.rates.reverse(),
                        goldRates: res.data[3].Oro.rates.reverse(),
                        bronzeBenefits: res.data[1].Bronze.benefits,
                        silverBenefits: res.data[2].Plata.benefits,
                        goldBenefits: res.data[3].Oro.benefits,
                    })
                    this.setState({
                        benefitTitles: this.state.bronzeBenefits.map(a => a.name),
                        selectedBronze: this.state.bronzeRates[0].biyearly_rate,
                        selectedSilver: this.state.silverRates[0].biyearly_rate,
                        selectedGold: this.state.goldRates[0].biyearly_rate,
                        loading: false
                    })
            } else {
                console.log("no quote");
                this.setState({
                    default: true,
                    loading: false,
                })
            }
        }, error => {
            console.log("Error");
            console.log(error);
        })
    }
    // submitInterest= (firstName, lastName, telephone) => {
    //     const pType = this.props.match.params.planType;
    //     if (pType === '1') {
    //         axios.post(`https://megabrokerslatam.co/wp-json/emailing/v1/prospect/interested/?name=${firstName}&last_name=${lastName}&main_age=${this.state.mainAge}&plan_type=1&country=${this.state.country}&email=${this.state.email}&telephone=${telephone}`)
    //             .then(res => {

    //             }, error => {
    //                 console.log("Error");
    //                 console.log(error);
    //             })
    //     } else if (pType === '2') {
    //         axios.post(`https://megabrokerslatam.co/wp-json/emailing/v1/prospect/interested/?name=${firstName}&last_name=${lastName}&main_age=${this.state.mainAge}&second_age=${this.props.match.params.secondAge}&plan_type=2&country=${this.state.country}&email=${this.state.email}&telephone=${telephone}`)
    //             .then(res => {

    //             }, error => {
    //                 console.log("Error");
    //                 console.log(error);
    //             })
    //     } else if (pType === '3') {
    //         axios.post(`https://megabrokerslatam.co/wp-json/emailing/v1/prospect/interested/?name=${firstName}&last_name=${lastName}&main_age=${this.state.mainAge}&second_age=${this.props.match.params.secondAge}&num_kids=${this.props.match.params.numKids}&plan_type=3&country=${this.state.country}&email=${this.state.email}&telephone=${telephone}`)
    //             .then(res => {

    //             }, error => {
    //                 console.log("Error");
    //                 console.log(error);
    //             })
    //     } else {
    //         axios.post(`https://megabrokerslatam.co/wp-json/emailing/v1/prospect/interested/?name=${firstName}&last_name=${lastName}&main_age=${this.state.mainAge}&plan_type=4&country=${this.state.country}&email=${this.state.email}&telephone=${telephone}`)
    //             .then(res => {

    //             }, error => {
    //                 console.log("Error");
    //                 console.log(error);
    //             })
    //     }
    // }
    render() {
        const content = this.state.default? (
            <InfoForm />
        ): (
            <Recomendation>
                <h2>Tu recomendacion de planes personal</h2>
                <h3>{this.props.match.params.country}</h3>
                <h3>{this.props.match.params.planType}</h3>
                <h3>{this.props.match.params.mainAge}</h3>
                <h3>{this.props.match.params.secondAge}</h3>
                <h3>{this.props.match.params.numKids}</h3>
                <ContactForm />
            </Recomendation>
        )
        return (
            <div>
                {this.state.loading? (
                    <Loading />
                ) : (
                    <AssessmentContainer>
                        <Header />
                        <Flex1 />
                        {content}
                        <Flex1 />
                        <Footer/>
                    </AssessmentContainer> )}
            </div>
        )
    }
}

const AssessmentContainer = styled(Column)`
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(to bottom, 
        #FFFFFF 0%,
        #e5dcef 50%,
        #FFFFFF 90%);
`
const Recomendation = styled(Column)`
    justify-content: space-around;
`