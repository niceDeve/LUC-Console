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
import {getConsumption, getLUC, getLUCtoCAD, getWhtoLUC, login} from "../../Operators/Operators";
import Spinner from "react-bootstrap/Spinner";

export class Dashboard extends Component {

    constructor() {
        super();

        this.state = {
            user: '',
            LUCBalance: 0,
            yourConsumption: 0,
            averageConsumption: 0,
            LUCtoCAD: 0,
            WhtoLUC: 0,
            transactions: [],
        }
    }

    async componentDidMount() {

        const email = this.props.location.state.email;
        console.log('Account email ' + email);
        const user = JSON.parse(await login(email))[0];

        const coins = JSON.parse(await getLUC(user));
        let LUCBalance = 0;
        if (coins.length > 0) {
            for (let i = 0; i < coins.length; i++) {
                LUCBalance += coins[i].quantity;
            }
        }

        const LUCtoCADConversion = JSON.parse(await getLUCtoCAD());
        let LUCtoCAD = 0;
        if (LUCtoCADConversion.length > 0) {
            LUCtoCAD = LUCtoCADConversion[0].conversion;
        }

        const WhtoLUCConversion = JSON.parse(await getWhtoLUC());
        let WhtoLUC = 0;
        if (WhtoLUCConversion.length > 0) {
            WhtoLUC = WhtoLUCConversion[0].conversion;
        }

        const consumptionData = JSON.parse(await getConsumption());
        let totalConsumption = 0;
        for (let i = 0; i < consumptionData.length; i++) {
            totalConsumption += consumptionData[i].consumption;
        }

        const avConsumption = totalConsumption / consumptionData.length;

        this.setState({user: user, LUCBalance: LUCBalance, LUCtoCAD: LUCtoCAD, WhtoLUC: WhtoLUC, averageConsumption: avConsumption});
    }

    getTransactions() {

    }

    render() {


        return(
            <div style={{height: 1200, backgroundColor: '#efefef'}}>
                <Row  style={{height: '100%'}}>
                    <Col md="auto"  style={{height: '100%'}}>
                        <ConsoleBar/>
                    </Col>

                    {this.state.user !== '' ? (
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
                                    <h1 className="h1-small" style={{color: '#ffffff'}}>Hello, {this.state.user.firstName}!</h1>
                                </Gradient>
                            </div>
                            <Row>
                                <YourBalance LUCtoCAD={this.state.LUCtoCAD} LUCBalance={this.state.LUCBalance}/>
                                <YourConsumption yourConsumption={this.state.user.consumption} averageConsumption={this.state.averageConsumption} WhtoLUC={this.state.WhtoLUC}/>
                            </Row>
                            <Row>
                                <Rates LUCtoCAN={this.state.LUCtoCAD} WhtoLUC={this.state.WhtoLUC}/>
                                <SyncedAccounts/>
                            </Row>
                            <Row>
                                <MakeTransfer/>
                                <Transactions/>
                            </Row>
                        </div>
                    </Col>
                    ): (
                        <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Spinner style={{marginTop: 30}} animation="border" variant="primary"/>
                        </Col>
                    )}
                </Row>
            </div>
        );
    }
}
