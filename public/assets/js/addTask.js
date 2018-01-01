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
                    <div style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: '#CD9932', marginBottom: '5%', padding: '2%'}}>
                        <Form>
                            <FormGroup controlId="taskMessage">
                                <ControlLabel style={{color: 'purple'}}>Add Task</ControlLabel>
                                {' '}
                                <FormControl type="text" placeholder="Write your task here" onChange={this.handleMsgInp}/>
                            </FormGroup>
                            {' '}
                            <FormGroup controlId="taskColor">
                                <ControlLabel style={{color: 'purple'}}>Select Color</ControlLabel>
                                {' '}
                                <ButtonToolbar>
                                    <ToggleButtonGroup type="radio" name="options" defaultValue="yellow">
                                        <ToggleButton value="yellow" onChange={this.handleColorInp} style={{color: 'purple'}}>Yellow</ToggleButton>
                                        <ToggleButton value="orange" onChange={this.handleColorInp} style={{color: 'purple'}}>Orange</ToggleButton>
                                        <ToggleButton value="green"  onChange={this.handleColorInp} style={{color: 'purple'}}>Green</ToggleButton>
                                        <ToggleButton value="blue"   onChange={this.handleColorInp} style={{color: 'purple'}}>blue</ToggleButton>
                                        <ToggleButton value="red"    onChange={this.handleColorInp} style={{color: 'purple'}}>red</ToggleButton>
                                        <ToggleButton value="pink"   onChange={this.handleColorInp} style={{color: 'purple'}}>pink</ToggleButton>
                                    </ToggleButtonGroup>
                                </ButtonToolbar>
                            </FormGroup>
                            {' '}
                            <Button block="true" onClick={this.props.getTaskData} style={{color: 'purple'}}>
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
