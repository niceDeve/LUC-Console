import React, {Component} from 'react';


export class DashboardContainer extends Component {

    constructor() {
        super();

        this.state = {
            shadow: "0px 0px 0px #9E9E9E"
        }
    }

    render() {
        return(
            <div style={{width: this.props.width, backgroundColor: '#ffffff', borderRadius: 30, padding: this.props.padding, margin: 10, boxShadow: this.state.shadow}}
                 children={this.props.children} onMouseEnter={()=>this.setState({shadow: "1px 3px 1px #9E9E9E"})}
            onMouseLeave={()=>this.setState({shadow: "0px 0px 0px #9E9E9E"})}
                 onClick={()=>this.props.onClick()}>
            </div>
        );
    }
}
