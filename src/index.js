import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/reset.scss'
import './style/global.scss'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

