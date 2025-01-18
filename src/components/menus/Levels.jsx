// src/components/Levels.jsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from '../../../styles/globalStyles';

import { LinearGradient } from 'expo-linear-gradient';

import { UserContext } from '../../context/UserContext';

import { FloatingHumu } from '../animations/FloatingHumu';

import { CardDefault } from '../ui/cards/CardDefault';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { ImageContainer } from '../ui/imageContainers/ImageContainer';

const Levels = () => {
    const { username } = useContext(UserContext);
    const navigation = useNavigation();

    const handlePressBasic = () => {
        navigation.navigate('InstructionsBasic');
    };

    const handlePressMid = () => {
        navigation.navigate('InstructionsMid');
    };

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={[localStyles.gradientBackground, styles.container]}
        >
            <ScrollView style={styles.scrollView}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <CardDefault title="¡Un gusto conocerte!" style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[styles.cardContent, localStyles.welcomeText]}>
                            {username}
                        </Text>
                        <Text style={styles.cardContent}>
                            Estos son los niveles de dificultad que tendrás que 
                            superar para volverte un maestro del Kichwa. Escoge entre uno de los dos niveles y comencemos.{"\n\n"}
                            Recuerda que para comenzar el nivel intermadio debes haber completado el nivel básico, pero 
                            siempre podrás regresar a repasar lo aprendido.
                        </Text>
                    </CardDefault>
                    <CardDefault style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <FloatingHumu >
                            <ImageContainer path={require('../../../assets/images/humu/humu-happy.jpg')} />
                        </FloatingHumu>
                        <ButtonDefault label="Básico" onPress={handlePressBasic} />
                    </CardDefault>
                    <CardDefault>
                        <FloatingHumu >
                            <ImageContainer path={require('../../../assets/images/humu/humu-fuckup.jpg')} />
                        </FloatingHumu>
                        <ButtonDefault label="Intermedio" onPress={handlePressMid} />
                    </CardDefault>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    cardContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 5,
    },
    button: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5B4D28',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    welcomeText: {
        padding: 10,
        fontSize: 24,
        textAlign: 'center',
    },
});

export default Levels;
