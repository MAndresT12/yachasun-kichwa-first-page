// src/components/GameScreen4.jsx

import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import { LinearGradient } from 'expo-linear-gradient';

const questions = [
    {
        question: "¿Cómo se dice 'cuchara' en kichwa?",
        options: ["wisha", "kisa", "mulu", "mati"],
        answer: "wisha"
    },
    {
        question: "¿Qué significa 'kisa'?",
        options: ["Plato", "Olla grande de barro", "Cuchillo", "Cucharón"],
        answer: "Olla grande de barro"
    },
    {
        question: "¿Cuál es la traducción de 'yanta'?",
        options: ["Leña", "Mesa", "Silla", "Basura"],
        answer: "Leña"
    },
    {
        question: "¿Cómo se dice 'fuego' en kichwa?",
        options: ["nina", "pakuyla", "wallu", "manka"],
        answer: "nina"
    },
    {
        question: "¿Qué significa 'pilchi'?",
        options: ["Vaso", "Olla", "Silla", "Cuchillo"],
        answer: "Vaso"
    }
];

const GameScreen4 = () => {
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
            navigation.navigate('Evaluation4', { score: score + 1, totalQuestions: questions.length });
        }
    };

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={styles.gradient}
        >
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
        </LinearGradient>
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

export default GameScreen4;
