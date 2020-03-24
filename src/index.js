import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './assets/fonts/Roboto/Roboto-Bold.ttf'
import './assets/fonts/Roboto/Roboto-Medium.ttf'
import './assets/fonts/Roboto/Roboto-Regular.ttf'
import './assets/fonts/Roboto/Roboto-Light.ttf'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
