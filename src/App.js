import React, { Component } from 'react'

import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { Header, Card } from './components'

import Styles from './assets/styles';


class App extends Component {

    render() {
        return (
            <View style={Styles.Container}>
                <Header />
                <ScrollView style={Styles.Content}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ScrollView>
            </View>
        )
    }

}



export default App;