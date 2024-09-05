// src/components/IntroduccionJuegoScreen.jsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles as globalStyles } from '../../../../styles/globalStyles';

const IntroduccionJuegoScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <View style={localStyles.contentContainer}>
                {/* Imagen al lado izquierdo */}
                <Image
                    source={require('../../../../assets/images/myths/huma2.png')}
                    style={localStyles.image}
                />

                {/* Speech bubble al lado derecho */}
                <View style={localStyles.speechBubble}>
                    <View>
                        <Text style={localStyles.bubbleText}>
                            ¡Bienvenido! A continuación, se presentarán unos juegos para reforzar tus conocimientos.
                            ¡Diviértete mientras aprendes!
                        </Text>
                    </View>
                    <View style={localStyles.bubbleTail} />
                </View>
            </View>

            <View style={globalStyles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Module1')}>
                    <View style={globalStyles.footerButton}>
                        <Text style={globalStyles.footerButtonText}>Siguiente</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
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

export default IntroduccionJuegoScreen;
