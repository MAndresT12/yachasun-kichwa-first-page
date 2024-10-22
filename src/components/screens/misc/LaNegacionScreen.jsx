// src/components/LaNegacionScreen.jsx

import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CardDefault } from '../../ui/cards/CardDefault';
import { styles } from '../../../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';
// Data para la pantalla de la negación
const laNegacionData = {
    progress: 0.75,
    level: "intermedio",
    cards: [
        {
            title: "Mana ninkapak",
            description: "En kichwa para transformar un adjetivo al negativo anteponemos la palabra de negación mana.",
            examples: [
                { kichwa: "mana alli", spanish: "no bien, no bueno (malo)" },
                { kichwa: "mana sumak", spanish: "No es bonito" }
            ]
        },
        {
            title: "Negación con verbos",
            description: "Para transformar un verbo al negativo anteponemos la palabra de negación mana seguido del verbo con la partícula chu.",
            sections: [
                {
                    title: "Kunan pacha (Forma presente)",
                    table: [
                        { positivo: "mikuni (comer)", negativo: "mana mikunichu (no como)" },
                        { positivo: "llamkanki (trabajar)", negativo: "mana llamkankichu (no trabajas)" },
                    ]
                },
                {
                    title: "Kunan pacha katiy (Forma progresiva)",
                    table: [
                        { positivo: "mikukuni (comiendo)", negativo: "mana mikukunichu (no estoy comiendo)" },
                        { positivo: "llamkakunki (trabajando)", negativo: "mana llamkakunkichu (no estás trabajando)" },
                    ]
                }
            ]
        }
    ]
};


// Función para renderizar ejemplos
const renderExamples = (examples) => {
    return examples.map((example, index) => (
        <View key={index} style={localStyles.exampleBox}>
            <Text style={localStyles.exampleText}>{example.kichwa}</Text>
            <Text style={localStyles.arrow}>→</Text>
            <Text style={localStyles.exampleText}>{example.spanish}</Text>
        </View>
    ));
};

// Función para renderizar las tablas
const renderTable = (table) => {
    return table.map((row, index) => (
        <View key={index} style={localStyles.tableRow}>
            <Text style={localStyles.tableCell}>{row.positivo}</Text>
            <Text style={localStyles.tableCell}>{row.negativo}</Text>
        </View>
    ));
};

const LaNegacionScreen = () => {
    const navigation = useNavigation();
    const [progress, setProgress] = useState(0);
    const trofeoKeys = [
        'trofeo_modulo1_intermedio',
        'trofeo_modulo2_intermedio',
        'trofeo_modulo3_intermedio',
        'trofeo_modulo4_intermedio',
        'trofeo_modulo5_intermedio',
        'trofeo_modulo6_intermedio',
    ];
    // Función para cargar el estado de los trofeos desde AsyncStorage
    const loadTrophyProgress = async () => {
        let obtainedCount = 0;

        // Verificamos cuántos trofeos están desbloqueados
        for (const key of trofeoKeys) {
            const obtained = await AsyncStorage.getItem(key);
            if (obtained === 'true') {
                obtainedCount++;
            }
        }

        // Actualizamos el progreso basado en el número de trofeos obtenidos
        setProgress(obtainedCount / trofeoKeys.length); // Calcula el progreso como una fracción
    };

    // Cada vez que la pantalla de CaminoLevelsScreen gana foco, recargar el progreso de trofeos
    useFocusEffect(
        React.useCallback(() => {
            loadTrophyProgress();
        }, [])
    );
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_IntroduccionJuegosScreen2_completed', 'true');
            await AsyncStorage.setItem('level_Game2_completed', 'true');

            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };
    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={styles.gradient}
        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level={laNegacionData.level} />
                </View>

                <View style={styles.body}>
                    {laNegacionData.cards.map((card, index) => (
                        <CardDefault key={index} title={card.title}>
                            <Text style={localStyles.text}>{card.description}</Text>
                            {card.examples && renderExamples(card.examples)}
                            {card.sections && card.sections.map((section, idx) => (
                                <View key={idx}>
                                    <Text style={localStyles.subTitle}>{section.title}</Text>
                                    {renderTable(section.table)}
                                </View>
                            ))}
                        </CardDefault>
                    ))}
                </View>

                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio" />
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel(); // Completar el nivel actual
                            navigation.navigate('IntroduccionJuegosScreen2');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    highlight: {
        fontWeight: 'bold',
        color: '#5B4D28',
    },
    exampleBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
    },
    exampleText: {
        fontSize: 16,
        flex: 1,
    },
    arrow: {
        fontSize: 20,
        marginHorizontal: 10,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
    },
});

export default LaNegacionScreen;

