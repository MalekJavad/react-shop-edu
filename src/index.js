import React from "react";
import { createRoot } from 'react-dom/client';

import App from './App.js';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <App />
)

