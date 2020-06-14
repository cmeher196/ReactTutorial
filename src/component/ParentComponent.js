import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Welcome to my Page'
        }
    }

    handleGreet=()=>{
        alert(`Hello ${this.state.message}`);
    }
    

    render() {
        return (
            <div>
                <ChildComponent greetHandler={()=>this.handleGreet()}/>
            </div>
        )
    }
}
