import React, { Component } from 'react';

class Category extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div className="text-center" style={{backgroundColor: '#C7C7C7', borderBottomStyle: 'groove', borderWidth: '15px', borderColor: '#855E42', color: '#000000'}}>
                <span className="romanCategory">{this.props.name}</span>
            </div>
        );
    }
}

export default Category;
