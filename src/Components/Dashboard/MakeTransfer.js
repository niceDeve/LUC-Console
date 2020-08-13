import React, {Component} from 'react';
import {DashboardContainer} from "../Containers/DashboardContainer";
import {Image} from "react-bootstrap";


export class MakeTransfer extends Component {

    render() {
        return(
            <DashboardContainer width={300} padding={30} onClick={()=>this.props.onClick()}>
                <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 50, height: 50}} src={require('../../assets/baseline_payments_black_48dp.png')}/>
                    <h3 className='h3-small'>Make a transfer</h3>
                </div>
            </DashboardContainer>
        );
    }
}
