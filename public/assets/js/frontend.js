import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Frontend extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to Taskfly</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Frontend />,
    document.getElementById('root')
);
