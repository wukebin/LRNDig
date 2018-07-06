import React, { Component } from 'react';
import {Text, View , Image} from 'react-native';

export default class OverviewDetails extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: this.props.navigation.state.params.user.name,
      age: this.props.navigation.state.params.user.age


    }
  }

  render() {
    return (
      <View style= {{alignItems:'center', flex:5}}>
        <Image
        source ={require('../images/joelflak.jpg')} style ={{flex:1}}
        />
      <Text>{this.state.name}</Text>
      <Text>{this.state.age}</Text>
      </View>
    );
  }
}
