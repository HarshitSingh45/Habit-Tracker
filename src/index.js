import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { configureStore } from './store';
import {Provider} from 'react-redux';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
// defining store
const store = configureStore();
// console.log('store', store.getState( ));
root.render(
  // wrapping app into provider such the state will be accessible to all the components
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>
);

