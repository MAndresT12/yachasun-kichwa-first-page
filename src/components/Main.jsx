// src/compontens/Main.jsx
import React from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/globalStyles';
import { VocabularyColumn } from './VocabularyColumn';
import { Card } from './Card';

const numberData = [
    { numero: "1000", kichwa: "shuk waranka", spanish: "mil" },
    { numero: "1001", kichwa: "shuk waranka shuk", spanish: "mil uno" },
    { numero: "1010", kichwa: "shuk waranka chunka", spanish: "mil diez" },
    { numero: "1100", kichwa: "shuk waranka patsak", spanish: "mil cien" },
    { numero: "1200", kichwa: "shuk waranka ishkay patsak", spanish: "mil doscientos" },
    { numero: "2000", kichwa: "ishkay waranka", spanish: "dos mil" },
    { numero: "3000", kichwa: "kimsa waranka", spanish: "tres mil" },
    { numero: "4000", kichwa: "chunka waranka", spanish: "cuatro mil" },
    { numero: "5000", kichwa: "pichka waranka", spanish: "cinco mil" },
    { numero: "10000", kichwa: "chunka waranka", spanish: "diez mil" },
    { numero: "20000", kichwa: "ishkay chunka waranka", spanish: "veinte mil" },
    { numero: "100000", kichwa: "patsak waranka", spanish: "cien mil" },
    { numero: "500000", kichwa: "pichka patsak waranka", spanish: "quinientos mil" },
    { numero: "1000000", kichwa: "hunu", spanish: "millón" },
];

const renderNumberRows = () => {
    return numberData.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.numero}</Text>
            <Text style={styles.tableCell}>{item.kichwa}</Text>
            <Text style={styles.tableCell}>{item.spanish}</Text>
        </View>
    ));
};

const Main = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#5B4D28" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Los números</Text>
                </View>
                <View style={styles.body}>
                    <Card title="Números en Kichwa">
                        <Text style={styles.cardContent}>Aprende los números en Kichwa y su correspondencia en spanish.</Text>
                    </Card>
                    <Card title="Vocabulario">
                        <Text style={styles.vocabularyTitle}>Vocabulario</Text>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Número</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderNumberRows()}
                        </View>
                    </Card>
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Food'); }}>
                        <View style={styles.footerButton}>
                            <Text style={styles.footerButtonText}>Siguiente</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </View>
    );
}

export default Main;
