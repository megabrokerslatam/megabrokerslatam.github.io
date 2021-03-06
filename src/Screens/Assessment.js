import React from 'react'
// importing styleed components
import styled from 'styled-components'
// importing flex components
import { Flex1, Column, Row } from '../Components/Helpers/Flex'
// importing components
import Loading from '../Components/Loader/Loader';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfoForm from '../Components/InfoForm';
import ContactForm from '../Components/ContactForm';
import PlanInfo from '../Components/PlanInfo';
import PlanBenefits from '../Components/PlanBenefits';
import MobilePlanInfo from '../Components/MobilePlanInfo';
import MobilePlanBenefits from '../Components/MobilePlanBenefits';
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
            benefitTitles: [],
            bronzeBenefits: [],
            silverBenefits: [],
            goldBenefits: [],
            activeTab: 1,
            firstName: '',
            lastName: '',
            telephone: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.switchTab = this.switchTab.bind(this);
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
    switchTab(tabNumber) {
        this.setState({
            activeTab: tabNumber
        })
    }
    render() {
        let phoneScreen = (window.innerWidth <= 760);
        const content = this.state.default? (
            <InfoForm />
        ): (
            <Recomendation>
                <PlansHeader>
                    <ClusterInfo>
                        <h1>{this.state.clusterName}</h1>
                        <h3>{this.state.clusterDescription}</h3>
                    </ClusterInfo>
                    <PlanInfo plan="Gold" rates={this.state.goldRates}/>
                    <PlanInfo plan="Silver" rates={this.state.silverRates}/>
                    <PlanInfo plan="Bronze" rates={this.state.bronzeRates}/>
                    {phoneScreen &&
                        <PlansInfo>
                            <PlanTabs>
                                <Tab onClick={() => this.switchTab(1)} className={((this.state.activeTab === 1) ? 'selected' : 'unselected')}><h2>Plan <span style={{color: "#C1A043"}}>Oro</span></h2></Tab>
                                <Tab onClick={() => this.switchTab(2)} className={((this.state.activeTab === 2) ? 'selected' : 'unselected')}><h2>Plan <span style={{color: "#B2AEAC"}}>Plata</span></h2></Tab>
                                <Tab onClick={() => this.switchTab(3)} className={((this.state.activeTab === 3) ? 'selected' : 'unselected')}><h2>Plan <span style={{color: "#C0885D"}}>Bronze</span></h2></Tab>
                            </PlanTabs>
                            {phoneScreen && (this.state.activeTab === 1) &&
                                <MobilePlanInfo plan="Gold" rates={this.state.goldRates}/>
                            }
                            {phoneScreen && (this.state.activeTab === 2) &&
                                <MobilePlanInfo plan="Silver" rates={this.state.silverRates}/>
                            }
                            {phoneScreen && (this.state.activeTab === 3) && 
                                <MobilePlanInfo plan="Bronze" rates={this.state.bronzeRates}/>
                            }
                        </PlansInfo>
                    }
                </PlansHeader>
                <PlansBenefits>
                    <BenefitTitles>
                        {this.state.goldBenefits.map((benefit, index) => (
                            <BenefitTitle key={index}>
                                <h3>{benefit.name}</h3>
                            </BenefitTitle>
                        ))}
                    </BenefitTitles>
                    <PlanBenefits benefits={this.state.goldBenefits}/>
                    <PlanBenefits benefits={this.state.silverBenefits}/>
                    <PlanBenefits benefits={this.state.bronzeBenefits}/>
                    {phoneScreen && (this.state.activeTab === 1) &&
                        <MobilePlanBenefits benefits={this.state.goldBenefits}/>
                    }
                    {phoneScreen && (this.state.activeTab === 2) &&
                        <MobilePlanBenefits benefits={this.state.silverBenefits}/>
                    }
                    {phoneScreen && (this.state.activeTab === 3) &&
                        <MobilePlanBenefits benefits={this.state.bronzeBenefits}/>
                    }
                </PlansBenefits>
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
        #e5dcef 20%,
        #e5dcef 90%,
        #FFFFFF 98%)
`
const Recomendation = styled(Column)`
    justify-content: space-around;
`
const PlansHeader = styled(Row) `
    width: 100%
`
const ClusterInfo = styled(Column)`
    flex: 4;
    padding: 20px 50px;
    ${media.tablet`flex: 3;padding: 15px 35px;`}
    ${media.phone`flex: 1;padding: 10px 25px;`}
    & > h1 {
        margin-bottom:0;
        font-weight: 450;
        ${media.phone`font-size:1.1em;`}
    }
    & > h3 {
        font-weight: 350;
        ${media.tablet`font-size: 1.1em;`}
        ${media.phone`font-size:0.9em;`}
    }
`
const PlansInfo = styled(Column) `
    flex: 1;
    padding: 10px 15px;
`
const PlanTabs = styled(Row) `
`
const Tab = styled.button `
    flex: 1;
    background-color: transparent;
    &:focus {
        outline: none;
        border: none;
    }
    &.selected {
        border-radius: 4px;
        border: 2px solid #e5dcef;
        border-bottom: none;
    }
    &.unselected {
        border:none;
        border-bottom: 2px solid #e5dcef;
    }
    &>h2 {
        font-size: 1.3em;
        font-weight: 450;
    }
`
const PlansBenefits = styled(Row) `
    width: 100%;
`
const BenefitTitles = styled(Column) `
    flex: 4;
    padding: 10px 50px;
    text-align: center;
    align-items: center;
    ${media.tablet`flex: 3;padding: 10px 35px;`}
    ${media.phone`flex: 1;padding: 10px 25px;`}
`
const BenefitTitle = styled(Column) `
    height: 95px;
    justify-content: center;
    ${media.tablet`height:110px;`}
    ${media.phone`height:100px;`}
    & > h3 {
        margin: 0;
        font-size: 1.1em;
        font-weight: 480;
        ${media.tablet`font-size:1em;font-weight:500;`}
        ${media.phone`font-size:0.9em;font-weight:450;`}
    }
`