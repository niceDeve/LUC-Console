import React, {Component} from "react";
import {Menu, MenuItem, ProSidebar, SidebarHeader, SubMenu} from "react-pro-sidebar";
import Container from "react-bootstrap/Container";
import {Link, Redirect} from "react-router-dom";
import Image from "react-bootstrap/Image";
import {Dashboard} from "../../Screens/Console/Dashboard";
import {Admin} from "../../Screens/Console/Admin";

export class ConsoleBar extends Component {

    constructor() {
        super();

        this.state = {
            logginOut: false,
        }
    }

    logout() {
       global.USER = '';

       this.setState({loggingOut: true});
    }

    render() {
        return(
            <div style={{flex: 0.2, height: '100%'}}>
                {this.state.loggingOut ? (
                    <Redirect push to="/home"/>
                ) : null}
                <ProSidebar style={{height: '100%', width: 100, backgroundColor: '#ebc934'}}>
                    <SidebarHeader>
                        <Container style={{width: '100%', position: 'flex', alignItems: 'center'}}>
                            <p className="h3-large">LUC Console</p>
                        </Container>
                    </SidebarHeader>
                    <Menu iconShape="square" style={{backgroundColor: '#ebc934'}}>
                        <MenuItem className="p-large" href="/console/dashboard" icon={<Image src={require('../../assets/baseline_dashboard_black_48dp.png')} style={{height: 35, width: 35}}/>}>Dashboard<Link to="/console/dashboard"/></MenuItem>
                        <MenuItem className="p-large" href="/console/admin" icon={<Image src={require('../../assets/baseline_admin_panel_settings_black_48dp.png')} style={{height: 35, width: 35}}/>}>Admin<Link to="/console/admin"/></MenuItem>
                        <SubMenu className="p-large" title="Settings" icon={<Image src={require('../../assets/baseline_settings_black_48dp.png')} style={{height: 35, width: 35}}/>}>
                            <MenuItem className="p-large" onClick={() => this.logout()}>Logout</MenuItem>
                        </SubMenu>
                    </Menu>
                </ProSidebar>
            </div>
        );
    }
}
