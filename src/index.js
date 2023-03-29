import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store = {store}>
             <App />
          </Provider>
      </BrowserRouter>

  </React.StrictMode>
);



