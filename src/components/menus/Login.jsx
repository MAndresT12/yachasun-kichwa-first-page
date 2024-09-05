import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/globalStyles';
import { CardDefault } from '../ui/cards/CardDefault';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { ImageContainer } from '../ui/imageContainers/ImageContainer';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Levels');
    };

    return (
        <View style={[styles.container, localStyles.loginContainer]}>
            <ImageContainer path={require('../../../assets/images/humu/humu-happy.png')}/>
            <CardDefault style={styles.cardContent}>
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
                <View style={localStyles.loginContainer}>
                    <ButtonDefault label="Login" onPress={handleLogin} />
                    <TouchableWithoutFeedback>
                        <Text style={localStyles.text}>Forgot Password?</Text>
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
        color: '#000',
        textDecorationLine: 'underline'
    }
});

export default Login;
