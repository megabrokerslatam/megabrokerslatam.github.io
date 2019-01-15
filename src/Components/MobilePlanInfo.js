import React from 'react';
// import styled components
import styled from 'styled-components'
// importing flex components
import { Column } from './Helpers/Flex'
// importing media queries function
import { media } from './Helpers/MediaQueries'
// importing images
import goldBars from '../assets/images/GoldBars.png'
import silverBars from '../assets/images/SilverBars.png'
import bronzeBars from '../assets/images/BronzeBars.png'

export default class MobilePlanInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRate: this.props.rates[0].biyearly_rate,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        let planImage = <PlanImage alt="Bronze plan" src={goldBars} />;
        if (this.props.plan === "Silver") {
            planImage =  <PlanImage alt="Gold plan" src={silverBars} />
        } else if (this.props.plan === "Bronze") {
            planImage = <PlanImage alt="Silver plan" src={bronzeBars} />
        }
        return (
            <PlanContainer>
                {planImage}
                <Deductible>Deducible: 
                    <select name="selectedRate" value={this.state.selectedRate} onChange={this.handleInputChange}>
                        {this.props.rates.map((rate, index) => (
                            <option key={index} value={rate.biyearly_rate}>
                                ${rate.deductible}
                            </option>
                            ))
                        }
                    </select>
                </Deductible>
                <DeducibleDescription>El deducible es el monto que debe pagar el asegurado antes de ser cubierto por la póliza</DeducibleDescription>
                <Price>Precio Mensual: ${Math.ceil(this.state.selectedRate / 6)}</Price>
            </PlanContainer>
        )
    }
}

const PlanContainer = styled(Column) `
    flex: 1;
    display: none;
    padding: 10px 15px;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    ${media.phone`display: flex;flex:1;`}
    &>h2 {
        font-size: 1.3em;
        font-weight: 450;
    }
`
const PlanImage = styled.img`
    width: 75px;
    height: 75px;
    margin-bottom: 20px;
`
const Deductible = styled.span`
    font-size: 1.1em;
    & > select {
        height: 100%;
        margin-left: 5px;
        font-size: 0.9em;
        border: 1px solid #e5dcef;
        &:focus {
            outline: none;
        }
    }
`
const DeducibleDescription = styled.p `
    font-size: 0.9em;
    color: dimgray;
    margin: 0;
`
const Price = styled.p `
    font-size: 1.2em;
    font-weight: 450;
`