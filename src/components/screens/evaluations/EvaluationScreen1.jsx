// src/components/EvaluationScreen.jsx

import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
const EvaluationScreen1 = ({ route }) => {
    const { score, totalQuestions } = route.params;
    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={styles.gradient}
        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Evaluación Final</Text>
                </View>
                <View style={styles.body}>
                    <View style={localStyles.resultContainer}>
                        <Text style={localStyles.resultText}>
                            ¡Has terminado el juego!
                        </Text>
                        <Text style={localStyles.resultText}>
                            Puntuación: {score} / {totalQuestions}
                        </Text>
                    </View>
                    <ButtonDefault label="Volver al inicio" onPress={() => navigation.navigate('CaminoLevels')} />

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('ParticlesPart2')} />

                </View>
            </ScrollView>
        </LinearGradient>
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

export default EvaluationScreen1;
