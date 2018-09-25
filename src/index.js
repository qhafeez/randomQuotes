import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route} from "react-router-dom";
import QuoteContainer from "./QuoteContainer/QuoteContainer";

ReactDOM.render(<HashRouter><Route exact path="/:id?" component={App} /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
