import React from 'react';
import LoginAdmin from './Components/LoginAdmin';

import Daftar from './Components/Daftar';
import './index.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginAdmin />
      {/* <Daftar /> */}
    </div>
  );
}

export default App;
