// src/components/ParticulesPart4Screen.jsx
import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Card } from '../../ui/Card';
import { styles } from '../../../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';


const ParticlesPart4Screen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Las Partículas en Kichwa Parte 4</Text>
                </View>
                <View style={styles.body}>
                    <Card title="-pi">
                        <Text style={localStyles.text}>
                            La partícula <Text style={localStyles.highlight}>-pi</Text> indica localización y tiempo exacto.
                        </Text>
                        <View style={localStyles.exampleContainer}>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Quito llaktapi</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>En Quito</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Kunanpachapi</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>En este momento</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Paykunaka chay wasipimi kawsan</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>Ellos viven en esa casa</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Kaypimi kawsarkanchik</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>Aquí vivíamos</Text>
                            </View>
                        </View>
                    </Card>
                    <Card title="-man">
                        <Text style={localStyles.text}>
                            La partícula <Text style={localStyles.highlight}>-man</Text> indica dirección, límite, tiempo o destinatario.
                        </Text>
                        <View style={localStyles.exampleContainer}>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Quito llaktaman</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>A Quito</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Kaykaman</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>Hasta aquí</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Kayakaman</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>Hasta mañana</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Taytaman</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>A papi</Text>
                            </View>
                        </View>
                    </Card>
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('LaNegacion'); }}>
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
});

export default ParticlesPart4Screen;
