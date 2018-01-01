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
            <div>
                <Navbar style={{backgroundColor: '#CD9932'}}>
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
                            <NavItem eventKey={2} onClick={this.props.resetTasks}><span style={{color: 'purple'}}>Reset</span></NavItem>
                            <NavItem eventKey={3} onClick={this.props.addTask}><span style={{color: 'purple'}}>Add Task</span></NavItem>
                        </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
