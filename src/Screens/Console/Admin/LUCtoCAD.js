import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ConsoleBar} from "../../../Components/Navigation/ConsoleBar";
import React, {Component} from "react";

export class LUCtoCAD extends Component {
    render() {
        return (
            <div style={{height: 1200, backgroundColor: '#efefef'}}>
                <Row style={{height: '100%'}}>
                    <Col md="auto" style={{height: '100%'}}>
                        <ConsoleBar/>
                    </Col>

                    <Col>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}
