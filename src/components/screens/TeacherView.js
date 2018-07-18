import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Button, Card, Divider } from 'react-native-elements';


export default class TeacherView extends Component {
    state = {
        name: this.props.navigation.state.params.name,
    }

    render() {
        return (
            <Card style= {styles.container}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: this.state.name, style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
            

            
                <Button
                    onPress={() => this.props.navigation.navigate('CreateTestView')}
                    title='Skapa Prov'
                    raised
                    large
                    backgroundColor='#2f7399'
                    icon={{ name: 'queue' }}
                    borderRadius={10}
                />
                

                
                <Button
                    raised
                    large
                    title='Rätta Prov'
                    backgroundColor='#2f7399'
                    icon = {{ name: 'done'}}
                    borderRadius={10}
                />
                

                
                <Button
                    onPress={() => this.props.navigation.navigate('Overview')}
                    title='Översikt'
                    large
                    raised
                    icon={{ name: 'list' }}
                    backgroundColor='#2f7399'
                    borderRadius={10}
                />
            </Card>
        );
    }
}

const buttonStyles = {
    buttonStyle: {
        large: true,
        raised: true,
        backgroundColor: '#20a1d2'

    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10

    },
})