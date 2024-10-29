import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../../../../../styles/globalStyles';

import { FloatingHumu } from '../../../animations/FloatingHumu';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';

import { CardDefault } from '../../../ui/cards/CardDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');

const images = {
    letterA: require('../../../../../assets/images/basic/module1/letters/letterA.jpg'),
    letterI: require('../../../../../assets/images/basic/module1/letters/letterI.jpg'),
    letterU: require('../../../../../assets/images/basic/module1/letters/letterU.jpg'),
    letterCH: require('../../../../../assets/images/basic/module1/letters/letterCH.jpg'),
    letterH: require('../../../../../assets/images/basic/module1/letters/letterH.jpg'),
    letterK: require('../../../../../assets/images/basic/module1/letters/letterK.jpg'),
    letterL: require('../../../../../assets/images/basic/module1/letters/letterL.jpg'),
    letterLL: require('../../../../../assets/images/basic/module1/letters/letterLL.jpg'),
    letterM: require('../../../../../assets/images/basic/module1/letters/letterM.jpg'),
    letterN: require('../../../../../assets/images/basic/module1/letters/letterN.jpg'),
    letterÑ: require('../../../../../assets/images/basic/module1/letters/letterÑ.jpg'),
    letterP: require('../../../../../assets/images/basic/module1/letters/letterP.jpg'),
    letterR: require('../../../../../assets/images/basic/module1/letters/letterR.jpg'),
    letterS: require('../../../../../assets/images/basic/module1/letters/letterS.jpg'),
    letterSH: require('../../../../../assets/images/basic/module1/letters/letterSH.jpg'),
    letterT: require('../../../../../assets/images/basic/module1/letters/letterT.jpg'),
    letterTS: require('../../../../../assets/images/basic/module1/letters/letterTS.jpg'),
    letterW: require('../../../../../assets/images/basic/module1/letters/letterW.jpg'),
    letterY: require('../../../../../assets/images/basic/module1/letters/letterY.jpg'),
    letterZ: require('../../../../../assets/images/basic/module1/letters/letterZ.jpg'),
};

const imageExamples = {
    letterA: require('../../../../../assets/images/basic/module1/letters/examples/hand-right.jpg'),
    letterI: require('../../../../../assets/images/basic/module1/letters/examples/nine.jpg'),
    letterU: require('../../../../../assets/images/basic/module1/letters/examples/head.jpg'),
    letterCH: require('../../../../../assets/images/basic/module1/letters/examples/corn.jpg'),
    letterH: require('../../../../../assets/images/basic/module1/letters/examples/building.jpg'),
    letterK: require('../../../../../assets/images/basic/module1/letters/examples/bed.jpg'),
    letterL: require('../../../../../assets/images/basic/module1/letters/examples/yuca.jpg'),
    letterLL: require('../../../../../assets/images/basic/module1/letters/examples/city.jpg'),
    letterM: require('../../../../../assets/images/basic/module1/letters/examples/cat.jpg'),
    letterN: require('../../../../../assets/images/basic/module1/letters/examples/greet.jpg'),
    letterÑ: require('../../../../../assets/images/basic/module1/letters/examples/path.jpg'),
    letterP: require('../../../../../assets/images/basic/module1/letters/examples/cloud.jpg'),
    letterR: require('../../../../../assets/images/basic/module1/letters/examples/arm.jpg'),
    letterS: require('../../../../../assets/images/basic/module1/letters/examples/root.jpg'),
    letterSH: require('../../../../../assets/images/basic/module1/letters/examples/coffee.jpg'),
    letterT: require('../../../../../assets/images/basic/module1/letters/examples/bread.jpg'),
    letterTS: require('../../../../../assets/images/basic/module1/letters/examples/nettle.jpg'),
    letterW: require('../../../../../assets/images/basic/module1/letters/examples/stomach.jpg'),
    letterY: require('../../../../../assets/images/basic/module1/letters/examples/plant.jpg'),
    letterZ: require('../../../../../assets/images/basic/module1/letters/examples/curly.jpg'),
};


