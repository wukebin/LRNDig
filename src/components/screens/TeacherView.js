import React, {Component}  from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header, Button, Card, CardSection} from '../common';


export default class TeacherView extends Component {
    state = {
        name: this.props.navigation.state.params.name, 
    }

    render() {
        return(
            <Card>
            <Header headerText={this.state.name}/>
            <CardSection>
            <Button onPress= {()=> this.props.navigation.navigate ('CreateTestView')}> Skapa Prov </Button>
            </CardSection>
            <CardSection>
            <Button> Rätta Prov</Button>
            </CardSection>
            <CardSection>
            <Button onPress= {()=> this.props.navigation.navigate ('Overview')}> Översikt </Button>
            </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
})