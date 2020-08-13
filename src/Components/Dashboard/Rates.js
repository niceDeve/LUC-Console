import React, {Component} from 'react';
import {DashboardContainer} from "../Containers/DashboardContainer";
import {formatMoney} from "../../Constants/Constants";


export class Rates extends Component {

    render() {
        return(
            <DashboardContainer width={400} padding={30} onClick={()=>{}}>
                <p className="p-small" style={{marginLeft: 10}}>Value of 1 LUC</p>
                <h1 className="h1-small" style={{marginTop: 10, marginLeft: 20}}>${formatMoney(this.props.LUCtoCAN)} CAD</h1>
                <p className="p-small" style={{marginLeft: 10}}>1 Watt hour to LUC</p>
                <h1 className="h1-small" style={{marginTop: 10, marginLeft: 20}}>{formatMoney(this.props.WhtoLUC)} LUC</h1>
            </DashboardContainer>
        );
    }
}
