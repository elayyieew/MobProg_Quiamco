import { Image, View, StyleSheet, Text } from 'react-native'
import React from 'react'

const Avatar = () => {
  return (
    <View style={styles.avatarContainer}>
        <Image 
        source={require('../assets/images/resources/Sample6.jpg')}
        style={styles.avatar}
        />
        <Text style={styles.email}>quiamco.jela717@gmail.com</Text>
    </View>
    );
}
 
const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 100,
    height: 150,
    width: 150
  },
  email: {
    color: 'white',
    paddingTop: 10
  }
})

export default Avatar;