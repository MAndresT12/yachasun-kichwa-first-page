import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';

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
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');

const images = {
    family1: require('../../../../../assets/images/basic/module2/family/family1.png'),
};

const family_data = [
    { famliyImage: images.family1, kichwa: "Hatun tayta / Hatun yaya", spanish: "Abuelo" },
    { famliyImage: images.family1, kichwa: "Hatun mama", spanish: "Abuela" },
    { famliyImage: images.family1, kichwa: "Tayta / Yaya", spanish: "Papá" },
    { famliyImage: images.family1, kichwa: "Mama", spanish: "Mamá" },
    { famliyImage: images.family1, kichwa: "Warmi", spanish: "Esposa" },
    { famliyImage: images.family1, kichwa: "Kusa", spanish: "Esposo" },
    { famliyImage: images.family1, kichwa: "Churi", spanish: "Hijo" },
    { famliyImage: images.family1, kichwa: "Ushushi", spanish: "Hija" },
    { famliyImage: images.family1, kichwa: "Hatun churi", spanish: "Nieto" },
    { famliyImage: images.family1, kichwa: "Hatun ushushi", spanish: "Nieta" },
];

const sibling_data = [
    { genero: "De hermana a hermano ♀️➡️♂️", kichwa: "Pani" },
    { genero: "De hermano a hermana ♂️➡️♀️", kichwa: "Turi" },
    { genero: "De hermano a hermano ♂️➡️♂️", kichwa: "Wawki" },
    { genero: "De hermana a hermana ♀️➡️♀️", kichwa: "Ñaña" },
];

const curiosity_data = [
    {
        key: '1',
        title: 'Curiosidades - La Familia Indígena',
        text: 'La familia es muy importante en el mundo indígena. Entre padres e hijos, deben compartir conocimientos de cultura, tradición y unidad.',
        imagePath: humuTalking,
    },
    {
        key: '2',
        title: 'Curiosidades - Parte de la familia',
        text: 'También se considerada, como parte de la familia, a las plantas, el agua, los animales y las montañas.',
        imagePath: humuTalking,
    },
];

const renderData = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.genero}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
        </View>
    ));
};

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
                    <ImageContainer path={item.famliyImage} style={styles.imageCards} />
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

const FamilyPart1 = () => {

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
            await AsyncStorage.setItem('level_IntroGamesBasic2_completed', 'true');
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
                    <CardDefault title="Amor por nuestra familia">
                        <Text style={styles.cardContent}>
                            Nuestra familia siempre nos apoya y nos hace felices. La verdad es que amo mucho a mí familia, y ¿tú? {"\n\n"}
                            Es por esto, que quiero enseñarte cómo hablar de tú familia en Kichwa.
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {family_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>

                    <CardDefault title="Nuestros hermanos">
                        <Text style={styles.cardContent}>
                            ¿No sé si tú tengas hermanos? Yo si los tengo. Somos varios hermanos en mi familia.
                            ¡Una gran familia de verdad! Es bueno saber cómo dirigirnos a ellos.{"\n\n"}
                            En Kichwa hablar de nuestros hermanos depende del género. De una hermano a una hermana ♂️➡️♀️,
                            de un hermano a un hermano ♂️➡️♂️, de una hermana a una hermana ♀️➡️♀️ y de una hermana a un hermano ♀️➡️♂️.
                            ¿Sí que hay muchas formas diferentes de decirlo no?.{"\n\n"}
                            ¿Quieres saber cómo hace?
                        </Text>
                    </CardDefault>

                    <CardDefault title="Hermanos por su género">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Género</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {renderData(sibling_data)}
                        </View>
                    </CardDefault>

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
                                        text='Presiona en cada tarjeta acerca de la familia para ver su traducción.'
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
                            navigation.navigate('IntroGamesBasic2');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default FamilyPart1;