import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';

const images = {
    letterA: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterA.png',
    letterI: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterI.png',
    letterU: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterU.png',
    letterCH: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterCH.png',
    letterH: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterH.png',
    letterK: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterK.png',
    letterL: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterL.png',
    letterLL: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterLL.png',
    letterM: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterM.png',
    letterN: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterN.png',
    letterÑ: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letter%C3%91.png',
    letterP: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterP.png',
    letterR: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterR.png',
    letterS: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterS.png',
    letterSH: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterSH.png',
    letterT: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterT.png',
    letterTS: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterTS.png',
    letterW: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterW.png',
    letterY: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterY.png',
    letterZ: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/letterZ.png',
};


const alphabet_data = [
    {
        letters: "A a", pronunciation: "/a/", kichwa: "Allik", spanish: "Derecha",
        imageLetter: images.letterA,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/hand-right.png"
    },
    {
        letters: "I i", pronunciation: "/i/", kichwa: "Iskun", spanish: "Nueve",
        imageLetter: images.letterI,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/nine.png"
    },
    {
        letters: "U u", pronunciation: "/u/", kichwa: "Uma", spanish: "Cabeza",
        imageLetter: images.letterU,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/head.png"
    },
    {
        letters: "Ch ch", pronunciation: "/cha/", kichwa: "Chukllu", spanish: "Choclo",
        imageLetter: images.letterCH,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/corn.png"
    },
    {
        letters: "H h", pronunciation: "/ha/", kichwa: "Hatun wasi", spanish: "Edificio",
        imageLetter: images.letterH,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/building.png"
    },
    {
        letters: "K k", pronunciation: "/ka/", kichwa: "Kawitu", spanish: "Cama",
        imageLetter: images.letterK,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/bed.png"
    },
    {
        letters: "L l", pronunciation: "/la/", kichwa: "Lumu", spanish: "Yuca",
        imageLetter: images.letterL,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/yuca.png"
    },
    {
        letters: "Ll ll", pronunciation: "/lla/-/sha/", kichwa: "Llakta", spanish: "Ciudad",
        imageLetter: images.letterLL,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/city.png"
    },
    {
        letters: "M m", pronunciation: "/ma/", kichwa: "Misi", spanish: "Gato",
        imageLetter: images.letterM,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/cat.png"
    },
    {
        letters: "N n", pronunciation: "/na/", kichwa: "Napana", spanish: "Saludar",
        imageLetter: images.letterN,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/greet.png"
    },
    {
        letters: "Ñ ñ", pronunciation: "/ña/", kichwa: "Ñan", spanish: "Camino",
        imageLetter: images.letterÑ,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/path.png"
    },
    {
        letters: "P p", pronunciation: "/pa/", kichwa: "Puyu", spanish: "Nube",
        imageLetter: images.letterP,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/cloud.png"
    },
    {
        letters: "R r", pronunciation: "/ra/", kichwa: "Rikra", spanish: "Brazo",
        imageLetter: images.letterR,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/arm.png"
    },
    {
        letters: "S s", pronunciation: "/sa/", kichwa: "Sapi", spanish: "Raíz",
        imageLetter: images.letterS,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/root.png"
    },
    {
        letters: "Sh sh", pronunciation: "/sha/", kichwa: "Shañu", spanish: "Café",
        imageLetter: images.letterSH,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/coffee.png"
    },
    {
        letters: "T t", pronunciation: "/ta/", kichwa: "Tanta", spanish: "Pan",
        imageLetter: images.letterT,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/bread.png"
    },
    {
        letters: "Ts ts", pronunciation: "/tsa/", kichwa: "Tsini", spanish: "Ortiga",
        imageLetter: images.letterTS,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/nettle.png"
    },
    {
        letters: "W w", pronunciation: "/ua/", kichwa: "Wiksa", spanish: "Estómago",
        imageLetter: images.letterW,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/stomach.png"
    },
    {
        letters: "Y y", pronunciation: "/ya/", kichwa: "Yura", spanish: "Planta",
        imageLetter: images.letterY,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/plant.png"
    },
    {
        letters: "Z z", pronunciation: "/za/", kichwa: "Zirpu", spanish: "Churón",
        imageLetter: images.letterZ,
        imageExample: "https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Letters/examples/curly.png"
    },
];


const curiosity_data = [
    {
        key: '1',
        title: 'Curiosidades - El asombroso alfabeto Kichwa',
        text: '¿Sabías que el alfabeto Kichwa solo tiene 3 vocales: a, i, u, y 17 consonantes? ¡Sorprendente!',
        imagePath: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png',
    },
    {
        key: '2',
        title: 'Curiosidades - ¡Descubre las vocales!',
        text: 'En el idioma Kichwa, las vocales e y o no se utilizan. ¿Lo habías notado?',
        imagePath: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png',
    },
    {
        key: '3',
        title: 'Reglas - Y sobre las consonantes...',
        text: 'En Kichwa, las letras c, q y g son reemplazadas por la k; la d por la t; y las b, v y f por la p.',
        imagePath: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png',
    },
];


const Alphabet = () => {
    const progress = 1 / 6;

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedLetter, setSelectedLetter] = useState(null);
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);

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
                                        <ImageContainer uri={letter.imageLetter} style={styles.imageCards} />
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
                                    <ImageContainer uri={item.imagePath} style={styles.imageModal} />
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
                                        <ImageContainer uri={'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png'} style={styles.imageModalHelp} />
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
                                <Text style={styles.spanishText}>Español: {selectedLetter.spanish}</Text>
                                <Text style={styles.kichwaText}>Kichwa: {selectedLetter.kichwa}</Text>
                                <ImageContainer uri={selectedLetter.imageExample} style={styles.imageModal} />
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
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('FirstNumbers')} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Alphabet;