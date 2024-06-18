// src/components/ConjugacionTiempoPresenteProgresivo.jsx

import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/globalStyles';
import { Card } from './Card';

const conjugacionData = {
    title: "La conjugación en tiempo presente progresivo",
    subtitle: "Kunan pacha katiymanta rimarikuna",
    description: "En kichwa para formar un verbo en forma progresiva lo único que hacemos es aumentar la partícula “ku” antes de la terminación del presente.",
    terminationsTitle: "Puchukay shimikkuna",
    terminationsSubtitle: "Las terminaciones",
    terminations: [
        { subject: "Ñuka", ending: "kuni" },
        { subject: "Kan", ending: "kunki" },
        { subject: "Kikin", ending: "kunki" },
        { subject: "Pay", ending: "kun" },
        { subject: "Ñukanchik", ending: "kunchik" },
        { subject: "Kankuna", ending: "kunkichik" },
        { subject: "Kiinkuna", ending: "kunkichik" },
        { subject: "Paykuna", ending: "kunkuna" },
    ],
    examples: [
        {
            verb: "Mikuna",
            root: "miku",
            image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg",
            conjugations: [
                { subject: "Ñuka", root: "miku", particle: "ku", ending: "ni", verb: "mikukuni", translation: "Yo estoy comiendo" },
                { subject: "Kan", root: "miku", particle: "ku", ending: "nki", verb: "mikukunki", translation: "Tú estás comiendo" },
                { subject: "Kikin", root: "miku", particle: "ku", ending: "nki", verb: "mikukunki", translation: "Usted está comiendo" },
                { subject: "Pay", root: "miku", particle: "ku", ending: "n", verb: "mikukun", translation: "Él/Ella está comiendo" },
                { subject: "Ñukanchik", root: "miku", particle: "ku", ending: "nchik", verb: "mikukunchik", translation: "Nosotros estamos comiendo" },
                { subject: "Kankuna", root: "miku", particle: "ku", ending: "nkichik", verb: "mikukunkichik", translation: "Ustedes están comiendo" },
                { subject: "Kiinkuna", root: "miku", particle: "ku", ending: "nkichik", verb: "mikukunkichik", translation: "Ustedes están comiendo" },
                { subject: "Paykuna", root: "miku", particle: "ku", ending: "nkuna", verb: "mikukunkuna", translation: "Ellos/Ellas están comiendo" },
            ],
        },
        {
            verb: "Rimana",
            root: "rima",
            image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg",
            conjugations: [
                { subject: "Ñuka", root: "rima", particle: "ku", ending: "ni", verb: "rimakuni", translation: "Yo estoy hablando" },
                { subject: "Kan", root: "rima", particle: "ku", ending: "nki", verb: "rimakunki", translation: "Tú estás hablando" },
                { subject: "Kikin", root: "rima", particle: "ku", ending: "nki", verb: "rimakunki", translation: "Usted está hablando" },
                { subject: "Pay", root: "rima", particle: "ku", ending: "n", verb: "rimakun", translation: "Él/Ella está hablando" },
                { subject: "Ñukanchik", root: "rima", particle: "ku", ending: "nchik", verb: "rimakunchik", translation: "Nosotros estamos hablando" },
                { subject: "Kankuna", root: "rima", particle: "ku", ending: "nkichik", verb: "rimakunkichik", translation: "Ustedes están hablando" },
                { subject: "Kiinkuna", root: "rima", particle: "ku", ending: "nkichik", verb: "rimakunkichik", translation: "Ustedes están hablando" },
                { subject: "Paykuna", root: "rima", particle: "ku", ending: "nkuna", verb: "rimakunkuna", translation: "Ellos/Ellas están hablando" },
            ],
        },
    ],
};

const renderTerminationsRows = () => {
    return conjugacionData.terminations.map((item, index) => (
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

const ConjugacionTiempoPresenteProgresivoScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>{conjugacionData.title}</Text>
                </View>
                <View style={styles.body}>
                    <Card title={conjugacionData.subtitle}>
                        <Text style={localStyles.descriptionText}>{conjugacionData.description}</Text>
                    </Card>
                    <Card title={conjugacionData.terminationsTitle}>
                        <Text style={localStyles.subtitle}>{conjugacionData.terminationsSubtitle}</Text>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Sujeto</Text>
                                <Text style={styles.tableHeaderCell}>Terminación</Text>
                            </View>
                            {renderTerminationsRows()}
                        </View>
                    </Card>
                    {renderExamples(conjugacionData.examples)}
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('FuturoProximo'); }}>
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
    descriptionText: {
        fontSize: 16,
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

export default ConjugacionTiempoPresenteProgresivoScreen;
