import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ConsoleBar} from "../../../Components/Navigation/ConsoleBar";
import React, {Component} from "react";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import {createWhtoLUC, getWhtoLUC} from "../../../Operators/Operators";
import Spinner from "react-bootstrap/Spinner";
import {formatMoney} from "../../../Constants/Constants";
import Button from "react-bootstrap/Button";

/*
Props: user
 */
export class WhtoLUC extends Component {

    constructor() {
        super();

        this.value = -1;
        this.text = false;

        this.state = {
            WhtoLUC: '',
            stage: 0,
        }
    }

    async componentDidMount() {
        const WhtoLUCConversion = JSON.parse(await getWhtoLUC());
        let WhtoLUC = 0;
        if (WhtoLUCConversion.length > 0) {
            WhtoLUC = WhtoLUCConversion[WhtoLUCConversion.length-1].conversion;
        }

        this.setState({WhtoLUC: WhtoLUC});
    }

    async onUpdate() {
        if (this.value >= 0) {
            this.setState({stage: 1});

            if (this.text) {
                //@TODO send text.
            }

            await createWhtoLUC(this.value);

            this.setState({stage: 2});
        }
    }

    onTextUpdate() {
        this.text = !this.text;
    }

    render() {
        return (
            <div style={{height: 1200, width: '100%', backgroundColor: '#efefef'}}>
                <Row style={{height: '100%'}}>
                    <Col md="auto" style={{height: '100%'}}>
                        <ConsoleBar user={this.props.location.state.user}/>
                    </Col>

                    {this.state.WhtoLUC !== '' ? (
                        <Col style={{width: '100%'}}>
                            <h1 className="h1-small" style={{marginTop: 50, marginLeft: 30}}>Set Wh per LUC</h1>
                            <Form style={{marginTop: 30, marginLeft: 30}}>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        1 Wh to LUC
                                    </Form.Label>
                                    <Col sm={10}>
                                        <InputGroup style={{width: '50%'}}>
                                            <Form.Control type="number" placeholder={this.state.WhtoLUC}
                                                          onChange={(value) => (this.value = value.target.value)}/>
                                            <InputGroup.Append>
                                                <InputGroup.Text>LUC</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
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
                                        <Form.Check label="Send text notification to account holders" value={this.text}
                                                    onClick={() => this.onTextUpdate()}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Col sm={{span: 10, offset: 2}}>
                                        {this.state.stage === 0 ? (
                                            <Button onClick={() => this.onUpdate()}>Update</Button>
                                        ) : this.state.stage === 1 ? (
                                            <Spinner style={{marginTop: 30}} animation="border" variant="primary"/>
                                        ) : (
                                            <p className="p-small">Updated Conversion!</p>
                                        )}
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Col>
                    ) : (
                        <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Spinner style={{marginTop: 30}} animation="border" variant="primary"/>
                        </Col>
                    )}
                </Row>
            </div>
        );
    }
}
