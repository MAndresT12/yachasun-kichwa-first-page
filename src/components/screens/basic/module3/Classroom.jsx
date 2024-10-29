import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';
import { PanGestureHandler } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const images = {
    classroom1: require('../../../../../assets/images/basic/module3/classroom/classroom1.png'),
};

const classroom_data = [
    { imageCard: images.classroom1, kichwa: "Wasi", spanish: "Casa" },
    { imageCard: images.classroom1, kichwa: "Allpa", spanish: "Suelo" },
    { imageCard: images.classroom1, kichwa: "Pirka", spanish: "Pared" },
    { imageCard: images.classroom1, kichwa: "Punku", spanish: "Puerta" },
    { imageCard: images.classroom1, kichwa: "Tuku", spanish: "Ventana" },
    { imageCard: images.classroom1, kichwa: "Yanuna Uku", spanish: "Cocina" },
    { imageCard: images.classroom1, kichwa: "Yanta", spanish: "Leña" },
    { imageCard: images.classroom1, kichwa: "Nina", spanish: "Fuego" },
    { imageCard: images.classroom1, kichwa: "Pakuyla", spanish: "Fósforo" },
    { imageCard: images.classroom1, kichwa: "Yanuna Tullpa", spanish: "Cocina Metálica" },
    { imageCard: images.classroom1, kichwa: "Pataku", spanish: "Mesa" },
    { imageCard: images.classroom1, kichwa: "Tiyarina", spanish: "Silla" },
    { imageCard: images.classroom1, kichwa: "Mama Wisha", spanish: "Cucharón" },
    { imageCard: images.classroom1, kichwa: "Wisha", spanish: "Cuchara" },
    { imageCard: images.classroom1, kichwa: "Manka", spanish: "Olla" },
    { imageCard: images.classroom1, kichwa: "Puñuna Uku", spanish: "Dormitorio" },
    { imageCard: images.classroom1, kichwa: "Kawitu", spanish: "Cama" },
    { imageCard: images.classroom1, kichwa: "Sawna", spanish: "Almohada" },
    { imageCard: images.classroom1, kichwa: "Katana", spanish: "Cobija" },
    { imageCard: images.classroom1, kichwa: "Armana Uku", spanish: "Ducha" },
    { imageCard: images.classroom1, kichwa: "Ishpana Uku", spanish: "Baño" }
];

const classroom_verbs_data = [
    { kichwa: "Tiyarina", spanish: "Sentarse" },
    { kichwa: "Killkana", spanish: "Escribir" },
    { kichwa: "Killkakatina", spanish: "Leer" },
    { kichwa: "Yachachina", spanish: "Enseñar" },
    { kichwa: "Yachakuna", spanish: "Aprender" },
];

const classroom_sentence_data = [
    {
        kichwa: "Yachakukka killkak kaspiwan killkan",
        spanish: "El alumno escribe con lápiz",
        imageCard: images.classroom1,
    },
    {
        kichwa: "Wamraka yachakukun",
        spanish: "El chico está aprendiendo",
        imageCard: images.classroom1,
    },
    {
        kichwa: "Yachachikka yachachin",
        spanish: "El profesor enseña",
        imageCard: images.classroom1,
    },
    {
        kichwa: "Yachakukkunaka tiyarikun",
        spanish: "Los alumnos se sientan",
        imageCard: images.classroom1,
    },
    {
        kichwa: "Wipalapak tulpukunaka killu, ankas, pukami kan",
        spanish: "Los colores de la bandera son amarillo, azul y rojo",
        imageCard: images.classroom1,
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
                    <ImageContainer path={item.imageCard} style={styles.imageCards} />
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <Text style={styles.translationLabel}>Kichwa:</Text>
                    <Text style={styles.translationText}>{item.kichwa}</Text>
                    <Text style={styles.translationLabel}>Español:</Text>
                    <Text style={styles.translationText}>{item.spanish}</Text>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const FlipCardHumuAnimated = ({ item }) => {
    const [flipped, setFlipped] = useState(false);
    const rotateY = useSharedValue(0);
    const humuOpacity = useSharedValue(0);
    const humuLeftPosition = useSharedValue(-width * 0.008);
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
                        });
                    }
                );
            }, 1000);
        } else {
            rotateY.value = withTiming(0, { duration: 300 });
            humuOpacity.value = withTiming(0, { duration: 300 }, () => {
                humuLeftPosition.value = -width * 0.008;
            });
            cardOpacity.value = withTiming(0, { duration: 300 });
            cardTranslateX.value = withTiming(-width * 0.43, { duration: 300 });
        }
        setFlipped(!flipped);
    };

    const handleGesture = (event) => {
        const { translationX } = event.nativeEvent;

        if (translationX > 50) {
            humuLeftPosition.value = withTiming(width, { duration: 300 });
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
                        <Text style={styles.translationText}>{item.spanish}</Text>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>

            <PanGestureHandler onGestureEvent={handleGesture}>
                <Animated.Image
                    source={require('../../../../../assets/images/humu/humu-talking.png')}
                    style={[styles.humuImage, animatedHumuStyle]}
                />
            </PanGestureHandler>

            <Animated.View style={[styles.flipCard2ndGreetings2, animatedCardStyle]}>
                <CardDefault styleContainer={styles.flipCardSecondCardGreetings2} styleCard={styles.flipCardSecondCardContentGreetings2}>
                    <Text style={styles.translationLabelGreetingsCard2}>Kichwa:</Text>
                    <Text style={styles.translationTextGreetingsCard2}>{item.kichwa}</Text>
                </CardDefault>
            </Animated.View>
        </View>
    );
};

const renderData = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const Classroom = () => {
    const [showHelp, setShowHelp] = useState(null);

    const navigation = useNavigation();

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#003366" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Las Cosas de la Casa</Text>
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <CardDefault title="¡Hora de ir a clases!">
                        <Text style={styles.cardContent}>
                            En la escuela podemos aprender muchas cosas, nos encontramos 
                            con amigos que nos hacen reír y maestros que nos enseñan cosas 
                            nuevas.{`\n\n`}
                            Acá te muestro algunas cosas que puedes encontrar en el aula 
                            para que los digas en Kichwa con tus amigos.
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {classroom_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>

                    <CardDefault title="Verbos en el aula" content="Te voy a contar de algunos verbos (imachikkuna) que se suelen usar dentro del aula, ¡úsalos!">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                            </View>
                            {renderData(classroom_verbs_data)}
                        </View>
                    </CardDefault>

                    <CardDefault title="Yuyaykuna / Oraciones">
                        <Text style={styles.cardContent}>
                            Vamos a formar algunas oraciones con las palabras que aprendimos. Será divertido te lo aseguro.
                        </Text>
                    </CardDefault>

                    <View style={styles.gridContainerGreetings2}>
                        {classroom_sentence_data.map((item, index) => (
                            <FlipCardHumuAnimated key={index} item={item} />
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
                                        <ImageContainer path={require('../../../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona la tarjeta de un número (pintados en rojo) para ver su pronunciación en Kichwa.'
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
                            navigation.navigate('IntroGamesBasic3');
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Classroom;