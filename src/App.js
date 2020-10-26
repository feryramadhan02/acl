import React from 'react';
// import LoginAdmin from './Components/LoginAdmin';
// import Daftar from './Components/Daftar';
// import { Route, Switch } from 'react-router-dom';
import './index.css';
import Dash from './Components/Dash';
import Footer from './Components/Footer'

import Nav from './Components/Nav'



function App() {

  return (
    <div className="App">
      <Nav/>
      <Dash></Dash>
      
      {/* <Switch> */}
          {/* memanggil component Login admin */}
        {/* <Route exact path="/" component={LoginAdmin} />  */}
          {/* memanggil component Daftar */}
        {/* <Route path="/Daftar" component={Daftar}/> */}
      {/* </Switch> */}
        
      <Footer></Footer>
    </div>
  );
}

export default App;
