import React from 'react';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome';
import Message from './component/Message';
import StateNote from './component/StateNote';
import ParentComponent from './component/ParentComponent';
import PersonList from './component/PersonList';
import FormComponent from './component/FormComponent';

function App() {
  return (
    <div className="App">
      <FormComponent />
      {/* <PersonList /> */}
      {/* <ParentComponent/> */}
      {/* <h1>
        Hello I am learning!!!
      </h1>
      <hr /> */}
      {/* <Greet name='Chandra'/>
      <hr/>
      <Welcome name='Rohit'/> */}
      {/* <hr/>
      <Message/>
      <StateNote/> */}

    </div>
  );
}

export default App;
