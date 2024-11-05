import React from 'react'
import { TextInput } from 'react-native-paper';

interface InputFieldProps {
    label: string;
    secureTextEntry?: boolean;
    value: string;
    onChangeText: (text: string) => void;
    style?: object;
  }

const InputField: React.FC<InputFieldProps> = ({ label, secureTextEntry, value, onChangeText}) => {
  return (
    <TextInput
        mode="outlined"
        label={label}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={{ width: '90%', marginBottom: 10 }}
        theme={{ colors: { primary: 'black' } }}
    />
  );
};

export default InputField