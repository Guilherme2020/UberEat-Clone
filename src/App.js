import React, { Component } from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { Header, Card } from './components'

import Styles from './assets/styles';


class App extends Component {

    render() {
        <View style={Styles.Container}>
            <Header />
            <View style={Styles.Content}>
                <Text>Clone Uber Eats com React Native - Parte 1</Text>
                <Card />
            </View>

        </View>
    }

}



export default App;