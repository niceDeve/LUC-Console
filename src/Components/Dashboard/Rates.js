import React, {Component} from 'react';
import {DashboardContainer} from "../Containers/DashboardContainer";
import {formatMoney} from "../../Constants/Constants";


export class Rates extends Component {

    render() {
        return(
            <DashboardContainer width={400} padding={30}>
                <p className="p-small" style={{marginLeft: 10}}>Value of 1 LUC</p>
                <h1 className="h1-small" style={{marginTop: 10, marginLeft: 20}}>${formatMoney(this.props.LUCtoCAN)} CAN</h1>
                <p className="p-small" style={{marginLeft: 10}}>1 Watt to LUC</p>
                <h1 className="h1-small" style={{marginTop: 10, marginLeft: 20}}>{formatMoney(this.props.WhtoLUC)} LUC</h1>
            </DashboardContainer>
        );
    }
}
