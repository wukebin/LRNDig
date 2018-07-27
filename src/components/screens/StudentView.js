import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Header, Button } from 'react-native-elements';



//just presentation of data-> Functional

export default class StudentView extends Component {
    state = {
        name: this.props.navigation.state.params.name,
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../images/bg.jpg')}
                    style={{ width: '100%', height: '100%' }}
                >
                    <Header
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: this.Capitalize(this.state.name), style: { color: '#fff', fontSize: 24 } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                        outerContainerStyles={{ borderBottomWidth: 0, elevation: 2 }}
                        backgroundColor='#2f7399'

                    />


                    <View style={{ justifyContent: 'center', flex: 1 }}>

                        <Button
                            onPress={() => this.props.navigation.navigate('WriteTest')}
                            containerViewStyle={{ marginBottom: 5 }}
                            title='Skriv test'
                            large
                            raised
                            icon={{ name: 'create', type: 'content' }}
                            backgroundColor='#2f7399'
                            borderRadius={10}
                        />

                        <Button
                            onPress={() => this.props.navigation.navigate('ResultatList', { name: this.state.name })}
                            title='Resultat'
                            containerViewStyle={{ marginBottom: 5 }}
                            raised
                            large
                            backgroundColor='#2f7399'
                            icon={{ name: 'folder', type: 'file' }}
                            borderRadius={10}
                        />



                    </View>
                </ImageBackground>
            </View>
        );
    }
}


