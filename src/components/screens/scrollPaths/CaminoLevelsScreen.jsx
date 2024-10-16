// src/components/CaminoLevelsScreen.jsx

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated';
import { styles } from '../../../../styles/globalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
//import { FontAwesomeIcon } from '@fontawesome/react-native-fontawesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LevelCard from '../../ui/cards/LevelCard';
import { useFocusEffect } from '@react-navigation/native';
import TrophyCard from '../../ui/cards/TrophyCard';

const BouncyText = ({ children }) => {
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withRepeat(
            withSequence(
                withTiming(1.1, { duration: 1000 }),
                withTiming(1, { duration: 1000 })
            ),
            -1,  // Infinite loop
            true // Reverse on repeat
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    return (
        <Animated.Text style={[localStyles.bouncyText, animatedStyle]}>
            {children}
        </Animated.Text>
    );
};

const BouncyTextTitulo = ({ children }) => {
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withRepeat(
            withSequence(
                withTiming(1.1, { duration: 1000 }),
                withTiming(1, { duration: 1000 })
            ),
            -1,  // Infinite loop
            true // Reverse on repeat
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    return (
        <Animated.Text style={[localStyles.bouncyTextTitulo]}>
            {children}
        </Animated.Text>
    );
};


const CaminoLevelsScreen = () => {
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

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={localStyles.gradientBackground}
        >
            <View style={styles.header}>
                <ProgressCircleWithTrophies progress={progress} level="intermedio" />

            </View>
            <ScrollView contentContainerStyle={localStyles.scrollViewContent}>
                {/* Modulo 1 (Trofeo de Módulo 1)*/}
                {/* <Image source={require('../../../../assets/images/animals/tortuga.png')} style={localStyles.islandImage} /> */}

                <BouncyTextTitulo>Módulo 1 / Shukniki  Tantachiy Yachay</BouncyTextTitulo>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_Numeros"
                        title="Números / Yupaykuna"
                        iconName="star"
                        nextScreen="Main"
                        progressKey="level_Numeros_completed"
                    />
                    <BouncyText>Números / Yupaykuna</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Alimentos / Mikunakuna</BouncyText>
                    <LevelCard
                        levelKey="level_Food"
                        title="Alimentos / Mikunakuna"
                        iconName="cutlery"
                        nextScreen="Food"
                        progressKey="level_Food_completed"
                    />
                </View>
                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_Animals"
                        title="Animales / Mikunakuna"
                        iconName="paw"
                        nextScreen="Animals"
                        progressKey="level_Animals_completed"
                    />
                    <BouncyText>Animales / Mikunakuna</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Partículas: Preguntas, Afirmación, Pertenencia, Razón / Shimikukuna: tak, ta, pak, nkapak</BouncyText>
                    <LevelCard
                        levelKey="level_ParticlesPart1"
                        title="Partículas: Preguntas, Afirmación, Pertenencia, Razón / Shimikukuna: tak, ta, pak, nkapak"
                        iconName="question"
                        nextScreen="ParticlesPart1"
                        progressKey="level_ParticlesPart1_completed"
                    />
                </View>
                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_IntroduccionJuegosScreen1"
                        title="Juego: Módulo 1 / Pukllana: Shukniki  Tantachiy Yachay"
                        iconName="gamepad"
                        type="game"
                        nextScreen="IntroduccionJuegosScreen1"
                        progressKey="level_IntroduccionJuegosScreen1_completed"
                    />
                    <BouncyText>Juego: Módulo 1 / Pukllana: Shukniki  Tantachiy Yachay</BouncyText>

                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Evaluación: Módulo 1 / Ruraykuna: Shukniki  Tantachiy Yachay</BouncyText>

                    <LevelCard
                        levelKey="level_Game1"
                        title="Evaluación: Módulo 1 / Ruraykuna: Shukniki  Tantachiy Yachay"
                        iconName="pencil"
                        type="evaluation"
                        nextScreen="Game1"
                        progressKey="level_Game1_completed"
                    />
                </View>
                <TrophyCard
                    trophyKey="trofeo_modulo1_intermedio"
                    imageSource={require('../../../../assets/images/animals/tortuga.png')}
                />

                {/* Modulo 2 (Trofeo de Modulo 2)*/}
                <BouncyTextTitulo>Módulo 2 / Ishkayniki Tantachiy Yachay</BouncyTextTitulo>

                {/* <Image source={require('../../../../assets/images/animals/jaguar.png')} style={localStyles.islandImage} /> */}
                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_ParticlesPart2"
                        title="Partículas: Origen, Acción, Compañia / Shimikukuna: manta, kaman, wan"
                        iconName="flag"
                        nextScreen="ParticlesPart2"
                        progressKey="level_ParticlesPart2_completed"
                    />
                    <BouncyText>Partículas: Origen, Acción, Compañia / Shimikukuna: manta, kaman, wan</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Partículas: Preguntas, Énfasis / Shimikukuna: tak,  ka, chu, mi</BouncyText>
                    <LevelCard
                        levelKey="level_ParticlesPart3"
                        title="Partículas: Preguntas, Énfasis / Shimikukuna: tak,  ka, chu, mi"
                        iconName="bullhorn"
                        nextScreen="ParticlesPart3"
                        progressKey="level_ParticlesPart3_completed"
                    />
                </View>
                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_ParticlesPart4"
                        title="Partículas: Localización, Dirección, Límite / Shimikukuna: pi, man"
                        iconName="map"
                        nextScreen="ParticlesPart4"
                        progressKey="level_ParticlesPart4_completed"
                    />
                    <BouncyText>Partículas: Localización, Dirección, Límite / Shimikukuna: pi, man</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Negación / Mana ninkapak</BouncyText>

                    <LevelCard
                        levelKey="level_LaNegacion"
                        title="Negación / Mana ninkapak"
                        iconName="times-circle"
                        nextScreen="LaNegacion"
                        progressKey="level_LaNegacion_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_IntroduccionJuegosScreen2"
                        title="Juego: Módulo 2 / Pukllana: Ishkayniki Tantachiy Yachay"
                        iconName="gamepad"
                        type="game"
                        nextScreen="IntroduccionJuegosScreen2"
                        progressKey="level_IntroduccionJuegosScreen2_completed"
                    />
                    <BouncyText>Juego: Módulo 2 / Pukllana: Ishkayniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 2 / Ruraykuna: Ishkayniki Tantachiy Yachay</BouncyText>
                    <LevelCard
                        levelKey="level_Game2"
                        title="Evaluación: Módulo 2 / Ruraykuna: Ishkayniki Tantachiy Yachay"
                        iconName="pencil"
                        type="evaluation"
                        nextScreen="Game2"
                        progressKey="level_Game2_completed"
                    />
                </View>
                <TrophyCard
                    trophyKey="trofeo_modulo2_intermedio"
                    imageSource={require('../../../../assets/images/animals/jaguar.png')}
                />


                {/* Modulo 3 (Trofeo de Módulo 3) */}
                <BouncyTextTitulo>Módulo 3 / Kimsaniki Tantachiy Yachay</BouncyTextTitulo>

                {/* <Image source={require('../../../../assets/images/animals/guacamayo.png')} style={localStyles.islandImage} /> */}
                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_LosVerbos1"
                        title="Verbos / Imachikkuna"
                        iconName="exchange"
                        nextScreen="LosVerbos1"
                        progressKey="level_LosVerbos1_completed"
                    />
                    <BouncyText>Verbos / Imachikkuna</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Conjugación Verbos / Rimarikunata</BouncyText>

                    <LevelCard
                        levelKey="level_LosVerbosConjugaciones1"
                        title="Conjugación Verbos / Rimarikunata"
                        iconName="repeat"
                        nextScreen="LosVerbosConjugaciones1"
                        progressKey="level_LosVerbosConjugaciones1_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_LosAdjetivos1"
                        title="Adjetivos / Shutillikuna"
                        iconName="list"
                        nextScreen="LosAdjetivos1"
                        progressKey="level_LosAdjetivos1_completed"
                    />
                    <BouncyText>Adjetivos / Shutillikuna</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Ciudad / Llakta</BouncyText>
                    <LevelCard
                        levelKey="level_LaCiudad"
                        title="Ciudad / Llakta"
                        iconName="building"
                        nextScreen="LaCiudad"
                        progressKey="level_LaCiudad_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_IntroduccionJuegosScreen3"
                        title="Juego: Módulo 3 / Pukllana: Kimsaniki Tantachiy Yachay"
                        iconName="gamepad"
                        type="game"
                        nextScreen="IntroduccionJuegosScreen3"
                        progressKey="level_IntroduccionJuegosScreen3_completed"
                    />
                    <BouncyText>Juego: Módulo 3 / Pukllana: Kimsaniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 3 / Ruraykuna: Kimsaniki Tantachiy Yachay</BouncyText>

                    <LevelCard
                        levelKey="level_Game3"
                        title="Evaluación: Módulo 3 / Ruraykuna: Kimsaniki Tantachiy Yachay"
                        iconName="pencil"
                        type="evaluation"
                        nextScreen="Game3"
                        progressKey="level_Game3_completed"
                    />
                </View>
                <TrophyCard
                    trophyKey="trofeo_modulo3_intermedio"
                    imageSource={require('../../../../assets/images/animals/guacamayo.png')}
                />


                {/* Modulo 4 (Trofeo de Módulo 4) */}
                <BouncyTextTitulo>Módulo 4 / Chuskuniki Tantachiy Yachay</BouncyTextTitulo>

                {/* <Image source={require('../../../../assets/images/animals/cuy2.png')} style={localStyles.islandImage} /> */}
                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_LaCocina"
                        title="Cocina / Yanuna uku"
                        iconName="cutlery"
                        nextScreen="LaCocina"
                        progressKey="level_LaCocina_completed"
                    />
                    <BouncyText>Cocina / Yanuna uku</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Verbos / Imachikkuna</BouncyText>

                    <LevelCard
                        levelKey="level_LosVerbos2"
                        title="Verbos / Imachikkuna"
                        iconName="exchange"
                        nextScreen="LosVerbos2"
                        progressKey="level_LosVerbos2_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_LosAdjetivos2"
                        title="Adjetivos / Shutillikuna"
                        iconName="list"
                        nextScreen="LosAdjetivos2"
                        progressKey="level_LosAdjetivos2_completed"
                    />
                    <BouncyText>Adjetivos / Shutillikuna</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Dormitorio / Puñuna uku</BouncyText>

                    <LevelCard
                        levelKey="level_ElDormitorio"
                        title="Dormitorio / Puñuna uku"
                        iconName="bed"
                        nextScreen="ElDormitorio"
                        progressKey="level_ElDormitorio_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_IntroduccionJuegosScreen4"
                        title="Juego: Módulo 4 / Pukllana: Chuskuniki Tantachiy Yachay"
                        iconName="gamepad"
                        type="game"
                        nextScreen="IntroduccionJuegosScreen4"
                        progressKey="level_IntroduccionJuegosScreen4_completed"
                    />
                    <BouncyText>Juego: Módulo 4 / Pukllana: Chuskuniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 4 / Ruraykuna: Chuskuniki Tantachiy Yachay</BouncyText>

                    <LevelCard
                        levelKey="level_Game4"
                        title="Evaluación: Módulo 4 / Ruraykuna: Chuskuniki Tantachiy Yachay"
                        iconName="pencil"
                        type="evaluation"
                        nextScreen="Game4"
                        progressKey="level_Game4_completed"
                    />
                </View>
                <TrophyCard
                    trophyKey="trofeo_modulo4_intermedio"
                    imageSource={require('../../../../assets/images/animals/cuy2.png')}
                />


                {/*Modulo 5 (Trofeo Módulo 5) */}
                <BouncyTextTitulo>Módulo 5 / Pichkaniki Tantachiy Yachay</BouncyTextTitulo>

                {/* <Image source={require('../../../../assets/images/animals/llama.png')} style={localStyles.islandImage} /> */}
                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_LaUbicacion"
                        title="Ubicación / Kuska rimaykuna"
                        iconName="map-marker"
                        nextScreen="LaUbicacion"
                        progressKey="level_LaUbicacion_completed"
                    />
                    <BouncyText>Ubicación / Kuska rimaykuna</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Tiempo / Pacha</BouncyText>

                    <LevelCard
                        levelKey="level_ElTiempo"
                        title="Tiempo / Pacha"
                        iconName="clock-o"
                        nextScreen="ElTiempo"
                        progressKey="level_ElTiempo_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_ElPasadoSimple"
                        title="Pasado Simple / Yallirka pacha"
                        iconName="arrow-left"
                        nextScreen="ElPasadoSimple"
                        progressKey="level_ElPasadoSimple_completed"
                    />
                    <BouncyText>Pasado Simple / Yallirka pacha</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Participio Pasado / Yallishka pacha</BouncyText>

                    <LevelCard
                        levelKey="level_ElParticipioPasado"
                        title="Participio Pasado / Yallishka pacha"
                        iconName="history"
                        nextScreen="ElParticipioPasado"
                        progressKey="level_ElParticipioPasado_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_IntroduccionJuegosScreen5"
                        title="Juego: Módulo 5 / Pukllana: Pichkaniki Tantachiy Yachay"
                        iconName="gamepad"
                        type="game"
                        nextScreen="IntroduccionJuegosScreen5"
                        progressKey="level_IntroduccionJuegosScreen5_completed"
                    />
                    <BouncyText>Juego: Módulo 5 / Pukllana: Pichkaniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 5 / Ruraykuna: Pichkaniki Tantachiy Yachay</BouncyText>

                    <LevelCard
                        levelKey="level_Game5"
                        title="Evaluación: Módulo 5 / Ruraykuna: Pichkaniki Tantachiy Yachay"
                        iconName="pencil"
                        type="evaluation"
                        nextScreen="Game5"
                        progressKey="level_Game5_completed"
                    />
                </View>

                <TrophyCard
                    trophyKey="trofeo_modulo5_intermedio"
                    imageSource={require('../../../../assets/images/animals/llama.png')}
                />

                {/* Modulo 6 (Trofeo Módulo 6)*/}
                <BouncyTextTitulo>Módulo 6 / Suktaniki Tantachiy Yachay</BouncyTextTitulo>
                {/* <Image source={require('../../../../assets/images/animals/condor.png')} style={localStyles.islandImage} /> */}
                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_ElPasadoProgresivo"
                        title="Pasado Progresivo / Yallirka katiy pacha"
                        iconName="spinner"
                        nextScreen="ElPasadoProgresivo"
                        progressKey="level_ElPasadoProgresivo_completed"
                    />
                    <BouncyText>Pasado Progresivo / Yallirka katiy pacha</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Conjugación Presente Progresivo / Kunan pacha katiymanta rimarikuna</BouncyText>
                    <LevelCard
                        levelKey="level_ConjugacionPresenteProgresivo"
                        title="Conjugación Presente Progresivo / Kunan pacha katiymanta rimarikuna"
                        iconName="hourglass-half"
                        nextScreen="ConjugacionPresenteProgresivo"
                        progressKey="level_ConjugacionPresenteProgresivo_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_FuturoProximo"
                        title="Futuro Próximo / Ña shamuk pacha"
                        iconName="arrow-circle-right"
                        nextScreen="FuturoProximo"
                        progressKey="level_FuturoProximo_completed"
                    />
                    <BouncyText>Futuro Próximo / Ña shamuk pacha</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Futuro Simple / Shamuk pacha</BouncyText>
                    <LevelCard
                        levelKey="level_FuturoSimple"
                        title="Futuro Simple / Shamuk pacha"
                        iconName="calendar"
                        nextScreen="FuturoSimple"
                        progressKey="level_FuturoSimple_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_IntroduccionJuegosScreen6"
                        title="Juego: Módulo 6 / Pukllana: Suktaniki Tantachiy Yachay"
                        iconName="gamepad"
                        type="game"
                        nextScreen="IntroduccionJuegosScreen6"
                        progressKey="level_IntroduccionJuegosScreen6_completed"
                    />
                    <BouncyText>Juego: Módulo 6 / Pukllana: Suktaniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 6 / Ruraykuna: Suktaniki Tantachiy Yachay</BouncyText>
                    <LevelCard
                        levelKey="level_Game6"
                        title="Evaluación: Módulo 6 / Ruraykuna: Suktaniki Tantachiy Yachay"
                        iconName="pencil"
                        type="evaluation"
                        nextScreen="Game6"
                        progressKey="level_Game6_completed"
                    />
                </View>

                <TrophyCard
                    trophyKey="trofeo_modulo6_intermedio"
                    imageSource={require('../../../../assets/images/animals/condor.png')}
                />
            </ScrollView>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingVertical: 20,
    },
    pathRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 75,
        marginVertical: 20,
    },
    pathRowRight: {
        justifyContent: 'flex-end',
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#FFC107', // Amarillo brillante para un efecto divertido
        backgroundColor: '#FFEB3B', // Fondo amarillo brillante
    },
    circleLevel: {
        width: 70,
        height: 70,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 12,
        borderColor: '#8BC34A', // Verde brillante para resaltar niveles
        backgroundColor: '#C8E6C9',
    },
    evaluation: {
        backgroundColor: '#F44336', // Rojo para el nivel de evaluación
        borderColor: '#E53935',
    },
    islandImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    bouncyText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#212752', // Color similar a globos #212752 antes #212b68
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 4,
        borderRadius: 10,
        padding: 15,
    },
    bouncyTextTitulo: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#212752', // Color similar a globos #212752 antes #212b68
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 4,
        borderRadius: 10,
        padding: 15,
    },
    topicText: {
        fontSize: 18,
        marginLeft: 10,
    },
    disabled: { opacity: 0.5 }, // Estilo de deshabilitado
});

export default CaminoLevelsScreen;


