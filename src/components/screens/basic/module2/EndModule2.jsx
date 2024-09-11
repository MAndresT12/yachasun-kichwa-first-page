import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';

const EndModule2 = ({ route }) => {
    const { score, totalQuestions } = route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
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
                    <TouchableOpacity
                        style={localStyles.button}
                        onPress={() => navigation.navigate('Main')}
                    >
                        <Text style={localStyles.buttonText}>Volver al Inicio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={localStyles.button}
                        onPress={() => navigation.navigate('ParticlesPart2')}
                    >
                        <Text style={localStyles.buttonText}>Siguiente</Text>
                    </TouchableOpacity>
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

export default EndModule2;
