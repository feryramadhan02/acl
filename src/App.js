import React from 'react';
import LoginAdmin from './Components/LoginAdmin';

import Daftar from './Components/Daftar';
import './index.css';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Switch>
        {/* memanggil component Login admin */}
        <Route exact path="/" component={LoginAdmin} /> 
        {/* memanggil component Daftar */}
        <Route path="/Daftar" component={Daftar}/>
      </Switch>
        
      
    </div>
  );
}

export default App;
