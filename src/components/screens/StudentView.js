import React, {Component} from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { Header, Button, Card, CardSection } from '../common';
//just presentation of data-> Functional

export default class StudentView extends Component {
    render() {
        return( 
            <Card >
              
                    <Header headerText='Joel Flak'/>
                    
        <CardSection>
            <Button>
               Google
            </Button>
    
            
            <Button>
                Facebook
            </Button>
                
            </CardSection>
    
    </Card>)
};};
