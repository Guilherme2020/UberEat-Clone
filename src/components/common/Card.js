import React from 'React'

import { View, Text, Image } from 'react-native'
import Styles from '../../assets/styles'

const IMAGE = 'https://www.readersdigest.ca/wp-content/uploads/sites/14/2013/02/worst-foods-for-aging-fast-food.jpg'




const Card = () => {
    return (
        <View style={Styles.Card}>
            <Image
                style={Styles.CardImg}
                source={{ uri: IMAGE }}
            />
            <Text style={Styles.CardTitle}>Fornella</Text>
            <Text style={Styles.CardSubTitle}>$$ - Pizza</Text>
            <View style={Styles.CardCategory}>
                <View style={Styles.CardItemCategory}><Text>25 - 35 MINS</Text></View>
                <View style={Styles.CardItemCategory}><Text>4.5 (200+)</Text></View>
            </View>
        </View>
    )
}


export { Card }