import React from 'react';
import ReactDOM from 'react-dom/client';
// main component
import App from './App';
// bootsrap css classes
import 'bootstrap/dist/css/bootstrap.min.css'; 
// custom styles
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
