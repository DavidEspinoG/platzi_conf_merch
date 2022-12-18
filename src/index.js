import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

console.log(process.env.GOOGLE_API_KEY)
