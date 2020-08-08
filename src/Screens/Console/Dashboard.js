import React, {Component} from 'react';
import {ConsoleBar} from "../../Components/Navigation/ConsoleBar";
import {YourBalance} from "../../Components/Dashboard/YourBalance";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {User} from "../../Objects/objects";
import {YourConsumption} from "../../Components/Dashboard/YourConsumption";

export class Dashboard extends Component {

    constructor() {
        super();

        global.USER = new User('4443432dfd', 'Eric', 'Klassen', 'eklass3', 5196417095, 'dafdgf');

        this.state = {
            LUCBalance: 1567.01,
            yourConsumption: 1670,
            averageConsumption: 2110,
            LUCtoCAD: 100,
        }
    }

    render() {
        return(
            <div style={{height: 650, backgroundColor: '#efefef'}}>
                <Row  style={{height: '100%'}}>
                    <Col md="auto"  style={{height: '100%'}}>
                        <ConsoleBar/>
                    </Col>

                    <Col>
                        <div style={{width: '100%', marginTop: 20}}>
                            <h3 className="h3-large" style={{width: '100%', marginTop: 10, marginBottom: 10, textAlign: 'center'}}>Welcome {global.USER.firstName}</h3>
                            <Row>
                                <YourBalance LUCtoCAD={this.state.LUCtoCAD} LUCBalance={this.state.LUCBalance}/>
                                <YourConsumption yourConsumption={this.state.yourConsumption} averageConsumption={this.state.averageConsumption} LUCtoCAD={this.state.LUCtoCAD}/>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
