import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation';
import TrafficControl from './trafficControl';

class Frontend extends React.Component{
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
                <Navigation addTask={this.addTask} resetTasks={this.resetTasks}/>
                <TrafficControl addition={this.state.addition} reset={this.state.reset}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Frontend />,
    document.getElementById('root')
);
