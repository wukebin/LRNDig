import React, {Component}  from 'react';
import {Text, View, StyleSheet, ListView, TouchableHighlight} from 'react-native';
import {Header, Button, Card, CardSection} from '../common';
import firebase from 'firebase';

export default class TeacherOverview extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            userDataSource: ds,
        };

    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
        
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                userDataSource: this.state.userDataSource.cloneWithRows(response)
            });
        });
    }

    getDetails(user) {
        this.props.navigation.navigate('Details', {user:user});
    }


    renderRow(user, sectionId, rowId, hightlightRow) {
        return (
            <TouchableHighlight onPress={()=> this.getDetails(user)}>
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}: {user.email}</Text>
            </View>
            </TouchableHighlight>
        );
    }
    render() {
      return (
        <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}
    />
     
      );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }
});
