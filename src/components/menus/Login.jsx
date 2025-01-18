import React, { useState, useContext, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, Linking } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';

import axios from 'axios';
import { UserContext } from '../../context/UserContext';

import { API_URL, FORGOT_PASSWORD_URL, REGISTER_URL } from '@env'; // Import env variables

import { styles } from '../../../styles/globalStyles';

import { FloatingHumu } from '../animations/FloatingHumu';

import { CardDefault } from '../ui/cards/CardDefault';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { ImageContainer } from '../ui/imageContainers/ImageContainer';

const Login = () => {
    const { setUsername } = useContext(UserContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleLogin = async () => {
        setEmailError('');
        setPasswordError('');

        let hasError = false;
        if (!email) {
            setEmailError('El correo es obligatorio.');
            hasError = true;
        } else if (!validateEmail(email)) {
            setEmailError('El correo no tiene un formato válido.');
            hasError = true;
        }

        if (!password) {
            setPasswordError('La contraseña es obligatoria.');
            hasError = true;
        }

        if (hasError) return;

        try {
            const response = await axios.post(`${API_URL}/auth/login/`, { email, password });

            if (response.data) {
                const { name } = response.data;
                setUsername(name);
                showMessage({
                    message: `¡Bienvenido, ${name}!`,
                    type: 'success',
                    duration: 2000,
                });
                navigation.navigate('HomeScreen'); // Navigate to HomeScreen
            }
        } catch (error) {
            showMessage({
                message: 'Usuario o contraseña incorrectas.',
                type: 'danger',
                duration: 2000,
            });
        }
    };

    const handleForgotPassword = () => Linking.openURL(FORGOT_PASSWORD_URL);
    const handleRegister = () => Linking.openURL(REGISTER_URL);

    useFocusEffect(
        useCallback(() => {
            setEmail('');
            setPassword('');
            setEmailError('');
            setPasswordError('');
        }, [])
    );

    return (
        <LinearGradient colors={['#e9cb60', '#F38181']} style={[localStyles.gradientBackground, styles.container, localStyles.loginContainer]}>
            <View style={[localStyles.container, localStyles.loginContainer]}>
                <FloatingHumu initialValue={10}>
                    <ImageContainer path={require('../../../assets/images/humu/humu-happy.png')} />
                </FloatingHumu>
                <CardDefault style={styles.cardContent}>
                    <Text style={localStyles.title}>Inicio de sesión</Text>
                    <TextInput
                        style={[localStyles.input, emailError ? { borderColor: 'red' } : { borderColor: '#481a0c' }]}
                        placeholder="Correo"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    {emailError ? <Text style={localStyles.errorText}>{emailError}</Text> : null}

                    <TextInput
                        style={[localStyles.input, passwordError ? { borderColor: 'red' } : { borderColor: '#481a0c' }]}
                        placeholder="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    {passwordError ? <Text style={localStyles.errorText}>{passwordError}</Text> : null}

                    <View style={localStyles.loginContainer}>
                        <ButtonDefault label="Ingresar" onPress={handleLogin} />
                        <TouchableOpacity onPress={handleForgotPassword}>
                            <Text style={localStyles.text}>¿Olvidaste tu contraseña?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleRegister}>
                            <Text style={localStyles.text}>¿No tienes cuenta? Regístrate aquí</Text>
                        </TouchableOpacity>
                    </View>
                </CardDefault>
            </View>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
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
        borderRadius: 5,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    text: {
        marginTop: 10,
        color: '#481a0c',
        textDecorationLine: 'underline',
    },
});

export default Login;
