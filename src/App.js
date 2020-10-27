import React from 'react';
// import LoginAdmin from './Components/LoginAdmin';
// import Daftar from './Components/Daftar';
// import { Route, Switch } from 'react-router-dom';
// import './index.css';
// import Dash from './Components/Dash';

import Routes from '../src/router/Routes.js';
import { BrowserRouter } from 'react-router-dom'; 

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
