import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div); //thiss is that code

  ReactDOM.unmountComponentAtNode(div);
});



//This is file where we import ReactDOM and with its method ReactDOM.render() we will render main component on the screen