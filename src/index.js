import React from 'react';
import ReactDOM from 'react-dom';

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Note: 直接引入，不用 { thunk }, 否则报错，找不到

// import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './redux/redux';

// Chrome 调试工具
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : (() => {});
const composer = compose(applyMiddleware(thunk), reduxDevTools || null);
// const composer =

const store = createStore(
  reducer,
  composer,
);

// const ProviderApp = (
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );

const ProviderApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(ProviderApp, document.getElementById('root'));
registerServiceWorker();
