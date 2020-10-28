import React from 'react';
import Routes from '../src/router/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
