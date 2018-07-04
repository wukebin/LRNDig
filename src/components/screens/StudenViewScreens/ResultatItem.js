import React, { Component } from 'react';
import {Text } from 'react-native';
import { CardSection } from '../../common';

class ResultatItem extends Component {
    render() {
        return (
            <CardSection>
                <Text style = {styles.titleStyle}>{this.props.provx.title}</Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 35,
       
        
    }
}

export default ResultatItem;