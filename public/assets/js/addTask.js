import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, ToggleButton, ToggleButtonGroup, ButtonToolbar } from 'react-bootstrap'

class AddTask extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            msg: "",
            color: "yellow"
        }
        this.handleMsgInp = this.handleMsgInp.bind(this);
        this.handleColorInp = this.handleColorInp.bind(this);
    }

    handleMsgInp(e){
        this.setState({ msg: e.target.value });
    }

    handleColorInp(e)
    {
        this.setState({ color: e.target.value });
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: 'green', marginBottom: '5%', padding: '2%'}}>
                        <Form>
                            <FormGroup controlId="taskMessage">
                                <ControlLabel>Add Task</ControlLabel>
                                {' '}
                                <FormControl type="text" placeholder="Write your task here" onChange={this.handleMsgInp}/>
                            </FormGroup>
                            {' '}
                            <FormGroup controlId="taskColor">
                                <ControlLabel>Select Color</ControlLabel>
                                {' '}
                                <ButtonToolbar>
                                    <ToggleButtonGroup type="radio" name="options" defaultValue="yellow">
                                        <ToggleButton value="yellow" onChange={this.handleColorInp}>Yellow</ToggleButton>
                                        <ToggleButton value="orange" onChange={this.handleColorInp}>Orange</ToggleButton>
                                        <ToggleButton value="green"  onChange={this.handleColorInp}>Green</ToggleButton>
                                        <ToggleButton value="blue"   onChange={this.handleColorInp}>blue</ToggleButton>
                                        <ToggleButton value="red"    onChange={this.handleColorInp}>red</ToggleButton>
                                        <ToggleButton value="pink"   onChange={this.handleColorInp}>pink</ToggleButton>
                                    </ToggleButtonGroup>
                                </ButtonToolbar>
                            </FormGroup>
                            {' '}
                            <Button block="true" onClick={this.props.getTaskData}>
                                Add
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;
