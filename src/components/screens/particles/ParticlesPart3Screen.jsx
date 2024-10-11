import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CardDefault } from '../../ui/cards/CardDefault';
import { styles } from '../../../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
// Data para la pantalla de partículas parte 3
const particlesPart3Data = {
    progress: 0.75,
    level: "intermedio",
    cards: [
        {
            title: "-tak",
            description: "La partícula -tak se utiliza para hacer preguntas. En Kichwa no utilizamos signos de pregunta, por lo que la partícula -tak debe ir después de las palabras de pregunta.",
            examples: [
                { kichwa: "Maypitak kawsanki", spanish: "¿En dónde vives?" }
            ]
        },
        {
            title: "-ka",
            description: "La partícula -ka también se utiliza para hacer preguntas.",
            examples: [
                { kichwa: "Kuchika", spanish: "¿Y el chancho?" }
            ]
        },
        {
            title: "-chu",
            description: "La partícula -chu también se utiliza para hacer preguntas, especialmente con pronombres personales.",
            examples: [
                { kichwa: "Yachana wasichu", spanish: "¿Es un centro educativo?" },
                { kichwa: "Kanchu shamurkanki", spanish: "¿Viniste tú?" },
                { kichwa: "Ari, ñukami shamurka", spanish: "Sí, yo vine" },
                { kichwa: "Mana, ñukaka mana shamurkachu", spanish: "No, yo no vine" }
            ]
        },
        {
            title: "-mi",
            description: "La partícula -mi da más fuerza de afirmación a una respuesta afirmativa.",
            examples: [
                { kichwa: "Paychu shamurka", spanish: "¿Vino él?" },
                { kichwa: "Ari, paymi shamurka", spanish: "Sí, él vino" },
                { kichwa: "Mana, payka mana shamurkachu", spanish: "No, él no vino" }
            ]
        },
        {
            title: "Preguntas en Kichwa",
            table: [
                { kichwa: "Maypitak", spanish: "¿Dónde, en dónde?" },
                { kichwa: "Piwantak", spanish: "¿Con quién?" },
                { kichwa: "Pitak", spanish: "¿Quién? ¿Quién es?" },
                { kichwa: "Pitatak", spanish: "¿A quién?" },
                { kichwa: "Imatatak", spanish: "¿Qué?" },
                { kichwa: "Imatak", spanish: "¿Qué es?" },
                { kichwa: "Imashinatak", spanish: "¿Cómo, de qué forma, cómo está?" },
                { kichwa: "Imatak kay", spanish: "¿Qué es esto?" },
                { kichwa: "Imatak chayka", spanish: "¿Qué es eso?" },
                { kichwa: "Imapaktak", spanish: "¿Para qué?" },
                { kichwa: "Maymantatak", spanish: "¿De dónde?" },
                { kichwa: "Maymantak", spanish: "¿De dónde?" },
                { kichwa: "Maykantak", spanish: "¿Cuál?" },
                { kichwa: "Ima pachamantatak", spanish: "¿Desde cuándo?" },
                { kichwa: "Ima pachakamantak", spanish: "¿Hasta cuándo?" },
                { kichwa: "Mashnakunatak", spanish: "¿Cuántos?" }
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

// Función para renderizar tablas
const renderTable = (table) => {
    return table.map((row, index) => (
        <View key={index} style={localStyles.tableRow}>
            <Text style={localStyles.tableCell}>{row.kichwa}</Text>
            <Text style={localStyles.tableCell}>{row.spanish}</Text>
        </View>
    ));
};

const ParticlesPart3Screen = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={styles.gradient}
        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={particlesPart3Data.progress} level={particlesPart3Data.level} />
                </View>

                <View style={styles.body}>
                    {particlesPart3Data.cards.map((card, index) => (
                        <CardDefault key={index} title={card.title}>
                            <Text style={localStyles.text}>{card.description}</Text>
                            {card.examples && renderExamples(card.examples)}
                            {card.table && renderTable(card.table)}
                        </CardDefault>
                    ))}
                </View>

                <View style={styles.footer}>

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('ParticlesPart4')} />

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

export default ParticlesPart3Screen;
