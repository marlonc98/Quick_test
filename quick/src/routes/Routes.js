import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Categories from '../components/Categories';
import Home from '../components/Home';
import Login from '../components/Login';
import Maintenance from '../components/Maintenance';

const roles = {
    coordinador: "coordinador",
    administrador: "administrador",
}

export const routes = {
    home: {
        path: "/dashboard",
        path_with_params: "/dashboard",
        authorized_user: [roles.coordinador, roles.administrador],
        redirect: "maintenance",
        component: <Home />,
    },
    categories: {
        path: "/dashboard/categories",
        path_with_params: "/dashboard/categories",
        authorized_user: [roles.coordinador, roles.administrador],
        redirect: "maintenance",
        component: <Categories />,
    },
    maintenance: {
        path: "/maintenance",
        path_with_params: "/maintenance",
        authorized_user: [roles.coordinador],
        redirect: "login",
        component: <Maintenance />,
    },
    login: {
        path: "/",
        path_with_params: "/",
        authorized_user: [null, undefined],
        redirect: "home",
        component: <Login />,
    },
};

function Routes({ typeUser }) {
    return <Switch>
        {Object.entries(routes).filter(([key, route]) => route.authorized_user.includes(typeUser)).map(([key, route], index) => <Route exact path={route.path_with_params} key={index}>
            {route.component}
        </Route>)}
        {Object.entries(routes).filter(([key, route]) => !route.authorized_user.includes(typeUser) && route.redirect != undefined).map(([key, route], index) => <Route exact path={route.path_with_params} key={index}>
            <Redirect to={routes[route.redirect].path_with_params}/>
        </Route>)}
        <Route>
            <div>Error 404</div>
        </Route>
    </Switch>
}

export default Routes;
