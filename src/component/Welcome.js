import React,{Component} from 'react';


class Welcome extends Component {
   
    render() {
        const {name} = this.props //deconstructoring props in class components
        // const{state1, state} = this.state  // deconstructing state

        return(
            <div>
                {/* <h1>Hello,{this.props.name} I am Welcome Component!!</h1> */}
                <h1>Hello,{name} I am Welcome Component!!</h1>  {/* deconstructing for class component*/ }
            </div>
        )}
}
 
export default Welcome;