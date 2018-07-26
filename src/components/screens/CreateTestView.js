import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import firebase from 'firebase';
import { Card, QuestionInput } from '../common';
import {Header } from 'react-native-elements'



export default class CreateTestView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            textInput: [],
            name: this.props.navigation.state.params.name
        };
    }

   
  
    render() {

        return (
            <View style={{ flex: 1 }}>
    
    <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: this.state.name, style: { color: '#fff', fontSize: 24 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
        <ScrollView>
        <Card>
        
            <QuestionInput>
                </QuestionInput>
                
            </Card> 
            </ScrollView>   
        </View>
        );
    }

}

    
    





