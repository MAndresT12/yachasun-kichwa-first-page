// src/components/EvaluationScreen2.jsx

import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';
const EvaluationScreen2 = ({ route }) => {
    const { score, totalQuestions } = route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>

                <View style={styles.body}>
                    <View style={localStyles.resultContainer}>
                        <Text style={localStyles.resultText}>
                            ¡Has terminado el juego!
                        </Text>
                        <Text style={localStyles.resultText}>
                            Puntuación: {score} / {totalQuestions}
                        </Text>
                    </View>
                    <ButtonLevelsInicio label="Inicio" />

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('LosVerbos1')} />

                </View>
            </ScrollView>
        </View>
    );
};

const localStyles = StyleSheet.create({
    resultContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#5B4D28',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default EvaluationScreen2;
