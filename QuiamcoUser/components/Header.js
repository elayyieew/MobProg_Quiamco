import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfile = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.headerBackground}>
      </View>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../assets/images/avatar.jpg')}
          style={styles.avatar}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
      },
      headerBackground: {
        width: '100%',
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4f5938', 
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
      avatarContainer: {
        position: 'absolute',
        top: 100, 
        alignItems: 'center',
      },
      avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#fff',
      },
    });
export default UserProfile;
