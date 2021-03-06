import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

class AnswerInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answers: [],
            i: 0,
            checked: false
        }

    }

    onIconPress() {
        let checked = !this.state.checked;
        this.setState({ checked });
    }

    onButtonPress = (key) => {
        let answers = this.state.answers;
        let i = (this.state.i + 1);
        answers.push(<View style={styles.containerStyle1}>
            <Text style={styles.svarStyle}>svarsalternativ {i}</Text>
            <View style={styles.containerStyle}><TextInput key={key} style={{ flex: 10 }} />
                <CheckBox style={{ flex: 1 }} 
                checked={this.state.checked}
                 onPress={() => this.setState({checked: !this.state.checked})} 
                    containerStyle={{backgroundColor: 'transparent', borderColor: 'black'}}
                />
                </View></View>);
        this.setState({ answers, i });
    }

    render() {
        return (
            <View style={styles.containerStyle1}>
                {this.state.answers.map((value, index) => { return value })}
                {/* <View style={styles.containerStyle}> */}
                    <Button onPress={() => this.onButtonPress(this.state.answers.lenght)}
                    title='Nytt svar'
                    backgroundColor='#2f7399'
                    raised
                    borderRadius={10}
                    />
                {/* </View> */}
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
    },
    buttonStyle: {

    }
};

export {AnswerInput};