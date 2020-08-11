import React, {Component} from 'react';
import {DashboardContainer} from "../Containers/DashboardContainer";
import ListGroup from "react-bootstrap/ListGroup";
import {TransactionItem} from "../Containers/TransactionItem";
import {Transaction} from "../../Objects/objects";
import { Scrollbars } from 'react-custom-scrollbars';


export class Transactions extends Component {

    constructor() {
        super();

        this.state = {
            transactions: [
                new Transaction('a49tjf94w', -5670, Date.now()),
                new Transaction('rfigj349r', 56780, Date.now()),
                new Transaction('g54t4fads', -65070, Date.now()),
                new Transaction('a49tjf94w', -5670, Date.now()),
                new Transaction('rfigj349r', 56780, Date.now()),
                new Transaction('g54t4fads', -65070, Date.now()),
                new Transaction('a49tjf94w', -5670, Date.now()),
                new Transaction('rfigj349r', 56780, Date.now()),
                new Transaction('g54t4fads', -65070, Date.now()),
            ]
        }
    }

    render() {
        return(
            <DashboardContainer width={625} padding={30}>
                <p className="p-small" style={{marginLeft: 10}}>Transactions</p>
                <Scrollbars style={{height: 300}}>
                <ListGroup>
                    <ListGroup.Item as="li">
                        {this.state.transactions.map(transaction =>
                            <TransactionItem transaction={transaction}/>
                        )}
                    </ListGroup.Item>
                </ListGroup>
                </Scrollbars>
            </DashboardContainer>
        );
    }
}
