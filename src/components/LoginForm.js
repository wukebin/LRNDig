import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {


    state = {
        email: '',
        password:'',
        error:'',
        loading:false,
    };

    renderButton() {
        if(this.state.loading) {
            return <Spinner size="small"/>
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
            Log in
            </Button>
        );
    }
    onButtonPress() {
        const {email,password } =this.state;
        this.setState({error:'',loading:true})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.loginSuccess.bind(this))
        .catch(()=> {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.loginSuccess.bind(this))
            .catch(this.loginFailed.bind(this));
        }
    
    );
    }

    loginSuccess(){
        this.setState({loading:false, email:'',password:'', error:''})
    }

    loginFailed() {
        this.setState({loading:false, error: 'Inloggning misslyckades.', email:'', password:''})
    }


    render() {
        return(
            <Card>               
                <CardSection>
                    <Input
                    label = "Användarnamn"
                    value = {this.state.email}
                    onChangeText={email => this.setState({email})}
                    placeHolder='abc123@hotmail.com'
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label = "Lösenord"
                    value = {this.state.password}
                    onChangeText= {password => this.setState({password})}
                    placeHolder= '•••••••'
                    secret
                    />
                </CardSection>

                <Text style = {styles.errorText}>
                    {this.state.error}
                </Text>

                <Text style= {styles.successText}>
                {this.state.success}
                </Text>

                <CardSection>
                    {this.renderButton()}
                    {/* <Button onPress={this.onButtonPress.bind(this)}>
                    Log In
                    </Button> */}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },

    successText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'green'
    }
})