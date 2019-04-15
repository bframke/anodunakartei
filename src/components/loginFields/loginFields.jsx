import './loginFields.css';
import React, { Component } from 'react';
import {MessageCardWithActions, CustomCard} from "../messageCard/messageCard";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';

import { AuthConsumer } from '../authController/authController';

export default class LoginFields extends Component {
    state = {
        user: {
            username: '',
            password: ''
        }
    };

    handleChange = (event) => {
        event.preventDefault();
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({user});
    };

    render() {
        const {user} = this.state;

        let cardActions = (
            <AuthConsumer>
                {({handleLogin}) => (
                    <Button variant={'contained'} color={'inherit'} onClick={() => {handleLogin(user.username,user.password)}} href={'/'}>
                        <Typography variant={'button'}>
                            Login
                        </Typography>
                    </Button>
                )}
            </AuthConsumer>
        );

        return (
            <MessageCardWithActions title={'Login'} style={'defaultMessageCard'} actions={cardActions}>
                <TextField
                    name={'username'}
                    label={'Username'}
                    value={user.username}
                    onChange={this.handleChange}
                    margin={'normal'}
                    fullWidth
                />
                <TextField
                    name={'password'}
                    label={'Passwort'}
                    value={user.password}
                    onChange={this.handleChange}
                    margin={'normal'}
                    type={'password'}
                    fullWidth
                />
            </MessageCardWithActions>
        );
    }
}