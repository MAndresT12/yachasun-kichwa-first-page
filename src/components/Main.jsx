import React from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/globalStyles';
import { VocabularyColumn } from './VocabularyColumn';
import { Card } from './Card';

const numberData = [
    { numero: "1000", kichwa: "shuk waranka", castellano: "mil" },
    { numero: "1001", kichwa: "shuk waranka shuk", castellano: "mil uno" },
    { numero: "1010", kichwa: "shuk waranka chunka", castellano: "mil diez" },
    { numero: "1100", kichwa: "shuk waranka patsak", castellano: "mil cien" },
    { numero: "1200", kichwa: "shuk waranka ishkay patsak", castellano: "mil doscientos" },
    { numero: "2000", kichwa: "ishkay waranka", castellano: "dos mil" },
    { numero: "3000", kichwa: "kimsa waranka", castellano: "tres mil" },
    { numero: "4000", kichwa: "chunka waranka", castellano: "cuatro mil" },
    { numero: "5000", kichwa: "pichka waranka", castellano: "cinco mil" },
    { numero: "10000", kichwa: "chunka waranka", castellano: "diez mil" },
    { numero: "20000", kichwa: "ishkay chunka waranka", castellano: "veinte mil" },
    { numero: "100000", kichwa: "patsak waranka", castellano: "cien mil" },
    { numero: "500000", kichwa: "pichka patsak waranka", castellano: "quinientos mil" },
    { numero: "1000000", kichwa: "hunu", castellano: "millón" },
];

const renderNumberRows = () => {
    return numberData.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.numero}</Text>
            <Text style={styles.tableCell}>{item.kichwa}</Text>
            <Text style={styles.tableCell}>{item.castellano}</Text>
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
                        <Text style={styles.cardContent}>Aprende los números en Kichwa y su correspondencia en Castellano.</Text>
                    </Card>
                    <Card title="Vocabulario">
                        <Text style={styles.vocabularyTitle}>Vocabulario</Text>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Número</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Castellano</Text>
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
