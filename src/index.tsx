import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.css';
import App from './pages/App';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
