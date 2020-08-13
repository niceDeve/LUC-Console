import React, {Component, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Form, InputGroup} from "react-bootstrap";
import {formatMoney} from "../../Constants/Constants";
import Spinner from "react-bootstrap/Spinner";
import {getLUC, login} from "../../Operators/Operators";

export class Trade extends Component {

    constructor() {
        super();

        this.amount = 0;

        this.state = {
            stage: 0,
            user: '-',
            validAmount: true,
        }
    }

    componentDidMount() {
        this.setState({validAmount: this.amount < this.props.LUCBalance});
    }

    async onEmailChange(email) {
        let userData = [];
        if (String(email).includes('@')) {
            userData = JSON.parse(await login(email));
        }

        if (userData.length > 0) {
            this.setState({user: userData[0]});
        } else {
            this.setState({user: ''});
        }
    }

    testTransferAmount(amount) {
        if (amount < this.props.LUCBalance) {
            this.amount = amount;
            this.setState({validAmount: true});
        } else {
            this.setState({validAmount: false});
        }
    }

    render() {
        return (
            <Modal show={this.props.isVisible}>
                <Modal.Header>
                    <Modal.Title>Make Transfer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row style={{height: '100%'}}>
                        <Col style={{width: '100%'}}>
                            <Form>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>
                                        User Email
                                    </Form.Label>
                                    <Col sm={8}>
                                        <InputGroup>
                                            <Form.Control type="text" placeholder={'abc@example.com'}
                                                          onChange={(email) => this.onEmailChange(email.target.value)}/>
                                        </InputGroup>
                                    </Col>
                                    {this.state.user !== '' && this.state.user !== '-' ? (
                                        <Col style={{marginTop: 10}}>
                                            <p className="p-small">Found account! Account holder: {this.state.user.firstName} {this.state.user.lastName}</p>
                                        </Col>
                                    ): this.state.user !== '-' ? (
                                        <Col style={{marginTop: 10}}>
                                            <p className="p-small">Sorry, we couldn't find an LUC account with that email.</p>
                                        </Col>
                                    ): null}
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>
                                        Transfer amount
                                    </Form.Label>
                                    <Col sm={8}>
                                        <InputGroup>
                                            <Form.Control type="number" placeholder={formatMoney(0)}
                                                          onChange={(amount) => this.testTransferAmount(amount.target.value)}/>
                                            <InputGroup.Append>
                                                <InputGroup.Text>LUC</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                    {!this.state.validAmount ? (
                                        <Col style={{marginTop: 10}}>
                                            <p className="p-small" style={{color: '#ff4136'}}>Insufficient LUC funds.</p>
                                        </Col>
                                    ): null}
                                </Form.Group>

                                <Form.Group as={Row} controlId="formHorizontalCheck">
                                    <Col sm={{span: 10, offset: 2}}>
                                        <Form.Check label="Send text notification to new account holder"
                                                    value={false}
                                                    onClick={() => {}}/>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>this.props.onDismiss()}>
                        Close
                    </Button>
                    <Form.Group as={Row}>
                            {this.state.stage === 0 ? (
                                <Button onClick={() => {}} disabled={!this.state.validAmount}>Transfer</Button>
                            ) : this.state.stage === 1 ? (
                                <Spinner style={{marginTop: 30}} animation="border" variant="primary"/>
                            ) : (
                                <p className="p-small">Transfer Success!</p>
                            )}
                    </Form.Group>
                </Modal.Footer>
            </Modal>
        );
    }
}
