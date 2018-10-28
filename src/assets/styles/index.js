
import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    Content: {
        paddingLeft: 25,
        paddingRight: 15
    },
    Header: {
        height: 60,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingTop: 30,
        paddingLeft: 10
    },
    TextHeader: {
        fontSize: 16
    },
    BoldText: {
        fontWeight: 'bold'
    },
    Card: {
        marginTop: 25
    },
    CardImg: {
        // resizeMode: 'center',
        width: '100%',
        height: 130,
        borderRadius: 5
    },
    CardTitle: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 16
    },
    CardSubTitle: {
        color: '#666',
        fontSize: 14
    },
    CardCategory: {
        flexDirection: 'row',
        marginTop: 10
    },
    CardItemCategory: {
        height: 25,
        width: 100,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    }
})

export default Styles