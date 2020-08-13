import React, {Component} from 'react';
import Image from "react-bootstrap/Image";
import {formatMoney} from "../../Constants/Constants";

/*
Item in the transaction list.
Props: transaction
 */
export class TransactionItem extends Component {

    formatTimestamp() {
        const date = new Date(this.props.transaction.timestamp);

        return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    }

    render() {
        if (this.props.transaction !== 'NO_TRANSACTIONS') {
            return (
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        {this.props.transaction.amount >= 0 ? (
                            <Image style={{height: 30, width: 30, marginRight: 10}}
                                   src={require('../../assets/arrow_circle_up-black-48dp.svg')}/>
                        ) : (
                            <Image style={{height: 30, width: 30, marginRight: 10}}
                                src={require('../../assets/arrow_circle_down-black-48dp.svg')}/>
                        )}

                        {this.props.transaction.amount >= 0 ? (
                            <p className="p-large"><b>Credit</b></p>
                        ) : (
                            <p className="p-large"><b>Debit</b></p>
                        )}
                    </div>

                    <div style={{flex: 1, marginLeft: 20, alignContent: 'center'}}>
                        <p className="p-small" style={{fontSize: 15}}><b>Transaction:</b><br></br>{this.props.transaction.transactionId}</p>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        {this.props.transaction.type === 'AWARDED' ? (
                            <p className="p-small">
                                <b>Awarded LUC for period consumption. See statement.</b>
                            </p>
                        ): (
                        <p className="p-large"
                           style={{color: this.props.transaction.amount >= 0 ? '#34B00B' : '#ff4136'}}>
                            <b>{formatMoney(this.props.transaction.amount)} LUC</b>
                        </p>
                        )}
                    </div>

                    <div>
                        <p className="p-small">{this.formatTimestamp()}</p>
                    </div>
                    <div style={{width: '100%', height: 2, marginBottom: 10, backgroundColor: '#efefef'}}/>
                </div>
            );
        } else {
            return(
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <p className="p-small"><b>No transactions yet</b></p>
            </div>
            );
        }
    }
}
