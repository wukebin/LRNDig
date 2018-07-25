import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

const Input = ({label, value, onChangeText, placeHolder,secret}) => {
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
            secureTextEntry={secret}
            placeholder= {placeHolder}
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
        color:'#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight:23,
        flex:3

    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex:2
    },
    containerStyle: {
        height:40,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'

    }
});

export  {Input};