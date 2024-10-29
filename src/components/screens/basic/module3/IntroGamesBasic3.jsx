import React from 'react';

import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../../../../../styles/globalStyles';

import { FloatingHumu } from '../../../animations/FloatingHumu';

import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';

const humuTalking = require('../../../../../assets/images/humu/humu-talking.png');

const IntroGamesBasic1 = () => {
    const navigation = useNavigation();

    return (

        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={[localStyles.gradientBackground, styles.container]}
        >
            <View style={localStyles.contentContainer}>
                {/* Imagen al lado izquierdo */}
                <FloatingHumu >
                    <ImageContainer path={humuTalking} style={localStyles.image} />
                </FloatingHumu>

                {/* Speech bubble al lado derecho */}
                <View style={localStyles.speechBubble2}>
                    <ComicBubble
                        text={"¡Bienvenido! A continuación, se presentarán unos juegos para reforzar tus conocimientos del módulo 3.¡Diviértete mientras aprendes! "}
                        arrowDirection="leftCenter"
                        borderColor="#5f92cf"
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <ButtonLevelsInicio label="Inicio" />

                <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('GamesBasicModule3')} />
            </View>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
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
    speechBubble: {
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#ddd',
        padding: 15,
        maxWidth: '60%',
        position: 'relative',
    },
    speechBubble2: {
        padding: 25,
        maxWidth: '65%',
        position: 'relative',
    },
    bubbleText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bubbleTail: {
        position: 'absolute',
        left: -20,
        top: '10%',
        width: 0,
        height: 0,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderRightWidth: 20,
        borderStyle: 'solid',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#fff',
    },
});

export default IntroGamesBasic1;
