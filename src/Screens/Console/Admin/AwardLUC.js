import React, {Component} from 'react';
import {ConsoleBar} from "../../../Components/Navigation/ConsoleBar";
import Col from "react-bootstrap/Col";
import {Form, InputGroup} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import {awardCoin, getConsumption, getWhtoLUC, login} from "../../../Operators/Operators";
import {formatMoney} from "../../../Constants/Constants";

/*
Props: user
 */
export class AwardLUC extends Component {

    constructor() {
        super();

        this.text = false;

        this.state = {
            user: '-',
            WhtoLUC: 0,
            avConsumption: 0,
            stage: 0
        }
    }

    async componentDidMount() {
        const WhtoLUCConversion = JSON.parse(await getWhtoLUC());
        let WhtoLUC = 0;
        if (WhtoLUCConversion.length > 0) {
            WhtoLUC = WhtoLUCConversion[WhtoLUCConversion.length-1].conversion;
        }

        const consumptionData = JSON.parse(await getConsumption());
        let totalConsumption = 0;
        for (let i = 0; i < consumptionData.length; i++) {
            totalConsumption += consumptionData[i].consumption;
        }

        const avConsumption = totalConsumption / consumptionData.length;


        this.setState({WhtoLUC: WhtoLUC, avConsumption: avConsumption});
    }

    getCurrentEarnings() {
        const diff = this.state.avConsumption - this.state.user.consumption;

        if (diff > 0) {
            return diff * this.state.WhtoLUC;
        }

        return 0;
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

    onTextUpdate() {
        this.text = !this.text;
    }

    async awardCoin() {
        if (this.state.user !== '') {
            this.setState({stage: 1});

            await awardCoin(this.state.user);

            this.setState({stage: 2});
        }
    }


    render() {
        return (
            <div style={{height: 800}}>
                <Row style={{height: '100%'}}>
                    <Col md="auto" style={{height: '100%'}}>
                        <ConsoleBar user={this.props.location.state.user}/>
                    </Col>

                    <Col style={{width: '100%'}}>
                        <h1 className="h1-small" style={{marginTop: 50, marginLeft: 30}}>Award LUC</h1>
                        <p className="p-small" style={{marginLeft: 30}}>Note: LUC is awarded
                            automatically to all account holders at the end of the billing period.</p>
                        <Form style={{marginTop: 30, marginLeft: 30}}>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    User Email
                                </Form.Label>
                                <Col sm={10}>
                                    <InputGroup style={{width: '50%'}}>
                                        <Form.Control type="text" placeholder={'abc@example.com'}
                                                      onChange={(email) => this.onEmailChange(email.target.value)}/>
                                    </InputGroup>
                                </Col>
                                {this.state.user !== '' && this.state.user !== '-' ? (
                                <Col style={{marginTop: 10}}>
                                    <p className="p-small">The account will be awarded: <b>{formatMoney(this.getCurrentEarnings())} LUC</b>, based on period consumption.</p>
                                </Col>
                                ): this.state.user !== '-' ? (
                                    <Col style={{marginTop: 10}}>
                                        <p className="p-small">Sorry, we couldn't find an LUC account with that email.</p>
                                    </Col>
                                ): null}
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Admin Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" style={{width: '50%'}}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalCheck">
                                <Col sm={{span: 10, offset: 2}}>
                                    <Form.Check label="Send text notification to awarded account holder"
                                                value={this.text}
                                                onClick={() => this.onTextUpdate()}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col sm={{span: 10, offset: 2}}>
                                    {this.state.stage === 0 ? (
                                        <Button onClick={() => this.awardCoin()}>Award</Button>
                                    ) : this.state.stage === 1 ? (
                                        <Spinner style={{marginTop: 30}} animation="border" variant="primary"/>
                                    ) : (
                                        <p className="p-small">Awarded LUC to user {this.state.user.email}</p>
                                    )}
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}
