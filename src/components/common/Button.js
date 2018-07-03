import React, {Component} from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


// const Button = ({ onPress, children }) => {
//   const { buttonStyle, textStyle } = styles;

//   return (
//     <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
//       <Text style={styles.textStyle}>
//         {children}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// export default Button;

class Button extends Component {
    render() {
        return(
            <TouchableOpacity onPress= {this.props.onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
            {this.props.children}
            </Text>
          </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
});

export {Button};