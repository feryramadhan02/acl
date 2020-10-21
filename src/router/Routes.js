import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../page/HomePage";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route component={() => "404 Not Found"} />
            </Switch>
        </div>
    )
}

export default Routes;
