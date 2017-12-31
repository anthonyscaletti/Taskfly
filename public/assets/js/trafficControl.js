import React, { Component } from 'react';
import CategoryBox from './categoryBox';

class TrafficControl extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            tasksStage1: [{msg: "task 1", color: "yellow", status: 1},
                          {msg: "task 2", color: "yellow", status: 0},
                          {msg: "task 3", color: "yellow", status: 0},
                          {msg: "task 4", color: "yellow", status: 0},
                          {msg: "task 5", color: "yellow", status: 0},
                          {msg: "task 6", color: "yellow", status: 0},
                          {msg: "task 7", color: "yellow", status: 0},
                          {msg: "task 8", color: "yellow", status: 0}
                         ],
            tasksStage2: [{msg: "task 1", color: "yellow", status: 0},
                          {msg: "task 2", color: "yellow", status: 0},
                          {msg: "task 3", color: "yellow", status: 0},
                          {msg: "task 4", color: "yellow", status: 0},
                          {msg: "task 5", color: "yellow", status: 0},
                          {msg: "task 6", color: "yellow", status: 0},
                          {msg: "task 7", color: "yellow", status: 0},
                          {msg: "task 8", color: "yellow", status: 0}
                         ],
            tasksStage3: [{msg: "task 1", color: "yellow", status: 0},
                          {msg: "task 2", color: "yellow", status: 0},
                          {msg: "task 3", color: "yellow", status: 0},
                          {msg: "task 4", color: "yellow", status: 0},
                          {msg: "task 5", color: "yellow", status: 0},
                          {msg: "task 6", color: "yellow", status: 0},
                          {msg: "task 7", color: "yellow", status: 0},
                          {msg: "task 8", color: "yellow", status: 0}
                         ]

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index, category){
        var newState1 = this.state.tasksStage1;
        var newState2 = this.state.tasksStage2;
        var newState3 = this.state.tasksStage3;

        if(category == "Tasks")
        {
            newState1[index]["status"] = 0;
            newState2[index]["status"] = 1;

            this.setState({
                tasksStage1: newState1,
                tasksStage2: newState2
            });
        }
        else if (category == "Working")
        {
            newState2[index]["status"] = 0;
            newState3[index]["status"] = 1;

            this.setState({
                tasksStage2: newState2,
                tasksStage3: newState3
            });
        }
        else
        {
            newState3[index]["status"] = 0;

            this.setState({
                tasksStage3: newState3
            });
        }
    }

    render(){
        return(
            <div class="row">
                <div class="col-md-4">
                    <CategoryBox categoryName="Tasks" handler={this.handleClick} tasks={this.state.tasksStage1} />
                </div>
                <div class="col-md-4">
                    <CategoryBox categoryName="Working" handler={this.handleClick} tasks={this.state.tasksStage2} />
                </div>
                <div class="col-md-4">
                    <CategoryBox categoryName="Completed" handler={this.handleClick} tasks={this.state.tasksStage3} />
                </div>
            </div>
        );
    }
}

export default TrafficControl;
