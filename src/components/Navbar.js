import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { THEME } from '../theme';

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>
                Todo App
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
        backgroundColor: THEME.MAIN_COLOR
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
  });
  

export default Navbar
