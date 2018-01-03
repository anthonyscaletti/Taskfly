import React, { Component } from 'react';

class Category extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div className="text-center" style={{backgroundColor: '#E0E0E0', borderBottomStyle: 'solid', borderColor: '#320B86', color: '#000000'}}>
                <span className="romanCategory">{this.props.name}</span>
            </div>
        );
    }
}

export default Category;
