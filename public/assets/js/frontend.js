import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation';

class Frontend extends React.Component{
    render(){
        return(
            <div>
                <Navigation />
            </div>
        );
    }
}

ReactDOM.render(
    <Frontend />,
    document.getElementById('root')
);
