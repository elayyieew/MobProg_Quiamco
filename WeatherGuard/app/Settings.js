import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import GradientBackground from '../components/GradientBackground';

const Settings = ({ navigation }) => {
  return (
    <GradientBackground>
      {/* Menu Items */}
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Account')}
        >
          <View style={styles.menuLeft}>
            <Ionicons name="person" size={15} color="#fff" style={styles.menuIcon} />
            <Text style={styles.menuText}>Account</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#fff" style={styles.chevron} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Privacyandsecurity')}
        >
          <View style={styles.menuLeft}>
            <Ionicons name="lock-closed" size={15} color="#fff" style={styles.menuIcon} />
            <Text style={styles.menuText}>Privacy and Security</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#fff" style={styles.chevron} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('About')}
        >
          <View style={styles.menuLeft}>
            <MaterialIcons name="help-outline" size={15} color="#fff" style={styles.menuIcon} />
            <Text style={styles.menuText}>About</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#fff" style={styles.chevron} />
        </TouchableOpacity>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 30
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 50, // Spacing between icon and text
  },
  menuText: {
    fontSize: 16,
    color: '#fff',
  },
  chevron: {
    marginLeft: 50, // Adjust spacing from text (if needed)
  },
});

export default Settings;
