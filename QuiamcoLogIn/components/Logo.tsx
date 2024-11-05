import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={styles.container}>
        <Image 
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    }
})
export default Logo