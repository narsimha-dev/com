import React, { Component } from 'react';

export default function HOC(HocComponent, data){ 
    // console.log(HocComponent.React)
    return class extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }
    
    render(){
        console.log("HOC for Data:", data,",");
        return (
            <HocComponent data={this.state.data} {...this.props} />
        );
    }
} 
}