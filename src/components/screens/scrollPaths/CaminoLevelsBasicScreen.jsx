import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../../../../styles/globalStyles';

import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';

import LevelCard from '../../ui/cards/LevelCard';
import TrophyCard from '../../ui/cards/TrophyCard';

const BouncyText = ({ children }) => {
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withRepeat(
            withSequence(
                withTiming(1.1, { duration: 1000 }),
                withTiming(1, { duration: 1000 })
            ),
            -1,
            true
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

    return (
        <Animated.Text style={[localStyles.bouncyTextTitulo]}>
            {children}
        </Animated.Text>
    );
};

const CaminoLevelsScreen = () => {
    const [selectedTrophy, setSelectedTrophy] = useState(null); // Estado para el trofeo seleccionado
    const [showModal, setShowModal] = useState(false); // Estado del modal
    const [progress, setProgress] = useState(0);

    const trofeoKeys = [
        'trofeo_modulo1_basic',
        'trofeo_modulo2_basic',
        'trofeo_modulo3_basic',
        'trofeo_modulo4_basic',
        'trofeo_modulo5_basic',
        'trofeo_modulo6_basic',
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
    // Función para abrir el modal al seleccionar un trofeo
    const handleTrophyClick = (trophy) => {
        setSelectedTrophy(trophy);
        setShowModal(true);
    };

    // Datos de los trofeos (puedes agregar más según tus necesidades)
    const trophiesBasic = [
        {
            key: 'trofeo_modulo1_basic',
            image: require('../../../../assets/images/basic/badges/abc.jpg'),
            titulo: '¡ABC!',
            description: '¡Este trofeo marca el comienzo de tu aventura en Kichwa! Ahora conoces el alfabeto y las vocales del idioma Kichwa, ¡y puedes pronunciar palabras básicas! Ya puedes identificar letras como la "A", "I", y "U", ¡todo en Kichwa!',
        },
        {
            key: 'trofeo_modulo2_basic',
            image: require('../../../../assets/images/basic/badges/family.jpg'),
            titulo: '¡Familia!',
            description: '¡Felicitaciones! Este trofeo significa que ahora sabes cómo hablar sobre tu familia en Kichwa. Conoces las palabras para mamá, papá, hermanos y más, ¡y puedes presentarlos con orgullo!',
        },
        {
            key: 'trofeo_modulo3_basic',
            image: require('../../../../assets/images/basic/badges/home-food-school.jpg'),
            titulo: '¡El hogar, comida y la escuela!',
            description: '¡Lo lograste! Con este trofeo, puedes hablar sobre tu hogar, los alimentos que comes, y las cosas que encuentras en la escuela. Ahora puedes nombrar objetos y lugares cotidianos en Kichwa.',
        },
        {
            key: 'trofeo_modulo4_basic',
            image: require('../../../../assets/images/basic/badges/valley-flowers.jpg'),
            titulo: '¡Valle de flores!',
            description: '¡Has conquistado el valle de las flores! Este trofeo demuestra que ya sabes sobre la naturaleza, animales y las maravillas del entorno en Kichwa. ¡Incluso puedes hablar sobre la vida en el campo!',
        },
        {
            key: 'trofeo_modulo5_basic',
            image: require('../../../../assets/images/basic/badges/orientation.jpg'),
            titulo: '¡Simón dice!',
            description: '¡Qué divertido! Este trofeo significa que sabes cómo seguir instrucciones y dar direcciones en Kichwa. Puedes decir dónde están las cosas, ¡y moverte como un experto usando tu orientación!',
        },
        {
            key: 'trofeo_modulo6_basic',
            image: require('../../../../assets/images/basic/badges/present.jpg'),
            titulo: '¡Atardecer!',
            description: '¡Atardecer perfecto! Este trofeo significa que puedes hablar sobre acciones en el presente en Kichwa. Ahora sabes cómo describir lo que estás haciendo en este momento, ¡todo en Kichwa!',
        },
    ];

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={localStyles.gradientBackground}
        >
            <View style={styles.header}>
                <ProgressCircleWithTrophies progress={progress} level="basic" />
            </View>

            <ScrollView contentContainerStyle={localStyles.scrollViewContent}>

                {/* Modulo 1 */}
                <BouncyTextTitulo>El ABC del Kichwa</BouncyTextTitulo>
                <BouncyTextTitulo>Módulo 1 / Shukniki  Tantachiy Yachay</BouncyTextTitulo>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_Alphabet"
                        title="El Alfabeto / Llika"
                        iconName="book"
                        nextScreen="IntroModuloB1"
                        progressKey="level_Alphabet_completed"
                    />
                    <BouncyText>El Alfabeto / Llika</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Los Primeros Números / Yupaykuna</BouncyText>
                    <LevelCard
                        levelKey="level_FirstNumbers"
                        title="Los Primeros Números / Yupaykuna"
                        iconName="sort-numeric-desc"
                        nextScreen="FirstNumbers"
                        progressKey="level_FirstNumbers_completed"
                    />
                </View>
                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_ToCount"
                        title="Los Números Ordinales / Nikichik yupaykuna"
                        iconName="trophy"
                        nextScreen="ToCount"
                        progressKey="level_ToCount_completed"
                    />
                    <BouncyText>Los Números Ordinales / Nikichik yupaykuna</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Los Colores / Tullpukuna</BouncyText>
                    <LevelCard
                        levelKey="level_Colors"
                        title="Los Colores / Tullpukuna"
                        iconName="paint-brush"
                        nextScreen="Colors"
                        progressKey="level_Colors_completed"
                    />
                </View>
                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_IntroGamesBasic1"
                        title="Juego: Módulo 1 / Pukllana: Shukniki  Tantachiy Yachay"
                        iconName="gamepad"
                        type="game"
                        nextScreen="IntroGamesBasic1"
                        progressKey="level_IntroGamesBasic1_completed"
                    />
                    <BouncyText>Juego: Módulo 1 / Pukllana: Shukniki  Tantachiy Yachay</BouncyText>

                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Evaluación: Módulo 1 / Ruraykuna: Shukniki  Tantachiy Yachay</BouncyText>

                    <LevelCard
                        levelKey="level_EvaluationBasicModule1"
                        title="Evaluación: Módulo 1 / Ruraykuna: Shukniki  Tantachiy Yachay"
                        iconName="pencil"
                        type="evaluation"
                        nextScreen="EvaluationBasicModule1"
                        progressKey="level_EvaluationBasicModule1_completed"
                    />
                </View>
                {/* Modulo 1 (Trofeo de Módulo 1)*/}
                <TouchableOpacity onPress={() => handleTrophyClick(trophiesBasic[0])}>
                    <TrophyCard
                        trophyKey="trofeo_modulo1_basic"
                        imageSource={require('../../../../assets/images/basic/badges/abc.jpg')}
                    />
                </TouchableOpacity>

                {/* Modulo 2 */}
                <BouncyTextTitulo>Una gran familia</BouncyTextTitulo>
                <BouncyTextTitulo>Módulo 2 / Ishkayniki Tantachiy Yachay</BouncyTextTitulo>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_GreetingsPart1"
                        title="Los Saludos Parte 1: Básicos / Napaykuna"
                        iconName="handshake-o"
                        nextScreen="IntroModuloB2"
                        progressKey="level_GreetingsPart1_completed"
                    />
                    <BouncyText> Los Saludos / Napaykuna 1️⃣</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText> Los Saludos / Napaykuna 2️⃣</BouncyText>
                    <LevelCard
                        levelKey="level_GreetingsPart2"
                        title="Los Saludos Parte 2: Diálogos / Napaykuna"
                        iconName="comments-o"
                        nextScreen="GreetingsPart2"
                        progressKey="level_GreetingsPart2_completed"
                    />
                </View>
                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_PronounsSentence"
                        title="Los pronombres personales, el verbo kana y la estructura de una oración / Shutipakrantikuna, imachik kana, yuyayki wallpa"
                        iconName="address-card"
                        nextScreen="PronounsSentence"
                        progressKey="level_PronounsSentence_completed"
                    />
                    <BouncyText>Los pronombres personales, el verbo kana y la estructura de una oración / Shutipakrantikuna, imachik kana, yuyayki wallpa</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>La Familia / Ayllu 1️⃣</BouncyText>

                    <LevelCard
                        levelKey="level_FamilyPart1"
                        title="La Familia Parte 1: Núcleo / Ayllu"
                        iconName="users"
                        nextScreen="FamilyPart1"
                        progressKey="level_FamilyPart1_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_IntroGamesBasic2"
                        title="Juego: Módulo 2 / Pukllana: Ishkayniki Tantachiy Yachay"
                        iconName="gamepad"
                        type="game"
                        nextScreen="IntroGamesBasic2"
                        progressKey="level_IntroGamesBasic2_completed"
                    />
                    <BouncyText>Juego: Módulo 2 / Pukllana: Ishkayniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 2 / Ruraykuna: Ishkayniki Tantachiy Yachay</BouncyText>
                    <LevelCard
                        levelKey="level_EvaluationBasicModule2"
                        title="Evaluación: Módulo 2 / Ruraykuna: Ishkayniki Tantachiy Yachay"
                        iconName="pencil"
                        type="evaluation"
                        nextScreen="EvaluationBasicModule2"
                        progressKey="level_EvaluationBasicModule2_completed"
                    />
                </View>

                {/* Modulo 2 (Trofeo de Módulo 2)*/}
                <TouchableOpacity onPress={() => handleTrophyClick(trophiesBasic[1])}>
                    <TrophyCard
                        trophyKey="trofeo_modulo2_basic"
                        imageSource={require('../../../../assets/images/basic/badges/family.jpg')}
                    />
                </TouchableOpacity>

                {/* Modulo 3 */}
                <BouncyTextTitulo>Objetos del diario</BouncyTextTitulo>
                <BouncyTextTitulo>Módulo 3 / Kimsaniki Tantachiy Yachay</BouncyTextTitulo>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_FamilyPart2"
                        title="La Familia Parte 2: Extendida / Ayllu"
                        iconName="user-plus"
                        nextScreen="IntroModuloB3"
                        progressKey="level_FamilyPart2_completed"
                    />
                    <BouncyText>La Familia / Ayllu 2️⃣</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Las partes del cuerpo humano / Aycha ukkunpak shimikuna</BouncyText>
                    <LevelCard
                        levelKey="level_BodyParts"
                        title="Las partes del cuerpo humano / Aycha ukkunpak shimikuna"
                        iconName="female"
                        nextScreen="BodyParts"
                        progressKey="level_BodyParts_completed"
                    />
                </View>
                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_House"
                        title="Las cosas de la casa / Wasipi imakunamanta"
                        iconName="bed"
                        nextScreen="House"
                        progressKey="level_House_completed"
                    />
                    <BouncyText>Las cosas de la casa / Wasipi imakunamanta</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>El Aula / Yachana uku</BouncyText>

                    <LevelCard
                        levelKey="level_Classroom"
                        title="El Aula / Yachana uku"
                        iconName="eraser"
                        nextScreen="Classroom"
                        progressKey="level_Classroom_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_IntroGamesBasic3"
                        title="Juego: Módulo 3 / Pukllana: Shukniki  Tantachiy Yachay"
                        iconName="gamepad"
                        type="game"
                        nextScreen="IntroGamesBasic3"
                        progressKey="level_IntroGamesBasic3_completed"
                    />
                    <BouncyText>Juego: Módulo 3 / Pukllana: Shukniki  Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 3 / Ruraykuna: Shukniki  Tantachiy Yachay</BouncyText>
                    <LevelCard
                        levelKey="level_EvaluationBasicModule3"
                        title="Evaluación: Módulo 3 / Ruraykuna: Shukniki  Tantachiy Yachay"
                        iconName="pencil"
                        type="evaluation"
                        nextScreen="EvaluationBasicModule3"
                        progressKey="level_EvaluationBasicModule3_completed"
                    />
                </View>

                {/* Modulo 3 (Trofeo de Módulo 3)*/}
                <TouchableOpacity onPress={() => handleTrophyClick(trophiesBasic[2])}>
                    <TrophyCard
                        trophyKey="trofeo_modulo3_basic"
                        imageSource={require('../../../../assets/images/basic/badges/home-food-school.jpg')}
                    />
                </TouchableOpacity>

                {/* Modulo 4 */}
                <BouncyTextTitulo>La naturaleza y su belleza</BouncyTextTitulo>
                <BouncyTextTitulo>Módulo 4 / Chuskuniki Tantachiy Yachay</BouncyTextTitulo>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_Nature"
                        title="La naturaleza / Pachamama"
                        iconName="tree"
                        nextScreen="IntroModuloB4"
                        progressKey="level_Nature_completed"
                    />
                    <BouncyText>La naturaleza / Pachamama</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Los alimentos / Mikunakuna</BouncyText>
                    <LevelCard
                        levelKey="level_Foods"
                        title="Los alimentos / Mikunakuna"
                        iconName="cutlery"
                        nextScreen="Foods"
                        progressKey="level_Foods_completed"
                    />
                </View>
                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_Orientation"
                        title="La orientación / Suyumanta rimashun"
                        iconName="arrows"
                        nextScreen="Orientation"
                        progressKey="level_Orientation_completed"
                    />
                    <BouncyText>La orientación / Suyumanta rimashun</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Los animales / Wiwakuna</BouncyText>

                    <LevelCard
                        levelKey="level_AnimalsBasic"
                        title="Los animales / Wiwakuna"
                        iconName="paw"
                        nextScreen="AnimalsBasic"
                        progressKey="level_AnimalsBasic_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_IntroGamesBasic4"
                        title="Juego: Módulo 4 / Pukllana: Chuskuniki Tantachiy Yachay"
                        iconName="gamepad"
                        type="game"
                        nextScreen="IntroGamesBasic4"
                        progressKey="level_IntroGamesBasic4_completed"
                    />
                    <BouncyText>Juego: Módulo 4 / Pukllana: Chuskuniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 4 / Ruraykuna: Chuskuniki Tantachiy Yachay</BouncyText>
                    <LevelCard
                        levelKey="level_EvaluationBasicModule4"
                        title="Evaluación: Módulo 4 / Ruraykuna: Chuskuniki Tantachiy Yachay"
                        iconName="pencil"
                        type="evaluation"
                        nextScreen="EvaluationBasicModule4"
                        progressKey="level_EvaluationBasicModule4_completed"
                    />
                </View>

                {/* Modulo 4 (Trofeo de Módulo 4)*/}
                <TouchableOpacity onPress={() => handleTrophyClick(trophiesBasic[3])}>
                    <TrophyCard
                        trophyKey="trofeo_modulo4_basic"
                        imageSource={require('../../../../assets/images/basic/badges/valley-flowers.jpg')}
                    />
                </TouchableOpacity>

                {/* Modulo 5 */}
                <BouncyTextTitulo>Describe el mundo</BouncyTextTitulo>
                <BouncyTextTitulo>Módulo 5 / Pichkaniki Tantachiy Yachay</BouncyTextTitulo>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_Pluralization"
                        title="La pluralización / Tawkachina"
                        iconName="list-ol"
                        nextScreen="IntroModuloB5"
                        progressKey="level_Pluralization_completed"
                    />
                    <BouncyText>La pluralización / Tawkachina</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Género / Kariwarmiyachik</BouncyText>
                    <LevelCard
                        levelKey="level_Gender"
                        title="Género / Kariwarmiyachik"
                        iconName="venus-mars"
                        nextScreen="Gender"
                        progressKey="level_Gender_completed"
                    />
                </View>
                <View style={localStyles.pathRow}>

                    <LevelCard
                        levelKey="level_Quantity"
                        title="La cantidad / Mashnaykuna"
                        iconName="cubes"
                        nextScreen="Quantity"
                        progressKey="level_Quantity_completed"
                    />
                    <BouncyText>La cantidad / Mashnaykuna</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Tamaño / Hatunyachik</BouncyText>

                    <LevelCard
                        levelKey="level_Size"
                        title="Tamaño / Hatunyachik"
                        iconName="level-up"
                        nextScreen="Size"
                        progressKey="level_Size_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_IntroGamesBasic5"
                        title="Juego: Módulo 5 / Pukllana: Pichkaniki Tantachiy Yachay"
                        iconName="gamepad"
                        type="game"
                        nextScreen="IntroGamesBasic5"
                        progressKey="level_IntroGamesBasic5_completed"
                    />
                    <BouncyText>Juego: Módulo 5 / Pukllana: Pichkaniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 5 / Ruraykuna: Pichkaniki Tantachiy Yachay</BouncyText>
                    <LevelCard
                        levelKey="level_EvaluationBasicModule5"
                        title="Evaluación: Módulo 5 / Ruraykuna: Pichkaniki Tantachiy Yachay"
                        iconName="pencil"
                        type="evaluation"
                        nextScreen="EvaluationBasicModule5"
                        progressKey="level_EvaluationBasicModule5_completed"
                    />
                </View>

                {/* Modulo 5 (Trofeo de Módulo 5)*/}
                <TouchableOpacity onPress={() => handleTrophyClick(trophiesBasic[4])}>
                    <TrophyCard
                        trophyKey="trofeo_modulo5_basic"
                        imageSource={require('../../../../assets/images/basic/badges/orientation.jpg')}
                    />
                </TouchableOpacity>

                {/* Modulo 6 */}
                <BouncyTextTitulo>El primer gran desafío</BouncyTextTitulo>
                <BouncyTextTitulo>Módulo 6 / Suktaniki Tantachiy Yachay</BouncyTextTitulo>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_Imperative"
                        title="El imperativo / Rurachik"
                        iconName="hand-o-right"
                        nextScreen="IntroModuloB6"
                        progressKey="level_Imperative_completed"
                    />
                    <BouncyText>El imperativo / Rurachik</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>La conjugación en tiempo presente / Kunan pachamanta rimarikuna</BouncyText>
                    <LevelCard
                        levelKey="level_SimplePresent"
                        title="La conjugación en tiempo presente / Kunan pachamanta rimarikuna"
                        iconName="font"
                        nextScreen="SimplePresent"
                        progressKey="level_SimplePresent_completed"
                    />
                </View>

                <View style={localStyles.pathRow}>
                    <LevelCard
                        levelKey="level_IntroGamesBasic6"
                        title="Juego: Módulo 6 / Pukllana: Suktaniki Tantachiy Yachay"
                        iconName="gamepad"
                        type="game"
                        nextScreen="IntroGamesBasic6"
                        progressKey="level_IntroGamesBasic6_completed"
                    />
                    <BouncyText>Juego: Módulo 6 / Pukllana: Suktaniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 6 / Ruraykuna: Suktaniki Tantachiy Yachay</BouncyText>
                    <LevelCard
                        levelKey="level_EvaluationBasicModule6"
                        title="Evaluación: Módulo 6 / Ruraykuna: Suktaniki Tantachiy Yachay"
                        iconName="pencil"
                        type="evaluation"
                        nextScreen="EvaluationBasicModule6"
                        progressKey="level_EvaluationBasicModule6_completed"
                    />
                </View>

                {/* Modulo 6 (Trofeo de Módulo 6)*/}
                <TouchableOpacity onPress={() => handleTrophyClick(trophiesBasic[5])}>
                    <TrophyCard
                        trophyKey="trofeo_modulo6_basic"
                        imageSource={require('../../../../assets/images/basic/badges/present.jpg')}
                    />
                </TouchableOpacity>

                {/* Modal para mostrar la descripción del trofeo */}
                {selectedTrophy && (
                    <Modal animationType="slide" transparent={true} visible={showModal} onRequestClose={() => setShowModal(false)}>
                        <View style={localStyles.modalContainer}>
                            <View style={localStyles.modalContent}>
                                <Text style={localStyles.modalTitle}>{selectedTrophy.titulo}</Text>
                                <Text style={localStyles.modalMessage}>{selectedTrophy.description}</Text>

                                <View style={styles.buttonContainerAlphabet}>
                                    <TouchableOpacity onPress={() => setShowModal(false)}>
                                        <View style={styles.buttonDefaultAlphabet}>
                                            <Text style={styles.buttonTextAlphabet}>Cerrar</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                )}
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
        borderWidth: 5,
        borderColor: '#8BC34A', // Verde brillante para resaltar niveles
        backgroundColor: '#228825',
    },
    evaluation: {
        backgroundColor: '#F44336', // Rojo para el nivel de evaluación
        borderColor: '#E53935',
        borderWidth: 5,
    },
    islandImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
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
});

export default CaminoLevelsScreen;


