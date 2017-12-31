import React, { Component } from 'react';
import Category from './category';

class CategoryBox extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div className="text-center" style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: 'yellow', height: '80vh'}}>
                <Category name={this.props.categoryName} />
            </div>
        );
    }
}

export default CategoryBox;
