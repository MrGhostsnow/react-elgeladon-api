import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Home from "./views/Home";
import "assets/styles/main.css";

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
