// Entry point for React rendering
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root DOM node
root.render(
    <React.StrictMode>
        <App/> {/* Renders App.js*/}
    </React.StrictMode>
);