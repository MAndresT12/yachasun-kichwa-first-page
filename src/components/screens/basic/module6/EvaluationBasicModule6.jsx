import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';

const questions = [
    {
        question: "¿Cuál es la palabra correcta para completar 'Tankapay ___'?",
        options: ["chik", "chic", "chiq", "chak"],
        answer: "chik",
    },
    {
        question: "¿Qué significa 'Rimashunk' en español?",
        options: ["Hablemos", "Trabaje", "Tú siembras café", "Ella siembra cebada"],
        answer: "Hablemos",
    },
    {
        question: "¿Qué significa 'Payka akapita tarpun' en español?",
        options: ["Ella siembra cebada", "Tú siembras café", "Hablemos", "Yo siembro"],
        answer: "Ella siembra cebada",
    },
    {
        question: "¿Cómo se dice 'No comas' en Kichwa?",
        options: ["Ama mikuychu", "Ama kayaychikchu", "Kikinka papata tarpunki", "Ama mikunkichu"],
        answer: "Ama mikuychu",
    },
    {
        question: "¿Cómo se dice 'Usted siembra papas' en Kichwa?",
        options: ["Kikinka papata tarpunki", "Ama mikuychu", "Ama kayaychikchu", "Payka akapita tarpun"],
        answer: "Kikinka papata tarpunki",
    },
];

const EvaluationBasicModule6 = () => {
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
            navigation.navigate('EndModule6', { score: newScore, totalQuestions: questions.length });
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

export default EvaluationBasicModule6;
