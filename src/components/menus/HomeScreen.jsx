import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../../../styles/globalStyles';

import { FloatingHumu } from '../animations/FloatingHumu';
import { FloatingWelcome } from '../animations/FloatingWelcome';

import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { ImageContainer } from '../ui/imageContainers/ImageContainer';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handlePlay = () => {
        navigation.navigate('Main', {
            screen: 'Inicio',
            params: {
                screen: 'HistoryScreen',
            },
        });
    };

    const handleCredits = () => {
        navigation.navigate('Main', {
            screen: 'Inicio',
            params: {
                screen: 'CreditsScreen',
            },
        });
    };

    const handleTuto = () => {
        navigation.navigate('Main', {
            screen: 'Inicio',
            params: {
                screen: 'TutoScreen',
            },
        });
    };

    const handleSessionClose = () => {
        navigation.navigate('Login');
    };

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={[localStyles.gradientBackground, styles.container, localStyles.loginContainer]}

        >
            <FloatingWelcome>
                <ImageContainer path={require('../../../assets/images/menus/welcome-letters.png')} style={localStyles.imageWelcome} />
            </FloatingWelcome>
            <FloatingHumu initialValue={10}>
                <ImageContainer path={require('../../../assets/images/humu/humu-fuckup.png')} />
            </FloatingHumu>
            <View style={styles.buttoncontainerHome}>
                <ButtonDefault label="Jugar" onPress={handlePlay} />
                <ButtonDefault label="Tutorial" onPress={handleTuto} />
                <ButtonDefault label="Créditos" onPress={handleCredits} />
                <ButtonDefault label="Cerrar Sesión" onPress={handleSessionClose} />
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
    },
    imageWelcome: {
        width: 320,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
