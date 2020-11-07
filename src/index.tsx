import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './View/Layout/App';
import reportWebVitals from './reportWebVitals';

console.log(process.env.REACT_APP_STOCK_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Performance measuring
reportWebVitals();
