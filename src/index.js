import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureStore from './hooks-store/products-store';

import ProductsProvider from './context/products-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
configureStore();

root.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>

);
