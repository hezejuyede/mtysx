import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/routes';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('App'));
registerServiceWorker();

