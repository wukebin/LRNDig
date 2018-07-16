import React, {Component} from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { Card, CardSection, QuestionInput, Button } from './';

 class Question extends Component {
    state = {
        question:
        { 'question': '', 'id': this.props.id, answers: [
        { 'answer': '', 'alt': 'a', 'corr': false, 'q-id': this.props.id },
        { 'answer': '', 'alt': 'b', 'corr': false, 'q-id': this.props.id },
        { 'answer': '', 'alt': 'c', 'corr': false, 'q-id': this.props.id },
        { 'answer': '', 'alt': 'd', 'corr': false, 'q-id': this.props.id },]
    }}

     onSubmitEditing = () => {
        <CardSection>
        <QuestionInput>
            label={"Svarsalternativ a: "}
            
            </QuestionInput>
        </CardSection>
     }
    render() {
        return (
            
                <CardSection>
                    <QuestionInput
                        label={"Fråga " + (this.props.id)}
                        value={this.question}
                        onChangeText={question => this.setState({question})}
                        onSubmitEditing = {this.onSubmitEditing()}
                    >

                    }
                    </QuestionInput>
                </CardSection>

            
        );
    }
}
export {Question};
