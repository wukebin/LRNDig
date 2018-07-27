import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const Input = ({icon, value, onChangeText, placeHolder,secret}) => {
    return(
        <View style={styles.containerStyle}>
           <Icon
           name= {icon}
           type= 'evilicon'
           containerStyle = {{backgroundColor:'transparent'}}
           iconStyle={{opacity:0.5}}
           size={48}
           />
           
            <TextInput
            secureTextEntry={secret}
            placeholder= {placeHolder}
            autoCapitalize={'none'}
            autoCorrect={false}
            style = {styles.inputStyle}
            value= {value}
            onChangeText={onChangeText}
            />
        </View>
    );

};

const styles = StyleSheet.create({
  
    inputStyle: {
        flex:1,
        color:'#000',
        fontSize: 20,
        paddingLeft:8,
        paddingRight: 8,

    },
    containerStyle: {
        flex:1,
        flexDirection: 'row',
    },
   
});

export  {Input};