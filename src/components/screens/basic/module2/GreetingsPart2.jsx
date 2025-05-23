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

import ChatModal from '../../../ui/modals/ChatModal';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const { width } = Dimensions.get('window');

const images = {
    greeting1: require('../../../../../assets/images/basic/module2/greetings/greeting1.jpg'),
};

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');
const humuTalkingPNG = require('../../../../../assets/images/humu/humu-talking.png');
const profilePic = require('../../../../../assets/images/prototype/santigod.jpeg');

const initial_chat_messages = [
    {
        _id: 1,
        text: 'Alli pacha',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'User',
            avatar: profilePic,
        },
    },
    {
        _id: 2,
        text: 'Ari, ñukapak kuchimi',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Humu',
            avatar: humuTalking,
        },
    },
    {
        _id: 3,
        text: 'Kikinpak kuchichu',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'User',
            avatar: profilePic,
        },
    },
    {
        _id: 4,
        text: 'Ari, kawsakunimi',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Humu',
            avatar: humuTalking,
        },
    },
    {
        _id: 5,
        text: 'Kawsakunkichu',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'User',
            avatar: profilePic,
        },
    },
    {
        _id: 6,
        text: 'Shamupaylla',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Humu',
            avatar: humuTalking,
        },
    },
    {
        _id: 7,
        text: 'Shamupasha',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'User',
            avatar: profilePic,
        },
    },
];

const greetings_data = [
    {
        kichwa: "Imanallatak kashkanki",
        spanish: "¿Cómo has estado tú?",
        imageCard: images.greeting1,
        kichwaAnswer: "Allilla",
        spanishAnswer: "Bien no más / más o menos",
    },
    {
        kichwa: "Imanallatak kankichik",
        spanish: "¿Cómo están ustedes?",
        imageCard: images.greeting1,
        kichwaAnswer: "Unkushkami kani",
        spanishAnswer: "Estoy enfermo",
    },
    {
        kichwa: "Kawsankichu",
        spanish: "Hola, ¿Vives?",
        imageCard: images.greeting1,
        kichwaAnswer: "May sumak",
        spanishAnswer: "Excelente",
    },
    {
        kichwa: "Pakarishkanki",
        spanish: "¡Has amanecido!",
        imageCard: images.greeting1,
        kichwaAnswer: "May alli",
        spanishAnswer: "Muy bien",
    },
    {
        kichwa: "Alli tutamanta",
        spanish: "Buena mañana",
        imageCard: images.greeting1,
        kichwaAnswer: "Imanalla mashi",
        spanishAnswer: "Hola amiga",
    },
];

const courtesy_data = [
    { kichwa: "Shamushun / Minkachiway", spanish: "¿Hay alguien en casa? / ¿Puedo venir? / ¿Puedo entrar?" },
    { kichwa: "Shamupaylla", spanish: "Ven no más" },
];

const goodbyes_data = [
    { kichwa: "Shuk punchakaman", spanish: "Hasta otro día, adiós" },
    { kichwa: "Tuparishun", spanish: "Nos encontraremos, adiós" },
    { kichwa: "Chishiyakunimi", spanish: "Estoy atardeciendo" },
];

const curiosity_data = [
    {
        key: '1',
        title: 'Curiosidades - Kawsankichu (Hola, ¿Vives?)',
        text: 'Suena diferente, ¿no? Es un saludo de pueblos andinos, una pregunta y saludo de cortesía, de amistad y confianza.',
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
                        <Text style={styles.translationLabel}>Español:</Text>
                        <Text style={styles.spanishText}>{item.spanish}</Text>
                        <Text style={styles.translationLabel}>Kichwa:</Text>
                        <Text style={styles.kichwaText}>{item.kichwa}</Text>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>

            {/* Use of gestures for animation of Humu */}

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
                    <Text style={styles.translationLabel}>Español:</Text>
                    <Text style={styles.spanishText}>{item.spanishAnswer}</Text>
                    <Text style={styles.translationLabel}>Kichwa:</Text>
                    <Text style={styles.kichwaText}>{item.kichwaAnswer}</Text>
                </CardDefault>
            </Animated.View>
        </View>
    );
};

const renderCourtesies = () => {
    return courtesy_data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
        </View>
    ));
};

const renderGoodbyes = () => {
    return goodbyes_data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
        </View>
    ));
};

const CourtesyRoute = () => (
    <View>
        <Text style={styles.title}>Frases de cortesía</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Español</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
            </View>
            {renderCourtesies()}
        </View>
    </View>
);

const GoodbyesRoute = () => (
    <View>
        <Text style={styles.title}>Las Despedidas</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Español</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
            </View>
            {renderGoodbyes()}
        </View>
    </View>
);

const GreetingsPart2 = () => {

    const [showHelp, setShowHelp] = useState(null);
    const [showChat, setShowChat] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

    const navigation = useNavigation();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'courtesy', title: 'Cortesía' },
        { key: 'goodbyes', title: 'Despedidas' },
    ]);

    const renderScene = SceneMap({
        courtesy: CourtesyRoute,
        goodbyes: GoodbyesRoute,
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

    const toggleChatModal = () => {
        setShowChat(!showChat);
    };

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_PronounsSentence_completed', 'true');
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
            <StatusBar barStyle="default" backgroundColor="#003366" />
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
                    <CardDefault title="Tengamos un diálogo" content='Ahora que ya sabes cómo decir "Hola" a tus amigos, veámos qué otros tipos de saludos existen.' />
                    <View style={styles.gridContainerGreetings2}>
                        {greetings_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>

                    <CardDefault title="Y qué más..." content="Veámos incluso más, despedidas y cortesías." />

                    <CardDefault styleContainer={{ flex: 1 }} styleCard={{ flex: 1, height: 320 }} >
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

                    {/* <CardDefault title="Frases de cortesía">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                            </View>
                            {renderCourtesies()}
                        </View>
                    </CardDefault>

                    <CardDefault title="Las Despedidas">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                            </View>
                            {renderGoodbyes()}
                        </View>
                    </CardDefault> */}

                    <ButtonDefault label="Práctica sin ayuda" onPress={toggleChatModal} styleContainer={{ marginBottom: 10 }} />

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
                                        <ImageContainer
                                            path={humuTalking}
                                            style={styles.imageModalHelp}
                                        />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en cada tarjeta de un saludo para ver su pronunciación en Kichwa. Desliza a Humu para ver más saludos o respuestas.'
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

                <ChatModal visible={showChat} onClose={toggleChatModal} initialMessages={initial_chat_messages} />

                <View style={styles.footer}>
                <ButtonLevelsInicio label="Inicio"
                        navigationTarget="CaminoLevelsBasic"
                    />
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel();
                            navigation.navigate('PronounsSentence');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default GreetingsPart2;
