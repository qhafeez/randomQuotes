import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import QuoteContainer from "./QuoteContainer/QuoteContainer";

ReactDOM.render(<BrowserRouter><Route exact path="/:id?" component={App} /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
