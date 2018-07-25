import React, {Component} from 'react';
import {  View } from 'react-native';
import { Button, Card, CardSection } from '../common';
import {PricingCard} from 'react-native-elements';



//just presentation of data-> Functional

export default class StudentView extends Component {
    render() {
        return( 
            
            

            <Card >
              
                   
                    
        <CardSection>
            <Button onPress = {() => this.props.navigation.navigate ('WriteTest')}>
                Skriv test
            </Button>
    
            
            <Button onPress= {()=> this.props.navigation.navigate ('ResultatList')}>
                Resultat
            </Button>
                
            </CardSection>
            <PricingCard
  color='#4f9deb'
  title='Free'
  price='$0'
  info={['1 User', 'Basic Support', 'All Core Features']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>
    
    </Card>)
};};
