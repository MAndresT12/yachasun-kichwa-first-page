// src/components/ElParticipioPasadoScreen.jsx

import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/globalStyles';
import { Card } from './Card';

const participioData = [
    {
        title: "Yallishka pacha",
        description: "Para formar el participio pasado, después de la raíz del verbo ponemos la partícula -shka y las terminaciones del presente.",
        image: require('../../assets/diablo-prototype.png'),
    },
    {
        title: "Shinakuna",
        subtitle: "Ejemplos",
        data: [
            {
                verb: "Rimana",
                image: require('../../assets/diablo-prototype.png'),
                table: [
                    ["Nuka", "rima", "shka", "ni", "rimashkani", "Yo he hablado"],
                    ["Kan", "rima", "shka", "nki", "rimashkanki", "Tú has hablado"],
                    ["Kikin", "rima", "shka", "nki", "rimashkanki", "Usted ha hablado"],
                    ["Pay", "rima", "shka", "-", "rimashka", "Él o Ella ha hablado"],
                    ["Nukanchik", "rima", "shka", "nchik", "rimashkanchik", "Nosotros hemos hablado"],
                    ["Kankuna", "rima", "shka", "nkichik", "rimashkankichik", "Ustedes han hablado"],
                    ["Kikinkuna", "rima", "shka", "nkichik", "rimashkankichik", "Ustedes han hablado"],
                    ["Paykuna", "rima", "shka", "kuna", "rimashkakuna", "Ellos o ellas han hablado"],
                ],
            },
            {
                verb: "Mikuna",
                image: require('../../assets/diablo-prototype.png'),
                table: [
                    ["Nuka", "miku", "shka", "ni", "mikushkani", "Yo he comido"],
                    ["Kan", "miku", "shka", "nki", "mikushkanki", "Tú has comido"],
                    ["Kikin", "miku", "shka", "nki", "mikushkanki", "Usted ha comido"],
                    ["Pay", "miku", "shka", "-", "mikushka", "Él/Ella ha comido"],
                    ["Nukanchik", "miku", "shka", "nchik", "mikushkanchik", "Nosotros hemos comido"],
                    ["Kankuna", "miku", "shka", "nkichik", "mikushkankichik", "Ustedes han comido"],
                    ["Kikinkuna", "miku", "shka", "nkichik", "mikushkankichik", "Ustedes han comido"],
                    ["Paykuna", "miku", "shka", "kuna", "mikushkakuna", "Ellos/ellas han comido"],
                ],
            },
        ],
    },
];

const ElParticipioPasadoScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>El Participio Pasado</Text>
                </View>
                <View style={styles.body}>
                    <Card title={participioData[0].title}>
                        <Text style={localStyles.description}>{participioData[0].description}</Text>
                        <Image source={participioData[0].image} style={localStyles.image} />
                    </Card>
                    {participioData[1].data.map((item, index) => (
                        <Card key={index} title={`${participioData[1].subtitle}: ${item.verb}`}>
                            <Image source={item.image} style={localStyles.image} />
                            <View style={styles.vocabularyTable}>
                                <View style={styles.tableHeader}>
                                    <Text style={styles.tableHeaderCell}>Sujeto</Text>
                                    <Text style={styles.tableHeaderCell}>Raíz</Text>
                                    <Text style={styles.tableHeaderCell}>Partícula</Text>
                                    <Text style={styles.tableHeaderCell}>Terminación</Text>
                                    <Text style={styles.tableHeaderCell}>Verbo conjugado</Text>
                                    <Text style={styles.tableHeaderCell}>Traducción</Text>
                                </View>
                                {item.table.map((row, rowIndex) => (
                                    <View key={rowIndex} style={styles.tableRow}>
                                        {row.map((cell, cellIndex) => (
                                            <Text key={cellIndex} style={styles.tableCell}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </Card>
                    ))}
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Game5'); }}>
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
    description: {
        fontSize: 16,
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginVertical: 10,
    },
});

export default ElParticipioPasadoScreen;
