import React, { Component } from 'react';

class Category extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div className="text-center" style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: 'purple', color: 'purple'}}>
                {this.props.name}
            </div>
        );
    }
}

export default Category;
