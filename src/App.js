import React from 'react';
import './App.css';
import MemeHeader from './component/MemeHeader';
import MemeBody from "./container/MemeBody";


function App(props) {    //functional component, as we don't need constructor and states here. So, stateless component.
    return (
      <div>
        <MemeHeader/>
        <MemeBody fonT = {props.fn} />
      </div>
    );
}

export default App;
