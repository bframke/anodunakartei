import './styles.css';
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './container/home/home';
import { PageNotFound } from "./container/errorPages/errorPages";
import Login from "./container/login/login";
import KeepRecords from "./container/keepRecords/keepRecords";
import Register from "./container/register/register";
import AuthProvider from './components/authController/authController';
import {ProtectedRoute} from './components/protectedRoute/protectedRoute';
import {UnAuthedRoute} from './components/unAuthedRoute/unAuthedRoute';
import Dashboard from './container/dashboard/dashboard';
import Profile from './container/profile/profile';
import Account from './container/account/account';

render(
    <AuthProvider>
        <Fragment>
            <CssBaseline/>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/home'} component={Home}/>
                    <UnAuthedRoute path={'/login'} component={Login}/>
                    <UnAuthedRoute path={'/register'} component={Register}/>
                    <UnAuthedRoute path={'/records'} component={KeepRecords}/>
                    <UnAuthedRoute path={'/dashboard'} component={Dashboard}/>
                    <UnAuthedRoute path={'/profile'} component={Profile}/>
                    <UnAuthedRoute path={'/account'} component={Account}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    </AuthProvider>,
    document.getElementById('app')
);