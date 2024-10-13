// src/components/VocabularioLaCiudadScreen.jsx

import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';
const cityVocabulary = [
    { kichwa: "antawa", spanish: "carro, camioneta", image: "https://img.freepik.com/vector-gratis/coche-sedan-rojo-estilo-dibujos-animados-aislado-sobre-fondo-blanco_1308-64900.jpg?t=st=1728411182~exp=1728414782~hmac=d4c27ae2915397cacd5cb9cfc3f0176513598eadf3d66133eb85500614c8461a&w=1380" },
    { kichwa: "antanka", spanish: "avión", image: "https://img.freepik.com/vector-gratis/feliz-avion-dibujos-animados-listo-despegue_1308-165126.jpg?t=st=1728411214~exp=1728414814~hmac=b9fc8416fe0437121d0731884195cb0cd60bd09babed7830ed08c327496a9794&w=1380" },
    { kichwa: "antara", spanish: "bus", image: "https://img.freepik.com/vector-gratis/autobus-escolar-ninos-dibujos-animados-diseno-plano_23-2147840786.jpg?t=st=1728416441~exp=1728420041~hmac=9a7013c9699916a28c21ee0adff980faf571ef6d0cd297b6d1ae47b2ddb05e22&w=740" },
    { kichwa: "antatinku", spanish: "moto", image: "https://img.freepik.com/vector-gratis/caricatura-corredor-motocross-sobre-fondo-blanco_1308-116511.jpg?semt=ais_hybrid" },
    { kichwa: "wanpuna", spanish: "barco", image: "https://img.freepik.com/vector-gratis/vela-barco-libro-abierto_1308-171919.jpg?semt=ais_hybrid" },
    { kichwa: "chaka", spanish: "puente", image: "https://img.freepik.com/vector-gratis/puente-sobre-pared_1308-30669.jpg?semt=ais_hybrid" },
    { kichwa: "ñan", spanish: "calle", image: "https://img.freepik.com/vector-gratis/edificio-escuela-cerca-ilustracion-carretera_1262-16602.jpg?semt=ais_hybrid" },
    { kichwa: "rantina uku", spanish: "tienda", image: "https://img.freepik.com/foto-gratis/vista-edificio-arquitectura-estilo-dibujos-animados_23-2151154897.jpg?semt=ais_hybrid" },
    { kichwa: "hatun wasi", spanish: "edificio", image: "https://img.freepik.com/foto-gratis/vista-edificio-arquitectura-estilo-dibujos-animados_23-2151154978.jpg?semt=ais_hybrid" },
    { kichwa: "antakuru", spanish: "tren", image: "https://img.freepik.com/vector-gratis/tren-dibujos-animados-alegre-sobre-vias_1308-161855.jpg?semt=ais_hybrid" },
    { kichwa: "rumpa antawa", spanish: "bicicleta", image: "https://img.freepik.com/vector-gratis/nino-montando-personaje-dibujos-animados-bicicleta-aislado-blanco_1308-55468.jpg?semt=ais_hybrid" },
    { kichwa: "uyachik anta", spanish: "radio", image: "https://img.freepik.com/foto-gratis/notas-musicales-estilo-dibujos-animados_23-2151056815.jpg?semt=ais_hybrid" },
    { kichwa: "rikuchik anta", spanish: "televisión", image: "https://img.freepik.com/vector-gratis/alegre-personaje-television-dibujos-animados_1308-164448.jpg?semt=ais_hybrid" },
    { kichwa: "karuyari anta", spanish: "teléfono", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-telefono-dibujado-mano_23-2150616513.jpg?semt=ais_hybrid" },
];

const renderCityRows = () => {
    return cityVocabulary.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={localStyles.imageContainer}>
                <Image source={{ uri: item.image }} style={localStyles.cityImage} />
            </View>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};


const VocabularioLaCiudadScreen = () => {
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
                    <CardDefault title="Vocabulario">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderCityRows()}
                        </View>
                    </CardDefault>
                </View>
                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio" />

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('IntroduccionJuegosScreen3')} />

                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const localStyles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    cityImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default VocabularioLaCiudadScreen;
