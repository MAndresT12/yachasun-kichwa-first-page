import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Modal, TouchableOpacity, Animated, PanResponder } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ConfettiCannon from 'react-native-confetti-cannon';

// Datos para completar las frases
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

// Componente para arrastrar las palabras
const DraggableWord = ({ word, onDrop }) => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
            onPanResponderRelease: (e, gesture) => {
                onDrop(word, gesture);
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            },
        })
    ).current;

    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[pan.getLayout(), styles.optionButton]}
        >
            <Text style={styles.optionText}>{word}</Text>
        </Animated.View>
    );
};

// Componente DropZone para validar cuando el elemento es soltado en esta zona
const DropZone = ({ onDrop, correctWord }) => {
    const [highlighted, setHighlighted] = useState(false);

    const handleDrop = (word, gesture) => {
        const isOverZone = gesture.moveY > 400 && gesture.moveY < 600;  // Ajusta estos valores según la posición de la DropZone
        if (isOverZone) {
            setHighlighted(true);
            onDrop(word);
        } else {
            setHighlighted(false);
        }
    };

    return (
        <View style={[styles.dropZone, highlighted && styles.dropZoneHighlighted]}>
            <Text>{correctWord ? correctWord : "_"}</Text>
        </View>
    );
};

const JuegoCompletarFrases = ({ data, onNext, helpText }) => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [droppedWord, setDroppedWord] = useState(null);
    const [showHelp, setShowHelp] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);

    const currentSentence = sentenceData[currentSentenceIndex];

    useEffect(() => {
        setDroppedWord(null);
        setShowConfetti(false);
        setShowNextButton(false);
    }, [currentSentenceIndex]);

    const handleDrop = (word) => {
        if (word === currentSentence.correctWords[0]) {
            setDroppedWord(word);
            setShowConfetti(true);
            setShowNextButton(true);
        } else {
            Alert.alert("Incorrecto", "Inténtalo de nuevo.");
        }
    };

    const handleNext = () => {
        if (currentSentenceIndex < sentenceData.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
        } else {
            onNext();
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Icono de ayuda */}
            <TouchableOpacity style={styles.helpIcon} onPress={() => setShowHelp(true)}>
                <FontAwesome name="question-circle" size={40} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.title}>Completa la frase en Kichwa</Text>
            <Text style={styles.translation}>Traducción: {currentSentence.translation}</Text>

            {/* Zona de la frase con el espacio para arrastrar */}
            <View style={styles.sentenceContainer}>
                <Text style={styles.sentence}>
                    {currentSentence.sentenceParts[0]}
                    <DropZone correctWord={droppedWord} onDrop={handleDrop} />
                    {currentSentence.sentenceParts[1]}
                </Text>
            </View>

            {/* Opciones como botones arrastrables */}
            <View style={styles.optionsContainer}>
                {currentSentence.options.map((word, index) => (
                    <DraggableWord key={index} word={word} onDrop={handleDrop} />
                ))}
            </View>

            {/* Modal de ayuda */}
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

            {/* Confetti y botón de siguiente */}
            {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fadeOut />}
            {showNextButton && (
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Siguiente</Text>
                </TouchableOpacity>
            )}
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
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        paddingHorizontal: 10,
        paddingBottom: 2,
        minWidth: 50,
        minHeight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
    },
    dropZoneHighlighted: {
        backgroundColor: '#a2e0a2', // Color cuando el elemento es soltado
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    optionButton: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10,
        borderRadius: 10,
    },
    optionText: {
        fontSize: 18,
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
});

export default JuegoCompletarFrases;



///////////////////////////
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Modal, TouchableOpacity, PanResponder, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ConfettiCannon from 'react-native-confetti-cannon';

