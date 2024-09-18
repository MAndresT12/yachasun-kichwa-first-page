import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { cardStyles } from '../../../../../styles/cardStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/imageContainers/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';

const images = {
    greeting1: require('../../../../../assets/images/basic/module2/greetings/greeting1.png'),
    greeting2: require('../../../../../assets/images/basic/module2/greetings/greeting1.png'),
    greeting3: require('../../../../../assets/images/basic/module2/greetings/greeting1.png'),
    greeting4: require('../../../../../assets/images/basic/module2/greetings/greeting1.png'),
    greeting5: require('../../../../../assets/images/basic/module2/greetings/greeting1.png'),
    greeting6: require('../../../../../assets/images/basic/module2/greetings/greeting1.png'),
    greeting7: require('../../../../../assets/images/basic/module2/greetings/greeting1.png'),
    greeting8: require('../../../../../assets/images/basic/module2/greetings/greeting1.png'),
    greeting9: require('../../../../../assets/images/basic/module2/greetings/greeting1.png'),
    greeting10: require('../../../../../assets/images/basic/module2/greetings/greeting1.png'),
    greeting11: require('../../../../../assets/images/basic/module2/greetings/greeting1.png'),
    greeting12: require('../../../../../assets/images/basic/module2/greetings/greeting1.png'),
};

const greetings_data = [
    { kichwa: "Imanalla", spanish: "Hola, ¿Qué tal?", imageCard: images.greeting1 },
    { kichwa: "Alli puncha", spanish: "Buenos días", imageCard: images.greeting2 },
    { kichwa: "Alli chishi", spanish: "Buenas tardes", imageCard: images.greeting3 },
    { kichwa: "Alli tuta", spanish: "Buenas noches", imageCard: images.greeting4 },
    { kichwa: "Kikinka imanallatak kanki", spanish: "¿Cómo está usted?", imageCard: images.greeting5 },
    { kichwa: "Allimi kani", spanish: "Estoy bien", imageCard: images.greeting6 },
    { kichwa: "Kikinka imashutitak kanki", spanish: "¿Cómo se llama usted?", imageCard: images.greeting7 },
    { kichwa: "Ñukapak shutika Humumi kan", spanish: "Mi nombre es Humu", imageCard: images.greeting8 },
    { kichwa: "Kikinka maymantatak kanki", spanish: "¿De dónde es usted?", imageCard: images.greeting9 },
    { kichwa: "Ecuador llaktamantami kani", spanish: "Soy de Ecuador", imageCard: images.greeting10 },
    { kichwa: "Kikinka", spanish: "¿Y usted?", imageCard: images.greeting11 },
    { kichwa: "Mashi", spanish: "Amigo", imageCard: images.greeting12 },
];

const curiosity_data = [
    {
        key: '1',
        title: 'Los Apellidos en Kichwa',
        text: 'La palabra Ango significa jefe, señor o gobernador. En el idioma Kayambi, significa espíritu y unidad.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
    {
        key: '2',
        title: 'Personajes importantes',
        text: 'Dolores Cacuango (-ango) es una líder indígena ecuatoriana que luchó por los derechos de los indígenas y campesinos.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
];

const Greetings = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedGreet, setselectedGreet] = useState(null);
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const navigation = useNavigation();

    const handleGreetPress = (greetData) => {
        setselectedGreet(greetData);
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
                        {greetings_data.map((spanish) => (
                            <TouchableWithoutFeedback key={spanish.spanish} onPress={() => handleGreetPress(spanish)}>
                                <View style={styles.cardInGrid}>
                                    <CardDefault title={spanish.spanish} styleCard={styles.cardPopUp} styleTitle={styles.cardTitleGreet} />
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
                                <FloatingHumu path={item.imagePath} />
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
                                <FloatingHumu path={require('../../../../../assets/images/humu/humu-talking.png')} style={styles.imageModal} />
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

                {selectedGreet && (
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.title}>{selectedGreet.letters}</Text>
                                <ImageContainer uri={selectedGreet.imageCard} style={styles.imageModal} />
                                <Text style={styles.pronunciation}>Pronunciación: {selectedGreet.pronunciation}</Text>
                                <View style={styles.translationContainer}>
                                    <Text style={styles.kichwaText}>Kichwa: {selectedGreet.kichwa}</Text>
                                    <Text style={styles.spanishText}>Español: {selectedGreet.spanish}</Text>
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

export default Greetings;
