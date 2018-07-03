import React, { Component } from 'react';
import {Text } from 'react-native';
import { CardSection } from '../../common';

class ResultatItem extends Component {
    render() {
        return (
            <CardSection>
                <Text>{this.props.provx.title}</Text>
            </CardSection>
        );
    }
}

export default ResultatItem;