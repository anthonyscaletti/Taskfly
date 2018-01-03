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
                    <div style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: '#320B86', marginBottom: '5%', padding: '2%'}}>
                        <Form>
                            <FormGroup controlId="taskMessage">
                                <ControlLabel className="romanText">Add Task</ControlLabel>
                                {' '}
                                <FormControl type="text" className="romanText" placeholder="Write your task here" onChange={this.handleMsgInp}/>
                            </FormGroup>
                            {' '}
                            <FormGroup controlId="taskColor">
                                <ControlLabel className="romanText">Select Color</ControlLabel>
                                {' '}
                                <ButtonToolbar>
                                    <ToggleButtonGroup type="radio" name="options" defaultValue="yellow">
                                        <ToggleButton className="romanText" value="yellow" onChange={this.handleColorInp}>Yellow</ToggleButton>
                                        <ToggleButton className="romanText" value="orange" onChange={this.handleColorInp}>Orange</ToggleButton>
                                        <ToggleButton className="romanText" value="#98FB98"  onChange={this.handleColorInp}>Green</ToggleButton>
                                        <ToggleButton className="romanText" value="#ADD8E6"   onChange={this.handleColorInp}>Blue</ToggleButton>
                                        <ToggleButton className="romanText" value="#DA70D6"    onChange={this.handleColorInp}>Purple</ToggleButton>
                                        <ToggleButton className="romanText" value="pink"   onChange={this.handleColorInp}>Pink</ToggleButton>
                                    </ToggleButtonGroup>
                                </ButtonToolbar>
                            </FormGroup>
                            {' '}
                            <Button block="true" onClick={() => this.props.getTaskData(this.state.msg, this.state.color)}>
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
