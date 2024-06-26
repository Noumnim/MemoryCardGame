import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <RoutesComponent/>
    </BrowserRouter>
  );
};

export default App;
