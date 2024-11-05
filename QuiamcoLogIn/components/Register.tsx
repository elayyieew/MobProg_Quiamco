import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Register = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.linkText}>Need an account? REGISTER</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkText: {
    color: '#ffff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default Register;
