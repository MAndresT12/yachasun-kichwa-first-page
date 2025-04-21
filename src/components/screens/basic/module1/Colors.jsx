import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts, RibeyeMarrow_400Regular } from '@expo-google-fonts/ribeye-marrow';

import { styles } from '../../../../../styles/globalStyles';

import { FloatingHumu } from '../../../animations/FloatingHumu';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';

import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { SplashBubble } from '../../../ui/bubbles/SplashBubble';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const colors = ['#FF6347', '#4682B4', '#FFD700', '#32CD32', '#8A2BE2', '#FF4500'];

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');

const colors_data = [
    { kichwa: "Puka", spanish: "Rojo", hexadecimalColor: "#FF0000" },
    { kichwa: "Ankas", spanish: "Azul", hexadecimalColor: "#0000FF" },
    { kichwa: "Killu", spanish: "Amarillo", hexadecimalColor: "#FFFF00" },
    { kichwa: "Waylla", spanish: "Verde", hexadecimalColor: "#00FF00" },
    { kichwa: "Yana", spanish: "Negro", hexadecimalColor: "#000000" },
    { kichwa: "Yurak", spanish: "Blanco", hexadecimalColor: "#FFFFFF" },
    { kichwa: "Yanalla Ankas", spanish: "Azul Marino", hexadecimalColor: "#000080" },
    { kichwa: "Chawa Ankas", spanish: "Celeste", hexadecimalColor: "#87CEEB" },
    { kichwa: "Chawa Killu", spanish: "Amarillo Claro", hexadecimalColor: "#FFFFE0" },
    { kichwa: "Chawa Wayllu", spanish: "Verde Claro", hexadecimalColor: "#90EE90" },
    { kichwa: "Paku", spanish: "Café", hexadecimalColor: "#8B4513" },
    { kichwa: "Waminsi", spanish: "Rosado", hexadecimalColor: "#FFC0CB" },
    { kichwa: "Maywa", spanish: "Morado", hexadecimalColor: "#800080" },
    { kichwa: "Suku", spanish: "Plomo", hexadecimalColor: "#808080" },
    { kichwa: "Kishpu", spanish: "Naranja", hexadecimalColor: "#FFA500" },
];

const curiosity_data = [
    {
        key: '1',
        title: 'Curiosidades - Claro',
        text: 'Se usa la palabra "chawa" antes del color para indicar que este es claro.',
        imagePath: humuTalking,
    },
    {
        key: '2',
        title: 'Curiosidades - Oscuro',
        text: 'Para indicar que un color es oscuro se usa la palabra "yanalla" antes del color.',
        imagePath: humuTalking,
    },
    {
        key: '3',
        title: 'Curiosidades - Colores básicos',
        text: 'En esta lección solo te muestro solo los colores básicos y unos cuantos más.',
        imagePath: humuTalking,
    },
];

const getColorForLetter = (index) => {
    return colors[index % colors.length];
};

const FlipCard = ({ item, fontsLoaded }) => {
    const [flipped, setFlipped] = useState(false);
    const rotateY = useSharedValue(0);

    const animatedStyleFront = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value}deg` }],
    }));

    const animatedStyleBack = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value + 180}deg` }],
    }));

    const handleFlip = () => {
        rotateY.value = withTiming(flipped ? 0 : 180, { duration: 300 });
        setFlipped(!flipped);
    };

    return (
        <TouchableWithoutFeedback onPress={handleFlip}>
            <View style={styles.flipCard}>
                <Animated.View style={[styles.flipCardInner, styles.flipCardFront, animatedStyleFront]}>
                    <View style={styles.andesStyleGradientBox}>
                        <Text style={[styles.andesStyleText, { fontFamily: fontsLoaded ? 'RibeyeMarrow_400Regular' : 'sans-serif', flexDirection: 'row' }]}>
                            {item.spanish.split('').map((letter, index) => (
                                <Text key={index} style={{ color: getColorForLetter(index) }}>
                                    {letter}
                                </Text>
                            ))}
                        </Text>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <Text style={styles.kichwaText}>Kichwa:</Text>
                    <Text style={styles.kichwaText}>{item.kichwa}</Text>
                    <View style={[styles.colorBox]}>
                        {/*Use of splash bubble for colors lecture*/}
                        <SplashBubble fillColor={item.hexadecimalColor} />
                    </View>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const Colors = () => {

    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);
    const [fontsLoaded] = useFonts({
        RibeyeMarrow_400Regular,
    });

    const navigation = useNavigation();

    const toggleAccordion = (key) => {
        if (activeAccordion === key) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(key);
        }
    };

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_IntroGamesBasic1_completed', 'true');
            await AsyncStorage.setItem('level_EvaluationBasicModule1_completed', 'true');
            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };

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

    const content = fontsLoaded ? (
        <View style={styles.body}>
            <CardDefault title="Un arcoíris al cielo">
                <Text style={styles.cardContent}>
                    Los colores nos permiten ver lo bello de este mundo.{"\n\n"}
                    Ahora hablaremos de los colores y los mostraremos en pequeñas tarjetas.
                    Diviértete aprendiendo.
                </Text>
            </CardDefault>
            <View style={styles.gridContainer}>
                {colors_data.map((item, index) => (
                    <FlipCard key={index} item={item} fontsLoaded={fontsLoaded} />
                ))}
            </View>

            {curiosity_data.map((item) => (
                <AccordionDefault
                    key={item.key}
                    title={item.title}
                    isOpen={activeAccordion === item.key}
                    onPress={() => toggleAccordion(item.key)}
                >
                    <View style={styles.curiositiesContent}>
                        <FloatingHumu >
                            <ImageContainer path={item.imagePath} style={styles.imageModal} />
                        </FloatingHumu>
                        <ComicBubble
                            text={item.text}
                            arrowDirection="left"
                        />
                    </View>
                </AccordionDefault>
            ))}
        </View>
    ) : (
        <ActivityIndicator size="large" color="#0000ff" />
    );

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}

        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="basic" />
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                {content}

                {showHelp && (
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={showHelp}
                        onRequestClose={() => toggleHelpModal()}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <View style={styles.helpModalContent}>
                                    <FloatingHumu >
                                        <ImageContainer path={humuTalking} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en cada tarjeta de un color para ver su traducción.'
                                        arrowDirection="left"
                                    />
                                </View>
                                <View style={styles.buttonContainerAlphabet}>
                                    <TouchableOpacity onPress={() => toggleHelpModal()}>
                                        <View style={styles.buttonDefaultAlphabet}>
                                            <Text style={styles.buttonTextAlphabet}>Cerrar</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                )}

                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio"
                        navigationTarget="CaminoLevelsBasic"
                    />
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel();
                            navigation.navigate('IntroGamesBasic1');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Colors;
