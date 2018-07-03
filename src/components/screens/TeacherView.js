import React, {Component}  from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header, Button, Card, CardSection} from '../common';


export default class TeacherView extends Component {
    state = {
        name: this.props.name, 
    }
    render() {
        return(
            <Card>
            <Header headerText={this.state.name}/>
            <CardSection>
            <Button> Skapa Prov </Button>
            </CardSection>
            <CardSection>
            <Button> Rätta Prov</Button>
            </CardSection>
            <CardSection>
            <Button> Översikt </Button>
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