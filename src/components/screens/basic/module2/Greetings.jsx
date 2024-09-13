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

const greetings_data = [
    { kichwa: "imanalla", spanish: "hola", imageExample: "https://cdn-icons-png.flaticon.com/512/7218/7218671.png" },
    { kichwa: "alli puncha", spanish: "buenos días", imageExample: "https://cdn5.dibujos.net/dibujos/pintados/201218/numero-9-letras-y-numeros-numeros-pintado-por-meulois-9737798.jpg" },
    { kichwa: "alli chishi", spanish: "buenas tardes", imageExample: "https://static.vecteezy.com/system/resources/previews/002/508/274/non_2x/young-teenager-boy-kid-head-character-vector.jpg" },
    { kichwa: "alli tuta", spanish: "buenas noches", imageExample: "https://img.freepik.com/vector-gratis/simple-caricatura-maiz_1308-124847.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid" },
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
                    <Text style={styles.titleTema}>Los Saludos</Text>
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Como saludar" content="Aprendamos a saludar en Kichwa." />
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
                                <Text style={styles.modalText}>Presiona en cada tarjeta de un saludo para ver su pronunciación en Kichwa.</Text>
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
