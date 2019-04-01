import './registerFields.css';
import React, { Component } from 'react';
import Button from  '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {MessageCardWithActions} from "../messageCard/messageCard";
import TextField from '@material-ui/core/TextField';

export default class RegisterFields extends Component {
    state = {
        user : {
            username: '',
            password: '',
            email: '',
            characterName: ''
        }
    };

    handleChange = (event) => {
        event.preventDefault();
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({user});
    };

    handleRegister = () => {
        const { user } = this.state;

        // axios.post into database

    };

    render () {
        let cardActions = (
            <Button variant={'contained'} color={'inherit'} onClick={this.handleRegister} href={'/'}>
                <Typography variant={'button'}>
                    Registrieren
                </Typography>
            </Button>
        );

        return (
            <MessageCardWithActions title={'Registrieren'} style={'defaultMessageCard'} actions={cardActions}>
                <TextField
                    name={'username'}
                    label={'Username'}
                    value={this.state.user.username}
                    onChange={this.handleChange}
                    margin={'normal'}
                    fullWidth
                />
                <TextField
                    name={'password'}
                    label={'Passwort'}
                    value={this.state.user.password}
                    onChange={this.handleChange}
                    margin={'normal'}
                    type={'text'}
                    fullWidth
                />
                <TextField
                    name={'characterName'}
                    label={'Charakter Name'}
                    value={this.state.user.characterName}
                    onChange={this.handleChange}
                    margin={'normal'}
                    type={'text'}
                    fullWidth
                />
                <TextField
                    name={'email'}
                    label={'Email'}
                    value={this.state.user.email}
                    onChange={this.handleChange}
                    margin={'normal'}
                    type={'text'}
                    fullWidth
                />
            </MessageCardWithActions>
        );
    }
}