const alphabet_data = [
    {
        letters: "A a", pronunciation: "/a/", kichwa: "Allik", spanish: "Derecha",
        imageLetter: images.letterA,
        imageExample: imageExamples.letterA,
    },
    {
        letters: "I i", pronunciation: "/i/", kichwa: "Iskun", spanish: "Nueve",
        imageLetter: images.letterI,
        imageExample: imageExamples.letterI,
    },
    {
        letters: "U u", pronunciation: "/u/", kichwa: "Uma", spanish: "Cabeza",
        imageLetter: images.letterU,
        imageExample: imageExamples.letterU,
    },
    {
        letters: "Ch ch", pronunciation: "/cha/", kichwa: "Chukllu", spanish: "Choclo",
        imageLetter: images.letterCH,
        imageExample: imageExamples.letterCH,
    },
    {
        letters: "H h", pronunciation: "/ha/", kichwa: "Hatun wasi", spanish: "Edificio",
        imageLetter: images.letterH,
        imageExample: imageExamples.letterH,
    },
    {
        letters: "K k", pronunciation: "/ka/", kichwa: "Kawitu", spanish: "Cama",
        imageLetter: images.letterK,
        imageExample: imageExamples.letterK,
    },
    {
        letters: "L l", pronunciation: "/la/", kichwa: "Lumu", spanish: "Yuca",
        imageLetter: images.letterL,
        imageExample: imageExamples.letterL,
    },
    {
        letters: "Ll ll", pronunciation: "/lla/-/sha/", kichwa: "Llakta", spanish: "Ciudad",
        imageLetter: images.letterLL,
        imageExample: imageExamples.letterLL,
    },
    {
        letters: "M m", pronunciation: "/ma/", kichwa: "Misi", spanish: "Gato",
        imageLetter: images.letterM,
        imageExample: imageExamples.letterM,
    },
    {
        letters: "N n", pronunciation: "/na/", kichwa: "Napana", spanish: "Saludar",
        imageLetter: images.letterN,
        imageExample: imageExamples.letterN,
    },
    {
        letters: "Ñ ñ", pronunciation: "/ña/", kichwa: "Ñan", spanish: "Camino",
        imageLetter: images.letterÑ,
        imageExample: imageExamples.letterÑ,
    },
    {
        letters: "P p", pronunciation: "/pa/", kichwa: "Puyu", spanish: "Nube",
        imageLetter: images.letterP,
        imageExample: imageExamples.letterP,
    },
    {
        letters: "R r", pronunciation: "/ra/", kichwa: "Rikra", spanish: "Brazo",
        imageLetter: images.letterR,
        imageExample: imageExamples.letterR,
    },
    {
        letters: "S s", pronunciation: "/sa/", kichwa: "Sapi", spanish: "Raíz",
        imageLetter: images.letterS,
        imageExample: imageExamples.letterS,
    },
    {
        letters: "Sh sh", pronunciation: "/sha/", kichwa: "Shañu", spanish: "Café",
        imageLetter: images.letterSH,
        imageExample: imageExamples.letterSH,
    },
    {
        letters: "T t", pronunciation: "/ta/", kichwa: "Tanta", spanish: "Pan",
        imageLetter: images.letterT,
        imageExample: imageExamples.letterT,
    },
    {
        letters: "Ts ts", pronunciation: "/tsa/", kichwa: "Tsini", spanish: "Ortiga",
        imageLetter: images.letterTS,
        imageExample: imageExamples.letterTS,
    },
    {
        letters: "W w", pronunciation: "/ua/", kichwa: "Wiksa", spanish: "Estómago",
        imageLetter: images.letterW,
        imageExample: imageExamples.letterW,
    },
    {
        letters: "Y y", pronunciation: "/ya/", kichwa: "Yura", spanish: "Planta",
        imageLetter: images.letterY,
        imageExample: imageExamples.letterY,
    },
    {
        letters: "Z z", pronunciation: "/za/", kichwa: "Zirpu", spanish: "Churón",
        imageLetter: images.letterZ,
        imageExample: imageExamples.letterZ,
    },
];

const curiosity_data = [
    {
        key: '1',
        title: 'Curiosidades - El asombroso alfabeto Kichwa',
        text: '¿Sabías que el alfabeto Kichwa solo tiene 3 vocales: a, i, u, y 17 consonantes? ¡Sorprendente!',
        imagePath: humuTalking
    },
    {
        key: '2',
        title: 'Curiosidades - ¡Descubre las vocales!',
        text: 'En el idioma Kichwa, las vocales e y o no se utilizan. ¿Lo habías notado?',
        imagePath: humuTalking
    },
    {
        key: '3',
        title: 'Reglas - Y sobre las consonantes...',
        text: 'En Kichwa, las letras c, q y g son reemplazadas por la k; la d por la t; y las b, v y f por la p.',
        imagePath: humuTalking
    },
];


const Alphabet = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedLetter, setSelectedLetter] = useState(null);
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

    const navigation = useNavigation();

    const handleLetterPress = (letterData) => {
        setSelectedLetter(letterData);
        setModalVisible(true);
    };


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
            await AsyncStorage.setItem('level_FirstNumbers_completed', 'true');
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
                    <CardDefault title="La escritura en Kichwa" >
                        <Text style={styles.cardContent}>
                            ¡Bienvenidos mis amigos! Comenzamos nuestra gran aventura.{"\n\n"}
                            Antes de comenzar con todas nuestras lecciones del nivel básico,
                            es importante conocer el alfabeto en Kichwa. En Ecuador, aunque no
                            existe una escritura estandarizada del Kichwa para todas las regiones,
                            utilizaremos el alfabeto en Español como referencia.{"\n\n"}
                            Aprenderás el alfabeto en Kichwa a través de ejemplos en Español.
                            ¿Estás listo para comenzar?
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {alphabet_data.map((letter) => (
                            <TouchableWithoutFeedback key={letter.letters} onPress={() => handleLetterPress(letter)}>
                                <View style={styles.cardInGrid}>
                                    <CardDefault styleCard={styles.cardPopUp} styleTitle={styles.cardTitleAlphabet} >
                                        <ImageContainer path={letter.imageLetter} style={styles.imageCards} />
                                    </CardDefault>
                                </View>
                            </TouchableWithoutFeedback>
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
                                        text='Presiona en cada tarjeta de una letra para ver su pronunciación.'
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

                {selectedLetter && (
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.titleAlphabet}>{selectedLetter.letters}</Text>
                                <Text style={styles.pronunciation}>Pronunciación: {selectedLetter.pronunciation}</Text>
                                <Text style={styles.translationLabel}>Español:</Text>
                                <Text style={styles.spanishText}>{selectedLetter.spanish}</Text>
                                <Text style={styles.translationLabel}>Kichwa:</Text>
                                <Text style={styles.kichwaText}>{selectedLetter.kichwa}</Text>
                                <ImageContainer path={selectedLetter.imageExample} style={styles.imageModal} />
                                <View style={styles.buttonContainerAlphabet}>
                                    <TouchableOpacity onPress={() => setModalVisible(false)}>
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
                            navigation.navigate('FirstNumbers');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Alphabet;