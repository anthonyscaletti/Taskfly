import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation';
import CategoryBox from './categoryBox';

class Frontend extends React.Component{
    render(){
        return(
            <div>
                <Navigation />
                <div class="row">
                    <div class="col-md-4">
                        <CategoryBox categoryName="Tasks" />
                    </div>
                    <div class="col-md-4">
                        <CategoryBox categoryName="Working" />
                    </div>
                    <div class="col-md-4">
                        <CategoryBox categoryName="Completed" />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Frontend />,
    document.getElementById('root')
);
