import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import LoginForm from './components/LoginForm';
import {Header } from './components/common';
import firebase from 'firebase';
import TeacherView from './components/screens/TeacherView';

export default class App extends Component {

    // componentWillMount() {
    //     firebase.initializeApp( {
    //         apiKey: "AIzaSyDsEbcjz7pEuZx5Xj47RyIYxVonSNpWUJo",
    //         authDomain: "lrndig-fd676.firebaseapp.com",
    //         databaseURL: "https://lrndig-fd676.firebaseio.com",
    //         projectId: "lrndig-fd676",
    //         storageBucket: "lrndig-fd676.appspot.com",
    //         messagingSenderId: "550361281799"
    //     });
    // };

    render() {
        return (
            <TeacherView name='Jenny'/>
            // <View>
            //     <Header headerText= "Lär Digital"/>
            //   <LoginForm/>
            //   </View>
        );
    }
};