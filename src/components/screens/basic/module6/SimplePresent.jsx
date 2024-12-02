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

import ChatModal from '../../../ui/modals/ChatModal';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');
const profilePic = require('../../../../../assets/images/prototype/santigod.jpeg');

const images = {
    simpPres1: require('../../../../../assets/images/basic/module6/present/present1.jpg'),
};

const simp_pres_ejem1a_data = [
    { subject: "Ñuka", root: "rima", ending: "ni" },
    { subject: "Kan", root: "rima", ending: "nki" },
    { subject: "Kikin", root: "rima", ending: "nki" },
    { subject: "Pay", root: "rima", ending: "n" },
    { subject: "Ñukanchik", root: "rima", ending: "nchik" },
    { subject: "Kankuna", root: "rima", ending: "nkichik" },
    { subject: "Kikinkuna", root: "rima", ending: "nkichik" },
    { subject: "Paykuna", root: "rima", ending: "nkuna" },
];

const simp_pres_ejem1b_data = [
    { conjugation: "Rimani", spanish: "Yo hablo" },
    { conjugation: "Rimanki", spanish: "Tú hablas" },
    { conjugation: "Rimanki", spanish: "Usted habla" },
    { conjugation: "Riman", spanish: "Él o Ella habla" },
    { conjugation: "Rimanchik", spanish: "Nosotros hablamos" },
    { conjugation: "Rimankichik", spanish: "Ustedes hablan" },
    { conjugation: "Rimankichik", spanish: "Ustedes hablan" },
    { conjugation: "Rimankuna", spanish: "Ellos o ellas hablan" },
];

const simp_pres_ejem2a_data = [
    { subject: "Ñuka", root: "tarpu", ending: "ni" },
    { subject: "Kan", root: "tarpu", ending: "nki" },
    { subject: "Kikin", root: "tarpu", ending: "nki" },
    { subject: "Pay", root: "tarpu", ending: "n" },
    { subject: "Ñukanchik", root: "tarpu", ending: "nchik" },
    { subject: "Kankuna", root: "tarpu", ending: "nkichik" },
    { subject: "Kikinkuna", root: "tarpu", ending: "nkichik" },
    { subject: "Paykuna", root: "tarpu", ending: "nkuna" },
];

const simp_pres_ejem2b_data = [
    { conjugation: "Tarpuni", spanish: "Yo siembro" },
    { conjugation: "Tarpunki", spanish: "Tú siembras" },
    { conjugation: "Tarpunki", spanish: "Usted siembra" },
    { conjugation: "Tarpun", spanish: "Él o Ella siembra" },
    { conjugation: "Tarpunchik", spanish: "Nosotros sembramos" },
    { conjugation: "Tarpunkichik", spanish: "Ustedes siembran" },
    { conjugation: "Tarpunkichik", spanish: "Ustedes siembran" },
    { conjugation: "Tarpunkuna", spanish: "Ellos o ellas siembran" },
];

const simp_pres_data = [
    { kichwa: "Ñukaka sarata tarpuni.", spanish: "Yo siembro maíz.", imageCard: images.simpPres1 },
    { kichwa: "Kanka shañuta tarpunki.", spanish: "Tú siembras café.", imageCard: images.simpPres1 },
    { kichwa: "Kikinka papata tarpunki.", spanish: "Usted siembra papas.", imageCard: images.simpPres1 },
    { kichwa: "Payka akapita tarpun.", spanish: "Él o ella siembra cebada.", imageCard: images.simpPres1 },
    { kichwa: "Ñukanchikka kitata tarpunchik.", spanish: "Nosotros sembramos cacao.", imageCard: images.simpPres1 },
    { kichwa: "Kankunaka ananasta tarpunkichik.", spanish: "Ustedes siembran chirimoya.", imageCard: images.simpPres1 },
    { kichwa: "Kikinkunaka awashta tarpunkichik.", spanish: "Ustedes siembran habas.", imageCard: images.simpPres1 },
    { kichwa: "Paykunaka ayapata tarpunkuna.", spanish: "Ellos/ellas siembran fréjol.", imageCard: images.simpPres1 },
];

