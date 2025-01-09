import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Animated, Easing, TextInput, Alert, Image, Modal } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { styles } from '../../../styles/globalStyles';

import { FontAwesome } from '@expo/vector-icons';
import { ComicBubble } from './bubbles/ComicBubble';
import { FloatingHumu } from '../animations/FloatingHumu';
import { ImageContainer } from './imageContainers/ImageContainer';
import { ButtonDefault } from './buttons/ButtonDefault';
import { ButtonLevelsInicio } from './buttons/ButtonLevelsInicio';
const RuletaGame = ({ data, onNext, helpText, navigationTarget = 'CaminoLevels' }) => {
    const [selectedWord, setSelectedWord] = useState(null);
    const [inputTranslation, setInputTranslation] = useState('');
    const [isSpinning, setIsSpinning] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showHelp, setShowHelp] = useState(false);

    const spinValue = useRef(new Animated.Value(0)).current;

    const spinPointer = () => {
        if (!isSpinning) {
            setIsSpinning(true);
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomAngle = 360 * 5 + randomIndex * (360 / data.length);

            Animated.timing(spinValue, {
                toValue: randomAngle,
                duration: 4000,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start(() => {
                setSelectedWord(data[randomIndex]);
                setIsSpinning(false);
                setShowConfetti(true);
            });
        }
    };

    const checkTranslation = () => {
        if (inputTranslation.toLowerCase() === selectedWord.kichwa.toLowerCase()) {
            Alert.alert('¡Correcto!', 'Has acertado la traducción.');
            setShowNextButton(true);
            setShowConfetti(true);
        } else {
            Alert.alert('Incorrecto', 'Inténtalo de nuevo.');
        }
    };

    const resetGame = () => {
        setSelectedWord(null);
        setInputTranslation('');
        setShowConfetti(false);
        setShowNextButton(false);
    };

    const spinInterpolation = spinValue.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <ScrollView style={stylesRuleta.scrollContainer}>
            <View style={stylesRuleta.container}>
                {/* Icono de ayuda */}
                <TouchableOpacity style={stylesRuleta.helpIcon} onPress={() => setShowHelp(true)}>
                    <FontAwesome name="question-circle" size={40} color="#fff" />
                </TouchableOpacity>
                <Text style={stylesRuleta.title}>Gira la ruleta</Text>

                <View style={stylesRuleta.wheelContainer}>
                    {/* La ruleta estática con las palabras */}
                    <View style={stylesRuleta.wheel}>
                        {data.map((item, index) => (
                            <View
                                key={index}
                                style={[stylesRuleta.segment, { transform: [{ rotate: `${index * (360 / data.length)}deg` }] }]}
                            >
                                <Text style={stylesRuleta.segmentText}>{item.spanish}</Text>
                            </View>
                        ))}
                    </View>

                    {/* El pointer animado */}
                    <Animated.View style={[stylesRuleta.animatedPointer, { transform: [{ rotate: spinInterpolation }] }]}>
                        <View style={stylesRuleta.pointerPico} />
                        <View style={stylesRuleta.pointer}>
                        </View>
                    </Animated.View>
                </View>

                {/* <TouchableOpacity style={stylesRuleta.spinButton} onPress={spinPointer} disabled={isSpinning}>
                    <Text style={stylesRuleta.spinButtonText}>Girar</Text>
                </TouchableOpacity> */}

                <ButtonLevelsInicio label="Girar" onPress={spinPointer} disabled={isSpinning} />
                <ButtonLevelsInicio navigationTarget={navigationTarget} label="Inicio" />

                {selectedWord && (
                    <View style={stylesRuleta.resultContainer}>
                        <Text style={stylesRuleta.resultText}>
                            La palabra es: <Text style={stylesRuleta.word}>{selectedWord.spanish}</Text>
                        </Text>
                        <Text style={stylesRuleta.instructionText}>Escribe la traducción en kichwa:</Text>
                        <TextInput
                            style={stylesRuleta.input}
                            value={inputTranslation}
                            onChangeText={setInputTranslation}
                            placeholder="Traducción"
                        />
                        {/* <TouchableOpacity style={stylesRuleta.checkButton} onPress={checkTranslation}>
                            <Text style={stylesRuleta.checkButtonText}>Verificar</Text>
                        </TouchableOpacity> */}
                        <ButtonLevelsInicio label="Verificar" onPress={checkTranslation} />

                    </View>
                )}
                {/* Modal de ayuda */}
                <Modal animationType="fade" transparent={true} visible={showHelp} onRequestClose={() => setShowHelp(false)}>
                    <View style={stylesRuleta.modalContainer}>
                        <View style={stylesRuleta.modalContent}>
                            <View style={styles.helpModalContent}>
                                <FloatingHumu >
                                    <ImageContainer path={require('../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                                </FloatingHumu>
                                <ComicBubble
                                    text={helpText}
                                    arrowDirection="leftUp"
                                />
                            </View>
                            <View style={styles.buttonContainerAlphabet}>
                                <TouchableOpacity onPress={() => setShowHelp(false)}>
                                    <View style={styles.buttonDefaultAlphabet}>
                                        <Text style={styles.buttonTextAlphabet}>Cerrar</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/* <View style={stylesRuleta.contentContainer}>
                            <Image source={require('../../../assets/images/humu/humu-talking.png')} style={stylesRuleta.image} />
                            <View style={stylesRuleta.speechBubble}>
                                <Text style={stylesRuleta.bubbleText}>{helpText}</Text>
                                <View style={stylesRuleta.bubbleTail} />
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => setShowHelp(false)}>
                            <Text style={stylesRuleta.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity> */}
                        </View>
                    </View>
                </Modal>
                {showNextButton && (
                    <View style={styles.buttonContainerAlphabet}>
                        <ButtonDefault label="Siguiente" onPress={onNext} />

                    </View>
                )}

                {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fadeOut />}
            </View>
        </ScrollView>
    );
};

const stylesRuleta = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    wheelContainer: {
        position: 'relative',
        width: 250,
        height: 250,
        marginBottom: 30,
    },
    wheel: {
        width: '100%',
        height: '100%',
        borderRadius: 125,
        borderWidth: 5,
        borderColor: '#fff',
        position: 'absolute',
    },
    segment: {
        position: 'absolute',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        transformOrigin: 'bottom right',
    },
    segmentText: {
        transform: [{ rotate: '-45deg' }],
        color: '#fff',
        fontSize: 16,
    },
    pointer: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 30,
        borderWidth: 4,
        borderColor: 'rgba(0, 0, 0, 0.75)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pointerText: {
        textTransform: 'uppercase',
        fontWeight: '600',
        color: '#333',
        letterSpacing: 0.1,
    },
    pointerPico: {
        position: 'absolute',
        top: '13%',
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 30,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#ffffff', // Color de la flecha
        zIndex: 15,
    },
    animatedPointer: {
        position: 'absolute',
        top: '40%', // Posiciona el pointer en el centro superior de la ruleta
        left: '40%',
    },
    spinButton: {
        marginVertical: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#005A9C',
        borderRadius: 10,
    },
    spinButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    resultContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    resultText: {
        fontSize: 18,
        marginBottom: 10,
    },
    word: {
        fontWeight: 'bold',
        color: '#fff',
    },
    instructionText: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        width: 200,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    checkButton: {
        backgroundColor: '#822929',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    checkButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    nextButton: {
        marginTop: 20,
        backgroundColor: '#822929',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    helpIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 330,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
    },
    speechBubble: {
        marginLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#ddd',
        padding: 15,
        maxWidth: '70%',
        position: 'relative',
    },
    bubbleText: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
    bubbleTail: {
        position: 'absolute',
        left: -20,
        top: '50%',
        width: 0,
        height: 0,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderRightWidth: 20,
        borderStyle: 'solid',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#ddd',
    },
    closeButtonText: {
        marginTop: 20,
        color: '#822929',
        fontSize: 18,
    },
});

export default RuletaGame;
