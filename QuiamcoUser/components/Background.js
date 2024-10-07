import { StyleSheet, View } from 'react-native';
import React from 'react';

const Background = () => {
  return (
    <View style={[styles.container, { flexDirection: 'column' }]}> 
      <View style={{ flex: 1, backgroundColor: 'red' }} />
      <View style={{ flex: 5, backgroundColor: 'blue' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20,
  },
});

export default Background;
