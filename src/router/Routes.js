import React, { useState } from 'react'
import LoginAdmin from '../components/LoginAdmin';
import Daftar from '../components/Daftar';
import { Route, Switch } from 'react-router-dom';
import Dash from '../components/Dash';
import AdminPage from "../page/AdminPage";
import HomePage from "../page/HomePage";
import UserPage from '../page/UserPage';
import CustomerService from '../page/CustomerService';
import HeaderHome from '../components/HeaderHome';
import FinanceHome from '../page/FinanceHome';

const Routes = () => {
    const [data, setData] = useState([])

    const onChangeData = input => {
        setData(data.concat(input))
    }


    return (
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/Finance" component={Dash} exact />
                <Route path="/login" component={LoginAdmin} exact />
                <Route exact path="/Daftar">
                    <Daftar data={data} onChange={(input) => onChangeData(input)} />
                </Route>
                <Route exact path="/admin">
                    <HeaderHome data={data} />
                    <AdminPage data={data} />
                </Route>
                <Route exact path="/user">
                    <HeaderHome data={data} />
                    <UserPage data={data} />
                </Route>
                <Route exact path="/cs" >
                    <HeaderHome data={data} />
                    <CustomerService data={data} />
                </Route>
                <Route exact path="/financehome" >
                    <HeaderHome data={data} />
                    <FinanceHome data={data} />
                </Route>
                <Route component={() => "404 Not Found"} />
            </Switch>
        </div>
    )
}

export default Routes;
