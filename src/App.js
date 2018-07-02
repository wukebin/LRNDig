import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import LoginForm from './components/LoginForm';
import {Header } from './components/common';

export default class App extends Component {
    render() {
        return (
            <View>
                <Header headerText= "Lär Digital"/>
              <LoginForm/>
              </View>
        );
    }
};