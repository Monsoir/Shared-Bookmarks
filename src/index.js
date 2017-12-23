import React from 'react';
import ReactDOM from 'react-dom';

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './redux/redux';

// Chrome 调试工具
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : (() => {});
const composer = compose(reduxDevTools || null);
// const composer =

const store = createStore(
  reducer,
  composer,
);

const ProviderApp = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// const ProviderApp = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

ReactDOM.render(ProviderApp, document.getElementById('root'));
registerServiceWorker();
