import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../../../../../styles/globalStyles';

import { FloatingHumu } from '../../../animations/FloatingHumu';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';

import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');

const images = {
    house1: require('../../../../../assets/images/basic/module3/house/house1.jpg'),
};

const house_data = [
    { houseImage: images.house1, kichwa: "Wasi", spanish: "Casa" },
    { houseImage: images.house1, kichwa: "Allpa", spanish: "Suelo" },
    { houseImage: images.house1, kichwa: "Pirka", spanish: "Pared" },
    { houseImage: images.house1, kichwa: "Punku", spanish: "Puerta" },
    { houseImage: images.house1, kichwa: "Tuku", spanish: "Ventana" },
    { houseImage: images.house1, kichwa: "Yanuna Uku", spanish: "Cocina" },
    { houseImage: images.house1, kichwa: "Yanta", spanish: "Leña" },
    { houseImage: images.house1, kichwa: "Nina", spanish: "Fuego" },
    { houseImage: images.house1, kichwa: "Pakuyla", spanish: "Fósforo" },
    { houseImage: images.house1, kichwa: "Yanuna Tullpa", spanish: "Cocina Metálica" },
    { houseImage: images.house1, kichwa: "Pataku", spanish: "Mesa" },
    { houseImage: images.house1, kichwa: "Tiyarina", spanish: "Silla" },
    { houseImage: images.house1, kichwa: "Mama Wisha", spanish: "Cucharón" },
    { houseImage: images.house1, kichwa: "Wisha", spanish: "Cuchara" },
    { houseImage: images.house1, kichwa: "Manka", spanish: "Olla" },
    { houseImage: images.house1, kichwa: "Puñuna Uku", spanish: "Dormitorio" },
    { houseImage: images.house1, kichwa: "Kawitu", spanish: "Cama" },
    { houseImage: images.house1, kichwa: "Sawna", spanish: "Almohada" },
    { houseImage: images.house1, kichwa: "Katana", spanish: "Cobija" },
    { houseImage: images.house1, kichwa: "Armana Uku", spanish: "Ducha" },
    { houseImage: images.house1, kichwa: "Ishpana Uku", spanish: "Baño" }
];

const curiosity_data = [
    {
        key: '1',
        title: 'Curiosidades - La casa tradicional',
        text: 'La casa andina está construida con materiales naturales como lodo y paja, lo que la hace más abrigada que las casas modernas de cemento.',
        imagePath: humuTalking,
    },
];

const FlipCard = ({ item }) => {
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
                    <ImageContainer path={item.houseImage} style={styles.imageCards} />
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <Text style={styles.translationLabel}>Español:</Text>
                    <Text style={styles.spanishText}>{item.spanish}</Text>
                    <Text style={styles.translationLabel}>Kichwa:</Text>
                    <Text style={styles.kichwaText}>{item.kichwa}</Text>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const House = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

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
            await AsyncStorage.setItem('level_Classroom_completed', 'true');
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
                    <CardDefault title="Veo veo con mis ojitos...">
                        <Text style={styles.cardContent}>
                            Nuestra casa es un lugar especial donde pasamos mucho tiempo de nuestras vidas.
                            En ella encontramos objetos que nos ayudan a realizar nuestras actividades diarias,
                            otros que nos dan muchos recuerdos y otros que son muy necesarios.{`\n\n`}
                            A continuación, te presento algunas cosas que puedes encontrar en tu casa.
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {house_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
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
                                    arrowDirection="leftUp"
                                />
                            </View>
                        </AccordionDefault>
                    ))}
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
                                        text='Presiona en cada tarjeta de una casa para ver su traducción.'
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
                            navigation.navigate('Classroom');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default House;