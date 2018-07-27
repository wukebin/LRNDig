import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
<<<<<<< HEAD
    backgroundColor: 'transparent',
=======
>>>>>>> 57e82932978d523a6e6b7866b027c85cca9fa2f2
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    backgroundColor: 'transparent'
  }
};

export { CardSection};