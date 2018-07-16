import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect } from 'react-redux';
import ResultatItem from './ResultatItem';


class ResultatList extends Component {
    renderItem(provx) {

            return <ResultatItem  provx = {provx.item}/>;
        
    }
    render() {
        
        return(
            <FlatList 
            data = {this.props.prov}
            renderItem = {this.renderItem}
            keyExtractor = {provx => provx.id}
            />
        )
    }
}

const mapStateToProps = state => {

    return {
        prov: state.prov
    };

};



export default connect(mapStateToProps)(ResultatList);