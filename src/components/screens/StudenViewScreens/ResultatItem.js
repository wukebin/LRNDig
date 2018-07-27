import React, { Component } from 'react';
import {NativeModules, LayoutAnimation, Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../../common';
import * as actions from '../../../actions';
const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true)

class ResultatItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.linear();
        
       
    } 
    renderDescription() {
        const { provx, expanded } = this.props
        if (expanded) {
            // if( provx.description === prevdesc){ return ( console.log('reset') ) }
            // else { var prevdesc = provx.description
                 return (
                <CardSection style = {[styles.descriptionStyle]}>
                    <Text>{provx.description}</Text>
                </CardSection>
            )}
        }

    
    
    render() {
        const { id, title } =  this.props.provx;

        
        return (
        <TouchableWithoutFeedback
            onPress = {() => { this.props.selectProv(id) }}
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
       
        
    },
    descriptionStyle: {
        flex: 1, 
        paddingLeft: 10,
        
        
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedResultID === ownProps.provx.id;
    
    return {expanded};
};

export default connect(mapStateToProps, actions)(ResultatItem);