import React, {Component} from 'react';
import {ConsoleBar} from "../../Components/Navigation/ConsoleBar";
import {YourBalance} from "../../Components/Dashboard/YourBalance";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Transaction, User} from "../../Objects/objects";
import {YourConsumption} from "../../Components/Dashboard/YourConsumption";
import {Rates} from "../../Components/Dashboard/Rates";
import {SyncedAccounts} from "../../Components/Dashboard/SyncedAccounts";
import {MakeTransfer} from "../../Components/Dashboard/MakeTransfer";
import {Transactions} from "../../Components/Dashboard/Transactions";
import { Gradient } from 'react-gradient';
import {getAwards, getConsumption, getLUC, getLUCtoCAD, getTrades, getWhtoLUC, login} from "../../Operators/Operators";
import Spinner from "react-bootstrap/Spinner";
import {Trade} from "../../Components/Modals/Trade";

export class Dashboard extends Component {

    constructor() {
        super();

        this.state = {
            user: '',
            transfer: false,
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
            LUCtoCAD = LUCtoCADConversion[LUCtoCADConversion.length-1].conversion;
        }

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

        const transactions = await this.getTransactions(user);

        this.setState({
            user: user,
            LUCBalance: LUCBalance,
            LUCtoCAD: LUCtoCAD,
            WhtoLUC: WhtoLUC,
            averageConsumption: avConsumption,
            transactions: transactions
        });
    }

    async getTransactions(user) {
        const tradeData = JSON.parse(await getTrades(user));
        const awardData = JSON.parse(await getAwards(user));

        let transactions = [];
        for (let i = 0; i < tradeData.length; i++) {
            const transaction = new Transaction(tradeData[i].transactionId, tradeData[i].coin.amount, 'TRADE', tradeData[i].timestamp);
            transactions.push(transaction);
        }

        for (let i = 0; i < awardData.length; i++) {
            const transaction = new Transaction(awardData[i].transactionId, 0, 'AWARDED', awardData[i].timestamp);
            transactions.push(transaction);
        }

        if (transactions.length === 0) {
            transactions.push('NO_TRANSACTIONS');
        }

        return transactions;
    }

    render() {

        console.log(this.state.transfer);

        return(
            <div style={{height: 1200, backgroundColor: '#efefef'}}>
                <Row  style={{height: '100%'}}>
                    <Col md="auto"  style={{height: '100%'}}>
                        <ConsoleBar user={this.state.user}/>
                    </Col>

                    {this.state.transfer ? (
                        <Trade isVisible={this.state.transfer} onDismiss={() => this.setState({transfer: false})}
                        user={this.state.user} LUCBalance={this.state.LUCBalance}/>
                    ) : null}

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
                                <MakeTransfer onClick={()=>this.setState({transfer: true})}/>
                                <Transactions transactions={this.state.transactions}/>
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
