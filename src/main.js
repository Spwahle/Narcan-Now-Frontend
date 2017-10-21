import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app';
import createStore from './lib/create-store.js';

let AppContainer = () => {
  return (
    <Provider store={createStore()}>
      <App />
    </Provider>
  );
};

ReactDom.render(<AppContainer />, document.getElementById('root'));
