import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-paper';
import Logo from '../components/Logo';
import InputField from '../components/login/InputField';
import OrDivider from '../components/login/orDivider';


const login = ({navigation}) => {
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
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('MainApp')}
                    buttonColor="#FCB316"
                    style={styles.button}
                >
                    Log In
                </Button>
                <OrDivider />
                <Button
                    mode='text'
                    onPress={() => navigation.navigate('Signup')}
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
        marginTop: 20,
        justifyContent: 'center',
        width: 375,
        height: 45
    },
})
export default login