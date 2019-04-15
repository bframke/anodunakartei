import "@babel/polyfill";
import React, { Component, createContext } from 'react';
import md5 from 'md5';
import axios from 'axios';

import { GenerateSessionToken } from '../../utils/tokenGenerator';
import CheckAccount from '../../utils/accountChecker';
import config from '../../../config/config';

const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    updateUser: () => {},
    setAuthentication: () => {},
    handeLogin: () => {}
})

export const AuthConsumer = AuthContext.Consumer;

export default class AuthController extends Component {
    userRequest = async (username) => {
        return axios.get('/api/getUserByName/' + username, { timeout: 2500 })
            .then((result) => {
                let user = {
                    username: result.data.result[0].username,
                    password: result.data.result[0].password
                }

                return user;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handeLogin = (username, password) => {
        let payload = {
            username: username,
            password: md5(password)
        };

        let user = {
            username: username,
            token: GenerateSessionToken(payload, config.jwtData.jwtSecret)
        };

        let result = userRequest(username);

        if(CheckAccount(payload,result)) {
            this.setAuthentication(true);
        }
        else {
            this.setAuthentication(false);
        }
    }

    updateUser = (user) => {
        this.setState({user});
    }

    setAuthentication = (auth) => {
        this.setState({isAuthenticated: auth});
    }

    state = {
        user: null,
        isAuthenticated: null,
        updateUser: this.updateUser,
        setAuthentication: this.setAuthentication,
        handleLogin: this.handeLogin
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}