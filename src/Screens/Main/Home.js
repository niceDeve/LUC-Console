import React, {Component} from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {NavigationBar} from "../../Components/Navigation/NavigationBar";
import {getAllLUC, getLUCtoCAD} from "../../Operators/Operators";
import {formatMoney} from "../../Constants/Constants";

export class Home extends Component {

    constructor() {
        super();

        this.state = {
            totalLUCValue: -1,
        }
    }

    async componentDidMount() {
        const allLUC = JSON.parse(await getAllLUC());
        const LUCtoCAD = JSON.parse(await getLUCtoCAD());

        let conversion = 0;
        if (LUCtoCAD.length > 0) {
            conversion = LUCtoCAD[LUCtoCAD.length - 1].conversion;
        }

        let totalLUC = 0;
        for (let i = 0; i < allLUC.length; i++) {
            totalLUC += allLUC[i].quantity;
        }

        this.setState({totalLUCValue: (totalLUC * conversion)});
    }

    render() {
        return (
            <>
                <NavigationBar/>
                <Jumbotron style={{backgroundColor: '#ebc934', borderTopLeftRadius:0,borderTopRightRadius:0, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                    <Container style={{marginWidth: 50}}>
                        <h1 className="h1-large">London Utility Coin</h1>
                        <h3 className="h3-small" style={{marginTop: 20, marginBottom: 20}}>
                            Cryptocurrency to help your wallet, the environment, and your community.
                        </h3>
                        <p>
                            <Button href={'/enroll'} variant="outline-secondary">Enroll</Button>
                        </p>
                    </Container>
                </Jumbotron>

                <Jumbotron style={{backgroundColor: '#ffffff', alignItems: 'center'}}>
                    <Container style={{marginWidth: 50, width: '100%', alignItems: 'center'}}>
                        <h1 className="h1-medium" style={{width: '100%', textAlign: 'center'}}>How it works</h1>

                        <ListGroup horizontal={'md'}>
                        <Card style={{width: 300, padding: 20, backgroundColor: 'rgba(0,0,0,0)', borderWidth: 0, alignItems: 'center'}}>
                            <Card.Img style={{width: 100, height: 100, marginBottom: 10}} variant="top" src={require('../../assets/LUC_card1.png')}/>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}} className="p-large">Reduce</Card.Title>
                                <Card.Text style={{textAlign: 'center'}} className="p-small">
                                    Consume below average on utilities (hydro, gas, water) compared to similar households.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{width: 300, padding: 20, backgroundColor: 'rgba(0,0,0,0)', borderWidth: 0, alignItems: 'center'}}>
                            <Card.Img style={{width: 100, height: 100, marginBottom: 10}} variant="top" src={require('../../assets/LUC_card2.png')}/>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}} className="p-large">Earn</Card.Title>
                                <Card.Text style={{textAlign: 'center'}} className="p-small">
                                    Earn LUC based on consumption. The more you saved, the more you're rewarded.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                            <Card style={{width: 300, padding: 20, backgroundColor: 'rgba(0,0,0,0)', borderWidth: 0, alignItems: 'center'}}>
                                <Card.Img style={{width: 100, height: 100, marginBottom: 10}} variant="top" src={require('../../assets/LUC_card3.png')}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}} className="p-large">Redeem</Card.Title>
                                    <Card.Text style={{textAlign: 'center'}} className="p-small">
                                        Redeem your LUC for savings on your utility bills (hydro, gas, water)
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{width: 300, padding: 20, backgroundColor: 'rgba(0,0,0,0)', borderWidth: 0, alignItems: 'center'}}>
                                <Card.Img style={{width: 100, height: 100, marginBottom: 10}} variant="top" src={require('../../assets/LUC_card4.png')}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}} className="p-large">Donate</Card.Title>
                                    <Card.Text style={{textAlign: 'center'}} className="p-small">
                                        Donate LUC to help community members or family in need.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </ListGroup>
                    </Container>
                </Jumbotron>

                {this.state.totalLUCValue !== -1 ? (
                <Jumbotron style={{backgroundColor: '#efefef', borderRadius: 20}}>
                    <Container style={{marginWidth: 50}}>
                        <h1 className="h1-large" style={{width: '100%', textAlign: 'center'}}>${formatMoney(this.state.totalLUCValue)} CAD</h1>
                        <h3 className="h3-small" style={{width: '100%', textAlign: 'center', marginTop: 20, marginBottom: 20}}>
                            Worth of LUC are currently in member accounts ready to redeem or trade.
                        </h3>
                    </Container>
                </Jumbotron>
                ): null}
            </>
        );
    }

}
