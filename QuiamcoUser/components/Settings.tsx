import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const Settings = ({ title, items }) => {
    return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{title}</Text>
          {items.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Ionicons name="chevron-forward" size={18} color="#fff" />
            </View>
          ))}
        </View>
  )
}

const styles =StyleSheet.create({ 
    section: {
        marginVertical: 10,
        paddingHorizontal: 16,
      },
      sectionTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1844A5',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
      },
      itemText: {
        color: '#fff',
        fontSize: 16,
      },
})
export default Settings