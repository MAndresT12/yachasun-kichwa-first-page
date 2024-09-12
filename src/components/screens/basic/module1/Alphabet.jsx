import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { cardStyles } from '../../../../../styles/cardStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/imageContainers/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { FontAwesome } from '@expo/vector-icons';

const alphabet_data = [
    { letters: "A a", imageLetter: "", pronunciation: "/a/", kichwa: "allik", spanish: "derecha", imageExample: "https://cdn-icons-png.flaticon.com/512/7218/7218671.png" },
    { letters: "I i", imageLetter: "", pronunciation: "/i/", kichwa: "iskun", spanish: "nueve", imageExample: "https://cdn5.dibujos.net/dibujos/pintados/201218/numero-9-letras-y-numeros-numeros-pintado-por-meulois-9737798.jpg" },
    { letters: "U u", imageLetter: "", pronunciation: "/u/", kichwa: "uma", spanish: "cabeza", imageExample: "https://static.vecteezy.com/system/resources/previews/002/508/274/non_2x/young-teenager-boy-kid-head-character-vector.jpg" },
    { letters: "Ch ch", imageLetter: "", pronunciation: "/cha/", kichwa: "chukllu", spanish: "choclo", imageExample: "https://img.freepik.com/vector-gratis/simple-caricatura-maiz_1308-124847.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid" },
    { letters: "H h", imageLetter: "", pronunciation: "/ha/", kichwa: "hatun wasi", spanish: "edificio", imageExample: "https://img.freepik.com/foto-gratis/vista-edificio-arquitectura-estilo-dibujos-animados_23-2151154971.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid" },
    { letters: "K k", imageLetter: "", pronunciation: "/ka/", kichwa: "kawitu", spanish: "cama", imageExample: "https://img.freepik.com/vector-gratis/goldilocks-tres-osos-cama_1308-168802.jpg" },
    { letters: "L l", imageLetter: "", pronunciation: "/la/", kichwa: "lumu", spanish: "yuca", imageExample: "https://www.mercontrol.com/wp-content/uploads/2023/03/Que-es-la-yuca.-Propiedades-y-beneficios.jpg" },
    { letters: "Ll ll", imageLetter: "", pronunciation: "/lla/-/sha/", kichwa: "llakta", spanish: "ciudad", imageExample: "https://img.freepik.com/vector-gratis/calle-ciudad-vectores_23-2147751403.jpg" },
    { letters: "M m", imageLetter: "", pronunciation: "/ma/", kichwa: "misi", spanish: "gato", imageExample: "https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg" },
    { letters: "N n", imageLetter: "", pronunciation: "/na/", kichwa: "napana", spanish: "saludar", imageExample: "https://s3.voyapon.com/wp-content/uploads/sites/3/2020/03/20034614/aisatsu_sayounara.png" },
    { letters: "Ñ ñ", imageLetter: "", pronunciation: "/ña/", kichwa: "ñan", spanish: "camino", imageExample: "https://img.freepik.com/foto-gratis/tiro-horizontal-arbol-aislado-campo-verde-camino-cielo-nublado_181624-5064.jpg" },
    { letters: "P p", imageLetter: "", pronunciation: "/pa/", kichwa: "puyu", spanish: "nube", imageExample: "https://png.pngtree.com/png-clipart/20231005/original/pngtree-childish-cartoon-character-cloud-png-image_13123290.png" },
    { letters: "R r", imageLetter: "", pronunciation: "/ra/", kichwa: "rikra", spanish: "brazo", imageExample: "https://cdn5.dibujos.net/dibujos/pintados/202213/brazo-el-cuerpo-humano-12464261.jpg" },
    { letters: "S s", imageLetter: "", pronunciation: "/sa/", kichwa: "sapi", spanish: "raíz", imageExample: "https://www.abc.com.py/resizer/qSdoMyZmlLjv9qyZuW2eK7qvgCc=/arc-anglerfish-arc2-prod-abccolor/public/JOAJY52BPFDM7AUXLEOWHLILLY.jpg" },
    { letters: "Sh sh", imageLetter: "", pronunciation: "/sha/", kichwa: "shañu", spanish: "café", imageExample: "https://cafeselcriollo.com/wp-content/uploads/2022/01/beneficios-del-cafe-en-grano_.jpg" },
    { letters: "T t", imageLetter: "", pronunciation: "/ta/", kichwa: "tanta", spanish: "pan", imageExample: "https://img.freepik.com/vector-gratis/ilustracion-cocina-americana-dibujada-mano_23-2149330330.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid" },
    { letters: "Ts ts", imageLetter: "", pronunciation: "/tsa/", kichwa: "tsini", spanish: "ortiga", imageExample: "https://actualfruveg.com/wp-content/uploads/2022/11/ortiga-2.jpg" },
    { letters: "W w", imageLetter: "", pronunciation: "/ua/", kichwa: "wiksa", spanish: "estómago", imageExample: "https://previews.123rf.com/images/seamartini/seamartini2301/seamartini230100415/197569464-personaje-de-%C3%B3rgano-del-cuerpo-humano-del-est%C3%B3mago-de-dibujos-animados-personaje-del-sistema.jpg" },
    { letters: "Y y", imageLetter: "", pronunciation: "/ya/", kichwa: "yura", spanish: "planta", imageExample: "https://i.pinimg.com/originals/08/10/12/081012676b69a2142c6c609e30612bd8.png" },
    { letters: "Z z", imageLetter: "", pronunciation: "/za/", kichwa: "zirpu", spanish: "churón", imageExample: "https://i.pinimg.com/736x/0c/9e/bc/0c9ebc0250a2c4c642a5b6f455ef0ceb.jpg" },
];

