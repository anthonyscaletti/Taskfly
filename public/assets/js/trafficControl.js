import React, { Component } from 'react';
import CategoryBox from './categoryBox';

class TrafficControl extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            tasks: [{msg: "task 1", color: "yellow", status: 1},
                    {msg: "task 2", color: "yellow", status: 0},
                    {msg: "task 3", color: "yellow", status: 0},
                    {msg: "task 4", color: "yellow", status: 0},
                    {msg: "task 5", color: "yellow", status: 0},
                    {msg: "task 6", color: "yellow", status: 0},
                    {msg: "task 7", color: "yellow", status: 0},
                    {msg: "task 8", color: "yellow", status: 0},
                   ]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({tasks: [ {msg: "task 1", color: "yellow", status: 0},
                                {msg: "task 2", color: "yellow", status: 0},
                                {msg: "task 3", color: "yellow", status: 0},
                                {msg: "task 4", color: "yellow", status: 0},
                                {msg: "task 5", color: "yellow", status: 0},
                                {msg: "task 6", color: "yellow", status: 0},
                                {msg: "task 7", color: "yellow", status: 0},
                                {msg: "task 8", color: "yellow", status: 0},
                            ]});
    }

    render(){
        return(
            <div class="row">
                <div class="col-md-4">
                    <CategoryBox categoryName="Tasks" handler={this.handleClick} tasks={this.state.tasks} />
                </div>
                <div class="col-md-4">
                    <CategoryBox categoryName="Working" handler={this.handleClick} tasks={this.state.tasks} />
                </div>
                <div class="col-md-4">
                    <CategoryBox categoryName="Completed" handler={this.handleClick} tasks={this.state.tasks} />
                </div>
            </div>
        );
    }
}

export default TrafficControl;
