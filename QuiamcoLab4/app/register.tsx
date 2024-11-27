import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Logo from '@/src/Logo'
import InputField from '@/src/InputField'
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";  



const register = () => {
    const router = useRouter();
    const [size] = useState(100)
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

  return (
    <LinearGradient
        colors={['#091A3F', '#054DEB']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.background}
    >
        <SafeAreaView style={styles.container}>
            <Logo size={size}/>
            <InputField title= "Name" label="Enter Name" value={name} onChangeText={setName} />
            <InputField title= "E-mail" label="Enter E-mail" value={email} onChangeText={setEmail} />
            <InputField title= "Password" label="Enter Password" secureTextEntry value={password} onChangeText={setPassword} />
            <InputField title= "Confirm Password" label="Enter Password" secureTextEntry value={password} onChangeText={setPassword} />
            <Button
                mode="contained"
                onPress={() => router.replace('../dashboard')}
                buttonColor="#FCB316"
                style= {{ width: '90%', borderRadius: 8, marginTop: 10}}
                textColor='white'
            >
                Log In
            </Button>
        </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        marginTop: 150,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        marginBottom: 10,
    },
    
})

export default register