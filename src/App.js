import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from "./components/Body";


function App() {    //functional component, as we don't need constructor and states here. So, stateless component.
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    );
}

export default App;
