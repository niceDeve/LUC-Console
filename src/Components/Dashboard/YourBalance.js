import React, {Component} from 'react';
import {DashboardContainer} from "../Containers/DashboardContainer";
import {formatMoney} from "../../Constants/Constants";


export class YourBalance extends Component {

    render() {
        return(
         <DashboardContainer width={400} padding={30}>
             <p className="p-small" style={{marginLeft: 10}}>Your LUC balance</p>
             <h1 className="h1-small" style={{marginTop: 10, marginLeft: 20}}>{formatMoney(this.props.LUCBalance)} LUC</h1>
             <p className="p-small" style={{marginTop: 20, marginLeft: 10}}>Value in CAD</p>
             <h3 className="h3-large" style={{marginTop: 10, marginBottom: 10, marginLeft: 20}}>${formatMoney(this.props.LUCBalance * this.props.LUCtoCAD)} CAD</h3>
         </DashboardContainer>

        );
    }
}
