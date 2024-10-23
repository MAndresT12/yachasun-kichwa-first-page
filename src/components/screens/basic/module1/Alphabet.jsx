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


const alphabet_data = [
    {
        letters: "A a", pronunciation: "/a/", kichwa: "Allik", spanish: "Derecha",
        imageLetter: images.letterA,
        imageExample: "https://cdn-icons-png.flaticon.com/512/7218/7218671.png"
    },
    {
        letters: "I i", pronunciation: "/i/", kichwa: "Iskun", spanish: "Nueve",
        imageLetter: images.letterI,
        imageExample: "https://cdn5.dibujos.net/dibujos/pintados/201218/numero-9-letras-y-numeros-numeros-pintado-por-meulois-9737798.jpg"
    },
    {
        letters: "U u", pronunciation: "/u/", kichwa: "Uma", spanish: "Cabeza",
        imageLetter: images.letterU,
        imageExample: "https://static.vecteezy.com/system/resources/previews/002/508/274/non_2x/young-teenager-boy-kid-head-character-vector.jpg"
    },
    {
        letters: "Ch ch", pronunciation: "/cha/", kichwa: "Chukllu", spanish: "Choclo",
        imageLetter: images.letterCH,
        imageExample: "https://img.freepik.com/vector-gratis/simple-caricatura-maiz_1308-124847.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid"
    },
    {
        letters: "H h", pronunciation: "/ha/", kichwa: "Hatun wasi", spanish: "Edificio",
        imageLetter: images.letterH,
        imageExample: "https://img.freepik.com/foto-gratis/vista-edificio-arquitectura-estilo-dibujos-animados_23-2151154971.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid"
    },
    {
        letters: "K k", pronunciation: "/ka/", kichwa: "Kawitu", spanish: "Cama",
        imageLetter: images.letterK,
        imageExample: "https://img.freepik.com/vector-gratis/goldilocks-tres-osos-cama_1308-168802.jpg"
    },
    {
        letters: "L l", pronunciation: "/la/", kichwa: "Lumu", spanish: "Yuca",
        imageLetter: images.letterL,
        imageExample: "https://www.mercontrol.com/wp-content/uploads/2023/03/Que-es-la-yuca.-Propiedades-y-beneficios.jpg"
    },
    {
        letters: "Ll ll", pronunciation: "/lla/-/sha/", kichwa: "Llakta", spanish: "Ciudad",
        imageLetter: images.letterLL,
        imageExample: "https://img.freepik.com/vector-gratis/calle-ciudad-vectores_23-2147751403.jpg"
    },
    {
        letters: "M m", pronunciation: "/ma/", kichwa: "Misi", spanish: "Gato",
        imageLetter: images.letterM,
        imageExample: "https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg"
    },
    {
        letters: "N n", pronunciation: "/na/", kichwa: "Napana", spanish: "Saludar",
        imageLetter: images.letterN,
        imageExample: "https://s3.voyapon.com/wp-content/uploads/sites/3/2020/03/20034614/aisatsu_sayounara.png"
    },
    {
        letters: "Ñ ñ", pronunciation: "/ña/", kichwa: "Ñan", spanish: "Camino",
        imageLetter: images.letterÑ,
        imageExample: "https://img.freepik.com/foto-gratis/tiro-horizontal-arbol-aislado-campo-verde-camino-cielo-nublado_181624-5064.jpg"
    },
    {
        letters: "P p", pronunciation: "/pa/", kichwa: "Puyu", spanish: "Nube",
        imageLetter: images.letterP,
        imageExample: "https://png.pngtree.com/png-clipart/20231005/original/pngtree-childish-cartoon-character-cloud-png-image_13123290.png"
    },
    {
        letters: "R r", pronunciation: "/ra/", kichwa: "Rikra", spanish: "Brazo",
        imageLetter: images.letterR,
        imageExample: "https://cdn5.dibujos.net/dibujos/pintados/202213/brazo-el-cuerpo-humano-12464261.jpg"
    },
    {
        letters: "S s", pronunciation: "/sa/", kichwa: "Sapi", spanish: "Raíz",
        imageLetter: images.letterS,
        imageExample: "https://www.abc.com.py/resizer/qSdoMyZmlLjv9qyZuW2eK7qvgCc=/arc-anglerfish-arc2-prod-abccolor/public/JOAJY52BPFDM7AUXLEOWHLILLY.jpg"
    },
    {
        letters: "Sh sh", pronunciation: "/sha/", kichwa: "Shañu", spanish: "Café",
        imageLetter: images.letterSH,
        imageExample: "https://cafeselcriollo.com/wp-content/uploads/2022/01/beneficios-del-cafe-en-grano_.jpg"
    },
    {
        letters: "T t", pronunciation: "/ta/", kichwa: "Tanta", spanish: "Pan",
        imageLetter: images.letterT,
        imageExample: "https://img.freepik.com/vector-gratis/ilustracion-cocina-americana-dibujada-mano_23-2149330330.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid"
    },
    {
        letters: "Ts ts", pronunciation: "/tsa/", kichwa: "Tsini", spanish: "Ortiga",
        imageLetter: images.letterTS,
        imageExample: "https://actualfruveg.com/wp-content/uploads/2022/11/ortiga-2.jpg"
    },
    {
        letters: "W w", pronunciation: "/ua/", kichwa: "Wiksa", spanish: "Estómago",
        imageLetter: images.letterW,
        imageExample: "https://previews.123rf.com/images/seamartini/seamartini2301/seamartini230100415/197569464-personaje-de-%C3%B3rgano-del-cuerpo-humano-del-est%C3%B3mago-de-dibujos-animados-personaje-del-sistema.jpg"
    },
    {
        letters: "Y y", pronunciation: "/ya/", kichwa: "Yura", spanish: "Planta",
        imageLetter: images.letterY,
        imageExample: "https://i.pinimg.com/originals/08/10/12/081012676b69a2142c6c609e30612bd8.png"
    },
    {
        letters: "Z z", pronunciation: "/za/", kichwa: "Zirpu", spanish: "Churón",
        imageLetter: images.letterZ,
        imageExample: "https://i.pinimg.com/736x/0c/9e/bc/0c9ebc0250a2c4c642a5b6f455ef0ceb.jpg"
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
                    <ButtonLevelsInicio label="Inicio" navigationTarget="CaminoLevelsBasic" />

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('FirstNumbers')} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Alphabet;