import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Headers from '../src/components/Headers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Headers />
        <Switch>
          <h2>Home Page</h2>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
