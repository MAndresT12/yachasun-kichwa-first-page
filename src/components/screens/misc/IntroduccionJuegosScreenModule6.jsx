// src/components/IntroduccionJuegoScreenModule6.jsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles as globalStyles } from '../../../../styles/globalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';
import { ComicBubble } from '../../ui/bubbles/ComicBubble';
const IntroduccionJuegoScreenModule6 = () => {
    const navigation = useNavigation();

    return (

        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={[localStyles.gradientBackground, globalStyles.container]}
        >
            <View style={localStyles.contentContainer}>
                {/* Imagen al lado izquierdo */}
                <Image
                    source={require('../../../../assets/images/humu/humu-talking.png')}
                    style={localStyles.image}
                />

                {/* Speech bubble al lado derecho */}
                <View style={localStyles.speechBubble2}>
                    <ComicBubble
                        text={"¡Bienvenido! A continuación, se presentarán unos juegos para reforzar tus conocimientos.¡Diviértete mientras aprendes! "}
                        arrowDirection="leftCenter"
                        borderColor="#5f92cf"
                    />
                </View>
            </View>

            <View style={globalStyles.footer}>
                <ButtonLevelsInicio label="Inicio" />

                <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('Module6')} />

            </View>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    speechBubble2: {
        padding: 25,
        maxWidth: '65%',
        position: 'relative',
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
    speechBubble: {
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#ddd',
        padding: 15,
        maxWidth: '60%',
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

export default IntroduccionJuegoScreenModule6;
