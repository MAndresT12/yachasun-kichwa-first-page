import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/globalStyles';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handlePlay = () => {
        navigation.navigate('Main', {
            screen: 'Inicio',
            params: {
                screen: 'Levels',
            },
        });
    };

    const handleSettings = () => {
        navigation.navigate('Main', {
            screen: 'Inicio',
            params: {
                screen: 'SettingsScreen',
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
            <View style={styles.containerHome}>
                <Text style={styles.titleHome}>Yachasun Kichwa</Text>
                <View style={styles.buttoncontainerHome}>
                    <ButtonDefault label="Jugar" onPress={handlePlay} />
                    <ButtonDefault label="Configuración" onPress={handleSettings} />
                    <ButtonDefault label="Cerrar Sesión" onPress={handleSessionClose} />
                </View>
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

export default HomeScreen;
