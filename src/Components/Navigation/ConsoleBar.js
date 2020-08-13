import React, {Component} from "react";
import {Menu, MenuItem, ProSidebar, SidebarHeader, SubMenu} from "react-pro-sidebar";
import Container from "react-bootstrap/Container";
import {Link, Redirect} from "react-router-dom";
import Image from "react-bootstrap/Image";

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
        if (this.props.user.admin) {
            return (
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
                            <MenuItem className="p-large" href="/console/dashboard"
                                      icon={<Image src={require('../../assets/baseline_dashboard_black_48dp.png')}
                                                   style={{height: 35, width: 35}}/>}>Dashboard<Link
                                to={{pathname: "/console/dashboard", state: {email: this.props.user.email}}}/></MenuItem>
                            <SubMenu className="p-large" icon={<Image
                                src={require('../../assets/baseline_admin_panel_settings_black_48dp.png')}
                                style={{height: 35, width: 35}}/>} title='Admin'>
                                <MenuItem className="p-large" href={'/console/LUCtoCAD'}>Set LUC to CAD<Link
                                    to={{pathname: "/console/LUCtoCAD", state: {user: this.props.user}}}/></MenuItem>
                                <MenuItem className="p-large" href={'/console/WhtoLUC'}>Set Wh to LUC<Link
                                    to={{pathname: "/console/WhtoLUC", state: {user: this.props.user}}}/></MenuItem>
                                <MenuItem className="p-large" href={'/console/AwardLUC'}>Award LUC<Link
                                    to={{pathname: "/console/AwardLUC", state: {user: this.props.user}}}/></MenuItem>
                            </SubMenu>
                            <SubMenu className="p-large" title="Settings"
                                     icon={<Image src={require('../../assets/baseline_settings_black_48dp.png')}
                                                  style={{height: 35, width: 35}}/>}>
                                <MenuItem className="p-large" onClick={() => this.logout()}>Logout</MenuItem>
                            </SubMenu>
                        </Menu>
                    </ProSidebar>
                </div>
            );
        } else {
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
                            <MenuItem className="p-large" href="/console/dashboard"
                                      icon={<Image src={require('../../assets/baseline_dashboard_black_48dp.png')}
                                                   style={{height: 35, width: 35}}/>}>Dashboard<Link
                                to="/console/dashboard"/></MenuItem>
                            <SubMenu className="p-large" title="Settings"
                                     icon={<Image src={require('../../assets/baseline_settings_black_48dp.png')}
                                                  style={{height: 35, width: 35}}/>}>
                                <MenuItem className="p-large" onClick={() => this.logout()}>Logout</MenuItem>
                            </SubMenu>
                        </Menu>
                    </ProSidebar>
                </div>
            );
        }
    }
}
