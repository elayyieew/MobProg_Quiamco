import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar from '@/src/Avatar';
import Settings from '@/src/Settings';


export default function Index() {
  return (
<LinearGradient
      colors={['#091A3F', '#054DEB']}
      start={{ x: 0, y: 0 }}
      end={{ x: -1, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView>
        <Avatar/>
        <Settings
        title="Personal Details"
        items={[
          { name: 'Update name' },
          { name: 'Contact Info' },
        ]}
      />
      <Settings
        title="Password and security"
        items={[
          { name: 'Change password' },
          { name: 'Two-factor authentication' },
        ]}
      />
      <Settings
        title="Security checks"
        items={[
          { name: 'Where you’re logged in' },
          { name: 'Login alerts' },
        ]}
      />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  
});