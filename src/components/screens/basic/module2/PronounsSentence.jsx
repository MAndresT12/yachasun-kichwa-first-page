import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal, Dimensions } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withRepeat } from 'react-native-reanimated';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
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
import { WavyLine } from '../../../ui/imageContainers/WavyLine';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const { width } = Dimensions.get('window');

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');
const humuTalkingPNG = require('../../../../../assets/images/humu/humu-talking.png');

const images = {
    pronoun1: require('../../../../../assets/images/basic/module2/pronouns/pronouns1.jpg'),
};

const singular_pronoun_data = [
    { kichwa: "Ñuka", spanish: "Yo" },
    { kichwa: "Kan", spanish: "Tú" },
    { kichwa: "Kikin", spanish: "Usted (cortesía)" },
    { kichwa: "Pay", spanish: "Él / Ella" },
];

const plural_pronoun_data = [
    { kichwa: "Ñukanchik", spanish: "Nosotros" },
    { kichwa: "Kankuna", spanish: "Ustedes" },
    { kichwa: "Kikinkuna", spanish: "Ustedes (cortesía)" },
    { kichwa: "Paykuna", spanish: "Ellos / Ellas" },
];

const verb_kana_data = [
    {
        imageCard: images.pronoun1,
        kichwaPron: "Ñuka",
        kana: "kani",
        spanishPron: "Yo",
        be: "soy / estoy"
    },
    {
        imageCard: images.pronoun1,
        kichwaPron: "Kan",
        kana: "kanki",
        spanishPron: "Tú",
        be: "eres / estás"
    },
    {
        imageCard: images.pronoun1,
        kichwaPron: "Kikin",
        kana: "kanki",
        spanishPron: "Usted",
        be: "es / está"
    },
    {
        imageCard: images.pronoun1,
        kichwaPron: "Pay",
        kana: "kan",
        spanishPron: "Él / ella",
        be: "es / está"
    },
    {
        imageCard: images.pronoun1,
        kichwaPron: "Ñukanchik",
        kana: "kanchik",
        spanishPron: "Nosotros",
        be: "somos / estamos"
    },
    {
        imageCard: images.pronoun1,
        kichwaPron: "Kankuna",
        kana: "kankichik",
        spanishPron: "Ustedes",
        be: "son / están"
    },
    {
        imageCard: images.pronoun1,
        kichwaPron: "Kikinkuna",
        kana: "kankichik",
        spanishPron: "Ustedes",
        be: "son / están"
    },
    {
        imageCard: images.pronoun1,
        kichwaPron: "Paykuna",
        kana: "kan",
        spanishPron: "Ellos / ellas",
        be: "son / están"
    },
];

const sentence_spanish_struc_data = [
    { subject: "Sisa", verb: "come", complement: "maíz" },
];

const sentence_kichwa_struc_data = [
    { subject: "Sisaka", verb: "sarata", complement: "mikun" },
];

const curiosity_data = [
    {
        key: '1',
        title: 'Reglas - Un cambio de estructura en la oración',
        text: 'Como pudiste ver en Kichwa el complemento viene antes que verbo. En español es al revés.',
        imagePath: humuTalking,
    },
    {
        key: '2',
        title: 'Curiosidades - La palabra Ango',
        text: 'Esta significa jefe, señor o gobernador. En el idioma Kayambi, significa espíritu y unidad.',
        imagePath: humuTalking,
    },
    {
        key: '3',
        title: 'Curiosidades - Personajes importantes',
        text: 'Dolores Cacuango (-ango) es una líder indígena ecuatoriana que luchó por los derechos de los indígenas y campesinos.',
        imagePath: humuTalking,
    },
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
                        <Text style={styles.translationLabel}>P. en Español:</Text>
                        <Text style={styles.spanishText}>{item.spanishPron}</Text>
                        <Text style={styles.translationLabel}>Ser / Estar:</Text>
                        <Text style={styles.kichwaText}>{item.be}</Text>
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
                    <Text style={styles.translationLabel}>P. en Kichwa:</Text>
                    <Text style={styles.spanishText}>{item.kichwaPron}</Text>
                    <Text style={styles.translationLabel}>Kana:</Text>
                    <Text style={styles.kichwaText}>{item.kana}</Text>
                </CardDefault>
            </Animated.View>
        </View>
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

    const renderTableSpanish = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.subject}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.verb}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.complement}</Text>
            </View>
        ));
    };

    const renderTableKichwa = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.subject}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.complement}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.verb}</Text>
            </View>
        ));
    };

    return (
        <TouchableWithoutFeedback onPress={handleFlip}>
            <View style={styles.pronounBigFlipCardContainer}>
                <Animated.View style={[styles.flipCardInner, styles.flipCardFront, animatedStyleFront]}>
                    <CardDefault title="Español" content="Fíjate en el orden de la estructura. ¿Qué vez?" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>1.{"\n\n"}Sujeto</Text>
                                <Text style={styles.tableHeaderCell}>2.{"\n\n"}Verbo</Text>
                                <Text style={styles.tableHeaderCell}>3.{"\n\n"}Complemento</Text>
                            </View>
                            {renderTableSpanish(data1)}
                        </View>
                    </CardDefault>
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <CardDefault title="Kichwa" content="¡Mira! En Kichwa el verbo va antes que el complemento." styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>1.{"\n\n"}Sujeto (Imak)</Text>
                                <Text style={styles.tableHeaderCell}>2.{"\n\n"}Complemento (Paktachik)</Text>
                                <Text style={styles.tableHeaderCell}>3.{"\n\n"}Verbo (Imachik)</Text>
                            </View>
                            {renderTableKichwa(data2)}
                        </View>
                    </CardDefault>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const renderPronouns = (pronoun_data) => {
    return pronoun_data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
        </View>
    ));
};

