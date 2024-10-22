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

const pasadoProgresivoData = [
    {
        title: "Karana",
        image: "https://img.freepik.com/vector-gratis/concepto-donacion-ropa-dibujada-mano_52683-54708.jpg?semt=ais_hybrid",
        conjugations: [
            { subject: "Ñuka", root: "kara", particle1: "ku", particle2: "rka", ending: "ni", verb: "Ñuka karakurkani", translation: "Yo estaba dando" },
            { subject: "Kan", root: "kara", particle1: "ku", particle2: "rka", ending: "nki", verb: "Kan karakurkanki", translation: "Tú estabas dando" },
            { subject: "Kikin", root: "kara", particle1: "ku", particle2: "rka", ending: "nki", verb: "Kikin karakurkanki", translation: "Usted estaba dando" },
            { subject: "Pay", root: "kara", particle1: "ku", particle2: "rka", ending: "n", verb: "Pay karakurka", translation: "Él/Ella estaba dando" },
            { subject: "Ñukanchik", root: "kara", particle1: "ku", particle2: "rka", ending: "nchik", verb: "Ñukanchik karakurkanchik", translation: "Nosotros estábamos dando" },
            { subject: "Kankuna", root: "kara", particle1: "ku", particle2: "rka", ending: "nkichik", verb: "Kankuna karakurkankichik", translation: "Ustedes estaban dando" },
            { subject: "Kikinkuna", root: "kara", particle1: "ku", particle2: "rka", ending: "nkichik", verb: "Kikinkuna karakurkankichik", translation: "Ustedes estaban dando" },
            { subject: "Paykuna", root: "kara", particle1: "ku", particle2: "rka", ending: "kuna", verb: "Paykuna karakurkakuna", translation: "Ellos/Ellas estaban dando" },
        ],
    },
    {
        title: "Mikuna",
        image: "https://img.freepik.com/vector-gratis/nino-feliz-disfrutando-comida_1308-133338.jpg?semt=ais_hybrid",
        conjugations: [
            { subject: "Ñuka", root: "miku", particle1: "ku", particle2: "rka", ending: "ni", verb: "Ñuka mikukurkani", translation: "Yo estaba comiendo" },
            { subject: "Kan", root: "miku", particle1: "ku", particle2: "rka", ending: "nki", verb: "Kan mikukurkanki", translation: "Tú estabas comiendo" },
            { subject: "Kikin", root: "miku", particle1: "ku", particle2: "rka", ending: "nki", verb: "Kikin mikukurkanki", translation: "Usted estaba comiendo" },
            { subject: "Pay", root: "miku", particle1: "ku", particle2: "rka", ending: "n", verb: "Pay mikukurka", translation: "Él/Ella estaba comiendo" },
            { subject: "Ñukanchik", root: "miku", particle1: "ku", particle2: "rka", ending: "nchik", verb: "Ñukanchik mikukurkanchik", translation: "Nosotros estábamos comiendo" },
            { subject: "Kankuna", root: "miku", particle1: "ku", particle2: "rka", ending: "nkichik", verb: "Kankuna mikukurkankichik", translation: "Ustedes estaban comiendo" },
            { subject: "Kikinkuna", root: "miku", particle1: "ku", particle2: "rka", ending: "nkichik", verb: "Kikinkuna mikukurkankichik", translation: "Ustedes estaban comiendo" },
            { subject: "Paykuna", root: "miku", particle1: "ku", particle2: "rka", ending: "kuna", verb: "Paykuna mikukurkakuna", translation: "Ellos/Ellas estaban comiendo" },
        ],
    }
];

// Función para renderizar cada conjugación en un carrusel
const renderConjugationCard = (conjugation, index) => (
    <View key={index} style={styles.carouselCard}>
        <Text style={styles.carouselSubject}>{conjugation.subject}</Text>
        <Text style={styles.carouselDetail}>Raíz: {conjugation.root}</Text>
        <Text style={styles.carouselDetail}>Partícula 1: {conjugation.particle1}</Text>
        <Text style={styles.carouselDetail}>Partícula 2: {conjugation.particle2}</Text>
        <Text style={styles.carouselDetail}>Terminación: {conjugation.ending}</Text>
        <Text style={styles.carouselDetail}>Verbo conjugado: {conjugation.verb}</Text>
        <Text style={styles.carouselDetail}>Traducción: {conjugation.translation}</Text>
    </View>
);

// Función para renderizar los ejemplos con carrusel
const renderExampleCard = (example, index) => (
    <CardDefault key={index} title={example.title}>
        <Image source={{ uri: example.image }} style={localStyles.image} />
        <Carousel
            width={width * 0.8}
            height={250}
            data={example.conjugations}
            renderItem={({ item, index }) => renderConjugationCard(item, index)}
            mode="parallax"
            pagingEnabled={true}
        />
    </CardDefault>
);

const ElPasadoProgresivoScreen = () => {
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
            await AsyncStorage.setItem('level_ConjugacionPresenteProgresivo_completed', 'true');

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
                    <CardDefault title="Yallirka katiy pacha">
                        <Text style={localStyles.descriptionText}>
                            Para formar el pasado progresivo, utilizamos las partículas "-ku" y "-rka", seguidas por las terminaciones del presente.
                        </Text>
                        <Text style={localStyles.particulaText}>-kurka</Text>
                    </CardDefault>
                    {pasadoProgresivoData.map((example, index) => renderExampleCard(example, index))}
                </View>

                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio" />
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel(); // Completar el nivel actual
                            navigation.navigate('ConjugacionPresenteProgresivo');
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
        textAlign: 'center',
    },
    particulaText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red',
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginVertical: 10,
    },
});

export default ElPasadoProgresivoScreen;
