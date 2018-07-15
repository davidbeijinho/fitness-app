import React from 'react';
import ReactDOM from 'react-dom';
// import 'bulma/css/bulma.css'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root-fitness-app')
);
