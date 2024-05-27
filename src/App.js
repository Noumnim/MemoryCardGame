import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/index';
import Login from '../src/pages/Login/index';
import RoutesComponent from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <RoutesComponent/>
    </BrowserRouter>
  );
};

export default App;