const SingularPronRoute = () => (
    <View>
        <Text style={styles.title}>Pronombres en Singular</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Español</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
            </View>
            {renderPronouns(singular_pronoun_data)}
        </View>
    </View>
);

const PluralPronRoute = () => (
    <View>
        <Text style={styles.title}>Pronombres en Plural</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Español</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
            </View>
            {renderPronouns(plural_pronoun_data)}
        </View>
    </View>
);

const PronounsSentence = () => {

    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

    const navigation = useNavigation();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'SingularPron', title: 'Singular' },
        { key: 'PluralPron', title: 'Plural' },
    ]);

    const renderScene = SceneMap({
        SingularPron: SingularPronRoute,
        PluralPron: PluralPronRoute,
    });

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
            await AsyncStorage.setItem('level_FamilyPart1_completed', 'true');
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
                <View style={styles.bodyGreetings2}>
                    <CardDefault title="¿Cómo podemos hablar con alguien ó de alguien?" >
                        <Text style={styles.cardContent}>
                            Tenemos que conocer como hablar con las personas para poder comunicarnos.
                            Para esto sirven los pronombres personales.{"\n\n"}
                            Existen dos tipos de pronombres, el plural y singular.
                            ¡Veámos cuáles son!
                        </Text>
                    </CardDefault>
                    <CardDefault styleContainer={{ flex: 1 }} styleCard={{ flex: 1, height: 340 }} >
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={width}
                            style={{ height: '100%' }}
                            renderTabBar={(props) => (
                                <TabBar
                                    {...props}
                                    indicatorStyle={{ backgroundColor: 'white' }}
                                    style={{
                                        backgroundColor: '#003366',
                                        borderRadius: 8,
                                        margin: 10,
                                    }}
                                    tabStyle={{
                                        borderRadius: 10,
                                        marginHorizontal: 5,
                                    }}
                                    labelStyle={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                    activeColor="#FFD700"
                                    inactiveColor="#FFFFFF"
                                />
                            )}
                        />
                    </CardDefault>

                    <CardDefault title="El verbo kana" >
                        <Text style={styles.cardContent}>
                            Un verbo muy importante en Kichwa es el conocido como verbo "kana" que significa "ser" o "estar".{"\n\n"}
                            Aquí te voy a mostrar su conjugación con los pronombres y como afecta al sujeto de una oración.
                            Abreviaremos el pronombre con un "P".
                        </Text>
                    </CardDefault>

                    <View style={styles.gridContainerGreetings2}>
                        {verb_kana_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>

                    <CardDefault title="Estructura de una oración" >
                        <Text style={styles.cardContent}>
                            Con todo el conocimiento que tenemos hasta ahora, podemos formar oraciones en Kichwa.
                            Pero antes de esto, debemos conocer su estructura.{"\n\n"}
                            Presiona en la tabla de abajo para cambiar entre Kichwa o Español.
                        </Text>
                    </CardDefault>

                    <BigFlipCard data1={sentence_spanish_struc_data} data2={sentence_kichwa_struc_data} />

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
                                        text='Presiona en cada tarjeta y desliza Humu de un pronombre para ver la traducción en Kichwa.'
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
                            navigation.navigate('FamilyPart1');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default PronounsSentence;
