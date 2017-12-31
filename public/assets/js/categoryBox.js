import React, { Component } from 'react';
import Category from './category';
import Note from './note';

class CategoryBox extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            tasks: []
        }
    }

    render(){
        return(
            <div style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: 'yellow', height: '80vh'}}>
                <Category name={this.props.categoryName} />
                <div className="row" style={{padding: "5%"}}>
                    <div className="col-md-3">
                        {this.state.tasks[0]}
                    </div>
                    <div className="col-md-3">
                        {this.state.tasks[1]}
                    </div>
                    <div className="col-md-3">
                        {this.state.tasks[2]}
                    </div>
                    <div className="col-md-3">
                        {this.state.tasks[3]}
                    </div>
                </div>
                <div className="row" style={{padding: "5%"}}>
                    <div className="col-md-3">
                        {this.state.tasks[4]}
                    </div>
                    <div className="col-md-3">
                        {this.state.tasks[5]}
                    </div>
                    <div className="col-md-3">
                        {this.state.tasks[6]}
                    </div>
                    <div className="col-md-3">
                        {this.state.tasks[7]}
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryBox;
