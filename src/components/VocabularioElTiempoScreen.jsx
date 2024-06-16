// src/components/VocabularioElTiempoScreen.jsx

import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/globalStyles';
import { Card } from './Card';

const timeVocabulary = [
    { kichwa: "puncha", castellano: "día" },
    { kichwa: "hunkay", castellano: "semana" },
    { kichwa: "killa", castellano: "mes" },
    { kichwa: "wata", castellano: "año" },
    { kichwa: "chishi", castellano: "tarde" },
    { kichwa: "tuta", castellano: "noche" },
    { kichwa: "pakari", castellano: "amanecer" },
    { kichwa: "chawpi puncha", castellano: "medio día" },
    { kichwa: "chawpi tuta", castellano: "media noche" },
    { kichwa: "kayna", castellano: "ayer" },
    { kichwa: "kunan", castellano: "hoy" },
    { kichwa: "kaya", castellano: "mañana" },
    { kichwa: "mincha", castellano: "pasado mañana" },
    { kichwa: "sarun", castellano: "antes de ayer" },
];

const daysOfWeek = [
    { kichwa: "awaki", castellano: "lunes" },
    { kichwa: "awkari", castellano: "martes" },
    { kichwa: "chillay", castellano: "miércoles" },
    { kichwa: "kullka", castellano: "jueves" },
    { kichwa: "chaska", castellano: "viernes" },
    { kichwa: "wacha", castellano: "sábado" },
    { kichwa: "inti", castellano: "domingo" },
];

const months = [
    { kichwa: "kulla", castellano: "enero" },
    { kichwa: "panchi", castellano: "febrero" },
    { kichwa: "pawkar", castellano: "marzo" },
    { kichwa: "ayriwa", castellano: "abril" },
    { kichwa: "aymuray", castellano: "mayo" },
    { kichwa: "raymi", castellano: "junio" },
    { kichwa: "situwa", castellano: "julio" },
    { kichwa: "karwa", castellano: "agosto" },
    { kichwa: "kuski", castellano: "septiembre" },
    { kichwa: "wayra", castellano: "octubre" },
    { kichwa: "sasi", castellano: "noviembre" },
    { kichwa: "kapak", castellano: "diciembre" },
];

const renderRows = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.castellano}</Text>
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
                    <Card title="Pacha (El tiempo)">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Castellano</Text>
                            </View>
                            {renderRows(timeVocabulary)}
                        </View>
                    </Card>
                    <Card title="Hunkay punchakuna (Los días de la semana)">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Castellano</Text>
                            </View>
                            {renderRows(daysOfWeek)}
                        </View>
                    </Card>
                    <Card title="Killakuna (Los meses)">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Castellano</Text>
                            </View>
                            {renderRows(months)}
                        </View>
                    </Card>
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('ElPasadoSimple'); }}>
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
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default VocabularioElTiempoScreen;
