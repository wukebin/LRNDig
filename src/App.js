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
import OverviewDetails from './components/screens/OverviewDetails';
import { StackNavigator } from 'react-navigation';
import ResultatList from './components/screens/StudenViewScreens/ResultatList';


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

            

        <Provider store = {createStore(reducers)} >
            <View>             
           <Header headerText= "Lär Digital"/>
              {/* <LoginForm/> */}
            {/*<StudentView style = {{alignItems: 'center'}}/> */}
             {/* <ResultatList/> */} 
              <AppNavigator />    
            </View>    
        </Provider>
        
    );
=======
        // <Provider store = {createStore(reducers)} > {/* store = keeps the state Provider =  communicate with react */}
        //     <View>
        //    <Header headerText= "Lär Digital"/>
        //       {/* <LoginForm/> */}
        //       <StudentView style = {{alignItems: 'center'}}/>
        //     </View>
        //     </Provider>
            <AppNavigator />
        );
>>>>>>> c75da5ed456e74c730a69ff1bf62b227198a6419
    }
};

const AppNavigator = StackNavigator({
    LoginForm: { screen: LoginForm },
    TeacherView: { screen: TeacherView },
    StudentView: { screen: StudentView },
    Overview: {screen: TeacherOverview},
    Details: {screen: OverviewDetails}
})