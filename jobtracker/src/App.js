import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
)
}

export default App;
