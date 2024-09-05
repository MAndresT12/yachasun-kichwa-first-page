// src/components/ParticlesPart3Screen.jsx

import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Card } from '../../ui/Card';
import { styles } from '../../../../styles/globalStyles'
import { useNavigation } from '@react-navigation/native';

const ParticlesPart3Screen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Partículas de Pregunta y Respuesta</Text>
                </View>
                <View style={styles.body}>
                    <Card title="-tak">
                        <Text style={localStyles.text}>
                            La partícula <Text style={localStyles.highlight}>-tak</Text> se utiliza para hacer preguntas. En Kichwa no utilizamos signos de pregunta, por lo que la partícula <Text style={localStyles.highlight}>-tak</Text> debe ir después de las palabras de pregunta.
                        </Text>
                        <View style={localStyles.exampleContainer}>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Maypitak kawsanki</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>¿En dónde vives?</Text>
                            </View>
                        </View>
                    </Card>
                    <Card title="-ka">
                        <Text style={localStyles.text}>
                            La partícula <Text style={localStyles.highlight}>-ka</Text> también se utiliza para hacer preguntas.
                        </Text>
                        <View style={localStyles.exampleContainer}>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Kuchika</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>¿Y el chancho?</Text>
                            </View>
                        </View>
                    </Card>
                    <Card title="-chu">
                        <Text style={localStyles.text}>
                            La partícula <Text style={localStyles.highlight}>-chu</Text> también se utiliza para hacer preguntas, especialmente con pronombres personales.
                        </Text>
                        <View style={localStyles.exampleContainer}>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Yachana wasichu</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>¿Es un centro educativo?</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Kanchu shamurkanki</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>¿Viniste tú?</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Ari, ñukami shamurka</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>Sí, yo vine</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Mana, ñukaka mana shamurkachu</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>No, yo no vine</Text>
                            </View>
                        </View>
                    </Card>
                    <Card title="-mi">
                        <Text style={localStyles.text}>
                            La partícula <Text style={localStyles.highlight}>-mi</Text> da más fuerza de afirmación a una respuesta afirmativa.
                        </Text>
                        <View style={localStyles.exampleContainer}>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Paychu shamurka</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>¿Vino él?</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Ari, paymi shamurka</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>Sí, él vino</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Mana, payka mana shamurkachu</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>No, él no vino</Text>
                            </View>
                        </View>
                    </Card>
                    <Card title="Preguntas en Kichwa">
                        <View style={localStyles.table}>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Maypitak</Text>
                                <Text style={localStyles.tableCell}>¿Dónde, en dónde?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Piwantak</Text>
                                <Text style={localStyles.tableCell}>¿Con quién?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Pitak</Text>
                                <Text style={localStyles.tableCell}>¿Quién? ¿Quién es?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Pitatak</Text>
                                <Text style={localStyles.tableCell}>¿A quién?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Imatatak</Text>
                                <Text style={localStyles.tableCell}>¿Qué?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Imatak</Text>
                                <Text style={localStyles.tableCell}>¿Qué es?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Imashinatak</Text>
                                <Text style={localStyles.tableCell}>¿Cómo, de qué forma, cómo está?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Imatak kay</Text>
                                <Text style={localStyles.tableCell}>¿Qué es esto?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Imatak chayka</Text>
                                <Text style={localStyles.tableCell}>¿Qué es eso?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Imapaktak</Text>
                                <Text style={localStyles.tableCell}>¿Para qué?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Maymantatak</Text>
                                <Text style={localStyles.tableCell}>¿De dónde?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Maymantak</Text>
                                <Text style={localStyles.tableCell}>¿De dónde?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Maykantak</Text>
                                <Text style={localStyles.tableCell}>¿Cuál?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Ima pachamantatak</Text>
                                <Text style={localStyles.tableCell}>¿Desde cuándo?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Ima pachakamantak</Text>
                                <Text style={localStyles.tableCell}>¿Hasta cuándo?</Text>
                            </View>
                            <View style={localStyles.tableRow}>
                                <Text style={localStyles.tableCell}>Mashnakunatak</Text>
                                <Text style={localStyles.tableCell}>¿Cuántos?</Text>
                            </View>
                        </View>
                    </Card>
                </View>

                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('ParticlesPart4'); }}>
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
});

export default ParticlesPart3Screen;
