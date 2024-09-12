// src/components/JuegoCompletarFrases.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DraggableWord from '../customs/DraggableWord';
import ConfettiCannon from 'react-native-confetti-cannon';

const sentenceData = [
    {
        sentenceParts: ["Ñukaka aycha ", " yanuni"],
        correctWords: ["ta"],
        options: ["tak", "ta", "pak"],
        translation: "Cocino carne",
    },
    {
        sentenceParts: ["Kan ", " wasi"],
        correctWords: ["pak"],
        options: ["pak", "ta", "ñuka"],
        translation: "Tu casa",
    },
    {
        sentenceParts: ["Ñukanchik tushu", ""],
        correctWords: ["nkapak"],
        options: ["nkapak", "pak", "ta"],
        translation: "Nos vamos a bailar",
    },
];

const JuegoCompletarFrases = ({ onNext, helpText }) => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(Math.floor(Math.random() * sentenceData.length));
    const [selectedWord, setSelectedWord] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showHelp, setShowHelp] = useState(false);

    const currentSentence = sentenceData[currentSentenceIndex];

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
        const newIndex = Math.floor(Math.random() * sentenceData.length);
        setCurrentSentenceIndex(newIndex);
        setSelectedWord(null);
        setShowConfetti(false);
        setShowNextButton(false);
    };

    return (
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
                <TouchableOpacity style={styles.nextButton} onPress={onNext}>
                    <Text style={styles.nextButtonText}>Siguiente</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
                <Text style={styles.restartButtonText}>Reiniciar</Text>
            </TouchableOpacity>

            <Modal animationType="slide" transparent={true} visible={showHelp} onRequestClose={() => setShowHelp(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.bubbleText}>{helpText}</Text>
                        <TouchableOpacity onPress={() => setShowHelp(false)}>
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#18a7ac',
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
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    bubbleText: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
    closeButtonText: {
        marginTop: 20,
        color: '#822929',
        fontSize: 18,
    },
});

export default JuegoCompletarFrases;
