// src/components/ParticlesScreen.jsx

import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Card } from '../../ui/Card';
import { styles } from '../../../../styles/globalStyles'
import { useNavigation } from '@react-navigation/native';

const ParticlesPart1Screen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Las Partículas en Kichwa Parte 1</Text>
                </View>
                <View style={styles.body}>
                    <Card title="Para Preguntar">
                        <Text style={localStyles.text}>
                            <Text style={localStyles.highlight}>tak</Text> se utiliza para formular preguntas.
                        </Text>
                        <Text style={localStyles.example}>Imatatak mikunki = ¿Qué comes?</Text>
                    </Card>
                    <Card title="Para Afirmar o Dar Énfasis">
                        <Text style={localStyles.text}>
                            <Text style={localStyles.highlight}>-ta</Text> se utiliza para afirmar o dar énfasis.
                        </Text>
                        <Text style={localStyles.example}>Tantata mikuni = Como pan</Text>
                    </Card>
                    <Card title="Ejemplos con tak y ta">
                        <View style={localStyles.table}>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Imatatak yanunki</Text>
                                <Text style={localStyles.tableCell}>¿Qué cocinas?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Ñukaka aychata yanuni</Text>
                                <Text style={localStyles.tableCell}>Cocino carne</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Imatatak apamunki</Text>
                                <Text style={localStyles.tableCell}>¿Qué traes?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Ñukaka misita apamuni</Text>
                                <Text style={localStyles.tableCell}>Traigo el gato</Text>
                            </View>
                        </View>
                    </Card>
                    <Card title="Para Indicar Pertenencia">
                        <Text style={localStyles.text}>
                            La partícula <Text style={localStyles.highlight}>-pak</Text> se utiliza para indicar pertenencia o posición.
                        </Text>
                        <Text style={localStyles.text}>
                            Se combina con pronombres personales para formar pronombres posesivos.
                        </Text>
                        <View style={localStyles.table}>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableHeaderCell}>Pronombre Personal</Text>
                                <Text style={localStyles.tableHeaderCell}>Partícula</Text>
                                <Text style={localStyles.tableHeaderCell}>Pronombre Posesivo</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Ñuka</Text>
                                <Text style={localStyles.tableCell}>pak</Text>
                                <Text style={localStyles.tableCell}>ñukapak</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Kan</Text>
                                <Text style={localStyles.tableCell}>pak</Text>
                                <Text style={localStyles.tableCell}>kanpak</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Kikin</Text>
                                <Text style={localStyles.tableCell}>pak</Text>
                                <Text style={localStyles.tableCell}>kikinpak</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Pay</Text>
                                <Text style={localStyles.tableCell}>pak</Text>
                                <Text style={localStyles.tableCell}>paypak</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Ñukanchik</Text>
                                <Text style={localStyles.tableCell}>pak</Text>
                                <Text style={localStyles.tableCell}>ñukanchikpak</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Kankuna</Text>
                                <Text style={localStyles.tableCell}>pak</Text>
                                <Text style={localStyles.tableCell}>kankunapak</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Kikinkuna</Text>
                                <Text style={localStyles.tableCell}>pak</Text>
                                <Text style={localStyles.tableCell}>kikinkunapak</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Paykuna</Text>
                                <Text style={localStyles.tableCell}>pak</Text>
                                <Text style={localStyles.tableCell}>paykunapak</Text>
                            </View>
                        </View>
                    </Card>
                    <Card title="Ejemplos con -pak">
                        <View style={localStyles.exampleContainer}>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Ñukapak tayta</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>mi padre</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Paykunapak allku</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>su perro (el perro de ellos)</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Kanpak wasi</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>tu casa</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Kikinpak shuti</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>su nombre (el nombre de usted)</Text>
                            </View>
                        </View>
                    </Card>
                    <Card title="Para Indicar Objetivo o Razón">
                        <Text style={localStyles.text}>
                            La partícula <Text style={localStyles.highlight}>-nkapak</Text> se utiliza para indicar objetivo o razón de una acción.
                        </Text>
                        <View style={localStyles.exampleContainer}>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Ñukaka mikunkapak shamuni</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>vengo a comer</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Ñukanchik tushunkapak rinchik</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>nos vamos a bailar</Text>
                            </View>
                        </View>
                    </Card>
                </View>

                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Game'); }}>
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
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    highlight: {
        fontWeight: 'bold',
        color: '#5B4D28',
    },
    example: {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 10,
    },
    table: {
        marginTop: 10,
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
    tableHeaderCell: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
    },
    exampleContainer: {
        marginTop: 10,
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

export default ParticlesPart1Screen;
