// src/components/GameScreen.jsx

import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';

const questions = [
    {
        question: "¿Cómo se dice 'dos' en Kichwa?",
        options: ["Shuk", "Ishkay", "Kimsa", "Chusku"],
        answer: "Ishkay"
    },
    {
        question: "¿Cuál es la palabra para 'pan' en Kichwa?",
        options: ["Tanta", "Wira", "Sara", "Kachi"],
        answer: "Tanta"
    },
    {
        question: "¿Cómo se dice 'gato' en Kichwa?",
        options: ["Allku", "Atallpa", "Misi", "Kuy"],
        answer: "Misi"
    },
    {
        question: "¿Qué partícula se usa para formular preguntas?",
        options: ["-ta", "-pak", "-nkapak", "tak"],
        answer: "tak"
    },
    {
        question: "¿Cuál es la partícula para indicar pertenencia?",
        options: ["tak", "-ta", "-pak", "-nkapak"],
        answer: "-pak"
    }
];

const GameScreen1 = () => {
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
            navigation.navigate('Evaluation1', { score: score + 1, totalQuestions: questions.length });
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>

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

export default GameScreen1;
