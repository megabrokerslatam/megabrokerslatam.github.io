import React from 'react';
// import styled components
import styled from 'styled-components'
// importing flex components
import { Column, Flex1, Flex2 } from './Helpers/Flex'
// importing styled components
import { Button } from '../Components/Helpers/Styled'
// importing components
import Thanks from '../Components/Thanks'
// importing media queries function
import { media } from './Helpers/MediaQueries'

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: '',
            phone: '',
            submited: false,
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
    submit = (event) => {
        event.preventDefault();
        console.log("submiting info to server");
        // this.props.submitInterest(this.state.fName, this.state.lName, this.state.phone);
        this.setState({
            submited: true,
        })
    }
    render() {
        return (
            <div>
                {this.state.submited? (
                    <Thanks />
                ):(
                    <OuterContainer>
                        <h2>Llena el siguiente formulario para ponernos en contacto</h2>
                        <FormContainer onSubmit={this.submit}>
                            <InputsContainer>
                                <Input name="fName" required type="text" placeholder="Nombre" value={this.state.fName} onChange={this.handleInputChange}/>
                                <Input name="lName" required type="text" placeholder="Apellido" value={this.state.lName} onChange={this.handleInputChange}/>
                                <Input name="phone" required type="tel" placeholder="Telefono" value={this.state.phone} onChange={this.handleInputChange}/>
                            </InputsContainer>
                            <SubmitButton type="submit" value="Submit">Contactarse</SubmitButton>
                        </FormContainer>
                    </OuterContainer>
                )}
            </div>
        );
    }
}
const OuterContainer = styled(Column)`
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
    & > h2 {
        width: 75%;
        font-size:2.1em;
        font-weight:350;
        margin-bottom: 50px;
        ${media.tablet`font-size:1.8em;`}
        ${media.phone`font-size:1.4em;`}
    }
`
const FormContainer = styled.form `
    width: 60%;
    font-size: 1.1em;
    ${media.desktop``}
    ${media.tablet`width:65%`}
    ${media.phone`width:75%`}
`
const InputsContainer = styled(Column)`
    display:flex;
    flex-wrap: wrap;
    border-radius:5px;
    flex-direction:row;
    margin: 0 auto 35px;
    padding: 25px 10px;
    background-color: rgba(255,255,255,0.7);
    justify-content:center;
`
const Input = styled.input`
    width:45%;
    border: none;
    font-size: 1.1em;
    background: white;
    border-radius: 0;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 25px;
    padding-left: 10px;
    border: none;
    background:transparent;
    border-bottom: 2px solid #e5dcef;
    &:focus {
        outline: none;
    }
    &::-webkit-inner-spin-button, ::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
    ${media.tablet`font-size:1em;width:41%;;margin-left:10px;margin-right:10px;padding-left:9px;`}
    ${media.phone`font-size:1em;width:90%;;margin-left:10px;margin-right:10px;padding-left:6px;font-weigth:400`}
`
const SubmitButton = styled(Button)`
    font-size:1.2em;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 0px;
    border-color: transparent;
    &:focus {
        outline: none;
    }
    ${media.phone`border-color:transparent`}
`