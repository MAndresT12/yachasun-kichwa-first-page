import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';
const { width } = Dimensions.get('window');

const pasadoSimpleData = {
    title: "El pasado simple",
    subtitle: "Yallirka pacha",
    particle: "-rka",
    description: "Para formar el pasado simple, utilizamos la partícula -rka, seguido por las terminaciones del presente. (La excepción es en la tercera persona singular pay y plural paykuna, donde no se utiliza la n de las terminaciones del presente.)",
    terminationsTitle: "Puchukay shimikkuna",
    terminationsSubtitle: "Las terminaciones",
    terminations: [
        { subject: "Ñuka", ending: "rkani" },
        { subject: "Kan", ending: "rkanki" },
        { subject: "Kikin", ending: "rkanki" },
        { subject: "Pay", ending: "rka" },
        { subject: "Ñukanchik", ending: "rkanchik" },
        { subject: "Kankuna", ending: "rkankichik" },
        { subject: "Kiinkuna", ending: "rkankichik" },
        { subject: "Paykuna", ending: "rkakuna" },
    ],
    examples: [
        {
            verb: "Rimana",
            root: "rima",
            image: "https://img.freepik.com/vector-gratis/dibujado-mano-personas-hablando_23-2149067041.jpg?semt=ais_hybrid",
            conjugations: [
                { subject: "Ñuka", root: "rima", particle: "rka", ending: "ni", verb: "Ñuka rimarkani", translation: "Yo hablé" },
                { subject: "Kan", root: "rima", particle: "rka", ending: "nki", verb: "Kan rimarkanki", translation: "Tú hablaste" },
                { subject: "Kikin", root: "rima", particle: "rka", ending: "nki", verb: "Kikin rimarkanki", translation: "Usted habló" },
                { subject: "Pay", root: "rima", particle: "rka", ending: "-", verb: "Pay rimarka", translation: "Él/Ella habló" },
                { subject: "Ñukanchik", root: "rima", particle: "rka", ending: "nchik", verb: "Ñukanchik rimarkanchik", translation: "Nosotros hablamos" },
                { subject: "Kankuna", root: "rima", particle: "rka", ending: "nkichik", verb: "Kankuna rimarkankichik", translation: "Ustedes hablaron" },
                { subject: "Paykuna", root: "rima", particle: "rka", ending: "kuna", verb: "Paykuna rimarkakuna", translation: "Ellos/ellas hablaron" },
            ],
        },
        {
            verb: "Rina",
            root: "ri",
            image: "https://img.freepik.com/foto-gratis/dia-internacional-educacion-estilo-futurista-salon-clases_23-2150998721.jpg?semt=ais_hybrid",
            conjugations: [
                { subject: "Ñuka", root: "ri", particle: "rka", ending: "ni", verb: "Ñuka rirkani", translation: "Yo fui" },
                { subject: "Kan", root: "ri", particle: "rka", ending: "nki", verb: "Kan rirkanki", translation: "Tú fuiste" },
                { subject: "Pay", root: "ri", particle: "rka", ending: "-", verb: "Pay rirka", translation: "Él/Ella fue" },
                { subject: "Ñukanchik", root: "ri", particle: "rka", ending: "nchik", verb: "Ñukanchik rirkanchik", translation: "Nosotros fuimos" },
                { subject: "Kankuna", root: "ri", particle: "rka", ending: "nkichik", verb: "Kankuna rirkankichik", translation: "Ustedes fueron" },
                { subject: "Paykuna", root: "ri", particle: "rka", ending: "kuna", verb: "Paykuna rirkakuna", translation: "Ellos/ellas fueron" },
            ],
        },
    ],
};

// Función para renderizar las terminaciones
const renderTerminationsRows = () => {
    return pasadoSimpleData.terminations.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.subject}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.ending}</Text>
        </View>
    ));
};

// Función para renderizar cada conjugación en un carrusel
const renderConjugationCard = (conjugation, index) => (
    <View key={index} style={styles.carouselCard}>
        <Text style={styles.carouselSubject}>{conjugation.subject}</Text>
        <Text style={styles.carouselDetail}>Raíz: {conjugation.root}</Text>
        <Text style={styles.carouselDetail}>Partícula: {conjugation.particle}</Text>
        <Text style={styles.carouselDetail}>Terminación: {conjugation.ending}</Text>
        <Text style={styles.carouselDetail}>Verbo conjugado: {conjugation.verb}</Text>
        <Text style={styles.carouselDetail}>Traducción: {conjugation.translation}</Text>
    </View>
);

// Función para renderizar los ejemplos con carrusel
const renderExampleCard = (example, index) => (
    <CardDefault key={index} title={example.verb}>
        <Image source={{ uri: example.image }} style={localStyles.exampleImage} />
        <Carousel
            width={width * 0.8}
            height={220}
            data={example.conjugations}
            renderItem={({ item, index }) => renderConjugationCard(item, index)}
            mode="parallax"
            pagingEnabled={true}
        />
    </CardDefault>
);

const ElPasadoSimpleScreen = () => {
    const navigation = useNavigation();
    const progress = 0.75;
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_ElParticipioPasado_completed', 'true');

            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };
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
                    <CardDefault title={pasadoSimpleData.subtitle}>
                        <Text style={localStyles.particleText}>{pasadoSimpleData.particle}</Text>
                        <Text style={localStyles.descriptionText}>{pasadoSimpleData.description}</Text>
                    </CardDefault>
                    <CardDefault title={pasadoSimpleData.terminationsTitle}>
                        <Text style={localStyles.subtitle}>{pasadoSimpleData.terminationsSubtitle}</Text>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Sujeto</Text>
                                <Text style={styles.tableHeaderCell}>Terminación</Text>
                            </View>
                            {renderTerminationsRows()}
                        </View>
                    </CardDefault>
                    {pasadoSimpleData.examples.map((example, index) => renderExampleCard(example, index))}
                </View>

                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio" />
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel(); // Completar el nivel actual
                            navigation.navigate('ElParticipioPasado');
                        }}
                    />


                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    particleText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: 'red',
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    exampleImage: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginVertical: 10,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default ElPasadoSimpleScreen;
