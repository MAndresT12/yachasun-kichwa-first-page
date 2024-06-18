import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/globalStyles';
import { Card } from './Card';

const futuroProximoData = {
    title: "El futuro próximo",
    subtitle: "Ña shamuk pacha",
    particle: "-kri",
    description: "Para formar el futuro próximo, tomamos la raíz del verbo, añadimos la partícula -kri, y al final, ponemos las terminaciones del presente.",
    terminationsTitle: "Puchukay shimikkuna",
    terminationsSubtitle: "Terminaciones",
    terminations: [
        { subject: "Ñuka", ending: "krini" },
        { subject: "Kan", ending: "krinki" },
        { subject: "Kikin", ending: "krinki" },
        { subject: "Pay", ending: "krin" },
        { subject: "Ñukanchik", ending: "krinchik" },
        { subject: "Kankuna", ending: "krinkichik" },
        { subject: "Kiinkuna", ending: "krinkichik" },
        { subject: "Paykuna", ending: "krinkuna" },
    ],
    examplesTitle: "Shinakuna",
    examplesSubtitle: "Ejemplos",
    examples: [
        {
            verb: "Mikuna",
            root: "miku",
            image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg",
            conjugations: [
                { subject: "Ñuka", root: "miku", particle: "kri", ending: "ni", verb: "mikukrini", translation: "Yo voy a comer" },
                { subject: "Kan", root: "miku", particle: "kri", ending: "nki", verb: "mikukrinki", translation: "Tú vas a comer" },
                { subject: "Kikin", root: "miku", particle: "kri", ending: "nki", verb: "mikukrinki", translation: "Usted va a comer" },
                { subject: "Pay", root: "miku", particle: "kri", ending: "-", verb: "mikukrin", translation: "Él/Ella va a comer" },
                { subject: "Ñukanchik", root: "miku", particle: "kri", ending: "nchik", verb: "mikukrinchik", translation: "Nosotros vamos a comer" },
                { subject: "Kankuna", root: "miku", particle: "kri", ending: "nkichik", verb: "mikukrinkichik", translation: "Ustedes van a comer" },
                { subject: "Kiinkuna", root: "miku", particle: "kri", ending: "nkichik", verb: "mikukrinkichik", translation: "Ustedes van a comer" },
                { subject: "Paykuna", root: "miku", particle: "kri", ending: "kuna", verb: "mikukrinkuna", translation: "Ellos/Ellas van a comer" },
            ],
        },
        {
            verb: "Rimana",
            root: "rima",
            image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg",
            conjugations: [
                { subject: "Ñuka", root: "rima", particle: "kri", ending: "ni", verb: "rimakrini", translation: "Yo voy a hablar" },
                { subject: "Kan", root: "rima", particle: "kri", ending: "nki", verb: "rimakrinki", translation: "Tú vas a hablar" },
                { subject: "Kikin", root: "rima", particle: "kri", ending: "nki", verb: "rimakrinki", translation: "Usted va a hablar" },
                { subject: "Pay", root: "rima", particle: "kri", ending: "-", verb: "rimakrin", translation: "Él/Ella va a hablar" },
                { subject: "Ñukanchik", root: "rima", particle: "kri", ending: "nchik", verb: "rimakrinchik", translation: "Nosotros vamos a hablar" },
                { subject: "Kankuna", root: "rima", particle: "kri", ending: "nkichik", verb: "rimakrinkichik", translation: "Ustedes van a hablar" },
                { subject: "Kiinkuna", root: "rima", particle: "kri", ending: "nkichik", verb: "rimakrinkichik", translation: "Ustedes van a hablar" },
                { subject: "Paykuna", root: "rima", particle: "kri", ending: "kuna", verb: "rimakrinkuna", translation: "Ellos/Ellas van a hablar" },
            ],
        },
    ],
};

const renderTerminationsRows = () => {
    return futuroProximoData.terminations.map((item, index) => (
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

const ElFuturoProximoScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>{futuroProximoData.title}</Text>
                </View>
                <View style={styles.body}>
                    <Card title={futuroProximoData.subtitle}>
                        <Text style={localStyles.particleText}>{futuroProximoData.particle}</Text>
                        <Text style={localStyles.descriptionText}>{futuroProximoData.description}</Text>
                    </Card>
                    <Card title={futuroProximoData.terminationsTitle}>
                        <Text style={localStyles.subtitle}>{futuroProximoData.terminationsSubtitle}</Text>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Sujeto</Text>
                                <Text style={styles.tableHeaderCell}>Terminación</Text>
                            </View>
                            {renderTerminationsRows()}
                        </View>
                    </Card>
                    {renderExamples(futuroProximoData.examples)}
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('FuturoSimple'); }}>
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

export default ElFuturoProximoScreen;
