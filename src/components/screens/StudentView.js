import React, {Component} from 'react';
import {  View } from 'react-native';
import {  Button, Card, CardSection } from '../common';



//just presentation of data-> Functional

export default class StudentView extends Component {
    render() {
        return( 
            
            

            <Card >
              
                    <Header headerText='Joel Flak'/>
                    
        <CardSection>
            <Button>
                Skriv test
            </Button>
    
            
            <Button>
                Resultat
            </Button>
                
            </CardSection>
    
    </Card>)
};};
