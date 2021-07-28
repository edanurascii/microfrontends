import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
// Create a Global Store
import store from "../redux/store"

// Global Store for global processes like Authorization etc...
const globalStore = { ...store }

ReactDOM.render(
    <Provider store={globalStore}>
        <App />
    </Provider>,
    document.querySelector('#root'));
