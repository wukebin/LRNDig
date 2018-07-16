import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import {Button, AnswerInput} from './';


class QuestionInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textInput: [],
            i: 0,
            checked: false
        }
    }

 

    addTextInput = (key) => {
        let textInput = this.state.textInput;
        let i = (this.state.i + 1);
        textInput.push(
        <View>
            <Text style={styles.textStyle}>Fråga {i}</Text>
            <TextInput key={key} />
        
            <AnswerInput />
        </View>);
        this.setState({ textInput, i })

    }

    render() {
        return (
            <View style={styles.containerStyle1}>
            
               {this.state.textInput.map((value, index) => { return value })}
               
                <View style={styles.containerStyle}>

                    <Button onPress={() => this.addTextInput(this.state.textInput.length)}>
                        Ny fråga
                    </Button>

                </View>
                
                <Button>
                    Submit
                    </Button>


            </View>
        );
    }
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    containerStyle1: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderColor: '#ddd',
        position: 'relative'

    },

    textStyle: {
        fontSize: 20
    },
    svarStyle: {
        fontSize: 10
    }
};

export {QuestionInput};