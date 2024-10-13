import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { ImageContainer } from '../../ui/imageContainers/ImageContainer';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';
const locationVocabulary = [
    { kichwa: "karu", spanish: "lejos, distante, lejano", image: "https://img.freepik.com/vector-gratis/explorador-mochila_23-2148146728.jpg?t=st=1728426379~exp=1728429979~hmac=66649f1a102b8e327920096acbf6805e5ea43a65e787566c80e3fa9edddae185&w=740" },
    { kichwa: "kuchulla", spanish: "cerca", image: "https://img.freepik.com/vector-gratis/dibujos-animados-chico-adolescente_24640-47216.jpg?semt=ais_hybrid" },
    { kichwa: "kaypi", spanish: "aquí", image: "https://img.freepik.com/foto-gratis/flechas-planas-moradas-amarillas-sobre-fondo-blanco_23-2148459934.jpg?semt=ais_hybrid" },
    { kichwa: "chaypi", spanish: "allí", image: "https://img.freepik.com/psd-gratis/representacion-3d-viajes-turisticos_23-2149667949.jpg?semt=ais_hybrid" },
    { kichwa: "chayninpi", spanish: "más allá", image: "https://img.freepik.com/vector-gratis/ilustracion-concepto-lider_114360-26760.jpg?semt=ais_hybrid" },
    { kichwa: "manya", spanish: "lado", image: "https://img.freepik.com/vector-gratis/hombre-casi-pisa-mina-terrestre_1308-127950.jpg?semt=ais_hybrid" },
    { kichwa: "chawpi", spanish: "mitad, medio, centro", image: "https://img.freepik.com/vector-gratis/ilustracion-naranja-media-dibujada-mano_23-2150002669.jpg?semt=ais_hybrid" },
    { kichwa: "chinchaysuyu", spanish: "norte", image: "https://cdn-icons-png.flaticon.com/512/16/16797.png" },
    { kichwa: "kullasuyu", spanish: "sur", image: "https://cdn-icons-png.flaticon.com/512/16/16744.png" },
    { kichwa: "antisuyu", spanish: "este", image: "https://cdn-icons-png.flaticon.com/512/17/17259.png" },
    { kichwa: "kuntisuyu", spanish: "oeste", image: "https://cdn-icons-png.flaticon.com/512/17/17276.png" },
    { kichwa: "kuska", spanish: "lugar", image: "https://img.freepik.com/psd-gratis/representacion-3d-icono-camping_23-2151192585.jpg?semt=ais_hybrid" },
    { kichwa: "suyu", spanish: "región", image: "https://img.freepik.com/foto-gratis/ubicacion-alfiler-dibujos-animados-3d_23-2151642222.jpg?semt=ais_hybrid" },
    { kichwa: "llakta", spanish: "comunidad, pueblo", image: "https://img.freepik.com/vector-gratis/ilustracion-pueblo-viejo-degradado_23-2149453258.jpg?semt=ais_hybrid" },
];

const renderLocationRows = () => {
    return locationVocabulary.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={localStyles.imageContainer}>
                <ImageContainer uri={item.image} style={localStyles.vocabImage} />
            </View>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const VocabularioLaUbicacionScreen = () => {
    const navigation = useNavigation();
    const progress = 0.75;

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={styles.gradient}
        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="intermedio" />
                </View>

                <View style={styles.body}>
                    <CardDefault title="Vocabulario de la Ubicación">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderLocationRows()}
                        </View>
                    </CardDefault>
                </View>
                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio" />

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('ElTiempo')} />

                </View>
            </ScrollView>
        </LinearGradient>
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

export default VocabularioLaUbicacionScreen;
