// src/components/GameScreen6.jsx

import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';

const questions = [
    {
        question: "¿Cómo se forma el pasado progresivo en Kichwa?",
        options: ["Añadiendo -rka", "Añadiendo -kri", "Añadiendo -kurka", "Añadiendo -sha"],
        answer: "Añadiendo -kurka"
    },
    {
        question: "¿Qué partícula se usa para formar el futuro próximo en Kichwa?",
        options: ["-kri", "-rka", "-sha", "-ku"],
        answer: "-kri"
    },
    {
        question: "¿Qué significa la partícula '-ku' en el presente progresivo?",
        options: ["Futuro", "Pasado", "Progresivo", "Inseguridad"],
        answer: "Progresivo"
    },
    {
        question: "¿Cuál es la terminación para 'nosotros' en el futuro simple?",
        options: ["-sha", "-shun", "-nki", "-nkuna"],
        answer: "-shun"
    },
    {
        question: "¿Qué partícula indica inseguridad en el futuro simple?",
        options: ["-sha", "-rka", "-kri", "-ku"],
        answer: "-sha"
    }
];

const GameScreen6 = () => {
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
            navigation.navigate('Evaluation6', { score: score + 1, totalQuestions: questions.length });
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Juego de Repaso - Parte 6</Text>
                </View>
                <View style={styles.body}>
                    <CardDefault title={`Pregunta ${currentQuestionIndex + 1}`}>
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
                    </CardDefault>
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

export default GameScreen6;
