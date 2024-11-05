import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View>
    <View style={styles.header}>
      <Ionicons name="arrow-back" size={24} color="#fff" />
      <Text style={styles.headerText}>Account</Text>
    </View>
    <View style={styles.divider}/> 
  </View>
  );
} 

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#fff', 
  },
})

export default Header