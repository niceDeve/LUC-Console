import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FormControl, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import {Redirect} from "react-router-dom";
import {User} from "../../Objects/objects";
import {NavigationBar} from "../../Components/Navigation/NavigationBar";

/*
Component for handling logins.
 */
export class Login extends Component {

    constructor() {
        super();

        //Holders
        this.email = '';
        this.password = '';

        //Validity states.
        this.state = {
            loginState: 0,
        }
    }

    //Checks input validity
    getValidity() {
        return (this.email.length !== 0 && this.password.length !== 0);
    }

    onEmailChange(email) {
        this.email = email;
        this.forceUpdate();
    }

    onPasswordChange(pass) {
        this.password = pass;
        this.forceUpdate();
    }

    onLogin() {
        this.setState({loginState: 1});

        //@TODO check login credentials with server.

        this.setState({loginState: 2});
    }

    render() {
        return (
            <>
                <NavigationBar/>

                {this.state.loginState === 2 ? (
                    <Redirect push to="/console/dashboard" />
                ):null}

                <Row style={{height: 600}}>
                    <Col style={{backgroundColor: '#ebc934'}}>
                        <h1 className="h1-small" style={{width: '100%', textAlign: 'center', marginTop: 50}}>Welcome back.</h1>
                    </Col>

                    <Col xs={8} style={{backgroundColor: '#efefef', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{width: 500}}>
                            <h1 className="h1-small">Login</h1>

                            <div style={{marginTop: 30}}>
                                <h3 className="h3-small">Email</h3>
                                <InputGroup className="mb-3">
                                    <FormControl type="email" onChange={(email)=>this.onEmailChange(email.target.value)}/>
                                </InputGroup>
                            </div>

                            <div style={{marginTop: 30}}>
                                <h3 className="h3-small">Password</h3>
                                <InputGroup className="mb-3">
                                    <FormControl type="password" placeholder="6+ characters" onChange={(pass)=>this.onPasswordChange(pass.target.value)}/>
                                </InputGroup>
                            </div>

                            {this.state.loginState !== 1 ? (
                                <Button style={{width: 200, marginTop: 30}} variant="primary" disabled={!this.getValidity()}
                                        onClick={()=>this.onLogin()}>Login</Button>
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
