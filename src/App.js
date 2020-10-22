import React from 'react';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Daftar from './Components/Daftar';
import './index.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      {/* <Daftar /> */}
    </div>
  );
}

export default App;
