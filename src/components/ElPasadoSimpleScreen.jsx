// src/components/ElPasadoSimpleScreen.jsx

import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/globalStyles';
import { Card } from './Card';

const pasadoSimpleData = {
    title: "El pasado simple",
    subtitle: "Yallirka pacha",
    particle: "-rka",
    description: "Para formar el pasado simple, utilizamos la partícula -rka, seguido por las terminaciones del presente. (La excepción es en la tercera persona singular pay y plural paykuna, donde no se utiliza la n de las terminaciones del presente.)",
    terminationsTitle: "Puchukay shimikkuna",
    terminationsSubtitle: "Las terminaciones",
    terminations: [
        { subject: "Nuka", ending: "rkani" },
        { subject: "Kan", ending: "rkanki" },
        { subject: "Kikin", ending: "rkanki" },
        { subject: "Pay", ending: "rka" },
        { subject: "Nukanchik", ending: "rkanchik" },
        { subject: "Kankuna", ending: "rkankichik" },
        { subject: "Kiinkuna", ending: "rkankichik" },
        { subject: "Paykuna", ending: "rkakuna" },
    ],
    examplesTitle: "Shinakuna",
    examplesSubtitle: "Ejemplos",
    examples: [
        {
            verb: "Rimana",
            root: "rima",
            image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg",
            conjugations: [
                { subject: "Nuka", root: "rima", particle: "rka", ending: "ni", verb: "rimarkani", translation: "Yo hablé" },
                { subject: "Kan", root: "rima", particle: "rka", ending: "nki", verb: "rimarkanki", translation: "Tú hablaste" },
                { subject: "Kikin", root: "rima", particle: "rka", ending: "nki", verb: "rimarkanki", translation: "Usted habló" },
                { subject: "Pay", root: "rima", particle: "rka", ending: "-", verb: "rimarka", translation: "Él/Ella habló" },
                { subject: "Nukanchik", root: "rima", particle: "rka", ending: "nchik", verb: "rimarkanchik", translation: "Nosotros hablamos" },
                { subject: "Kankuna", root: "rima", particle: "rka", ending: "nkichik", verb: "rimarkankichik", translation: "Ustedes hablaron" },
                { subject: "Kiinkuna", root: "rima", particle: "rka", ending: "nkichik", verb: "rimarkankichik", translation: "Ustedes hablaron" },
                { subject: "Paykuna", root: "rima", particle: "rka", ending: "kuna", verb: "rimarkakuna", translation: "Ellos/ellas hablaron" },
            ],
        },
        {
            verb: "Rina",
            root: "ri",
            image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg",
            conjugations: [
                { subject: "Nuka", root: "ri", particle: "rka", ending: "ni", verb: "rirkani", translation: "Yo fui" },
                { subject: "Kan", root: "ri", particle: "rka", ending: "nki", verb: "rirkanki", translation: "Tú fuiste" },
                { subject: "Kikin", root: "ri", particle: "rka", ending: "nki", verb: "rirkanki", translation: "Usted fue" },
                { subject: "Pay", root: "ri", particle: "rka", ending: "-", verb: "rirka", translation: "Él/Ella fue" },
                { subject: "Nukanchik", root: "ri", particle: "rka", ending: "nchik", verb: "rirkanchik", translation: "Nosotros fuimos" },
                { subject: "Kankuna", root: "ri", particle: "rka", ending: "nkichik", verb: "rirkankichik", translation: "Ustedes fueron" },
                { subject: "Kiinkuna", root: "ri", particle: "rka", ending: "nkichik", verb: "rirkankichik", translation: "Ustedes fueron" },
                { subject: "Paykuna", root: "ri", particle: "rka", ending: "kuna", verb: "rirkakuna", translation: "Ellos/ellas fueron" },
            ],
        },
    ],
};

const renderTerminationsRows = () => {
    return pasadoSimpleData.terminations.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.subject}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.ending}</Text>
        </View>
    ));
};

const renderExamples = (examples) => {
    return examples.map((example, index) => (
        <Card key={index} title={example.verb}>
            <Image source={{ uri: example.image }} style={localStyles.exampleImage} />
            <View style={styles.vocabularyTable}>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderCell}>Sujeto</Text>
                    <Text style={styles.tableHeaderCell}>Raíz</Text>
                    <Text style={styles.tableHeaderCell}>Partícula</Text>
                    <Text style={styles.tableHeaderCell}>Terminación</Text>
                    <Text style={styles.tableHeaderCell}>Verbo conjugado</Text>
                    <Text style={styles.tableHeaderCell}>Traducción</Text>
                </View>
                {example.conjugations.map((conjugation, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={[styles.tableCell, localStyles.textCenter]}>{conjugation.subject}</Text>
                        <Text style={[styles.tableCell, localStyles.textCenter]}>{conjugation.root}</Text>
                        <Text style={[styles.tableCell, localStyles.textCenter]}>{conjugation.particle}</Text>
                        <Text style={[styles.tableCell, localStyles.textCenter]}>{conjugation.ending}</Text>
                        <Text style={[styles.tableCell, localStyles.textCenter]}>{conjugation.verb}</Text>
                        <Text style={[styles.tableCell, localStyles.textCenter]}>{conjugation.translation}</Text>
                    </View>
                ))}
            </View>
        </Card>
    ));
};

const ElPasadoSimpleScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>{pasadoSimpleData.title}</Text>
                </View>
                <View style={styles.body}>
                    <Card title={pasadoSimpleData.subtitle}>
                        <Text style={localStyles.particleText}>{pasadoSimpleData.particle}</Text>
                        <Text style={localStyles.descriptionText}>{pasadoSimpleData.description}</Text>
                    </Card>
                    <Card title={pasadoSimpleData.terminationsTitle}>
                        <Text style={localStyles.subtitle}>{pasadoSimpleData.terminationsSubtitle}</Text>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Sujeto</Text>
                                <Text style={styles.tableHeaderCell}>Terminación</Text>
                            </View>
                            {renderTerminationsRows()}
                        </View>
                    </Card>
                    {renderExamples(pasadoSimpleData.examples)}
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('ElParticipioPasado'); }}>
                        <View style={styles.footerButton}>
                            <Text style={styles.footerButtonText}>Siguiente</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </View>
    );
};

const localStyles = StyleSheet.create({
    particleText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: 'red',
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    exampleImage: {
        width: '100%',
        height: 150,
        marginVertical: 10,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default ElPasadoSimpleScreen;
