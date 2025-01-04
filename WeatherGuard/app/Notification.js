import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity ,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';


const Notification = () => {
  const navigation = useNavigation(); // Hook to get the navigation object
  const [selectedTab, setSelectedTab] = useState('alerts');

  return (
    
    <View style={styles.container}>





      <GradientBackground >
        {/**Content here MAAMBONG  */}

     
        <Text>CONTENT HERE MAAMBONG, CHRISTIAN REY!!!!</Text>




      </GradientBackground>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2B48',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1A2B48',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
});

export default Notification;
