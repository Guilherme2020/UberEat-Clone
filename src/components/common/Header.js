import React from 'react'


import {View,Text} from 'react-native'
import Styles from '../../assets/styles'


const Header = () => {

    return(

        <View style={Styles.Header}>
            <Text style={[Styles.TextHeader,Styles.BoldText]} >Av. Paulista,2555 - Consolação</Text>
        </View>

    )


}

export {Header}