import React from 'react'
import LoginAdmin from '../Components/LoginAdmin';
import Daftar from '../Components/Daftar';
import { Route, Switch } from 'react-router-dom';
import Dash from '../Components/Dash';


const Routes = () => {
    return (
        <div>
        <Switch>
               
            {/* memanggil component Login admin */} 
        <Route  path="/" component={LoginAdmin} exact /> 
            {/* memanggil component Daftar */}
        <Route path="/Daftar" component={Daftar} exact/>
        <Route path="/Finance" component={Dash} exact />
        </Switch>
        </div>
    )
}

export default Routes;
