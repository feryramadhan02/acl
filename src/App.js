import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../src/router/Routes';
import Headers from '../src/components/Headers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Headers />
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
