import React, { Component } from 'react';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import AddTask from './addTask';
import TrafficControl from './trafficControl';
import ReactDOM from 'react-dom';

class Navigation extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            addition: 0,
            reset: 0
        }
        this.addTask = this.addTask.bind(this);
        this.resetTasks = this.resetTasks.bind(this);
    }

    addTask()
    {
        this.setState((prevState) => {
            this.setState({addition: !prevState.addition, reset: 0});
        });
    }

    resetTasks()
    {
        this.setState({reset: 1});
    }

    render(){
        return(
            <div>
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
                            <NavItem eventKey={2} onClick={this.resetTasks}><span style={{color: 'purple'}}>Reset</span></NavItem>
                            <NavItem eventKey={3} onClick={this.addTask}><span style={{color: 'purple'}}>Add Task</span></NavItem>
                        </Nav>
                </Navbar>
                <TrafficControl addition={this.state.addition} reset={this.state.reset}/>
            </div>
        );
    }
}

export default Navigation;
