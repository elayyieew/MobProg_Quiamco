import { View, Text, Image } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={{alignItems: 'center', marginTop: 80}}>
      <Image source={require('../assets/image/avatar.jpg')} 
      style={{ 
        width: 150, 
        height: 150, 
        borderRadius: 100,
         }} />
    </View>
  );
}

export default Profile;
