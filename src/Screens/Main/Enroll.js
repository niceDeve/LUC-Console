import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FormControl, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Redirect} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import {User} from "../../Objects/objects";
import {NavigationBar} from "../../Components/Navigation/NavigationBar";
import {createAccount} from "../../Operators/Operators";

/*
Component for handling enrollment.
 */
export class Enroll extends Component {

    constructor() {
        super();

        //Holders
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phoneNumber = 0;
        this.password = '';

        //States for validity of inputs
        this.state = {
            validName: true,
            validEmail: true,
            validPhoneNumber: true,
            validPassword: true,
            enrollingState: 0,
        }
    }

    onNameChange(first, last) {
        first = String(first).trim();
        last = String(last).trim();

        this.firstName = first;
        this.lastName = last;
        //Name cannot be zero in first or last
        if (first.length === 0 || last.length === 0) {
            this.setState({validName: false});
        } else {
            this.setState({validName: true})
        }
    }

    onEmailChange(email) {
        email = String(email).trim();

        this.email = email;
        //Email cannot be zero and must include a @
        if (email.length === 0 || !(String(email).includes('@'))) {
            this.setState({validEmail: false});
        } else {
            this.setState({validEmail: true})
        }
    }

    onPhoneChange(phone) {
        phone = String(phone).trim();

        this.phoneNumber = phone;
        //Phone number must be ten int long
        if (phone.length !== 10) {
            this.setState({validPhoneNumber: false});
        } else {
            this.setState({validPhoneNumber: true})
        }
    }

    onPasswordChange(pass) {

        this.password = pass;
        //Password must be longer than 6 characters
        if (pass.length < 6) {
            this.setState({validPassword: false});
        } else {
            this.setState({validPassword: true})
        }
    }

    //Checks validity of input.
    getValidity() {
        return (this.state.validName && this.state.validEmail && this.state.validPhoneNumber && this.state.validPassword &&
        this.firstName.length > 0 && this.lastName.length > 0 && this.email.length > 0 && this.phoneNumber.length > 0 && this.password.length > 0);
    }

    //User submits data
    async onSubmit() {
        if (this.getValidity()) {
            this.setState({enrollingState: 1});
            console.log("Creating LUC account!");

            global.USER = new User(Date.now(), this.firstName, this.lastName, this.email, this.phoneNumber, this.password, 0, false);

            await createAccount(global.USER);//Create account on blockchain

            this.setState({enrollingState: 2});
        }
    }

    render() {
        return (
            <>
                <NavigationBar/>

                {this.state.enrollingState === 2 ? (
                    <Redirect push to={{pathname: "/console/dashboard", state: {email: this.email}}}/>
                ): null}
                <Row style={{height: 800}}>
                    <Col style={{backgroundColor: '#ebc934'}}>
                        <h1 className="h1-small" style={{width: '100%', textAlign: 'center', marginTop: 50}}>Welcome to LUC.</h1>
                    </Col>

                    <Col xs={8} style={{backgroundColor: '#efefef', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{width: 500}}>
                            <h1 className="h1-small">Enroll</h1>

                            <div style={{marginTop: 30}}>
                                <h3 className="h3-small">First and Last Name</h3>
                                <InputGroup className="mb-3">
                                    <FormControl onChange={(firstName)=>this.onNameChange(firstName.target.value, this.lastName)}/>
                                    <FormControl onChange={(lastName)=>this.onNameChange(this.firstName, lastName.target.value)}/>
                                </InputGroup>
                            </div>
                            {!this.state.validName ? (
                                <p className="p-small" style={{color: '#ff4136'}}>Invalid Name</p>
                            ): null}

                            <div style={{marginTop: 30}}>
                                <h3 className="h3-small">Phone Number</h3>
                                <InputGroup className="mb-3">
                                    <FormControl type="number" onChange={(phone)=>this.onPhoneChange(phone.target.value)}/>
                                </InputGroup>
                                {!this.state.validPhoneNumber ? (
                                    <p className="p-small" style={{color: '#ff4136'}}>Invalid Phone Number</p>
                                ): null}
                            </div>

                            <div style={{marginTop: 30}}>
                                <h3 className="h3-small">Email</h3>
                                <InputGroup className="mb-3">
                                    <FormControl type="email" onChange={(email)=>this.onEmailChange(email.target.value)}/>
                                </InputGroup>
                                {!this.state.validEmail ? (
                                    <p className="p-small" style={{color: '#ff4136'}}>Invalid Email</p>
                                ): null}
                            </div>

                            <div style={{marginTop: 30}}>
                                <h3 className="h3-small">Password</h3>
                                <InputGroup className="mb-3">
                                    <FormControl type="password" placeholder="6+ characters" onChange={(pass)=>this.onPasswordChange(pass.target.value)}/>
                                </InputGroup>
                                {!this.state.validPassword ? (
                                    <p className="p-small" style={{color: '#ff4136'}}>Invalid Password</p>
                                ): null}
                            </div>

                            {this.state.enrollingState !== 1 ? (
                            <Button style={{width: 200, marginTop: 30}} variant="primary" disabled={!this.getValidity()}
                            onClick={()=>this.onSubmit()}>Enroll</Button>
                            ): (
                                <Spinner style={{marginTop: 30}} animation="border" variant="primary" />
                            )}
                        </div>
                    </Col>
                </Row>

            </>
        );
    }

}
