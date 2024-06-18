// src/components/ElPasadoProgresivoScreen.jsx

import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/globalStyles';
import { Card } from './Card';

const pasadoProgresivoData = [
    {
        title: "Karana",
        image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg",
        data: [
            ["Ñuka", "kara", "ku", "rka", "ni", "karakurkani", "Yo estaba dando"],
            ["Kan", "kara", "ku", "rka", "nki", "karakurkanki", "Tú estabas dando"],
            ["Kikin", "kara", "ku", "rka", "nki", "karakurkanki", "Usted estaba dando"],
            ["Pay", "kara", "ku", "rka", "n", "karakurka", "Él/Ella estaba dando"],
            ["Ñukanchik", "kara", "ku", "rka", "nchik", "karakurkanchik", "Nosotros estábamos dando"],
            ["Kankuna", "kara", "ku", "rka", "nkichik", "karakurkankichik", "Ustedes estaban dando"],
            ["Kiinkuna", "kara", "ku", "rka", "nkichik", "karakurkankichik", "Ustedes estaban dando"],
            ["Paykuna", "kara", "ku", "rka", "kuna", "karakurkakuna", "Ellos/Ellas estaban dando"]
        ]
    },
    {
        title: "Mikuna",
        image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg",
        data: [
            ["Ñuka", "miku", "ku", "rka", "ni", "mikukurkani", "Yo estaba comiendo"],
            ["Kan", "miku", "ku", "rka", "nki", "mikukurkanki", "Tú estabas comiendo"],
            ["Kikin", "miku", "ku", "rka", "nki", "mikukurkanki", "Usted estaba comiendo"],
            ["Pay", "miku", "ku", "rka", "n", "mikukurka", "Él/Ella estaba comiendo"],
            ["Ñukanchik", "miku", "ku", "rka", "nchik", "mikukurkanchik", "Nosotros estábamos comiendo"],
            ["Kankuna", "miku", "ku", "rka", "nkichik", "mikukurkankichik", "Ustedes estaban comiendo"],
            ["Kiinkuna", "miku", "ku", "rka", "nkichik", "mikukurkankichik", "Ustedes estaban comiendo"],
            ["Paykuna", "miku", "ku", "rka", "kuna", "mikukurkakuna", "Ellos/Ellas estaban comiendo"]
        ]
    }
];

const renderConjugationTable = (conjugation) => (
    <View key={conjugation.title}>
        <View style={localStyles.conjugationHeader}>
            <Text style={localStyles.conjugationTitle}>{conjugation.title}</Text>
            <Image source={{ uri: conjugation.image }} style={localStyles.conjugationImage} />
        </View>
        <View style={localStyles.table}>
            <View style={localStyles.tableRow}>
                <Text style={localStyles.tableCell}>Sujeto</Text>
                <Text style={localStyles.tableCell}>Raíz</Text>
                <Text style={localStyles.tableCell}>Partícula 1</Text>
                <Text style={localStyles.tableCell}>Partícula 2</Text>
                <Text style={localStyles.tableCell}>Terminación</Text>
                <Text style={localStyles.tableCell}>Verbo conjugado</Text>
                <Text style={localStyles.tableCell}>Traducción</Text>
            </View>
            {conjugation.data.map((row, index) => (
                <View key={index} style={localStyles.tableRow}>
                    {row.map((cell, cellIndex) => (
                        <Text key={cellIndex} style={localStyles.tableCell}>{cell}</Text>
                    ))}
                </View>
            ))}
        </View>
    </View>
);

const ElPasadoProgresivoScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>El Pasado Progresivo</Text>
                </View>
                <View style={styles.body}>
                    <Card title="Yallirka katiy pacha">
                        <Text style={localStyles.descriptionText}>
                            Con esta manera de tiempo vamos a ver que la aglutinación continúa, ahora son dos partículas (ku - del progresivo, y -rka - del pasado) que intervienen en el medio del verbo, manteniendo las terminaciones de los verbos del presente.
                        </Text>
                        <Text style={localStyles.particulaText}>-kurka</Text>
                    </Card>
                    {pasadoProgresivoData.map(conjugation => renderConjugationTable(conjugation))}
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('ConjugacionPresenteProgresivo'); }}>
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
    conjugationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    conjugationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    conjugationImage: {
        width: 50,
        height: 50,
    },
    table: {
        marginBottom: 20,
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
        fontSize: 14,
    },
    descriptionText: {
        fontSize: 16,
        marginBottom: 10,
    },
    particulaText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default ElPasadoProgresivoScreen;
