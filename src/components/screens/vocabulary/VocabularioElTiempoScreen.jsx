// src/components/VocabularioElTiempoScreen.jsx

import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';

const timeVocabulary = [
    { kichwa: "puncha", spanish: "día" },
    { kichwa: "hunkay", spanish: "semana" },
    { kichwa: "killa", spanish: "mes" },
    { kichwa: "wata", spanish: "año" },
    { kichwa: "chishi", spanish: "tarde" },
    { kichwa: "tuta", spanish: "noche" },
    { kichwa: "pakari", spanish: "amanecer" },
    { kichwa: "chawpi puncha", spanish: "medio día" },
    { kichwa: "chawpi tuta", spanish: "media noche" },
    { kichwa: "kayna", spanish: "ayer" },
    { kichwa: "kunan", spanish: "hoy" },
    { kichwa: "kaya", spanish: "mañana" },
    { kichwa: "mincha", spanish: "pasado mañana" },
    { kichwa: "sarun", spanish: "antes de ayer" },
];

const daysOfWeek = [
    { kichwa: "awaki", spanish: "lunes" },
    { kichwa: "awkari", spanish: "martes" },
    { kichwa: "chillay", spanish: "miércoles" },
    { kichwa: "kullka", spanish: "jueves" },
    { kichwa: "chaska", spanish: "viernes" },
    { kichwa: "wacha", spanish: "sábado" },
    { kichwa: "inti", spanish: "domingo" },
];

const months = [
    { kichwa: "kulla", spanish: "enero" },
    { kichwa: "panchi", spanish: "febrero" },
    { kichwa: "pawkar", spanish: "marzo" },
    { kichwa: "ayriwa", spanish: "abril" },
    { kichwa: "aymuray", spanish: "mayo" },
    { kichwa: "raymi", spanish: "junio" },
    { kichwa: "situwa", spanish: "julio" },
    { kichwa: "karwa", spanish: "agosto" },
    { kichwa: "kuski", spanish: "septiembre" },
    { kichwa: "wayra", spanish: "octubre" },
    { kichwa: "sasi", spanish: "noviembre" },
    { kichwa: "kapak", spanish: "diciembre" },
];

const renderRows = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const VocabularioElTiempoScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>El Tiempo</Text>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Pacha (El tiempo)">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>spanish</Text>
                            </View>
                            {renderRows(timeVocabulary)}
                        </View>
                    </CardDefault>
                    <CardDefault title="Hunkay punchakuna (Los días de la semana)">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderRows(daysOfWeek)}
                        </View>
                    </CardDefault>
                    <CardDefault title="Killakuna (Los meses)">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderRows(months)}
                        </View>
                    </CardDefault>
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('ElPasadoSimple'); }}>
                        <View style={styles.buttonDefault}>
                            <Text style={styles.buttonText}>Siguiente</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </View>
    );
};

const localStyles = StyleSheet.create({
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default VocabularioElTiempoScreen;