const ending_data = [
    { subject: "Ñuka", ending: "ni" },
    { subject: "Kan", ending: "nki" },
    { subject: "Kikin", ending: "nki" },
    { subject: "Pay", ending: "n" },
    { subject: "Ñukanchik", ending: "nchik" },
    { subject: "Kankuna", ending: "nkichik" },
    { subject: "Kikinkuna", ending: "nkichik" },
    { subject: "Paykuna", ending: "nkuna" },
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
                    <ImageContainer path={item.imageCard} style={styles.imageCards} />
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

const BigFlipCard = ({ data1, data2 }) => {
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

    const renderFront = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.subject}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.root}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.ending}</Text>
            </View>
        ));
    };

    const renderBack = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.conjugation}</Text>
            </View>
        ));
    };

    return (
        <TouchableWithoutFeedback onPress={handleFlip}>
            <View style={styles.simplePresentBigFlipCardContainer}>
                <Animated.View style={[styles.flipCardInner, styles.flipCardFront, animatedStyleFront]}>
                    <CardDefault title="Elementos para formar el verbo" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>1.{"\n\n"}Sujeto</Text>
                                <Text style={styles.tableHeaderCell}>2.{"\n\n"}Raíz</Text>
                                <Text style={styles.tableHeaderCell}>3.{"\n\n"}Terminación</Text>
                            </View>
                            {renderFront(data1)}
                        </View>
                    </CardDefault>
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <CardDefault title="El Verbo completo" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                                <Text style={styles.tableHeaderCell}>Conjugación</Text>
                            </View>
                            {renderBack(data2)}
                        </View>
                    </CardDefault>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const renderData = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.subject}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.ending}</Text>
        </View>
    ));
};

const SimplePresent = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

    const navigation = useNavigation();

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_SimplePresent_completed', 'true');
            await AsyncStorage.setItem('level_IntroGamesBasic6_completed', 'true');
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

                    <CardDefault title="La prueba final" >
                        <Text style={styles.cardContent}>
                            Esta será la última lección de este nivel básico. ¿Preparados?{'\n\n'}
                            Tranquilos no yo estaré aquí acompañándolos, en cada paso. Pasamos algo
                            más complejo. Vamos a crear oraciones simples en el tiempo presente.{'\n\n'}
                            Es importante que aprendas esto para poder comenzar a formar oraciones
                            y comunicarte con otras personas.{'\n\n'}
                            En kichwa, todos los verbos son regulares, por lo cual se hace más fácil la
                            conjugación de los verbos. Lo más importante es recordar las terminaciones. En
                            el infinitivo, todos los verbos terminan con –na.{'\n\n'}
                            Para formar el presente, tomamos la raíz del verbo (el infinitivo menos -na) y
                            añadimos las terminaciones del presente.
                        </Text>
                    </CardDefault>

                    <CardDefault title="Puchukay shimikukuna / Las terminaciones">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Género</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {renderData(ending_data)}
                        </View>
                    </CardDefault>

                    <CardDefault title="Rimana" >
                        <Text style={styles.cardContent}>
                            Veamos la conjugación para el verbo hablar (rimana).{'\n\n'}
                            Presiona en la tabla de abajo para cambiar entre el verbo completo y los
                            elementos del verbo.
                        </Text>
                    </CardDefault>

                    <BigFlipCard data1={simp_pres_ejem1a_data} data2={simp_pres_ejem1b_data} />

                    <CardDefault title="Tarpuna" >
                        <Text style={styles.cardContent}>
                            También demos otro ejemplo usando la conjugación para el verbo sembrar (tarpuna).{'\n\n'}
                            Presiona en la tabla de abajo para cambiar entre el verbo completo y los
                            elementos del verbo.
                        </Text>
                    </CardDefault>

                    <BigFlipCard data1={simp_pres_ejem2a_data} data2={simp_pres_ejem2b_data} />

                    <CardDefault title="Oraciones de ejemplo" >
                        <Text style={styles.cardContent}>
                            Por último, veamos algunas oraciones en presente simple de ejemplo.
                        </Text>
                    </CardDefault>

                    <View style={styles.gridContainer}>
                        {simp_pres_data.map((item, index) => (
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
                                        text='Presiona en las tarjetas para darles la vuelta y ver acerca de las conjugaciones.'
                                        arrowDirection="leftUp"
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
                            navigation.navigate('IntroGamesBasic6');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default SimplePresent;
