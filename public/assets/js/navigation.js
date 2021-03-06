import React, { Component } from 'react';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import AddTask from './addTask';
import ReactDOM from 'react-dom';

class Navigation extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <Navbar style={{backgroundColor: '#320B86'}} fluid="true">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img id="logoNav" src="./assets/brandLogo.png" alt="logo"/>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <span className="romanHeader" style={{color: '#FFFFFF'}}>Taskfly</span>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem onClick={this.props.resetTasks}><span className="romanNavItems" style={{color: '#FFFFFF'}}>Reset</span></NavItem>
                        <NavItem onClick={this.props.addTask}><span className="romanNavItems" style={{color: '#FFFFFF'}}>Add Task</span></NavItem>
                    </Nav>
            </Navbar>
        );
    }
}

export default Navigation;
