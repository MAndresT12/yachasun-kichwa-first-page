import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { ImageContainer } from '../../ui/imageContainers/ImageContainer';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';
const adjectives = [
    { kichwa: "ruku", spanish: "viejo (personas)", image: "https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-abuelos_1308-135128.jpg?semt=ais_hybrid" },
    { kichwa: "maltun", spanish: "joven", image: "https://img.freepik.com/vector-gratis/muchacho-lindo-ejemplo-icono-vector-historieta-signo-paz-concepto-icono-moda-personas-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3946.jpg?semt=ais_hybrid" },
    { kichwa: "kushi", spanish: "feliz", image: "https://img.freepik.com/vector-gratis/ilustracion-dia-mundial-sonrisa-plana_23-2149121467.jpg?semt=ais_hybrid" },
    { kichwa: "anak", spanish: "duro", image: "https://img.freepik.com/foto-gratis/personaje-doctor-dibujos-animados-3d_1048-12986.jpg?semt=ais_hybrid" },
    { kichwa: "amukilla", spanish: "suave", image: "https://img.freepik.com/vector-gratis/lindo-pinguino-durmiendo-abrazo-almohada-dibujos-animados_138676-3024.jpg?semt=ais_hybrid" },
    { kichwa: "chawa", spanish: "crudo", image: "https://img.freepik.com/vector-gratis/etiqueta-engomada-carne-cruda-blanco_1308-60724.jpg?semt=ais_hybrid" },
    { kichwa: "mapa", spanish: "sucio", image: "https://img.freepik.com/vector-gratis/bolsas-basura-rata-sucia_1308-70975.jpg?semt=ais_hybrid" },
    { kichwa: "mushuk", spanish: "nuevo", image: "https://previews.123rf.com/images/kencor/kencor1801/kencor180100016/92812767-un-nuevo-y-brillante-coche-de-dibujos-animados-est%C3%A1-listo-para-alejarse.jpg" },
    { kichwa: "mawka", spanish: "viejo (objetos)", image: "https://img.freepik.com/vector-gratis/cartel-dibujos-animados-caballeros-hombres-ropa-estilo-antiguo-e-ilustracion-retro-auto-sepia-vectro_1284-78720.jpg?semt=ais_hybrid" },
];

const descriptions = [
    { kichwa: "Kuchika waminsimi kan", spanish: "El chancho es rosa", image: "https://img.freepik.com/psd-gratis/renderizado-3d-icono-animal-kawaii_23-2151646213.jpg?semt=ais_hybrid" },
    { kichwa: "Apyuka yanami kan", spanish: "El caballo es negro", image: "https://img.freepik.com/vector-gratis/ilustracion-elegante-caballo-negro_1308-174987.jpg?semt=ais_hybrid" },
    { kichwa: "Allkuka pakumi kan", spanish: "El perro es café", image: "https://img.freepik.com/vector-gratis/cute-pug-dog-durmiendo-libro-vector-dibujos-animados-icono-ilustracion-educacion-animales-vector-plano-aislado_138676-12280.jpg?semt=ais_hybrid" },
    { kichwa: "Rasuka yurakmi kan", spanish: "La nieve es blanca", image: "https://img.freepik.com/vector-gratis/concepto-paisaje-invierno-mano-dibujado_23-2148348472.jpg?semt=ais_hybrid" },
    { kichwa: "Puyuka sukumi kan", spanish: "La nube es ploma", image: "https://img.freepik.com/vector-gratis/icono-vectorial-dibujos-animados-ilustracion-naturaleza-icono-vacaciones-aislado-plano_138676-13305.jpg?semt=ais_hybrid" },
    { kichwa: "Kiwaka wayllami kan", spanish: "La hierba es verde", image: "https://img.freepik.com/vector-gratis/hierba-verde-estilo-dibujos-animados_1308-78736.jpg?semt=ais_hybrid" },
    { kichwa: "Hawa pachaka ankasmikan", spanish: "El cielo es azul", image: "https://img.freepik.com/vector-gratis/fondo-cielo-videoconferencia_23-2148657081.jpg?semt=ais_hybrid" },
    { kichwa: "Sisaka maywami kan", spanish: "La flor es morada", image: "https://img.freepik.com/vector-gratis/naturaleza-margarita-morada_24877-81723.jpg?semt=ais_hybrid" },
    { kichwa: "Chilinaka kishpumi kan", spanish: "La naranja es naranja", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-comida_23-2150758808.jpg?semt=ais_hybrid" },
];

const renderAdjectiveRows = () => {
    return adjectives.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={localStyles.imageContainer}>
                <ImageContainer uri={item.image} style={localStyles.vocabImage} />
            </View>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const renderDescriptionRows = () => {
    return descriptions.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={localStyles.imageContainer}>
                <ImageContainer uri={item.image} style={localStyles.vocabImage} />
            </View>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const LosAdjetivosScreen2 = () => {
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
                    <CardDefault title="Adjetivos">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                            </View>
                            {renderAdjectiveRows()}
                        </View>
                    </CardDefault>
                    <CardDefault title="Descripciones">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                            </View>
                            {renderDescriptionRows()}
                        </View>
                    </CardDefault>
                </View>
                <View style={styles.footer}>

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('ElDormitorio')} />

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

export default LosAdjetivosScreen2;
