import React, { Component } from 'react';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';

class Navigation extends Component{
    render(){
        return(
            <Navbar style={{backgroundColor: 'skyblue'}}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img id="logoNav" src="./assets/logo.png" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <span style={{color: 'purple'}}>Taskfly</span>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#"><span style={{color: 'purple'}}>New</span></NavItem>
                        <NavItem eventKey={2} href="#"><span style={{color: 'purple'}}>Reset</span></NavItem>
                        <NavItem eventKey={3} href="#" disabled><span style={{color: 'purple'}}>Add Task</span></NavItem>
                    </Nav>
            </Navbar>
        );
    }
}

export default Navigation;
