// src/components/VocabularioLaCocinaScreen.jsx

import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { ImageContainer } from '../../ui/imageContainers/ImageContainer';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';
const kitchenVocabulary = [
    { kichwa: "wisha", spanish: "cuchara", image: "https://img.freepik.com/vector-gratis/diseno-etiqueta-equipo-cocina-cuchara-madera-aislado_1308-77190.jpg?semt=ais_hybrid" },
    { kichwa: "kisa", spanish: "olla grande de barro", image: "https://img.freepik.com/vector-gratis/dibujado-mano-deliciosa-ilustracion-locro_23-2149206072.jpg?semt=ais_hybrid" },
    { kichwa: "mulu", spanish: "plato", image: "https://img.freepik.com/vector-gratis/plato-vacio-tenedor-cuchara-vector_53876-166365.jpg?semt=ais_hybrid" },
    { kichwa: "mati", spanish: "tazón para tomar chicha", image: "https://img.freepik.com/vector-gratis/delicioso-desayuno-avena-manana_1308-167099.jpg?semt=ais_hybrid" },
    { kichwa: "pintu", spanish: "toalla para cocina", image: "https://img.pikbest.com/png-images/qiantu/plaid-tablecloth-picnic-cloth-cartoon-png_2725893.png!w700wp" },
    { kichwa: "kupa, ñuku", spanish: "basura", image: "https://img.freepik.com/vector-gratis/bolsas-basura-sucias-comida-podrida-piso_1308-35416.jpg?semt=ais_hybrid" },
    { kichwa: "manka", spanish: "olla", image: "https://img.freepik.com/vector-gratis/sopa-olla-esta-hirviendo-estufa-gas_1308-76071.jpg?semt=ais_hybrid" },
    { kichwa: "walla", spanish: "litro, jarra", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-te_23-2150866230.jpg?semt=ais_hybrid" },
    { kichwa: "kuchuna", spanish: "cuchillo", image: "https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-cuchillo-flotante-concepto-icono-objeto-comida-aislado-vector-premium_138676-5784.jpg?semt=ais_hybrid" },
    { kichwa: "charichina", spanish: "tenedor", image: "https://img.freepik.com/foto-gratis/composicion-vajilla-ecologica_23-2148902934.jpg?semt=ais_hybrid" },
    { kichwa: "pilchi", spanish: "vaso", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-limonada_23-2150837522.jpg?semt=ais_hybrid" },
    { kichwa: "yanuna tullpa", spanish: "cocina metal", image: "https://img.freepik.com/vector-gratis/estufa-electrica-horno-aislado-sobre-fondo-blanco_1308-59051.jpg?semt=ais_hybrid" },
    { kichwa: "pataku", spanish: "mesa", image: "https://img.freepik.com/vector-gratis/mesa-madera-taburetes-sobre-fondo-blanco_1308-72340.jpg?semt=ais_hybrid" },
    { kichwa: "tiyarina", spanish: "silla", image: "https://img.freepik.com/psd-gratis/ilustracion-muebles-casa-sillon_23-2150983028.jpg?semt=ais_hybrid" },
    { kichwa: "yanta", spanish: "leña", image: "https://img.freepik.com/vector-gratis/pila-troncos-sobre-fondo-blanco_1308-131049.jpg?semt=ais_hybrid" },
    { kichwa: "nina", spanish: "fuego", image: "https://img.freepik.com/vector-gratis/coleccion-hogueras_23-2147608535.jpg?semt=ais_hybrid" },
    { kichwa: "pakuyla", spanish: "fósforo", image: "https://img.freepik.com/vector-gratis/detener-tema-coincidencias-coronavirus_23-2148505974.jpg?semt=ais_hybrid" },
];

const verbs = [
    { kichwa: "yanuna", spanish: "cocinar" },
    { kichwa: "kusana", spanish: "freír, asar" },
    { kichwa: "kamchana", spanish: "tostar" },
    { kichwa: "timpuna", spanish: "hervir" },
    { kichwa: "tupuna", spanish: "medir" },
    { kichwa: "rupana", spanish: "quemar" },
    { kichwa: "kununa", spanish: "calentar" },
    { kichwa: "mayllana", spanish: "lavar los platos" },
    { kichwa: "mikuna", spanish: "comer" },
    { kichwa: "upiyana", spanish: "beber" },
];

const renderVocabularyRows = () => {
    return kitchenVocabulary.map((item, index) => (
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

const VocabularioLaCocinaScreen = () => {
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
                    <CardDefault title="Vocabulario de la Cocina">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderVocabularyRows()}
                        </View>
                    </CardDefault>
                    <CardDefault title="Los Verbos">
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
                    <ButtonLevelsInicio label="Inicio" />

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('LosVerbos2')} />

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
        borderRadius: 25,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default VocabularioLaCocinaScreen;
