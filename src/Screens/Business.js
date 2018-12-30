import React from 'react'
// importing styleed components
import styled from 'styled-components'
//importing routing elements
import { Link } from 'react-router-dom'
// importing styled components
import { Logo, Button } from '../Components/Helpers/Styled'
// importing flex components
import { Flex1, Flex2, Column, RowAround, RowBetween } from '../Components/Helpers/Flex'
// importing components

// importing media queries function
import { media } from '../Components/Helpers/MediaQueries'
// importing images
import logo from '../assets/images/logo.png'

export default class Business extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            city: '',
            email: '',
            country: '',
            lastName: '',
            telephone: null,
            numEmployees: null,
            information: '',
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
    sendInquiry = (event) => {
        console.log("sending inquiry");
        event.preventDefault();
    }
    render() {
        return (
            <BusinessContainer>
                <Link to="/"><BusinessLogo alt="megabrokerslatam logo" src={logo} /></Link>
                <Flex1 />
                <GroupBlock>
                    <Intro>
                        <h1>Obtenga un plan de salud personalizado para su grupo profesional</h1>
                        <h3>Como funciona:</h3>
                        <ol>
                            <li>Completa y envía este formulario</li>
                            <li>Recibirá un correo electrónico de inmediato con información útil</li>
                            <li>Le haremos un seguimiento brevemente para programar un horario para hablar</li>
                        </ol>
                    </Intro>
                    <Inquiry onSubmit={this.sendInquiry}>
                        <Input name="firstName" placeholder="Nombre" type="text" value={this.state.firstName} onChange={this.handleInputChange}/>
                        <Input name="lastName" placeholder="Apellido" type="text" value={this.state.lastName} onChange={this.handleInputChange}/>
                        <Input name="city" placeholder="Ciudad" type="text" value={this.state.city} onChange={this.handleInputChange}/>
                        <Input name="country" placeholder="Pais" type="text" value={this.state.country} onChange={this.handleInputChange}/>
                        <Input name="telephone" placeholder="Telefono" type="number" value={this.state.mainAge} onChange={this.handleInputChange}/>
                        <Input required name="email" placeholder="Email" type="email" value={this.state.email} onChange={this.handleInputChange}/>
                        <LongInput name="numEmployees" placeholder="Numero de empleados" type="number" value={this.state.mainAge} onChange={this.handleInputChange}/>
                        <LongInput name="information" placeholder="Consultas Adicionales" type="text" value={this.state.information} onChange={this.handleInputChange}/>
                        <SubmitButton type="submit" value="Submit">Enviar Consulta</SubmitButton>
                    </Inquiry>
                </GroupBlock>
                <Flex1 />
            </BusinessContainer>
        )
    }
}

const BusinessContainer = styled(Column) `
    width: 100vw;
    align-items: center;
    min-height: 100vh;
    background-image: linear-gradient(to bottom, 
        #FFFFFF 0px,
        rgb(219, 238, 249) 25%);
`
const BusinessLogo = styled(Logo)`
    top: 4px;
    left: 5vw;
    position: fixed;
`
const GroupBlock = styled(RowBetween)`
    width:75vw;
    flex-wrap:wrap;
    align-items:center;
    margin: 100px auto 50px;
    ${media.tablet`width:80vw;`}
    ${media.phone`width:88vw;margin: 50px auto 25px;`}
`
const Intro = styled(Column)`
    flex: 1;
    min-width: 310px;
    margin-right:50px;
    font-size: 1.1em;
    & > h1 {
        font-size:1.9em;
        font-weight:500;
        margin-top:0;
        margin-bottom:20px;
        ${media.phone`font-size:1.6em;margin-bottom:20px;`}
    }
    & > h3 {
        font-size:1.2em;
        margin-bottom:0;
        ${media.phone`font-size:1.1em;`}
    }
    ${media.tablet`margin-right:0`}
    ${media.phone`margin-right:0;font-size:0.9em`}
`
const Inquiry = styled(RowBetween)`
    flex: 2;
    min-width: 330px;
    flex-wrap: wrap;
    font-size: 1.7em;
    margin-left:50px;
    margin-top:25px;
    align-items:space-between;
    ${media.tablet`font-size: 1.3em;margin-left:0;`}
    ${media.phone`font-size: 1.2em;margin-left:0;`}
`
const Input = styled.input`
    width: 45%;
    border: none;
    min-width:180px;
    border-radius: 0;
    font-size: 0.7em;
    background: white;
    margin-bottom:25px;
    padding-left: 10px;
    background: transparent;
    border-bottom: 1px solid dimgrey;
    &:focus {
        outline: none;
    }
    &::-webkit-inner-spin-button, ::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
    ${media.tablet`font-size:0.8em;width:46%;padding-left:9px;`}
    ${media.phone`margin-bottom:20px;min-width:120px;font-size:0.7em;width:47%;padding-left:6px;font-weigth:400`}
`
const LongInput = styled(Input)`
    width: 100%;
    min-width:250px;
    ${media.tablet`font-size:0.8em;padding-left:9px;`}
    ${media.phone`font-size:0.7em;padding-left:6px;font-weigth:400`}
`
const SubmitButton = styled(Button)`
    border-color:transparent;
    margin: 25px auto 0;
    font-size:0.8em;
    width: 200px;
    &:focus {
        outline: none;
    }
    ${media.tablet`margin: 45px auto 0;font-size:0.9em`}
    ${media.phone`border-color:transparent`}
`