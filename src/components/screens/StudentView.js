import React, {Component} from 'react';
import {  View } from 'react-native';
import {  Button, Card, CardSection } from '../common';



//just presentation of data-> Functional

export default class StudentView extends Component {
    render() {
        return( 
            
            

            <Card >
        <CardSection>
        <View style = {{flexDirection: 'row'}}>
            <Button>
                Skriv test
            </Button>
            </View>
            </CardSection>
            
            <CardSection>

            <View style = {{flexDirection: 'row'}}>
                
            <Button>
                Resultat
            </Button>
                
            </View>
            </CardSection>
    
    </Card>)
};};
