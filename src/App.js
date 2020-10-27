import React from 'react';
import Routes from '../src/router/Routes';
import Headers from '../src/components/Headers';
import { BrowserRouter } from 'react-router-dom';

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
