// src/components/ModuloIntroduccion.jsx

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles as globalStyles } from '../../../styles/globalStyles';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { ButtonLevelsInicio } from '../ui/buttons/ButtonLevelsInicio';
import { ComicBubble } from '../ui/bubbles/ComicBubble';
import { FloatingHumu } from '../animations/FloatingHumu';
import { ImageContainer } from './imageContainers/ImageContainer';

const ModuloIntroduccion = ({ imageSource, introText, nextScreen, navigationTarget = 'CaminoLevels' }) => {
    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={[localStyles.gradientBackground, globalStyles.container]}
        >
            <View style={localStyles.contentContainer}>
                {/* Imagen del personaje al lado izquierdo */}
                <FloatingHumu >
                    <ImageContainer path={imageSource} style={localStyles.image} />
                </FloatingHumu>

                {/* Speech bubble para el diálogo explicativo */}
                <View style={localStyles.speechBubbleContainer}>
                    <ComicBubble
                        text={introText}
                        arrowDirection="leftCenter"
                        borderColor="#5f92cf"
                    />
                </View>
            </View>

            <View style={globalStyles.footer}>
                <ButtonLevelsInicio label="Inicio" navigationTarget={navigationTarget} />
                <ButtonDefault label="Siguiente" onPress={() => navigation.navigate(nextScreen)} />
            </View>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        flex: 1,
    },
    image: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
    },
    speechBubbleContainer: {
        padding: 25,
        maxWidth: '65%',
        position: 'relative',
    },
});

export default ModuloIntroduccion;
