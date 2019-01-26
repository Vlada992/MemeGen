import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from "./components/Body";


function App(props) {    //functional component, as we don't need constructor and states here. So, stateless component.
console.log('gornji props glavni:', props)
    return (
      <div>
        <Header/>
        <Body fonT = {props.fn} />
      </div>
    );
}
//App is functional component

export default App;
