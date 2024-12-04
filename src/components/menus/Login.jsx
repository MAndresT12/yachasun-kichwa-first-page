import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../../../styles/globalStyles';

import { FloatingHumu } from '../animations/FloatingHumu';

import { CardDefault } from '../ui/cards/CardDefault';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { ImageContainer } from '../ui/imageContainers/ImageContainer';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('HomeScreen');
    };

    const handleExit = () => {
        Alert.alert('Salir', '¿Estás seguro de que quieres salir?', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Sí', onPress: () => console.log('Saliendo...') },
        ]);
    };

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={[localStyles.gradientBackground, styles.container, localStyles.loginContainer]}
        >
            <View style={[localStyles.container, localStyles.loginContainer]}>
                <FloatingHumu initialValue={10}>
                    <ImageContainer path={require('../../../assets/images/humu/humu-happy.png')} />
                </FloatingHumu>
                <CardDefault style={styles.cardContent}>
                    <Text style={localStyles.title}>Bienvenido a YACHASUN KICHWA</Text>
                    <TextInput
                        style={localStyles.input}
                        placeholder="Correo"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={localStyles.input}
                        placeholder="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <View style={localStyles.loginContainer}>
                        <ButtonDefault label="Ingresar" onPress={handleLogin} />
                        <TouchableWithoutFeedback>
                            <Text style={localStyles.text}>¿Olvidaste tu contraseña?</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </CardDefault>
                <ButtonDefault label="Salir" onPress={handleExit} />
            </View>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
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
        borderColor: '#481a0c',
        borderRadius: 5,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 25,
    },
    text: {
        marginTop: 10,
        color: '#481a0c',
        textDecorationLine: 'underline'
    }
});

export default Login;
