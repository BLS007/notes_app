// Importing react functionality.
import React from 'react';
// Importing the react-dom functionality to complement react. 
import ReactDOM from 'react-dom';
// Importing the App.js component.
import App from './App';

// Implementing the contents of the App.js component.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
