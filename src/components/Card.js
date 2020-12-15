import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = ({children}) => {
    return (
        <View style={styles.default}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    default: {
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // ios shadow
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2},
        // android shadow
        elevation: 8,
        marginBottom: 15,
        borderRadius: 10,
        
    }
})
