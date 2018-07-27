import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import { Card, CardSection, Input, Spinner, Header } from './common';
import { Button, Icon, Tile } from 'react-native-elements';
import firebase from 'firebase';


export default class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    };

    render() {
        return (
           <ScrollView>
                    <ImageBackground
                source={require('./images/bg.jpg')}
                style={{ width: '100%', height: '100%' }}>
                <Image source={require('./images/elephant1.png')} style={{ width: 300, height: 340, alignSelf: 'center' }} />
                

                        {/* <Image source= {require('./images/elephant.jpg')} style = {{ width:100, height:100,alignSelf:'center'}}/> */}


                        <Input
                            icon='user'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeHolder='E-postadress'

                        />

                        <Input
                            icon='lock'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeHolder='Lösenord'
                            secret
                        />


                        {this.renderButton()}


                        {/* FOR TEST PURPOSES ONLY */}
                        {/* <Card> */}
                        <CardSection
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                backgroundColor: 'transparent'
                            }}>
                            <Icon
                                raised
                                size={50}
                                backgroundColor='#2f7399'
                                name='school'
                                onPress={() => this.props.navigation.navigate('TeacherView', { name: 'Jenny' })}
                            />

                            <Icon
                                raised
                                size={50}
                                large
                                backgroundColor='#2f7399'
                                name='group'
                                onPress={() => this.props.navigation.navigate('StudentView', { name: 'Joel' })} />
                        </CardSection>
                        <Text style={styles.errorText}>
                            {this.state.error}
                        </Text>
                    {/* </Card> */}
            </ImageBackground>
                </ScrollView>
        );
    }


    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }

        return (
            <Button
                onPress={this.onButtonPress.bind(this)}
                containerViewStyle={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}
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
        var userType = false;
        var email = this.state.email.replace('.se', '')

        firebase.database().ref('users/' + email).once('value', (dataSnap) => {
            userType = dataSnap.child('teacher').val();
            if (userType) {
                this.props.navigation.navigate('TeacherView', { name: email.replace('@eken', '') });
            }
            else {
                this.props.navigation.navigate('StudentView', { name: email.replace('@eken', '') });
            }
        })
        this.setState({ loading: false });

    }

    loginFailed() {
        this.setState({ loading: false, error: 'Fel användarnamn eller lösenord.', email: '', password: '' })
    }
};
const styles = StyleSheet.create({
    
        containerStyle: {
          borderBottomWidth: 1,
          padding: 5,
          backgroundColor: 'transparent',
          justifyContent: 'center',
          flexDirection: 'row',
          borderColor: '#ddd',
          position: 'relative'
          
        },

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
