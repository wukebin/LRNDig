import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, ImageBackground, View, KeyboardAvoidingView } from 'react-native';
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
<<<<<<< HEAD

            <ImageBackground
                source={require('./images/bg.jpg')}
                style={styles.backgroundImage}
                imageStyle={styles.imageStyle}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}>
=======
            
            <ImageBackground
            source={require('./images/bg.jpg')}
            style={{ width: '100%', height: '100%'}}
            
            >
            <ScrollView contentContainerStyle={{paddingTop: 100}}>

>>>>>>> e415ecb8aaba85f5176df7d8e21407232f4e8bb8
                    {/* Reducing width and height on elephant makes parent comps smaller, doesnt even work when adding flex to parent comp */}

                    <Image source={require('./images/elephant1.png')} style={{ marginTop: 60, height: 200, width: 200, alignSelf: 'center', opacity: 0.8 }} />
                    <View style={{ marginTop: 20 }}>
                        <Input
                            icon='user'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeHolder='E-postadress'

<<<<<<< HEAD
                        />
=======
                    />

                    <Input
                        icon='lock'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeHolder='Lösenord'
                        secret
                       
                    />
>>>>>>> e415ecb8aaba85f5176df7d8e21407232f4e8bb8

                        <Input
                            icon='lock'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeHolder='Lösenord'
                            secret
                        />
                    </View>
                    <Text style={styles.errorText}>
                        {this.state.error}
                    </Text>

                    {this.renderButton()}


                    {/* FOR TEST PURPOSES ONLY */}
                    {/* <CardSection>
                        <Icon
                            raised
                            reverse
                            size={50}
                            color='#2f7399'
                            name='school'
                            onPress={() => this.props.navigation.navigate('TeacherView', { name: 'Jenny' })}
                        />

                        <Icon
                            raised
                            reverse
                            size={50}
                            large
                            color='#2f7399'
                            name='group'
                            onPress={() => this.props.navigation.navigate('StudentView', { name: 'Joel' })} />
<<<<<<< HEAD
                        </CardSection> */}
                </ScrollView>
            </ImageBackground>
=======
                    </CardSection>
            </ScrollView>
                </ImageBackground>
                
>>>>>>> e415ecb8aaba85f5176df7d8e21407232f4e8bb8
        );
    }


    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }

        return (
            <Button
                onPress={this.onButtonPress.bind(this)}
                containerViewStyle={{ width: '95%', opacity: 0.67, padding: 0, alignSelf: 'center' }}
                buttonStyle={{ width: '100%', alignItems: 'center', paddingRight: 40 }}
                title='Logga in'
                raised
                large
                backgroundColor='#2f7399'
                icon={{ name: 'unlock', type: 'evilicon', size: 36 }}
                borderRadius={100}


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
            this.setState({ loading: false });
        })

    }

    loginFailed() {
        this.setState({ loading: false, error: 'Fel e-postadress eller lösenord.', email: '', password: '' })
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
        color: '#cd0000'
    },

    successText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'green'
    },
    imageStyle: {
        resizeMode: 'cover'
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center'
    }

})
