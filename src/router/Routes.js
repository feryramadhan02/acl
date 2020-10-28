import React from 'react'
import LoginAdmin from '../components/LoginAdmin';
import Daftar from '../components/Daftar';
import { Route, Switch } from 'react-router-dom';
import Dash from '../components/Dash';
import AdminPage from "../page/AdminPage";
import HomePage from "../page/HomePage";

const Routes = () => {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/admin" component={AdminPage} exact />
          {/* memanggil component Login admin */}
          <Route path="/login" component={LoginAdmin} exact />
          {/* memanggil component Daftar */}
          <Route path="/Daftar" component={Daftar} exact />
          <Route path="/Finance" component={Dash} exact />
          <Route component={() => "404 Not Found"} />
        </Switch>
      </div>
    );
}

export default Routes;
