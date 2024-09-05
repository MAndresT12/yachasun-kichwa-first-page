import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/globalStyles';
import { Card } from '../ui/Card';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Levels');
    };
  
    const image = require('../../../assets/images/prototype/diablo-prototype.png');

    return (
        <View style={[styles.container, localStyles.loginContainer]}>
            <Image 
                source={image}
                style={localStyles.image} 
                resizeMode="contain"
            />
            <Card style={styles.cardContent}>
                <Text style={localStyles.title}>Welcome to YACHASUN KICHWA</Text>
                <TextInput
                    style={localStyles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={localStyles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <View style={localStyles.buttonContainer}>
                    <TouchableOpacity onPress={handleLogin} style={localStyles.button}>
                        <Text style={localStyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableWithoutFeedback>
                        <Text style={localStyles.text}>Forgot Password?</Text>
                    </TouchableWithoutFeedback>
                </View>
            </Card>
        </View>
    );
};

const localStyles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#481a0c',
        borderRadius: 5,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#481a0c',
        padding: 10,
        borderRadius: 40,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 25,
    },
    text: {
        marginTop: 10,
        color: '#000',
        textDecorationLine: 'underline'
    }
});

export default Login;
