import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal, Dimensions } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withRepeat } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../../../../../styles/globalStyles';

import { FloatingHumu } from '../../../animations/FloatingHumu';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';

import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');
const humuTalkingPNG = require('../../../../../assets/images/humu/humu-talking.png');

const { width } = Dimensions.get('window');

const images = {
    pluralization1: require('../../../../../assets/images/basic/module5/pluralization/pluralization1.png'),
};

const pluralization_data = [
    {
        kichwa: "Puyu",
        spanish: "Nube",
        kichwaPlural: "Puyukuna",
        spanishPlural: "Nubes",
        imageCard: images.pluralization1,
    },
    {
        kichwa: "Sisa",
        spanish: "Flor",
        kichwaPlural: "Sisakuna",
        spanishPlural: "Flores",
        imageCard: images.pluralization1,
    },
    {
        kichwa: "Tanta",
        spanish: "Pan",
        kichwaPlural: "Tantakuna",
        spanishPlural: "Panes",
        imageCard: images.pluralization1,
    },
    {
        kichwa: "Kuy",
        spanish: "Cuy",
        kichwaPlural: "Kuykuna",
        spanishPlural: "Cuyes",
        imageCard: images.pluralization1,
    }
];


const FlipCard = ({ item }) => {
    const [flipped, setFlipped] = useState(false);
    const rotateY = useSharedValue(0);
    const humuOpacity = useSharedValue(0);
    const humuLeftPosition = useSharedValue(-width * 0.008);
    const arrowOpacity = useSharedValue(0); // Arrow opacity control
    const cardOpacity = useSharedValue(0);
    const cardTranslateX = useSharedValue(-width * 0.43);

    const animatedStyleFront = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value}deg` }],
    }));

    const animatedStyleBack = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value + 180}deg` }],
    }));

    const animatedHumuStyle = useAnimatedStyle(() => ({
        opacity: humuOpacity.value,
        transform: [{ translateX: humuLeftPosition.value }],
    }));

    const animatedArrowStyle = useAnimatedStyle(() => ({
        opacity: arrowOpacity.value, // Control arrow opacity here
    }));

    const animatedCardStyle = useAnimatedStyle(() => ({
        opacity: cardOpacity.value,
        transform: [{ translateX: cardTranslateX.value }],
    }));

    const handleFlip = () => {
        if (!flipped) {
            rotateY.value = withTiming(180, { duration: 300 });
            setTimeout(() => {
                humuOpacity.value = withTiming(1, { duration: 300 });
                humuLeftPosition.value = withTiming(
                    width * 0.2,
                    { duration: 500 },
                    () => {
                        humuLeftPosition.value = withTiming(width * 0.28, {
                            duration: 200,
                            easing: Easing.bounce,
                        }, () => {
                            // Arrow fades in after Humu's animation finishes
                            arrowOpacity.value = withTiming(0.8, { duration: 500 }, () => {
                                // Start the arrow loop
                                arrowOpacity.value = withRepeat(
                                    withTiming(0.2, { duration: 800 }),
                                    -1,
                                    true // This makes it go back and forth between 0.2 and 0.8
                                );
                            });
                            // Start the Humu loop moving back and forth
                            humuLeftPosition.value = withRepeat(
                                withTiming(width * 0.3, { duration: 1000 }),
                                -1,
                                true // Moves back and forth smoothly
                            );
                        });
                    }
                );
            }, 1000);
        } else {
            rotateY.value = withTiming(0, { duration: 300 });
            humuOpacity.value = withTiming(0, { duration: 300 }, () => {
                humuLeftPosition.value = -width * 0.008;
            });
            arrowOpacity.value = withTiming(0, { duration: 300 }); // Hide the arrow when flipped back
            cardOpacity.value = withTiming(0, { duration: 300 });
            cardTranslateX.value = withTiming(-width * 0.43, { duration: 300 });
        }
        setFlipped(!flipped);
    };

    const handleGesture = (event) => {
        const { translationX } = event.nativeEvent;

        if (translationX > 50) {
            humuLeftPosition.value = withTiming(width, { duration: 300 });
            // Arrow fades out rapidly when gesture is triggered
            arrowOpacity.value = withTiming(0, { duration: 100 });
            setTimeout(() => {
                cardOpacity.value = withTiming(1, { duration: 300 });
                cardTranslateX.value = withTiming(0, { duration: 300 });
            }, 300);
        }
    };

    return (
        <View style={styles.flipCardContainerBothCardsGreetings2}>
            <TouchableWithoutFeedback onPress={handleFlip}>
                <View style={styles.flipCardGreetings2}>
                    <Animated.View style={[styles.flipCardInnerGreetings2, styles.flipCardFrontGreetings2, animatedStyleFront]}>
                        <ImageContainer path={item.imageCard} style={styles.imageCards} />
                    </Animated.View>
                    <Animated.View style={[styles.flipCardInnerGreetings2, styles.flipCardBackGreetings2, animatedStyleBack]}>
                        <Text style={styles.translationLabel}>Singular:</Text>
                        <Text style={styles.spanishText}>{item.spanish}</Text>
                        <Text style={styles.kichwaText}>{item.kichwa}</Text>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>

            <PanGestureHandler onGestureEvent={handleGesture}>
                <Animated.Image
                    source={humuTalkingPNG}
                    style={[styles.humuImage, animatedHumuStyle]}
                />
            </PanGestureHandler>

            {/* Arrow that appears after Humu animation */}
            <Animated.View style={[animatedArrowStyle, { position: 'absolute', left: '65%', top: '50%' }]}>
                <FontAwesome name="arrow-right" size={24} color="white" />
            </Animated.View>

            <Animated.View style={[styles.flipCard2ndGreetings2, animatedCardStyle]}>
                <CardDefault styleContainer={styles.flipCardSecondCardGreetings2} styleCard={styles.flipCardSecondCardContentGreetings2}>
                    <Text style={styles.translationLabel}>Plural:</Text>
                    <Text style={styles.spanishText}>{item.spanishPlural}</Text>
                    <Text style={styles.kichwaText}>{item.kichwaPlural}</Text>
                </CardDefault>
            </Animated.View>
        </View>
    );
};

const Pluralization = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

    const navigation = useNavigation();

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_Gender_completed', 'true');
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
                <View style={styles.body}>
                    <CardDefault title="¿Cómo hablar de muchas cosas?">
                        <Text style={styles.cardContent}>
                            Para transformar una palabra del singular al plural, ponemos la
                            partícula -kuna al final de la palabra.{`\n\n`}
                            Esto se traduce a:{`\n\n`}
                            Shukllachikmanta tawkachikman tikrachinkapakka –kuna
                            shimikutami churanchik.
                        </Text>
                    </CardDefault>

                    <View style={styles.gridContainerGreetings2}>
                        {pluralization_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>
                </View>

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
                                        text='Presiona en las cartas y desliza a Humu para ver las respuestas.'
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
                            navigation.navigate('Gender');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Pluralization;