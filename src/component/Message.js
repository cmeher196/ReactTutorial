import React, { Component } from 'react';


class Message extends Component {
    constructor(){
        super();
        this.state={
            message:'Welcome to React Class'
        }
    }

    handleSubscribe=()=>{
        console.log('button pressed!!');
        this.setState({
            message:'Thanks for Subscribing!!!'
        })
        
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.handleSubscribe()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;