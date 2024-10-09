import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { ImageContainer } from '../../ui/imageContainers/ImageContainer';

const bedroomVocabulary = [
    { kichwa: "puñuna uku", spanish: "dormitorio", image: "https://img.freepik.com/vector-gratis/plantilla-fondo-interior-dormitorio-dibujos-animados-acogedora-habitacion-moderna-luz-manana_33099-171.jpg?semt=ais_hybrid" },
    { kichwa: "kawitu", spanish: "cama", image: "https://img.freepik.com/vector-gratis/goldilocks-tres-osos-cama_1308-168802.jpg?semt=ais_hybrid" },
    { kichwa: "sawna", spanish: "almohada", image: "https://img.freepik.com/vector-gratis/icono-vectorial-dibujos-animados-ilustracion-icono-objeto-naturaleza-vector-plano-aislado_138676-11986.jpg?semt=ais_hybrid" },
    { kichwa: "pacha", spanish: "sábana", image: "https://img.freepik.com/vector-gratis/plantilla-etiqueta-ropa-doblada-aislada_1308-69238.jpg?semt=ais_hybrid" },
    { kichwa: "katana", spanish: "cobija", image: "https://img.freepik.com/vector-gratis/cama-manta-amarilla-almohada_1308-16767.jpg?semt=ais_hybrid" },
    { kichwa: "churana wakaychina", spanish: "armario", image: "https://img.freepik.com/vector-gratis/ropa-armario_1308-53713.jpg?semt=ais_hybrid" },
    { kichwa: "killka pataku", spanish: "escritorio", image: "https://img.freepik.com/vector-gratis/ilustracion-interior-gabinete_1284-4239.jpg?semt=ais_hybrid" },
    { kichwa: "mantana", spanish: "alfombra", image: "https://img.freepik.com/psd-gratis/renderizacion-3d-icono-muebles_23-2151841310.jpg?semt=ais_hybrid" },
    { kichwa: "puñuna", spanish: "dormir", image: "https://img.freepik.com/vector-gratis/dormido_1308-84115.jpg?semt=ais_hybrid" },
    { kichwa: "muskuna", spanish: "soñar", image: "https://img.freepik.com/vector-gratis/nina-durmiendo-contar-ovejas-su-sueno_1308-34986.jpg?semt=ais_hybrid" },
];

const verbs = [
    { kichwa: "puñuna", spanish: "dormir" },
    { kichwa: "muskuna", spanish: "soñar" },
];

const renderVocabularyRows = () => {
    return bedroomVocabulary.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={localStyles.imageContainer}>
                <ImageContainer uri={item.image} style={localStyles.vocabImage} />
            </View>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
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
    const progress = 0.75;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="intermedio" />
                </View>

                <View style={styles.body}>
                    <CardDefault title="Vocabulario del Dormitorio">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderVocabularyRows()}
                        </View>
                    </CardDefault>
                    <CardDefault title="Verbos">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderVerbRows()}
                        </View>
                    </CardDefault>
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Module4'); }}>
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
