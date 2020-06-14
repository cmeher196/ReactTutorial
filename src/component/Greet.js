//using functional component
import React from 'react';

const Greet = (props) =>{ // destructuring in functional component====>> const Greet =({name})=>{}
 //   console.log(props);
    const {name} = props;
    return(
    <h1>Hello, Welcome {name}!! </h1> // <h1>Hello, Welcome {name}!! </h1>
    )}

export default Greet;