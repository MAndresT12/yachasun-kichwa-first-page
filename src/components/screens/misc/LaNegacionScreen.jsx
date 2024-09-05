// src/components/LaNegacionScreen.jsx

import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Card } from '../../ui/Card';
import { styles } from '../../../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

const LaNegacionScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>La Negación en Kichwa</Text>
                </View>
                <View style={styles.body}>
                    <Card title="Mana ninkapak">
                        <Text style={localStyles.text}>
                            En kichwa para transformar un adjetivo al negativo anteponemos la palabra de negación <Text style={localStyles.highlight}>mana</Text>.
                        </Text>
                        <View style={localStyles.exampleContainer}>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>mana alli</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>no bien, no bueno (malo)</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>mana sumak</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>No es bonito</Text>
                            </View>
                        </View>
                    </Card>
                    <Card title="Negación con verbos">
                        <Text style={localStyles.text}>
                            Para transformar un verbo al negativo anteponemos la palabra de negación <Text style={localStyles.highlight}>mana</Text> seguido del verbo con la partícula <Text style={localStyles.highlight}>chu</Text>.
                        </Text>
                        <View style={localStyles.exampleContainer}>
                            <Text style={localStyles.subTitle}>Kunan pacha (Forma presente)</Text>
                            <View style={localStyles.table}>
                                <View style={localStyles.tableRow}>
                                    <Text style={localStyles.tableCell}>Positivo</Text>
                                    <Text style={localStyles.tableCell}>Negativo</Text>
                                </View>
                                <View style={localStyles.tableRow}>
                                    <Text style={localStyles.tableCell}>mikuni</Text>
                                    <Text style={localStyles.tableCell}>mana mikunichu</Text>
                                </View>
                                <View style={localStyles.tableRow}>
                                    <Text style={localStyles.tableCell}>llamkanki</Text>
                                    <Text style={localStyles.tableCell}>mana llamkankichu</Text>
                                </View>
                                <View style={localStyles.tableRow}>
                                    <Text style={localStyles.tableCell}>pallan</Text>
                                    <Text style={localStyles.tableCell}>mana pallanchu</Text>
                                </View>
                            </View>
                            <Text style={localStyles.subTitle}>Kunan pacha katiy (Forma progresiva)</Text>
                            <View style={localStyles.table}>
                                <View style={localStyles.tableRow}>
                                    <Text style={localStyles.tableCell}>Positivo</Text>
                                    <Text style={localStyles.tableCell}>Negativo</Text>
                                </View>
                                <View style={localStyles.tableRow}>
                                    <Text style={localStyles.tableCell}>mikukuni</Text>
                                    <Text style={localStyles.tableCell}>mana mikukunichu</Text>
                                </View>
                                <View style={localStyles.tableRow}>
                                    <Text style={localStyles.tableCell}>llamkakunki</Text>
                                    <Text style={localStyles.tableCell}>mana llamkakunkichu</Text>
                                </View>
                                <View style={localStyles.tableRow}>
                                    <Text style={localStyles.tableCell}>pallakun</Text>
                                    <Text style={localStyles.tableCell}>mana pallakunchu</Text>
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>

                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Game2'); }}>
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
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
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

export default LaNegacionScreen;
