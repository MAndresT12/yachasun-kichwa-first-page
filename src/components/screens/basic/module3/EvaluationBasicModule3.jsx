import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';

const questions = [
    {
        question: "¿Cuál es la palabra correcta para completar 'Killkana ___ pi'?",
        options: ["kas", "qus", "pas", "yar"],
        answer: "kas",
    },
    {
        question: "¿Qué significa 'Shimi' en español?",
        options: ["Boca", "Mano", "Cara", "Pierna"],
        answer: "Boca",
    },
    {
        question: "¿Cómo se traduce 'Punku' al español?",
        options: ["Ventana", "Mesa", "Puerta", "Fuego"],
        answer: "Puerta",
    },
    {
        question: "¿Qué significa 'kuncha' en español?",
        options: ["Bisnieto", "Tía", "Cuñada", "Sobrino"],
        answer: "Sobrino",
    },
    {
        question: "¿Cómo se dice 'Rodilla' en Kichwa?",
        options: ["Kachun", "Kunkuri", "Allpa", "Killkakatina"],
        answer: "Kunkuri",
    },
];

const EvaluationBasicModule3 = () => {
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
            navigation.navigate('EndModule3', { score: newScore, totalQuestions: questions.length });
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

export default EvaluationBasicModule3;