const curiosity_data = [
    {
        key: '1',
        title: 'Curiosidades del alfabeto Kichwa',
        text: 'Sabías que en el alfabeto Kichwa existen solamente 3 vocales: a, i, u; y 17 consonantes. ¡Increíble!',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
    {
        key: '2',
        title: 'Curiosidades de las consonates en Kichwa',
        text: 'Sabías que: La e y o no se utilizan en el idioma kichwa. Las c, q y g son reemplazadas por la k. La d es reemplazada por la t. Las b, v y f son reemplazadas por la p.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
];

const Alphabet = () => {
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
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#5B4D28" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Alfabeto</Text>
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <CardDefault title="El Alfabeto en Kichwa" content="Conoce el alfabeto en Kichwa usando ejemplos en español. Presiona para ver más detalles." />
                    <View style={styles.gridContainer}>
                        {alphabet_data.map((letter) => (
                            <TouchableWithoutFeedback key={letter.letters} onPress={() => handleLetterPress(letter)}>
                                <View style={styles.cardInGrid}>
                                    <CardDefault title={letter.letters} styleCard={styles.cardPopUp} styleTitle={styles.cardTitleAlphabet} />
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
                                <ImageContainer path={item.imagePath} />
                                <ComicBubble
                                    text={item.text}
                                    backgroundColor="#FFAD9C"
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
                                <ImageContainer path={require('../../../../../assets/images/humu/humu-talking.png')} style={styles.imageModal} />
                                <Text style={styles.modalText}>Presiona en cada tarjeta de una letra (pintadas en rojo) del alfabeto para ver su pronunciación en Kichwa.</Text>
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
                                <Text style={styles.title}>{selectedLetter.letters}</Text>
                                <ImageContainer uri={selectedLetter.imageExample} style={styles.imageModal} />
                                <Text style={styles.pronunciation}>Pronunciación: {selectedLetter.pronunciation}</Text>
                                <View style={styles.translationContainer}>
                                    <Text style={styles.kichwaText}>Kichwa: {selectedLetter.kichwa}</Text>
                                    <Text style={styles.spanishText}>Español: {selectedLetter.spanish}</Text>
                                </View>
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
        </View>
    );
};

export default Alphabet;
