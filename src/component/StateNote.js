import React, { Component } from 'react'

class StateNote extends Component {
    constructor(props){
        super()
        this.state={
            count:0
        }
    }

    handleCount=()=>{
        // this.setState({  //using setstate as obj
        //     count:this.state.count+1
        // })

       this.setState({
           count:this.state.count+1
       },() =>console.log(this.state.count)
       )

        // this.setState((prevState)=>({  // to set state as paramaterized function
        //     count:prevState.count+1
        // }))
        
        
    }

    render() {
        return (
            <div>
                <div>
                    Counter - {this.state.count}
                    <div>
                    <button onClick={()=>this.handleCount()}>Counter</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StateNote
