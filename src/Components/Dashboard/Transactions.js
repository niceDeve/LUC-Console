import React, {Component} from 'react';
import {DashboardContainer} from "../Containers/DashboardContainer";
import ListGroup from "react-bootstrap/ListGroup";
import {TransactionItem} from "../Containers/TransactionItem";
import {Transaction} from "../../Objects/objects";
import { Scrollbars } from 'react-custom-scrollbars';


export class Transactions extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <DashboardContainer width={625} padding={30} onClick={()=>{}}>
                <p className="p-small" style={{marginLeft: 10}}>Transactions</p>
                <Scrollbars style={{height: 300}}>
                <ListGroup>
                    <ListGroup.Item as="li">
                        {this.props.transactions.map(transaction =>
                            <TransactionItem transaction={transaction}/>
                        )}
                    </ListGroup.Item>
                </ListGroup>
                </Scrollbars>
            </DashboardContainer>
        );
    }
}
