import React, { Component } from 'react';
import {
    View
} from 'react-native';
import LoginForm from './components/LoginForm';
import StudentView from './components/screens/StudentView';
import { Header } from './components/common';
import firebase from 'firebase';
import TeacherView from './components/screens/TeacherView';
import TeacherOverview from './components/screens/TeacherOverview';
import { StackNavigator } from 'react-navigation';

export default class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDsEbcjz7pEuZx5Xj47RyIYxVonSNpWUJo",
            authDomain: "lrndig-fd676.firebaseapp.com",
            databaseURL: "https://lrndig-fd676.firebaseio.com",
            projectId: "lrndig-fd676",
            storageBucket: "lrndig-fd676.appspot.com",
            messagingSenderId: "550361281799"
        });
    };

    render() {
        return (
            <AppNavigator headerMode = 'none'/>
        );
    }
};

const AppNavigator = StackNavigator({
    LoginForm: { screen: LoginForm },
    TeacherView: { screen: TeacherView },
    StudentView: { screen: StudentView },
    Overview: {screen: TeacherOverview}
})