import React, { Component } from 'react';
import {Text, StyleSheet , Image} from 'react-native';
import {Button, Card, CardSection, Input, Spinner, Header } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {


    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    };

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Logga in
            </Button>
        );
    }
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.loginSuccess.bind(this))
            .catch(this.loginFailed.bind(this));
    }

    loginSuccess() {
        var user = firebase.auth().currentUser.uid;
        this.setState({loading:false});
        if (user == 'fd14Qlq7zza9KPzAcB0Q3To58TA2') {
            this.props.navigation.navigate('TeacherView', {name:'Jenny'});
        }
        else {
            this.props.navigation.navigate('StudentView');   
        } 
    }

    loginFailed() {
        this.setState({ loading: false, error: 'Fel användarnamn eller lösenord.', email: '', password: '' })
    }


    render() {
        return (
            <Card>
                <Image source= {require('./images/elephant.jpg')} style = {{ width:100, height:100,alignSelf:'center'}}/>
               
                <CardSection>
                    <Input
                        label="Användarnamn"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        placeHolder='abc123@hotmail.com'
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Lösenord"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeHolder='•••••••'
                        secret
                    />
                </CardSection>



                <CardSection>
                    {this.renderButton()}
                    {/* <Button onPress={this.onButtonPress.bind(this)}>
                    Log In
                    </Button> */}
                </CardSection>

                <CardSection style={{ flexDirection: 'row' }}>
                    <Button onPress={() => this.props.navigation.navigate('TeacherView', { name: 'Jenny' })} />
                    <Button onPress={() => this.props.navigation.navigate('StudentView')} />
                </CardSection>
                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>
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