import React, { Component } from 'react';

class Category extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div className="text-center" style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: 'purple', color: 'purple'}}>
                <span className="romanCategory">{this.props.name}</span>
            </div>
        );
    }
}

export default Category;
