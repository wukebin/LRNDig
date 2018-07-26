import React from 'react';
import { View } from 'react-native';

const CardSection = (props, {style}) => {
  return (
    <View style={style || styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
    
  }
};

export { CardSection};