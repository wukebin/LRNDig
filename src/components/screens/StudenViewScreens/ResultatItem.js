import React, { Component } from 'react';
import {Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../../common';
import * as actions from '../../../actions';

class ResultatItem extends Component {
    renderDescription() {
        if (this.props.provx.id === this.props.selectedResultID) {
            return ( 
                <Text>{this.props.provx.description}</Text>

            )
        }

    }
    
    render() {
        const { id, title } =  this.props.provx;

        
        return (
        <TouchableWithoutFeedback
            onPress = {() => this.props.selectProv(id)}
        >
            <View>
                    <CardSection>
                <Text style = {styles.titleStyle}>
                {title}
                </Text>
                </CardSection>
                {this.renderDescription()}
            </View>
        </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 45,
       
        
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedResultID === ownProps.provx.id;
    
    return {
        selectedResultID: state.selectedResultID

    };
}

export default connect(mapStateToProps, actions)(ResultatItem);