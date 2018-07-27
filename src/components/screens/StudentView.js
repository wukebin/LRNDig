import React, { Component } from 'react';
import { View , ImageBackground} from 'react-native';
import { Button, Card, CardSection } from '../common';
import { PricingCard, Header } from 'react-native-elements';



//just presentation of data-> Functional

export default class StudentView extends Component {

    state= {
        name: this.props.navigation.state.params.name,
    }

    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
            <ImageBackground 
            source= {require('../images/bg.jpg')}
            style= {{width: '100%', height: '100%'}}
            >
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: this.Capitalize(this.state.name), style: { color: '#fff', fontSize: 24 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    outerContainerStyles={{borderBottomWidth:0, elevation:2}}
                    backgroundColor= '#2f7399'
                />


                <Card >



                    <CardSection>
                        <Button onPress={() => this.props.navigation.navigate('WriteTest')}>
                            Skriv test
            </Button>


                        <Button onPress={() => this.props.navigation.navigate('ResultatList')}>
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

                </Card>
                </ImageBackground>
            </View>
        )
    };
};
