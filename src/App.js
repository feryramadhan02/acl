import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <h2>Home Page</h2>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
