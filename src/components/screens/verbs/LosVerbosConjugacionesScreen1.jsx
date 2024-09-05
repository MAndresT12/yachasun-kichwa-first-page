// src/components/LosVerbosConjugacionesScreen1.jsx

import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { Card } from '../../ui/Card';

const conjugationsData = [
    {
        title: "Kuyana",
        image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg",
        data: [
            ["Ñuka", "kuya", "ni", "kuyani", "Yo amo"],
            ["Kan", "kuya", "nki", "kuyanki", "Tú amas"],
            ["Pay", "kuya", "n", "kuyan", "Él o Ella ama"],
            ["Ñukanchik", "kuya", "nchik", "kuyanchik", "Nosotros amamos"],
            ["Kankuna", "kuya", "nkichik", "kuyankichik", "Ustedes aman"],
            ["Paykuna", "kuya", "nkun", "kuyankuna", "Ellos o ellas aman"]
        ]
    },
    {
        title: "Mikuna (Presente progresiva)",
        image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg",
        data: [
            ["Ñuka", "miku", "ku", "ni", "mikukunichu", "Yo estoy comiendo"],
            ["Kan", "miku", "ku", "nki", "mikukunichu", "Tú estás comiendo"],
            ["Pay", "miku", "ku", "n", "mikukunichu", "Él/Ella está comiendo"],
            ["Ñukanchik", "miku", "ku", "nchik", "mikukunichu", "Nosotros estamos comiendo"],
            ["Kankuna", "miku", "ku", "nkichik", "mikukunichu", "Ustedes están comiendo"],
            ["Paykuna", "miku", "ku", "nkun", "mikukunichu", "Ellos/ellas están comiendo"]
        ]
    },
    {
        title: "Tanka (Imperativo)",
        image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg",
        data: [
            ["Kan", "tanka", "-", "pa", "tankay", "Empuja"],
            ["Kikin", "tanka", "-", "pa", "tankapay", "Empuja"],
            ["Ñukanchik", "tanka", "-", "shun", "tankashun", "Empujemos"],
            ["Kankuna", "tanka", "-", "y", "tankaychi", "Empujen"],
            ["Kikinkuna", "tanka", "-", "pa", "tankapaychi", "Empujen"]
        ]
    }
];

const renderConjugationTable = (conjugation) => (
    <View key={conjugation.title} style={localStyles.conjugationContainer}>
        <View style={localStyles.conjugationHeader}>
            <Text style={localStyles.conjugationTitle}>{conjugation.title}</Text>
            <Image source={{ uri: conjugation.image }} style={localStyles.conjugationImage} />
        </View>
        <View style={localStyles.table}>
            <View style={localStyles.tableRow}>
                <Text style={[localStyles.tableCell, localStyles.headerCell]}>Sujeto</Text>
                <Text style={[localStyles.tableCell, localStyles.headerCell]}>Raíz</Text>
                <Text style={[localStyles.tableCell, localStyles.headerCell]}>Partícula</Text>
                <Text style={[localStyles.tableCell, localStyles.headerCell]}>Terminación</Text>
                <Text style={[localStyles.tableCell, localStyles.headerCell]}>Verbo conjugado</Text>
                <Text style={[localStyles.tableCell, localStyles.headerCell]}>Significado</Text>
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

const LosVerbosConjugacionesScreen1 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Conjugaciones de Verbos</Text>
                </View>
                <View style={styles.body}>
                    <Card title="Conjugaciones">
                        {conjugationsData.map(conjugation => renderConjugationTable(conjugation))}
                    </Card>
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('LosAdjetivos1'); }}>
                        <View style={styles.footerButton}>
                            <Text style={styles.footerButtonText}>Siguiente</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </View>
    );
}

const localStyles = StyleSheet.create({
    conjugationContainer: {
        marginBottom: 20,
    },
    conjugationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    conjugationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5B4D28',
    },
    conjugationImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    table: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerCell: {
        backgroundColor: '#e8e8e8',
        fontWeight: 'bold',
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
        fontSize: 14,
    },
});

export default LosVerbosConjugacionesScreen1;