// Datos de frases para completar
const sentenceData = [
    {
        sentenceParts: ["El ", " come croquetas"],
        correctWords: ["perro"],
        options: ["gato", "perro", "pájaro"],
        translation: "The dog eats snacks (EN)",
    },
    {
        sentenceParts: ["La ", " está embarazada"],
        correctWords: ["mamá"],
        options: ["papá", "mamá", "tía"],
        translation: "The mom is pregnant (EN)",
    },
    {
        sentenceParts: ["El Sol es color ", ""],
        correctWords: ["amarillo"],
        options: ["azul", "amarillo", "verde"],
        translation: "The sun is yellow (EN)",
    },
];

// Componente para arrastrar las palabras
const DraggableWord = ({ word, onDrop }) => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
            onPanResponderRelease: (e, gesture) => {
                onDrop(word, gesture);
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            },
        })
    ).current;

    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[pan.getLayout(), styles.optionButton]}
        >
            <Text style={styles.optionText}>{word}</Text>
        </Animated.View>
    );
};
const JuegoCompletarFrases = ({ onNext, helpText }) => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [selectedWordIndex, setSelectedWordIndex] = useState(null); // Índice de la palabra arrastrada
    const [dropWord, setDropWord] = useState(null); // Palabra que se suelta
    const [showHelp, setShowHelp] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);

    const currentSentence = sentenceData[currentSentenceIndex];

    useEffect(() => {
        resetGame();
    }, [currentSentenceIndex]);

    const resetGame = () => {
        setSelectedWordIndex(null);
        setDropWord(null);
        setShowConfetti(false);
        setShowNextButton(false);
    };

    // Función para manejar la selección de la palabra y hacer el drag
    const handleWordPress = (wordIndex) => {
        setSelectedWordIndex(wordIndex);
    };

    // Configuración para el drag and drop
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderRelease: () => {
            if (selectedWordIndex !== null) {
                handleDrop(currentSentence.options[selectedWordIndex]);
            }
        }
    });

    const checkDrop = (word) => {
        if (word === currentSentence.correctWords[0]) {
            setDropWord(word);
            setShowConfetti(true);
            setShowNextButton(true);
        } else {
            Alert.alert("Incorrecto", "Inténtalo de nuevo.");
        }
        setSelectedWordIndex(null);
    };
    const handleDrop = (word) => {
        const correctWord = currentSentence.correctWords[0]; // Aquí puedes modificar para múltiples correctWords
        if (word === correctWord) {
            setDropWord(word);  // Actualiza el estado con la palabra correcta para la frase actual
            setShowConfetti(true);  // Muestra el confetti si la palabra es correcta
            setShowNextButton(true);  // Muestra el botón "Siguiente"
        } else {
            Alert.alert("Incorrecto", "Inténtalo de nuevo.");
        }
    };
    const handleNext = () => {
        if (currentSentenceIndex < sentenceData.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
        } else {
            onNext();
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Icono de ayuda */}
            <TouchableOpacity style={styles.helpIcon} onPress={() => setShowHelp(true)}>
                <FontAwesome name="question-circle" size={40} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.title}>Completa la frase en Kichwa</Text>
            <Text style={styles.translation}>Traducción: {currentSentence.translation}</Text>

            {/* Zona de la frase con el espacio para soltar */}
            <View style={styles.sentenceContainer}>
                <Text style={styles.sentence}>
                    {currentSentence.sentenceParts[0]}
                    <View {...panResponder.panHandlers} >
                        <Text style={styles.dropZoneText}>
                            {dropWord ? dropWord : "__"}
                        </Text>
                    </View>
                    {currentSentence.sentenceParts[1]}
                </Text>
            </View>

            {/* Opciones como botones arrastrables */}
            <View style={styles.optionsContainer}>
                {currentSentence.options.map((word, index) => (
                    <DraggableWord key={index} word={word} onDrop={handleDrop} />

                ))}
            </View>

            {/* Modal de ayuda */}
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

            {/* Confetti y botón de siguiente */}
            {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fadeOut />}
            {showNextButton && (
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Siguiente</Text>
                </TouchableOpacity>
            )}
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
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        paddingHorizontal: 10,
        paddingBottom: 2,
        minWidth: 50,
        minHeight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
    },
    dropZoneText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    optionButton: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10,
        borderRadius: 10,
    },
    selectedOption: {
        backgroundColor: '#ccc',
    },
    optionText: {
        fontSize: 18,
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
});

