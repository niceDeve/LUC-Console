import React, {Component} from 'react';
import {DashboardContainer} from "../Containers/DashboardContainer";
import {formatMoney} from "../../Constants/Constants";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import {Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export class SyncedAccounts extends Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return(
            <DashboardContainer padding={30}>
                <p className="p-small" style={{marginLeft: 10}}>Synced Accounts</p>
                <ListGroup horizontal={'md'}>
                    <DashboardContainer padding={10}>
                        <Card style={{backgroundColor: 'rgba(0,0,0,0)', borderWidth: 0, alignItems: 'center'}}>
                            <Card.Img style={{width: 82.3, height: 150, marginBottom: 10}} variant="top"
                                      src={require('../../assets/LH.jpg')}/>
                        </Card>
                    </DashboardContainer>

                    <DashboardContainer padding={10}>
                        <Card style={{backgroundColor: 'rgba(0,0,0,0)', borderWidth: 0, alignItems: 'center'}}>
                            <Card.Img style={{width: 150, height: 150, marginBottom: 10}} variant="top"
                                      src={require('../../assets/UG.jpg')}/>
                        </Card>
                    </DashboardContainer>

                    <DashboardContainer padding={10}>
                        <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Image style={{width: 50, height: 50}} src={require('../../assets/baseline_add_box_black_48dp.png')}/>
                            <h3 className='h3-small'>Add account</h3>
                        </div>
                    </DashboardContainer>
                </ListGroup>
            </DashboardContainer>
        );
    }
}
