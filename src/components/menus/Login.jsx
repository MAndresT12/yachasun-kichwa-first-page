import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/globalStyles';
import { CardDefault } from '../ui/cards/CardDefault';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { ImageContainer } from '../ui/imageContainers/ImageContainer';

const FloatingHumu = ({ path, style }) => {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation, {
                    toValue: 10,
                    duration: 1000,
                    useNativeDriver: true, 
                }),
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [animation]);

    const animatedStyle = {
        transform: [{ translateY: animation }],
    };

    return (
        <Animated.View style={[animatedStyle, style]}>
            <ImageContainer path={path} />
        </Animated.View>
    );
};

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Levels');
    };

    return (
        <View style={[styles.container, localStyles.loginContainer]}>
            <FloatingHumu path={require('../../../assets/images/humu/humu-happy.png')} style={styles.imageModal} />
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
