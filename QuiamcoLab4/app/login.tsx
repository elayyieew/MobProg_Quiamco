import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-paper';
import {useRouter} from 'expo-router';
import Logo from '@/src/Logo';
import InputField from '@/src/InputField';
import RememberMeCheckbox from '@/src/RememberMeCheckbox';
import OrDivider from '@/src/orDivider';


const login = () => {
    const router = useRouter();
    const [size] = useState(100);
    const [email] = useState('');
    const [password] = useState('');

    return (
        <LinearGradient
            colors={['#091A3F', '#054DEB']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <Logo size={size} />
                <InputField title="E-mail" label="Enter E-mail" value={email} />
                <InputField title="Password" label="Enter Password" secureTextEntry value={password} />
                <RememberMeCheckbox />
                <Button
                    mode="contained"
                    onPress={() => router.replace('dashboard')}
                    buttonColor="#FCB316"
                    style={styles.button}
                >
                    Log In
                </Button>
                <OrDivider />
                <Button
                    mode='text'
                    onPress={() => router.push('/register')}
                    textColor='white'
                >
                    Need an Account? REGISTER.
                </Button>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles= StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        marginTop: 170,
        alignItems: 'center',
    },
    button: {
        borderRadius: 10,  
        justifyContent: 'center',
        width: 375,
        height: 45
    },
})
export default login