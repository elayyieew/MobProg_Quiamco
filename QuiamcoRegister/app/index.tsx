import { SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "@/components/Logo";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

export default function Index() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#091A3F', '#1844A5']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.content}>
        <Logo />
        <InputField title= "Name" label="Enter Name" value={name} onChangeText={setName} />
        <InputField title= "E-mail" label="Enter E-mail" value={email} onChangeText={setEmail} />
        <InputField title= "Password" label="Enter Password" secureTextEntry value={password} onChangeText={setPassword} />
        <InputField title= "Confirm Password" label="Enter Password" secureTextEntry value={password} onChangeText={setPassword} />
        <Button/>
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
  input: {
    width: '100%',
    marginBottom: 10,
  },
});