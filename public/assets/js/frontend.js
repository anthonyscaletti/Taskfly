import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation';
import TrafficControl from './trafficControl';

class Frontend extends React.Component{
    render(){
        return(
            <div>
                <Navigation />
                <TrafficControl />
            </div>
        );
    }
}

ReactDOM.render(
    <Frontend />,
    document.getElementById('root')
);
