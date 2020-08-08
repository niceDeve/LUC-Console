import React, {Component} from 'react';


export class DashboardContainer extends Component {

    render() {
        return(
            <div style={{width: this.props.width, backgroundColor: '#ffffff', borderRadius: 30, padding: 30, margin: 10}} children={this.props.children}>
            </div>
        );
    }
}
