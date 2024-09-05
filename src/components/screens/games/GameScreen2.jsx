// src/components/GameScreen2.jsx

import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { Card } from '../../ui/Card';

const questions = [
    {
        question: "¿Qué significa la partícula '-manta'?",
        options: ["Compañía", "Origen o procedencia", "Límite de lugar", "Localización"],
        answer: "Origen o procedencia"
    },
    {
        question: "¿Cómo se usa la partícula '-wan'?",
        options: ["Para indicar dirección", "Para indicar pertenencia", "Para indicar compañía", "Para hacer preguntas"],
        answer: "Para indicar compañía"
    },
    {
        question: "¿Qué partícula se usa para hacer preguntas en Kichwa?",
        options: ["-wan", "-manta", "-tak", "-man"],
        answer: "-tak"
    },
    {
        question: "¿Cuál es la partícula para indicar localización y tiempo exacto?",
        options: ["-pi", "-manta", "-man", "-wan"],
        answer: "-pi"
    },
    {
        question: "¿Qué significa 'Kunanpachapi'?",
        options: ["En Quito", "Desde ahora", "Hasta aquí", "En este momento"],
        answer: "En este momento"
    }
];

const GameScreen2 = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const navigation = useNavigation();

    const handleOptionPress = (option) => {
        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
            Alert.alert("Correcto!", "Has elegido la respuesta correcta.");
        } else {
            Alert.alert("Incorrecto", "La respuesta correcta era: " + questions[currentQuestionIndex].answer);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            navigation.navigate('Evaluation2', { score: score + 1, totalQuestions: questions.length });
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Juego de Repaso - Parte 2</Text>
                </View>
                <View style={styles.body}>
                    <Card title={`Pregunta ${currentQuestionIndex + 1}`}>
                        <Text style={localStyles.questionText}>{questions[currentQuestionIndex].question}</Text>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={localStyles.optionButton}
                                onPress={() => handleOptionPress(option)}
                            >
                                <Text style={localStyles.optionText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </Card>
                </View>
            </ScrollView>
        </View>
    );
};

const localStyles = StyleSheet.create({
    questionText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    optionButton: {
        backgroundColor: '#5B4D28',
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center',
    },
    optionText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default GameScreen2;
