import React, {Component} from 'react';
import {DashboardContainer} from "../Containers/DashboardContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";
import {formatMoney, miniAmountFormat} from "../../Constants/Constants";


export class YourConsumption extends Component {

    constructor() {
        super();

        this.state = {
            daysLeft: {color: '#000000'},
            daysRemaining: 0,

        }
    }

    componentDidMount() {
        this.getDaysRemaining();
    }

    getDaysRemaining() {
        const today = new Date(Date.now());

        const maxDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        const lastDay = new Date(today.getFullYear(), today.getMonth(), maxDays);

        const difference = lastDay.getDate() - today.getDate();

        if (difference < 5) {
            this.setState({daysRemaining: difference, daysLeft: {color: '#ff4136'}});
        } else {
            this.setState({daysRemaining: difference, daysLeft: {color: '#000000'}});
        }
    }

    getDateRange() {
        const today = new Date(Date.now());

        const month = today.getMonth();
        const year = today.getFullYear();

        const maxDays = new Date(year, month, 0).getDate();
        return this.formatDate(new Date(year, month, 1)) + ' - ' + this.formatDate(new Date(year, month, maxDays));
    }

    formatDate(date) {

        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }

    getCurrentEarnings() {
        const diff = this.props.averageConsumption - this.props.yourConsumption;

        if (diff > 0) {
            return diff * this.props.WATTtoLUC;
        }

        return 0;
    }

    render() {
        return(
            <DashboardContainer  width={500} padding={30}>
                <div>
                    <Row>
                        <p className="p-small" style={{marginLeft: 10}}>Period {this.getDateRange()}, </p>
                        <p className="p-small" style={{marginLeft: 10, color: this.state.daysLeft.color}}><b>{this.state.daysRemaining} days left</b></p>
                    </Row>
                </div>
                <div>
                    <Row>
                    <Col>
                        <p className="p-small" style={{marginTop: 20, marginLeft: 10}}>Your Consumption</p>
                    <h1 className="h1-small" style={{marginTop: 10, marginLeft: 20, color: this.props.yourConsumption < this.props.averageConsumption ? '#34B00B' : '#ff4136'}}>{miniAmountFormat(this.props.yourConsumption, 2)}Wh</h1>
                    <p className="p-small" style={{marginTop: 20, marginLeft: 10}}>Average Consumption</p>
                    <h3 className="h1-small" style={{marginTop: 10, marginBottom: 10, marginLeft: 20}}>{miniAmountFormat(this.props.averageConsumption, 2)}Wh</h3>
                    </Col>

                    <Col>
                        <p className="p-small" style={{marginTop: 20, marginLeft: 10}}>Current Period Earnings</p>
                        <h1 className="h1-small" style={{marginTop: 10, marginLeft: 20}}>{formatMoney(this.getCurrentEarnings())} LUC</h1>
                    </Col>
                    </Row>
                </div>
            </DashboardContainer>

        );
    }
}
