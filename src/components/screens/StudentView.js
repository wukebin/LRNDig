import React, {Component} from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { Header, Button, Card, CardSection } from '../common';
//just presentation of data-> Functional

export default class StudentView extends Component {
    render() {
        return( 
            <Card >
        <CardSection>
        <View style = {{flexDirection: 'row'}}>
            <Button>
               Google
            </Button>
            </View>
            </CardSection>
            
            <CardSection>

            <View style = {{flexDirection: 'row'}}>
                
            <Button>
                Facebook
            </Button>
                
            </View>
            </CardSection>
    
    </Card>)
};};
