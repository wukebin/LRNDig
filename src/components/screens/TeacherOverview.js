import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, TouchableHighlight } from 'react-native';
import { Header, Spinner } from '../common';
import firebase from 'firebase';

export default class TeacherOverview extends Component {
    constructor() {
        super();
        this.path = firebase.database().ref('users');
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            userDataSource: ds,
            loading: true
        };

    }

    componentDidMount() {
        this.fetchUsers(this.path);
    }

    fetchUsers(ref) {
        ref.orderByChild('name').once('value', (dataSnapshot) => {
            var students = [];
            dataSnapshot.forEach((child) => {
                students.push({
                    name: child.val().name,
                    age: child.val().age
                })
            })

            this.setState({ userDataSource: this.state.userDataSource.cloneWithRows(students), loading: false })
        })
    }

    getDetails(user) {
        this.props.navigation.navigate('Details', { user: user });
    }


    renderRow(user, sectionId, rowId, hightlightRow) {
        return (
            <TouchableHighlight onPress={() => this.getDetails(user)}>
                <View style={styles.row}>
                    <Text style={styles.rowText}>{user.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    renderContent() {
        if (this.state.loading) {
            return (<Spinner size="large" />
            )
        }
        return (
            <View>
            <Header headerText="Elever" />

            <ListView
                dataSource={this.state.userDataSource}
                renderRow={this.renderRow.bind(this)}
            />
            </View>
        )
    }
    render() {
        return (
            this.renderContent()
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
