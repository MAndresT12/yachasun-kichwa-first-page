// src/components/ElFuturoSimpleScreen.jsx

import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/globalStyles';
import { Card } from './Card';

const futuroSimpleData = {
    title: "El futuro simple",
    subtitle: "Shamuk pacha",
    description: "Para formar el futuro simple, tomamos la raíz del verbo y añadimos las terminaciones del futuro simple.",
    terminationsTitle: "Puchukay shimikkuna",
    terminationsSubtitle: "Terminaciones",
    terminations: [
        { subject: "Ñuka", ending: "sha" },
        { subject: "Kan", ending: "nki" },
        { subject: "Kikin", ending: "nki" },
        { subject: "Pay", ending: "nka" },
        { subject: "Ñukanchik", ending: "shun" },
        { subject: "Kankuna", ending: "nkichik" },
        { subject: "Kiinkuna", ending: "nkichik" },
        { subject: "Paykuna", ending: "nkakuna" },
    ],
    examplesTitle: "Shinakuna",
    examplesSubtitle: "Ejemplos",
    examples: [
        {
            verb: "Llamkana",
            root: "llamka",
            image: require('../../assets/diablo-prototype.png'),
            conjugations: [
                { subject: "Ñuka", root: "llamka", ending: "sha", verb: "llamkasha", translation: "Yo trabajaré" },
                { subject: "Kan", root: "llamka", ending: "nki", verb: "llamkanki", translation: "Tú trabajarás" },
                { subject: "Kikin", root: "llamka", ending: "nki", verb: "llamkanki", translation: "Usted trabajará" },
                { subject: "Pay", root: "llamka", ending: "nka", verb: "llamkanka", translation: "Él/Ella trabajará" },
                { subject: "Ñukanchik", root: "llamka", ending: "shun", verb: "llamkashun", translation: "Nosotros trabajaremos" },
                { subject: "Kankuna", root: "llamka", ending: "nkichik", verb: "llamkankichik", translation: "Ustedes trabajarán" },
                { subject: "Kiinkuna", root: "llamka", ending: "nkichik", verb: "llamkankichik", translation: "Ustedes trabajarán" },
                { subject: "Paykuna", root: "llamka", ending: "nkakuna", verb: "llamkankakuna", translation: "Ellos/Ellas trabajarán" },
            ],
        },
        {
            verb: "Shamuna",
            root: "shamu",
            image: require('../../assets/diablo-prototype.png'),
            conjugations: [
                { subject: "Ñuka", root: "shamu", ending: "sha", verb: "shamusha", translation: "Yo vendré" },
                { subject: "Kan", root: "shamu", ending: "nki", verb: "shamunki", translation: "Tú vendrás" },
                { subject: "Kikin", root: "shamu", ending: "nki", verb: "shamunki", translation: "Usted vendrá" },
                { subject: "Pay", root: "shamu", ending: "nka", verb: "shamunka", translation: "Él o Ella vendrá" },
                { subject: "Ñukanchik", root: "shamu", ending: "shun", verb: "shamunshun", translation: "Nosotros vendremos" },
                { subject: "Kankuna", root: "shamu", ending: "nkichik", verb: "shamunkichik", translation: "Ustedes vendrán" },
                { subject: "Kiinkuna", root: "shamu", ending: "nkichik", verb: "shamunkichik", translation: "Ustedes vendrán" },
                { subject: "Paykuna", root: "shamu", ending: "nkakuna", verb: "shamunkakuna", translation: "Ellos o Ellas vendrán" },
            ],
        },
    ],
};

const renderTerminationsRows = () => {
    return futuroSimpleData.terminations.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.subject}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.ending}</Text>
        </View>
    ));
};

const renderExamples = (examples) => {
    return examples.map((example, index) => (
        <Card key={index} title={example.verb}>
            <Image source={example.image} style={localStyles.exampleImage} />
            <View style={styles.vocabularyTable}>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderCell}>Sujeto</Text>
                    <Text style={styles.tableHeaderCell}>Raíz</Text>
                    <Text style={styles.tableHeaderCell}>Terminación</Text>
                    <Text style={styles.tableHeaderCell}>Verbo conjugado</Text>
                    <Text style={styles.tableHeaderCell}>Traducción</Text>
                </View>
                {example.conjugations.map((conjugation, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={[styles.tableCell, localStyles.textCenter]}>{conjugation.subject}</Text>
                        <Text style={[styles.tableCell, localStyles.textCenter]}>{conjugation.root}</Text>
                        <Text style={[styles.tableCell, localStyles.textCenter]}>{conjugation.ending}</Text>
                        <Text style={[styles.tableCell, localStyles.textCenter]}>{conjugation.verb}</Text>
                        <Text style={[styles.tableCell, localStyles.textCenter]}>{conjugation.translation}</Text>
                    </View>
                ))}
            </View>
        </Card>
    ));
};

const ElFuturoSimpleScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>{futuroSimpleData.title}</Text>
                </View>
                <View style={styles.body}>
                    <Card title={futuroSimpleData.subtitle}>
                        <Text style={localStyles.descriptionText}>{futuroSimpleData.description}</Text>
                    </Card>
                    <Card title={futuroSimpleData.terminationsTitle}>
                        <Text style={localStyles.subtitle}>{futuroSimpleData.terminationsSubtitle}</Text>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Sujeto</Text>
                                <Text style={styles.tableHeaderCell}>Terminación</Text>
                            </View>
                            {renderTerminationsRows()}
                        </View>
                    </Card>
                    {renderExamples(futuroSimpleData.examples)}
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('EvaluationScreen5'); }}>
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

export default ElFuturoSimpleScreen;
