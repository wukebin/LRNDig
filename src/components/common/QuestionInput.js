import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { AnswerInput} from './';
import { Button } from 'react-native-elements'


class QuestionInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textInput: [],
            i: 0,
            questions: [],
            checked: false
            
            
        }
    }

 

    addTextInput = (key) => {
        let textInput = this.state.textInput;
        let questions = this.state.questions;
        let i = (this.state.i + 1);
        textInput.push(
        <View>
            <Text style={styles.textStyle}>Fråga {i}</Text>
            <TextInput key={key} />
            <AnswerInput />
        </View>);
        questions.push(key);

        this.setState({ textInput, i, questions })

    }

    render() {
        return (
            <View style={styles.containerStyle1}>
            
            {this.state.textInput.map((value, index) => { return value })}
               
                

                    <Button onPress={() => this.addTextInput(this.state.i)}
                    large
                    title='Ny fråga'
                    backgroundColor='#2f7399'
                    raised
                    borderRadius={10}
                    containerViewStyle={{ marginBottom: 4,
                    }}
                    />

                
                
                <Button
                large
                title='Submit'
                backgroundColor='#2f7399'
                raised
                leftIcon={{name: 'publish'}}
                borderRadius={10}
                
                />


            </View>
        );
    }
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: 'transparent',
        position: 'relative'
    },
    containerStyle1: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderColor: 'transparent',
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