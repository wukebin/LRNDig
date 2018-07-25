import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Button, Card, Divider } from 'react-native-elements';


export default class TeacherView extends Component {
    state = {
        name: this.props.navigation.state.params.name,
    }

    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
        return (
            <View style ={{flex:1}}>
             <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
<<<<<<< HEAD
                    centerComponent={{ text: this.Capitalize(this.state.name), style: { color: '#fff', fontSize: 24 } }}
=======
                    centerComponent={{ text: this.state.name, style: { color: '#fff', fontSize:24 } }}
>>>>>>> d4dee3beb2b1371bf88e471294a85284d2f06336
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
            
            
            <View style= {{justifyContent:'center', flex:1}}>
            
                <Button
                    onPress={() => this.props.navigation.navigate('CreateTestView', {name: this.state.name})}
                    title='Skapa Prov'
                    containerViewStyle = {{marginBottom: 5, marginTop: 5}}
                    raised
                    large
                    backgroundColor='#2f7399'
                    icon={{ name: 'queue' }}
                    borderRadius={10}
                />
                

                
                <Button
                    raised
                    large
                    containerViewStyle = {{marginBottom: 5}}
                    title='Rätta Prov'
                    backgroundColor='#2f7399'
                    icon = {{ name: 'done'}}
                    borderRadius={10}
                />
                

                
                <Button
                    onPress={() => this.props.navigation.navigate('Overview')}
                    containerViewStyle = {{marginBottom: 5}}
                    title='Översikt'
                    large
                    raised
                    icon={{ name: 'list' }}
                    backgroundColor='#2f7399'
                    borderRadius={10}
                />
            </View>
            </View>
        );
    }
}
