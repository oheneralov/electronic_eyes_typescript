import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { Router, Route, BrowserRouter} from 'react-router-dom'

//https://github.com/ReactTraining/react-router/blob/25776d4dc89b8fb2f575884749766355992116b5/packages/react-router/docs/guides/migrating.md#the-router
ReactDOM.render(  
<App/>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
