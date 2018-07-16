import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import firebase from 'firebase';
import { Header, Card, QuestionInput } from '../common';



export default class CreateTestView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            textInput: []

        };
    }

   
  
    render() {

        return (
            <View style={{ flex: 1 }}>
    
            <Header centerComponent={{ text: 'Prov', style:{color: '#fff', fontSize: 30}}}/>
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

    
    





