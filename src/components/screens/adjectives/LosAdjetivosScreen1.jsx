// src/components/LosAdjetivosScreen1.jsx

import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';
import { LinearGradient } from 'expo-linear-gradient';
const adjectiveData = [
    { kichwa: "hatun", spanish: "grande, alto", image: "https://img.freepik.com/vector-premium/jirafa-dibujos-animados-midiendo-su-altura-escala-sobre-fondo-beige_98402-204684.jpg?semt=ais_hybrid" },
    { kichwa: "uchilla", spanish: "pequeño, bajo", image: "https://img.freepik.com/vector-premium/ardilla-dibujos-animados-ojos-grandes_61878-1200.jpg" },
    { kichwa: "sumak", spanish: "hermoso, bonito, maravilloso, íntegro, estupendo", image: "https://img.freepik.com/vector-gratis/esta-bien-ilustracion-emoji_23-2151336094.jpg?t=st=1728411728~exp=1728415328~hmac=ca60da359c8f348f5bcc8708f2eb31a76aa557066070ce961bc1d6a6383c99dd&w=740" },
    { kichwa: "mishki", spanish: "dulce", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaISCp18ZAGtJIuRRT3j-y0APWzy-C--4S9Q&s" },
    { kichwa: "chiri", spanish: "frío", image: "https://www.fundacioncnse.org/educa/bancolse/naturaleza/tiempo-atmosferico/descargas/frio-dibujo.jpg" },
    { kichwa: "kunuk", spanish: "caliente", image: "https://www.fundacioncnse.org/educa/bancolse/adjetivos/descargas/caliente-dibujo.jpg" },
    { kichwa: "llashak", spanish: "lento, pesado", image: "https://img.freepik.com/vector-gratis/ilustracion-tortuga-vieja-dibujos-animados-dibujados-mano_23-2150383148.jpg?t=st=1728411657~exp=1728415257~hmac=789827605375257effdeb6c541ff502238205db9ed060e9724ab71cf0fd52fa8&w=740" },
    { kichwa: "ukta", spanish: "rápido", image: "https://img.freepik.com/vector-gratis/coleccion-elementos-cuadros-animacion-dibujados-mano_23-2149754767.jpg?t=st=1728411702~exp=1728415302~hmac=2dc5145561e888c11150b4a3808e0ffac23dc6c365de9083b4948a73d2773a3a&w=900" },
    { kichwa: "kushi", spanish: "feliz", image: "https://img.freepik.com/vector-gratis/ilustracion-dia-mundial-sonrisa-plana_23-2149121467.jpg?t=st=1728411751~exp=1728415351~hmac=5d291ccb943acee415fab86dac0bc27ab098963002e5f0367f8e97d547db0ce9&w=740" },
    { kichwa: "llaki", spanish: "triste", image: "https://img.freepik.com/vector-gratis/icono-vectorial-dibujos-animados-nino-lindo-llorando-ilustracion-personas-icono-naturaleza-vector-plano-aislado_138676-13545.jpg?t=st=1728411765~exp=1728415365~hmac=7950346c8447fd37fc7bdc99221b91d5c0391d9af548bc7d7f4123ffdee18858&w=740" },
    { kichwa: "piña", spanish: "enojado", image: "https://img.freepik.com/vector-gratis/ilustracion-emoji-odio-diseno-plano_23-2151007709.jpg?t=st=1728411784~exp=1728415384~hmac=286746f90a544d5a1c0dbc67ff9b25152f719114699a153ff0d32c44b905a2b9&w=740" },
    { kichwa: "wira", spanish: "gordo", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-persona-gorda_23-2150464936.jpg?t=st=1728411801~exp=1728415401~hmac=a0141a54ced3123f40642782c05b9eac22779bcf6f73102b2e324680d2d2ed2d&w=740" },
    { kichwa: "tsala", spanish: "flaco, delgado", image: "https://fundacioncnse.org/educa/bancolse/adjetivos/descargas/delgado-dibujo.jpg" },
    { kichwa: "sasa", spanish: "difícil", image: "https://previews.123rf.com/images/izakowski/izakowski1006/izakowski100600070/7165754-chica-y-dif%C3%ADcil-prueba.jpg" },
    { kichwa: "pankalla", spanish: "fácil", image: "https://img.freepik.com/vector-gratis/trabajador-feliz_23-2147518729.jpg?t=st=1728411913~exp=1728415513~hmac=90de24932368e0ab44ebc79b83a826627a9f7658c15cdc0d71817fa25362fe5f&w=740" },
];

const renderAdjectiveRows = () => {
    return adjectiveData.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={localStyles.imageContainer}>
                <Image source={{ uri: item.image }} style={localStyles.adjectiveImage} />
            </View>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const LosAdjetivosScreen1 = () => {
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
                    <CardDefault title="Vocabulario de Adjetivos">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderAdjectiveRows()}
                        </View>
                    </CardDefault>
                </View>
                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio" />

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('LaCiudad')} />

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
    adjectiveImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default LosAdjetivosScreen1;
