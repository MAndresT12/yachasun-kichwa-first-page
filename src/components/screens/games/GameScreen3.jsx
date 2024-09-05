// src/components/GameScreen3.jsx

import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';

const questions = [
    {
        question: "¿Cómo se dice 'leer' en Kichwa?",
        options: ["killkana", "apana", "killkakatina", "tikrana"],
        answer: "killkakatina"
    },
    {
        question: "¿Cuál es la palabra para 'escribir' en Kichwa?",
        options: ["tikrana", "killkana", "shuyuna", "kallarina"],
        answer: "killkana"
    },
    {
        question: "¿Qué significa 'mikuna'?",
        options: ["comer", "beber", "caminar", "descansar"],
        answer: "comer"
    },
    {
        question: "¿Qué significa 'tiyarina'?",
        options: ["empujar", "sentarse", "saludar", "venir"],
        answer: "sentarse"
    },
    {
        question: "¿Cuál es la palabra para 'ayudar' en Kichwa?",
        options: ["yuyana", "napana", "yanapana", "rantina"],
        answer: "yanapana"
    }
];

const GameScreen3 = () => {
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
            navigation.navigate('Evaluation3', { score: score + 1, totalQuestions: questions.length });
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Juego de Repaso - Parte 3</Text>
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

export default GameScreen3;
