import { StyleSheet , Image, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const index = () => {
  return (
    <LinearGradient
    colors={['#091A3F', '#054DEB']}
    start={{ x: 0, y: 0 }}
    end={{ x: -1, y: 1 }}
    style={styles.background}
  >
    <SafeAreaView style={styles.container}>
        <Image 
          source={require('../../../assets/images/resources/sun.png')}
          style={styles.main}
        />
        <Text style= {styles.texts}>
            Welcome to Quiamco Lab 4!
        </Text>
    </SafeAreaView>
  </LinearGradient>
  )
} 

const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',     
    },
    main: {
      width: 200,  
      height: 200, 
      resizeMode: 'contain', 
    },
    texts: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 10,
    }
  });

export default index