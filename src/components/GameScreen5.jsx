import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/globalStyles';
import { Card } from './Card';

const questions = [
    {
        question: "¿Cómo se dice 'día' en Kichwa?",
        options: ["hunkay", "killa", "puncha", "wata"],
        answer: "puncha"
    },
    {
        question: "¿Qué partícula se usa para formar el pasado simple?",
        options: ["-shka", "-ku", "-rka", "-na"],
        answer: "-rka"
    },
    {
        question: "¿Cuál es la partícula para formar el participio pasado?",
        options: ["-ku", "-rka", "-shka", "-pa"],
        answer: "-shka"
    },
    {
        question: "¿Cómo se forma el pasado progresivo?",
        options: ["-rka", "-shka", "-ku y -rka", "-pa"],
        answer: "-ku y -rka"
    },
    {
        question: "¿Qué significa 'kayna'?",
        options: ["mañana", "hoy", "ayer", "tarde"],
        answer: "ayer"
    }
];

const GameScreen5 = () => {
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
            navigation.navigate('Evaluation5', { score: score + 1, totalQuestions: questions.length });
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Juego de Repaso - Parte 5</Text>
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

export default GameScreen5;
