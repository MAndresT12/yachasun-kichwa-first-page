// src/components/GameScreen2.jsx

import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import { LinearGradient } from 'expo-linear-gradient';

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

    // Resetear el score y el índice de preguntas cuando la pantalla gane foco
    useFocusEffect(
        React.useCallback(() => {
            setCurrentQuestionIndex(0);
            setScore(0);
        }, [])
    );

    const handleOptionPress = (option) => {
        let newScore = score; // Crear una variable temporal para actualizar el score

        if (option === questions[currentQuestionIndex].answer) {
            newScore += 1; // Incrementa el puntaje temporalmente si es correcto
            Alert.alert("¡Correcto!", "Has elegido la respuesta correcta.");
        } else {
            Alert.alert("Incorrecto", "La respuesta correcta era: " + questions[currentQuestionIndex].answer);
        }

        // Actualiza el score en el estado
        setScore(newScore);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Navegar a la pantalla de evaluación y pasar el nuevo score
            navigation.navigate('Evaluation2', { score: newScore, totalQuestions: questions.length });
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

export default GameScreen2;
