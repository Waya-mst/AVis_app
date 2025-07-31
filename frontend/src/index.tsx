import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log('🌱 mounting React into #root');  // これが出るか
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
