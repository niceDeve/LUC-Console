import React, {Component} from 'react';
import {ConsoleBar} from "../../Components/Navigation/ConsoleBar";
import {YourBalance} from "../../Components/Dashboard/YourBalance";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {User} from "../../Objects/objects";
import {YourConsumption} from "../../Components/Dashboard/YourConsumption";
import {Rates} from "../../Components/Dashboard/Rates";
import {SyncedAccounts} from "../../Components/Dashboard/SyncedAccounts";
import {MakeTransfer} from "../../Components/Dashboard/MakeTransfer";
import {Transactions} from "../../Components/Dashboard/Transactions";
import { Gradient } from 'react-gradient';

export class Dashboard extends Component {

    constructor() {
        super();

        global.USER = new User('4443432dfd', 'Eric', 'Klassen', 'eklass3', 5196417095, 'dafdgf');

        this.state = {
            LUCBalance: 1567.01,
            yourConsumption: 1670,
            averageConsumption: 2110,
            LUCtoCAD: 0.01,
            WATTtoLUC: 0.25,
        }
    }

    render() {
        return(
            <div style={{height: 1200, backgroundColor: '#efefef'}}>
                <Row  style={{height: '100%'}}>
                    <Col md="auto"  style={{height: '100%'}}>
                        <ConsoleBar/>
                    </Col>

                    <Col>
                        <div style={{width: '100%', marginTop: 20}}>
                            <div style={{width: '90%', height: 100, borderRadius: 20}}>
                                <Gradient
                                    gradients={[['#ebc934', '#ea7d10'],
                                        ['#ea7d10', '#ebc934']]}
                                    property="background"
                                    duration={3000}
                                    angle="45deg"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 20,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <h1 className="h1-small" style={{color: '#ffffff'}}>Hello, {global.USER.firstName}!</h1>
                                </Gradient>
                            </div>
                            <Row>
                                <YourBalance LUCtoCAD={this.state.LUCtoCAD} LUCBalance={this.state.LUCBalance}/>
                                <YourConsumption yourConsumption={this.state.yourConsumption} averageConsumption={this.state.averageConsumption} WATTtoLUC={this.state.WATTtoLUC}/>
                            </Row>
                            <Row>
                                <Rates LUCtoCAN={this.state.LUCtoCAD} WATTtoLUC={this.state.WATTtoLUC}/>
                                <SyncedAccounts/>
                            </Row>
                            <Row>
                                <MakeTransfer/>
                                <Transactions/>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