export default JuegoCompletarFrases;




////////////////
//Del cual me debo basar desde el inicio
// src/components/JuegoCompletarFrases.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ConfettiCannon from 'react-native-confetti-cannon';

// Datos para completar las frases
const sentenceData = [
    {
        sentenceParts: ["El ", " come croquetas"],
        correctWords: ["perro"],
        options: ["gato", "perro", "pájaro"],
        translation: "The dog eats snacks (EN)",
    },
    {
        sentenceParts: ["La ", " está embarazada"],
        correctWords: ["mamá"],
        options: ["mamá", "papá", "tía"],
        translation: "The mom is pregnant (EN)",
    },
    {
        sentenceParts: ["El Sol es color ", ""],
        correctWords: ["amarillo"],
        options: ["amarillo", "azul", "verde"],
        translation: "The sun is yellow (EN)",
    },
];

const JuegoCompletarFrases = ({ data, onNext, helpText }) => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [selectedWord, setSelectedWord] = useState(null);
    const [showHelp, setShowHelp] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const currentSentence = sentenceData[currentSentenceIndex];

    useEffect(() => {
        setSelectedWord(null);
        setShowConfetti(false);
        setShowNextButton(false);
        setIsCorrect(false);
    }, [currentSentenceIndex]);

    const handleWordPress = (word) => {
        if (word === currentSentence.correctWords[0]) {
            setSelectedWord(word);
            setShowConfetti(true);
            setShowNextButton(true);
            setIsCorrect(true);
        } else {
            Alert.alert("Incorrecto", "Inténtalo de nuevo.");
        }
    };

    const handleNext = () => {
        if (currentSentenceIndex < sentenceData.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
        } else {
            onNext();
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Icono de ayuda */}
            <TouchableOpacity style={styles.helpIcon} onPress={() => setShowHelp(true)}>
                <FontAwesome name="question-circle" size={40} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.title}>Completa la frase en Kichwa</Text>
            <Text style={styles.translation}>Traducción: {currentSentence.translation}</Text>

            {/* Zona de la frase con el espacio para arrastrar */}
            <View style={styles.sentenceContainer}>
                <Text style={styles.sentence}>
                    {currentSentence.sentenceParts[0]}
                    <View style={styles.dropZone}>
                        <Text >
                            {selectedWord ? selectedWord : "_"}
                        </Text>
                    </View>

                    {currentSentence.sentenceParts[1]}
                </Text>
            </View>

            {/* Opciones como botones */}
            <View style={styles.optionsContainer}>
                {currentSentence.options.map((word, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.optionButton}
                        onPress={() => handleWordPress(word)}
                    >
                        <Text style={styles.optionText}>{word}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Modal de ayuda */}
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

            {/* Confetti y botón de siguiente */}
            {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fadeOut />}
            {showNextButton && (
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Siguiente</Text>
                </TouchableOpacity>
            )}
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
    optionButton: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10,
        borderRadius: 10,
    },
    optionText: {
        fontSize: 18,
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
});

export default JuegoCompletarFrases;



// const sentenceDataCompletarFrases = [
//     {
//         sentenceParts: ["Ñukaka aycha ", " yanuni"],
//         correctWords: ["ta"],
//         options: ["tak", "ta", "pak"],
//         translation: "Cocino carne",
//     },
//     {
//         sentenceParts: ["Kan ", " wasi"],
//         correctWords: ["pak"],
//         options: ["pak", "ta", "ñuka"],
//         translation: "Tu casa",
//     },
//     {
//         sentenceParts: ["Ñukanchik tushu", ""],
//         correctWords: ["nkapak"],
//         options: ["nkapak", "pak", "ta"],
//         translation: "Nos vamos a bailar",
//     },
// ];