// src/components/HangmanGame.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, TouchableWithoutFeedback, Modal, Image } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/globalStyles';
import { FontAwesome } from '@expo/vector-icons';
import { ComicBubble } from './bubbles/ComicBubble';
import { FloatingHumu } from '../animations/FloatingHumu';
import { ImageContainer } from './imageContainers/ImageContainer';
import { ButtonDefault } from './buttons/ButtonDefault';
import { ButtonLevelsInicio } from './buttons/ButtonLevelsInicio';
const HangmanGame = ({ words, onNext, helpText, navigationTarget = 'CaminoLevels' }) => {
    const navigation = useNavigation();

    const [selectedWord, setSelectedWord] = useState(words[Math.floor(Math.random() * words.length)]);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [showHelp, setShowHelp] = useState(false);  // Estado para mostrar la ayuda del juego

    const handleGuess = (letter) => {
        if (selectedWord.word.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if (selectedWord.word.split('').every((l) => guessedLetters.includes(l) || l === letter)) {
                setShowConfetti(true);
                setGameWon(true);
                setTimeout(() => {
                    Alert.alert("¡Felicidades!", "Has ganado el juego.");
                }, 500);
            }
        } else {
            setWrongGuesses(wrongGuesses + 1);
            if (wrongGuesses + 1 >= 6) {
                Alert.alert("Has perdido", `La palabra era: ${selectedWord.word}`);
            }
        }
    };

    const renderWord = () => {
        return selectedWord.word.split('').map((letter, index) => (
            <Text key={index} style={stylesHangman.letter}>
                {guessedLetters.includes(letter) ? letter : '_'}
            </Text>
        ));
    };

    const renderButtons = () => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        return alphabet.map((letter, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => handleGuess(letter)}
                style={stylesHangman.button}
                disabled={guessedLetters.includes(letter) || wrongGuesses >= 6}
            >
                <Text style={stylesHangman.buttonText}>{letter}</Text>
            </TouchableOpacity>
        ));
    };

    const renderHangman = () => {
        return (
            <View style={stylesHangman.hangmanContainer}>
                <View style={stylesHangman.base} />
                <View style={stylesHangman.verticalBar} />
                <View style={stylesHangman.horizontalBar} />
                <View style={stylesHangman.rope} />
                {wrongGuesses > 0 && <View style={stylesHangman.head} />}
                {wrongGuesses > 1 && <View style={stylesHangman.body} />}
                {wrongGuesses > 2 && <View style={stylesHangman.leftArm} />}
                {wrongGuesses > 3 && <View style={stylesHangman.rightArm} />}
                {wrongGuesses > 4 && <View style={stylesHangman.leftLeg} />}
                {wrongGuesses > 5 && <View style={stylesHangman.rightLeg} />}
            </View>
        );
    };

    return (
        <ScrollView>
            <View style={stylesHangman.container}>
                {/* Icono de ayuda */}
                <TouchableOpacity style={stylesHangman.helpIcon} onPress={() => setShowHelp(true)}>
                    <FontAwesome name="question-circle" size={40} color="#fff" />
                </TouchableOpacity>
                <Text style={stylesHangman.title}>Ahorcado</Text>
                <Text style={stylesHangman.translation}>Traducción: {selectedWord.translation}</Text>
                {renderHangman()}
                <View style={stylesHangman.wordContainer}>{renderWord()}</View>
                <View style={stylesHangman.buttonsContainer}>{renderButtons()}</View>
                <Text style={stylesHangman.wrongGuesses}>Errores: {wrongGuesses}</Text>
                {/* <TouchableOpacity
                    style={stylesHangman.restartButton}
                    onPress={() => {
                        setSelectedWord(words[Math.floor(Math.random() * words.length)]);
                        setGuessedLetters([]);
                        setWrongGuesses(0);
                        setShowConfetti(false);
                        setGameWon(false);
                    }}
                >
                    <Text style={stylesHangman.restartButtonText}>Reiniciar</Text>
                </TouchableOpacity> */}

                <ButtonLevelsInicio label="Reiniciar" onPress={() => {
                    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
                    setGuessedLetters([]);
                    setWrongGuesses(0);
                    setShowConfetti(false);
                    setGameWon(false);
                }} />
                <ButtonLevelsInicio navigationTarget={navigationTarget} label="Inicio" />
                {/* Modal de ayuda */}
                <Modal animationType="fade" transparent={true} visible={showHelp} onRequestClose={() => setShowHelp(false)}>
                    <View style={stylesHangman.modalContainer}>
                        <View style={stylesHangman.modalContent}>
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
                            {/* <View style={stylesHangman.contentContainer}>
                                <Image source={require('../../../assets/images/humu/humu-talking.png')} style={stylesHangman.image} />
                                <View style={stylesHangman.speechBubble}>
                                    <Text style={stylesHangman.bubbleText}>{helpText}</Text>
                                    <View style={stylesHangman.bubbleTail} />
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => setShowHelp(false)}>
                                <Text style={stylesHangman.closeButtonText}>Cerrar</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </Modal>
                {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fadeOut />}
                {gameWon && (
                    <View>
                        <ButtonDefault label="Siguiente" onPress={onNext} />

                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const stylesHangman = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        // backgroundColor: '#18a7ac',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    translation: {
        fontSize: 18,
        marginVertical: 10,
    },
    wordContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    letter: {
        fontSize: 32,
        marginHorizontal: 5,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
    },
    wrongGuesses: {
        fontSize: 18,
        marginVertical: 10,
    },
    hangmanContainer: {
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative',
        height: 250,
    },
    base: {
        position: 'absolute',
        bottom: -20,
        width: 150,
        height: 10,
        backgroundColor: '#000',
    },
    verticalBar: {
        position: 'absolute',
        height: '100%',
        width: 10,
        backgroundColor: '#000',
        left: '50%',
        marginLeft: -50,
    },
    horizontalBar: {
        position: 'absolute',
        height: 10,
        width: '60%',
        backgroundColor: '#000',
        top: 0,
        left: '-10%',
    },
    rope: {
        position: 'absolute',
        height: 50,
        width: 2,
        backgroundColor: '#000',
        top: 10,
        left: '50%',
        marginLeft: -185,
    },
    head: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#000',
        position: 'absolute',
        top: 60,
    },
    body: {
        width: 10,
        height: 100,
        backgroundColor: '#000',
        position: 'absolute',
        top: 110,
    },
    leftArm: {
        width: 50,
        height: 10,
        backgroundColor: '#000',
        position: 'absolute',
        top: 140,
        left: 10,
        transform: [{ rotate: '45deg' }],
    },
    rightArm: {
        width: 50,
        height: 10,
        backgroundColor: '#000',
        position: 'absolute',
        top: 140,
        right: 10,
        transform: [{ rotate: '-45deg' }],
    },
    leftLeg: {
        width: 50,
        height: 10,
        backgroundColor: '#000',
        position: 'absolute',
        top: 220,
        left: 10,
        transform: [{ rotate: '45deg' }],
    },
    rightLeg: {
        width: 50,
        height: 10,
        backgroundColor: '#000',
        position: 'absolute',
        top: 220,
        right: 10,
        transform: [{ rotate: '-45deg' }],
    },
    restartButton: {
        backgroundColor: '#822929',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
    },
    restartButtonText: {
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
    nextButtonText: {
        color: '#822929',
        fontSize: 18,
        marginTop: 20,
    },
});

export default HangmanGame;
