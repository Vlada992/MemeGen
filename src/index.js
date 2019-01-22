import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


var fontName =  document.getElementsByTagName('link')[1].href



ReactDOM.render(<App fn = {fontName}/>, document.getElementById('root'));
serviceWorker.unregister();


