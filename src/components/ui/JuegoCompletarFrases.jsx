// src/components/JuegoCompletarFrases.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Modal, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DraggableWord from '../customs/DraggableWord';
import ConfettiCannon from 'react-native-confetti-cannon';
import { LinearGradient } from 'expo-linear-gradient';
import { styles as globalStyles } from '../../../styles/globalStyles';
import { ButtonDefault } from './buttons/ButtonDefault';
import { ButtonLevelsInicio } from './buttons/ButtonLevelsInicio';

const JuegoCompletarFrases = ({ data, onNext, helpText }) => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(Math.floor(Math.random() * data.length));
    const [selectedWord, setSelectedWord] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showHelp, setShowHelp] = useState(false);

    const currentSentence = data[currentSentenceIndex];

    const handleDrop = (position) => {
        if (position.word === currentSentence.correctWords[0]) {
            setSelectedWord(position.word);
            setShowConfetti(true);
            setShowNextButton(true);
        } else {
            Alert.alert("Incorrecto", "Inténtalo de nuevo.");
        }
    };

    const handleRestart = () => {
        const newIndex = Math.floor(Math.random() * data.length);
        setCurrentSentenceIndex(newIndex);
        setSelectedWord(null);
        setShowConfetti(false);
        setShowNextButton(false);
    };

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={styles.linearContent}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <TouchableOpacity style={styles.helpIcon} onPress={() => setShowHelp(true)}>
                    <FontAwesome name="question-circle" size={40} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.title}>Completa la frase en Kichwa</Text>
                <Text style={styles.translation}>Traducción: {currentSentence.translation}</Text>

                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>
                        {currentSentence.sentenceParts[0]}
                        <View style={styles.dropZone}>
                            <Text>{selectedWord ? selectedWord : "_"}</Text>
                        </View>
                        {currentSentence.sentenceParts[1]}
                    </Text>
                </View>

                <View style={styles.optionsContainer}>
                    {currentSentence.options.map((word, index) => (
                        <DraggableWord key={index} word={word} onDrop={handleDrop} />
                    ))}
                </View>

                {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fadeOut />}

                {showNextButton && (
                    <ButtonDefault label="Siguiente" onPress={onNext} />

                )}

                <ButtonLevelsInicio label="Reiniciar" onPress={handleRestart} />
                <ButtonLevelsInicio label="Inicio" />


                {/* Modal de ayuda */}
                <Modal animationType="slide" transparent={true} visible={showHelp} onRequestClose={() => setShowHelp(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <View style={styles.contentContainer}>
                                <Image source={require('../../../assets/images/humu/humu-talking.png')} style={styles.image} />
                                <View style={styles.speechBubble}>
                                    <Text style={styles.bubbleText}>{helpText}</Text>
                                    <View style={styles.bubbleTail} />
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => setShowHelp(false)}>
                                <Text style={styles.closeButtonText}>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearContent: {
        flexGrow: 1,
        // backgroundColor: '#18a7ac',
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        // backgroundColor: '#18a7ac',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    translation: {
        fontSize: 18,
        marginBottom: 10,
        fontStyle: 'italic',
    },
    sentenceContainer: {
        marginVertical: 20,
    },
    sentence: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    dropZone: {
        borderWidth: 2,
        borderColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#f9f9f9',
        minWidth: 80,
        minHeight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
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
    restartButton: {
        marginTop: 20,
        backgroundColor: '#005A9C',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
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
});

export default JuegoCompletarFrases;
