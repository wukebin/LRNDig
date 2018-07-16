import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';

export default class DatabaseReadTest extends Component {
   
    
    render() {
        return(
            <View>
                <Text>test</Text>
            </View>
        )
    }
}
//var test = firebase.database().ref('KlassMyran').child('Förnamn');