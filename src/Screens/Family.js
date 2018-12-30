import React from 'react'
// importing styleed components
import styled from 'styled-components'
//importing routing elements
import { Link } from 'react-router-dom'
// importing styled components
import { Logo, Button } from '../Components/Helpers/Styled'
// importing flex components
import { Flex1, Column } from '../Components/Helpers/Flex'
// importing components

// importing media queries function
import { media } from '../Components/Helpers/MediaQueries'
// importing images
import logo from '../assets/images/logo.png'
import lineas from '../assets/images/MegaLineasAzul.png'

export default class Family extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            planType: null,
            mainAge: null,
            coupleAge: null,
            numKids: null,
            email: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.getQuote = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    getQuote = (event) => {
        console.log("getting quote");
        event.preventDefault();
    }
    render() {
        return (
            <FamilyContainer>
                <Link to="/"><FamilyLogo alt="megabrokerslatam logo" src={logo} /></Link>
                <Flex1 />
                    <Cotizador onSubmit={this.getQuote}>
                        <label> Selecciona tu pais:
                            <Select name="country" value={this.state.country} onChange={this.handleInputChange}>
                                <option value=""></option>
                                <option value="Peru">Peru</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Otro">Otro</option>
                            </Select>
                        </label>
                        {this.state.country && 
                            <label>Elige el tipo de plan:
                                <Select name="planType" value={this.state.planType} onChange={this.handleInputChange}>
                                    <option value=""></option>
                                    <option value="1">Para mí</option>
                                    <option value="2">Para mí y mi pareja</option>
                                    <option value="3">Para mí, mi pareja y mis hijos</option>
                                    <option value="4">Para otro familiar</option>
                                </Select>
                            </label>
                        }
                        {this.state.planType === "1" &&
                            <label>Yo tengo 
                                <Input name="mainAge" type="number" oninput="this.value=this.value.slice(0, 2)" value={this.state.mainAge} onChange={this.handleInputChange}/>
                                    años
                            </label>
                        }
                        {this.state.planType === "2" &&
                            <label>Yo tengo 
                                <Input name="mainAge" type="number" maxLength="2" value={this.state.mainAge} onChange={this.handleInputChange}/>
                                años y mi pareja tiene
                                <Input name="coupleAge" type="number" maxLength="2" value={this.state.coupleAge} onChange={this.handleInputChange}/> 
                            </label>
                        }
                        {this.state.planType === "3" &&
                            <label>Yo tengo 
                                <Input name="mainAge" type="number" maxLength="2" value={this.state.mainAge} onChange={this.handleInputChange}/>
                                    años y mi pareja tiene
                                <Input name="coupleAge" type="number" maxLength="2" value={this.state.coupleAge} onChange={this.handleInputChange}/> 
                                    y tenemos
                                <Select name="numKids" value={this.state.numKids} onChange={this.handleInputChange}>
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3+</option>
                                </Select>
                                    hijo(s)
                            </label>
                        }
                        {this.state.planType === "4" &&
                            <label>Mi familiar tiene 
                                <Input name="mainAge" type="number" onInput="this.value=this.value.slice(0, 2)" value={this.state.mainAge} onChange={this.handleInputChange}/>
                                    años
                            </label>
                        }
                        {(
                         (this.state.planType === "1" && this.state.mainAge) || 
                         (this.state.planType === "2" && this.state.mainAge && this.state.coupleAge) ||
                         (this.state.planType === "3" && this.state.mainAge && this.state.coupleAge && this.state.numKids) ||
                         (this.state.planType === "4" && this.state.mainAge)
                        ) &&
                            <label>Llena tu email: 
                                <EmailInput required name="email" type="email" value={this.state.email} onChange={this.handleInputChange}/>
                            </label>
                        }
                        {this.state.email && 
                            <SubmitButton type="submit" value="Submit">Mostrar Planes</SubmitButton>
                        }
                    </Cotizador>
                <Flex1 />
            </FamilyContainer>
        )
    }
}

const FamilyContainer = styled(Column) `
    width: 100%;
    height: 100vh;
    align-items: center;
    // background-color: #e5dcef;
    background-image: url(${lineas});
    background-size: 90vh auto;
    background-position: 65vw;
    background-repeat: no-repeat;
    ${media.tablet`background-size: 70vh auto;background-position: 50vw;`}
    ${media.phone`background-size: 60vh auto;background-position: 30vw;`}
`
const FamilyLogo = styled(Logo)`
    position: fixed;
    top: 4px;
    left: 5vw;
`
const Cotizador = styled.form`
    flex:3;
    width: 90%;
    display: flex;
    font-size: 1.7em;
    line-height: 2em;
    flex-direction: column;
    justify-content: center;
    & > * {
        margin-bottom: 15px;
    }
    ${media.tablet`font-size: 1.3em;margin-left:10px;`}
    ${media.phone`font-size: 1.2em;margin-left:8px;`}
`
const Select = styled.select`
    width: auto;
    font-size: 0.9em;
    background: transparent;
    margin-left: 12px;
    border: none;
    border-bottom: 2px solid #e5dcef;
    &:focus {
    border-radius: 4px;
    &:focus {
        outline: none;
    }
    ${media.tablet`font-size:1em;margin-left:10px;`}
    ${media.phone`font-size: 1.2em;margin-left:8px;font-weigth:400`}
`
const Input = styled.input`
    width: 38px;
    font-size: 0.9em;
    background: white;
    margin-left: 12px;
    margin-right: 12px;
    border: none;
    border-radius: 0;
    padding-left: 10px;
    border: none;
    background: transparent;
    border-bottom: 3px solid #e5dcef;
    &:focus {
        outline: none;
    }
    &::-webkit-inner-spin-button, ::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
    ${media.tablet`font-size:1em;width:32px;margin-left:10px;margin-right:10px;padding-left:9px;`}
    ${media.phone`font-size:1em;width:25px;margin-left:10px;margin-right:10px;padding-left:6px;font-weigth:400`}
`
const EmailInput = styled.input`
    width: 420px;
    font-size: 0.9em;
    background: white;
    margin-left: 12px;
    margin-right: 12px;
    padding-left: 10px;
    border-radius: 0;
    border: none;
    background: transparent;
    border-bottom: 3px solid #e5dcef;
    &:focus {
        outline: none;
    }
    ${media.tablet`font-size:1em;width: 320px;background-size: 70vh auto;background-position: 50vw;margin-left:10px;margin-right:10px;padding-left:9px;`}
    ${media.phone`font-size:0.9em;font-weigth:400;width: 300px;background-size: 60vh auto;background-position: 30vw;margin-left:6px;margin-right:10px;padding-left:8px;`}
`
const SubmitButton = styled(Button)`
    font-size:0.9em;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 0px;
    &:focus {
        outline: none;
    }
    ${media.phone`border-color:transparent`}
`