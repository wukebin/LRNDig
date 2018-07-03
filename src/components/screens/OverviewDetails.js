import React, { Component } from 'react';
import {Text, View , Image} from 'react-native';

export default class Comp6 extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: this.props.navigation.state.params.user.name,
      email: this.props.navigation.state.params.user.email,
      city: this.props.navigation.state.params.user.address.city


    }
  }

  render() {
    return (
      <View style= {{alignItems:'center', flex:5}}>
        <Image
        source ={require('../images/joelflak.jpg')} style ={{flex:1}}
        />
      <Text>{this.state.name}</Text>
      <Text>{this.state.city}</Text>
      <Text>{this.state.email}</Text>
      </View>
    );
  }
}
