import React, {Component} from 'react';
import Image from "react-bootstrap/Image";
import {formatMoney} from "../../Constants/Constants";

/*
Item in the transaction list.
Props: transaction
 */
export class TransactionItem extends Component {

    render() {
        return(
          <div style={{display: 'flex', flexDirection: 'row'}}>
              {this.props.transaction.amount > 0 ? (
                      <Image src={require('../../assets/arrow_circle_up-black-48dp.svg')}/>
              ) : (
                  <Image src={require('../../assets/arrow_circle_down-black-48dp.svg')}/>
              )}

              <div style={{flex: 1, marginLeft: 20}}>
                  {this.props.transaction.amount > 0 ? (
                      <p className="p-large"><b>Credit</b></p>
                  ) : (
                      <p className="p-large"><b>Debit</b></p>
                  )}
                  <p className="p-small">Transaction: {this.props.transaction.transactionId}</p>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <p className="p-large" style={{color: this.props.transaction.amount > 0 ? '#34B00B' : '#ff4136'}}>
                      <b>{formatMoney(this.props.transaction.amount)} LUC</b>
                  </p>
              </div>
          </div>
        );
    }
}
