import React, { Component } from 'react';

class Note extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            message: props.message,
            color: props.color,
            status: props.status
        }
    }
    render(){
        var style = {backgroundColor: this.state.color, color: 'black', width: '100%', height: '10vh', padding: '6%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'};

        if(this.state.status == 1)
        {
            return(
                <div style={style}>
                    {this.state.message}
                </div>
            );
        }
        else
            return("");

    }
}

export default Note;
