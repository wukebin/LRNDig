import React, { Component } from 'react';
import {Text, StyleSheet , Image} from 'react-native';
import {Card, CardSection, Input, Spinner, Header } from './common';
import {Button, Icon, Tile } from 'react-native-elements';
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
            <Button 
            onPress={this.onButtonPress.bind(this)}
            containerViewStyle = {{flex: 1, justifyContent: 'center', alignSelf: 'center'}}
            title='Logga in'
            raised
            large
            backgroundColor='#2f7399'
            icon={{ name: 'input' }}
            borderRadius={10}
            
          />
  
               
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
        //TODO
        //Here we should use custom claims/tokens to authorize, name Jenny and uID is hard coded rn
        if (user == 'cwrnu3yNaQTD785JRcoROA4XKMD2') {
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
                <Tile
                imageSrc = {require('./images/elephant.jpg')}
                height = {250}
                imageContainerStyle = {{borderBottomWidth:4, borderBottomColor: '#e6e6e6'
                }} 
                />
                {/* <Image source= {require('./images/elephant.jpg')} style = {{ width:100, height:100,alignSelf:'center'}}/> */}
               
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

                <CardSection 
                style={{ 
                flex: 1,
                flexDirection: 'row',
                }}>
                    <Icon
                    raised
                    size = {50}
                    backgroundColor='#2f7399'
                    name ='school'
                    onPress={() => this.props.navigation.navigate('TeacherView', { name: 'Jenny' })}
                    />

                    <Icon
                    raised
                    size = {50}
                    large
                    backgroundColor='#2f7399'
                    name ='group'
                    onPress={() => this.props.navigation.navigate('StudentView')} />
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