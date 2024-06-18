// src/components/VocabularioElDormitorioScreen.jsx

import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/globalStyles';
import { Card } from './Card';

const bedroomVocabulary = [
    { kichwa: "puñuna uku", spanish: "dormitorio", image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg" },
    { kichwa: "kawitu", spanish: "cama", image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg" },
    { kichwa: "sawna", spanish: "almohada", image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg" },
    { kichwa: "pacha", spanish: "sábana", image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg" },
    { kichwa: "katana", spanish: "cobija", image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg" },
    { kichwa: "churana wakaychina", spanish: "armario", image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg" },
    { kichwa: "killka pataku", spanish: "escritorio", image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg" },
    { kichwa: "mantana", spanish: "alfombra", image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg" },
    { kichwa: "puñuna", spanish: "dormir", image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg" },
    { kichwa: "muskuna", spanish: "soñar", image: "https://t3.ftcdn.net/jpg/04/19/17/68/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg" },
];

const verbs = [
    { kichwa: "puñuna", spanish: "dormir" },
    { kichwa: "muskuna", spanish: "soñar" },
];

const renderVocabularyRows = () => {
    return bedroomVocabulary.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <View style={localStyles.imageContainer}>
                <Image source={{ uri: item.image }} style={localStyles.vocabImage} />
            </View>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const renderVerbRows = () => {
    return verbs.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const VocabularioElDormitorioScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>El Dormitorio</Text>
                </View>
                <View style={styles.body}>
                    <Card title="Vocabulario del Dormitorio">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderVocabularyRows()}
                        </View>
                    </Card>
                    <Card title="Verbos">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderVerbRows()}
                        </View>
                    </Card>
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Game4'); }}>
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
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    vocabImage: {
        width: 50,
        height: 50,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default VocabularioElDormitorioScreen;
