import React from 'react';
import { Text, View, StyleSheet } from 'react-native'; 
import { TextInput } from 'react-native-paper';

interface InputFieldProps {
    label: string;
    title?: string; 
    secureTextEntry?: boolean;
    value: string;
    onChangeText: (text: string) => void;
    style?: object;
}

const InputField: React.FC<InputFieldProps> = ({ title, label, secureTextEntry, value, onChangeText, style }) => {
  return (
    <View style={[styles.container, style]}> 
      {title && <Text style={styles.title}>{title}</Text>} 
      <TextInput
        mode="outlined"
        label={label}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={styles.input} 
        theme={{ colors: { primary: 'black' } }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 10,
  },
  title: {
    marginBottom: 5,
    color: 'white'
  },
  input: {
    width: '100%',
  },
});

export default InputField;