import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Button } from 'react-native-paper';

const settings = () => {
  return (
    <LinearGradient
      colors={['#091A3F', '#054DEB']}
      start={{ x: 0, y: 0 }}
      end={{ x: -1, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
      <Button
        mode='text'
        onPress={() => router.push('/login')}
        textColor='white'
      >
        LOGOUT
      </Button>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  
});

export default settings;
