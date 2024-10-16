// src/components/EvaluationScreen4.jsx

import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';
const EvaluationScreen4 = ({ route }) => {
    const { score, totalQuestions } = route.params;
    const navigation = useNavigation();
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('trofeo_modulo4_intermedio', 'true');
            await AsyncStorage.setItem('level_LaUbicacion_completed', 'true');

            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };
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

                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel(); // Completar el nivel actual
                            navigation.navigate('LaUbicacion');
                        }}
                    />

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

export default EvaluationScreen4;
