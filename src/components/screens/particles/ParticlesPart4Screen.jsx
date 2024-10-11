import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CardDefault } from '../../ui/cards/CardDefault';
import { styles } from '../../../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';

// Data para la pantalla de partículas parte 4
const particlesPart4Data = {
    progress: 0.75,
    level: "intermedio",
    cards: [
        {
            title: "-pi",
            description: "La partícula -pi indica localización y tiempo exacto.",
            examples: [
                { kichwa: "Quito llaktapi", spanish: "En Quito" },
                { kichwa: "Kunanpachapi", spanish: "En este momento" },
                { kichwa: "Paykunaka chay wasipimi kawsan", spanish: "Ellos viven en esa casa" },
                { kichwa: "Kaypimi kawsarkanchik", spanish: "Aquí vivíamos" }
            ]
        },
        {
            title: "-man",
            description: "La partícula -man indica dirección, límite, tiempo o destinatario.",
            examples: [
                { kichwa: "Quito llaktaman", spanish: "A Quito" },
                { kichwa: "Kaykaman", spanish: "Hasta aquí" },
                { kichwa: "Kayakaman", spanish: "Hasta mañana" },
                { kichwa: "Taytaman", spanish: "A papi" }
            ]
        }
    ]
};


// Función para renderizar los ejemplos
const renderExamples = (examples) => {
    return examples.map((example, index) => (
        <View key={index} style={localStyles.exampleBox}>
            <Text style={localStyles.exampleText}>{example.kichwa}</Text>
            <Text style={localStyles.arrow}>→</Text>
            <Text style={localStyles.exampleText}>{example.spanish}</Text>
        </View>
    ));
};

const ParticlesPart4Screen = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={styles.gradient}
        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={particlesPart4Data.progress} level={particlesPart4Data.level} />
                </View>

                <View style={styles.body}>
                    {particlesPart4Data.cards.map((card, index) => (
                        <CardDefault key={index} title={card.title}>
                            <Text style={localStyles.text}>{card.description}</Text>
                            {renderExamples(card.examples)}
                        </CardDefault>
                    ))}
                </View>

                <View style={styles.footer}>

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('LaNegacion')} />

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
});

export default ParticlesPart4Screen;
