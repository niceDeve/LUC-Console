import React, {Component} from 'react';

import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter} from 'react-pro-sidebar';
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";


export class Console extends Component {

    render() {
        return(
            <div style={{height: 800}}>
            <ProSidebar style={{height: '100%', width: 100, backgroundColor: '#ebc934'}}>
                <SidebarHeader>
                    <Container style={{width: '100%', position: 'flex', alignItems: 'center'}}>
                        <p className="h3-large">LUC Console</p>
                    </Container>
                </SidebarHeader>
                <Menu iconShape="square" style={{backgroundColor: '#ebc934'}}>
                    <MenuItem className="p-large" >Dashboard</MenuItem>
                    <MenuItem className="p-large" >Settings</MenuItem>
                    <MenuItem className="p-large" >Logout <Link to="/home" /></MenuItem>
                </Menu>
            </ProSidebar>
            </div>
        );
    }
}
