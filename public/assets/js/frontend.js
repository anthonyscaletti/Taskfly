import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation';
import CategoryBox from './categoryBox';

class Frontend extends Component{
    render(){
        return(
            <div>
                <Navigation />
                <div class="row">
                    <div class="col-md-4">
                        <CategoryBox />
                    </div>
                    <div class="col-md-4">
                        <CategoryBox />
                    </div>
                    <div class="col-md-4">
                        <CategoryBox />
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
