import React, { Component } from 'react';
import {
    View
} from 'react-native';
import LoginForm from './components/LoginForm';
import StudentView from './components/screens/StudentView';
import { Header } from './components/common';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

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
<<<<<<< HEAD
            <AppNavigator headerMode = 'none'/>
=======
        <Provider store = {createStore(reducers)} > {/* store = keeps the state Provider =  communicate with react */}
            <View>
           <Header headerText= "Lär Digital"/>
              {/* <LoginForm/> */}
              <StudentView style = {{alignItems: 'center'}}/>
            </View>
            
            <AppNavigator />
<<<<<<< HEAD
            </Provider>
=======
>>>>>>> 027cee7a9dfd0b69690a6986a8bb42fd6257630c
>>>>>>> 981efb42c37de97f0eb1633c423e88ad854814cb
        );
    }
};

const AppNavigator = StackNavigator({
    LoginForm: { screen: LoginForm },
    TeacherView: { screen: TeacherView },
    StudentView: { screen: StudentView },
    Overview: {screen: TeacherOverview}
})