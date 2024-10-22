import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';
const { width } = Dimensions.get('window');

const conjugacionData = {
    title: "La conjugación en tiempo presente progresivo",
    subtitle: "Kunan pacha katiymanta rimarikuna",
    description: "En kichwa para formar un verbo en forma progresiva lo único que hacemos es aumentar la partícula “ku” antes de la terminación del presente.",
    terminationsTitle: "Puchukay shimikkuna",
    terminationsSubtitle: "Las terminaciones",
    terminations: [
        { subject: "Ñuka", ending: "kuni" },
        { subject: "Kan", ending: "kunki" },
        { subject: "Kikin", ending: "kunki" },
        { subject: "Pay", ending: "kun" },
        { subject: "Ñukanchik", ending: "kunchik" },
        { subject: "Kankuna", ending: "kunkichik" },
        { subject: "Kikinkuna", ending: "kunkichik" },
        { subject: "Paykuna", ending: "kunkuna" },
    ],
    examples: [
        {
            verb: "Mikuna",
            root: "miku",
            image: "https://img.freepik.com/vector-gratis/nino-feliz-disfrutando-comida_1308-133338.jpg?semt=ais_hybrid",
            conjugations: [
                { subject: "Ñuka", root: "miku", particle: "ku", ending: "ni", verb: "Ñuka mikukuni", translation: "Yo estoy comiendo" },
                { subject: "Kan", root: "miku", particle: "ku", ending: "nki", verb: "Kan mikukunki", translation: "Tú estás comiendo" },
                { subject: "Kikin", root: "miku", particle: "ku", ending: "nki", verb: "Kikin mikukunki", translation: "Usted está comiendo" },
                { subject: "Pay", root: "miku", particle: "ku", ending: "n", verb: "Pay mikukun", translation: "Él/Ella está comiendo" },
                { subject: "Ñukanchik", root: "miku", particle: "ku", ending: "nchik", verb: "Ñukanchik mikukunchik", translation: "Nosotros estamos comiendo" },
                { subject: "Kankuna", root: "miku", particle: "ku", ending: "nkichik", verb: "Kankuna mikukunkichik", translation: "Ustedes están comiendo" },
                { subject: "Kikinkuna", root: "miku", particle: "ku", ending: "nkichik", verb: "Kikinkuna mikukunkichik", translation: "Ustedes están comiendo" },
                { subject: "Paykuna", root: "miku", particle: "ku", ending: "nkuna", verb: "Paykuna mikukunkuna", translation: "Ellos/Ellas están comiendo" },
            ],
        },
        {
            verb: "Rimana",
            root: "rima",
            image: "https://img.freepik.com/vector-gratis/dibujado-mano-personas-hablando_23-2149067041.jpg?semt=ais_hybrid",
            conjugations: [
                { subject: "Ñuka", root: "rima", particle: "ku", ending: "ni", verb: "Ñuka rimakuni", translation: "Yo estoy hablando" },
                { subject: "Kan", root: "rima", particle: "ku", ending: "nki", verb: "Kan rimakunki", translation: "Tú estás hablando" },
                { subject: "Kikin", root: "rima", particle: "ku", ending: "nki", verb: "Kikin rimakunki", translation: "Usted está hablando" },
                { subject: "Pay", root: "rima", particle: "ku", ending: "n", verb: "Pay rimakun", translation: "Él/Ella está hablando" },
                { subject: "Ñukanchik", root: "rima", particle: "ku", ending: "nchik", verb: "Ñukanchik rimakunchik", translation: "Nosotros estamos hablando" },
                { subject: "Kankuna", root: "rima", particle: "ku", ending: "nkichik", verb: "Kankuna rimakunkichik", translation: "Ustedes están hablando" },
                { subject: "Kikinkuna", root: "rima", particle: "ku", ending: "nkichik", verb: "Kikinkuna rimakunkichik", translation: "Ustedes están hablando" },
                { subject: "Paykuna", root: "rima", particle: "ku", ending: "nkuna", verb: "Paykuna rimakunkuna", translation: "Ellos/Ellas están hablando" },
            ],
        },
    ],
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

const ConjugacionTiempoPresenteProgresivoScreen = () => {
    const navigation = useNavigation();
    const [progress, setProgress] = useState(0);
    const trofeoKeys = [
        'trofeo_modulo1_intermedio',
        'trofeo_modulo2_intermedio',
        'trofeo_modulo3_intermedio',
        'trofeo_modulo4_intermedio',
        'trofeo_modulo5_intermedio',
        'trofeo_modulo6_intermedio',
    ];
    // Función para cargar el estado de los trofeos desde AsyncStorage
    const loadTrophyProgress = async () => {
        let obtainedCount = 0;

        // Verificamos cuántos trofeos están desbloqueados
        for (const key of trofeoKeys) {
            const obtained = await AsyncStorage.getItem(key);
            if (obtained === 'true') {
                obtainedCount++;
            }
        }

        // Actualizamos el progreso basado en el número de trofeos obtenidos
        setProgress(obtainedCount / trofeoKeys.length); // Calcula el progreso como una fracción
    };

    // Cada vez que la pantalla de CaminoLevelsScreen gana foco, recargar el progreso de trofeos
    useFocusEffect(
        React.useCallback(() => {
            loadTrophyProgress();
        }, [])
    );
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_FuturoProximo_completed', 'true');

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
                    <CardDefault title={conjugacionData.subtitle}>
                        <Text style={localStyles.descriptionText}>{conjugacionData.description}</Text>
                    </CardDefault>

                    <CardDefault title={conjugacionData.terminationsTitle}>
                        <Text style={localStyles.subtitle}>{conjugacionData.terminationsSubtitle}</Text>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Sujeto</Text>
                                <Text style={styles.tableHeaderCell}>Terminación</Text>
                            </View>
                            {conjugacionData.terminations.map((item, index) => (
                                <View key={index} style={styles.tableRow}>
                                    <Text style={[styles.tableCell, localStyles.textCenter]}>{item.subject}</Text>
                                    <Text style={[styles.tableCell, localStyles.textCenter]}>{item.ending}</Text>
                                </View>
                            ))}
                        </View>
                    </CardDefault>

                    {conjugacionData.examples.map((example, index) => renderExampleCard(example, index))}
                </View>

                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio" />
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel(); // Completar el nivel actual
                            navigation.navigate('FuturoProximo');
                        }}
                    />

                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    descriptionText: {
        fontSize: 16,
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

export default ConjugacionTiempoPresenteProgresivoScreen;
