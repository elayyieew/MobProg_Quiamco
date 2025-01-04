import { SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { Button } from'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../components/Logo";
import InputField from "../components/login/InputField";

const Signup = ({navigation}) => {
  const [size] = useState(100);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#091A3F', '#054DEB']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.content}>
        <Logo size={size} />
        <InputField title= "Name" label="Enter Name" value={name} onChangeText={setName} />
        <InputField title= "E-mail" label="Enter E-mail" value={email} onChangeText={setEmail} />
        <InputField title= "Password" label="Enter Password" secureTextEntry value={password} onChangeText={setPassword} />
        <InputField title= "Confirm Password" label="Enter Password" secureTextEntry value={password} onChangeText={setPassword} />
        <Button
          mode="contained"
          onPress={() => navigation.navigate('MainApp')}
          buttonColor="#FCB316"
          style={styles.button}
          >
          Log In
          </Button>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 10,  
    marginTop: 5,
    justifyContent: 'center',
    width: 375,
    height: 45
},
  input: {
    width: '100%',
    marginBottom: 10,
  },
});

export default Signup;