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
    greeting1: require('../../../../../assets/images/basic/numbers/number0.png'),
    greeting2: require('../../../../../assets/images/basic/numbers/number1.png'),
    greeting3: require('../../../../../assets/images/basic/numbers/number2.png'),
    greeting4: require('../../../../../assets/images/basic/numbers/number3.png'),
    greeting5: require('../../../../../assets/images/basic/numbers/number0.png'),
    greeting6: require('../../../../../assets/images/basic/numbers/number1.png'),
    greeting7: require('../../../../../assets/images/basic/numbers/number2.png'),
    greeting8: require('../../../../../assets/images/basic/numbers/number3.png'),
    greeting9: require('../../../../../assets/images/basic/numbers/number0.png'),
    greeting10: require('../../../../../assets/images/basic/numbers/number1.png'),
    greeting11: require('../../../../../assets/images/basic/numbers/number2.png'),
    greeting12: require('../../../../../assets/images/basic/numbers/number3.png'),
};

const greetings_data = [
    { kichwa: "Imanalla", spanish: "Hola", imageExample: "https://i.pinimg.com/736x/d0/5c/49/d05c490462edd8f16e9ca52b9c00976a.jpg" },
    { kichwa: "Alli puncha", spanish: "Buenos días", imageExample: "https://norfipc.com/fotos/saludar/imagenes-frases-bonitas-dar-buenos-dias.jpg" },
    { kichwa: "Alli chishi", spanish: "Buenas tardes", imageExample: "https://i.ytimg.com/vi/dxiXGsduluI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHIgZigRMA8=&rs=AOn4CLBTXlaXBix4yzVhPCYf1kpBMXNfow" },
    { kichwa: "Alli tuta", spanish: "Buenas noches", imageExample: "https://media.tenor.com/0ZiuJYfyQ2wAAAAe/buenas-noches-noches.png" },
    { kichwa: "Imanalla", spanish: "Hola", imageExample: "https://i.pinimg.com/736x/d0/5c/49/d05c490462edd8f16e9ca52b9c00976a.jpg" },
    { kichwa: "Alli puncha", spanish: "Buenos días", imageExample: "https://norfipc.com/fotos/saludar/imagenes-frases-bonitas-dar-buenos-dias.jpg" },
    { kichwa: "Alli chishi", spanish: "Buenas tardes", imageExample: "https://i.ytimg.com/vi/dxiXGsduluI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHIgZigRMA8=&rs=AOn4CLBTXlaXBix4yzVhPCYf1kpBMXNfow" },
    { kichwa: "Alli tuta", spanish: "Buenas noches", imageExample: "https://media.tenor.com/0ZiuJYfyQ2wAAAAe/buenas-noches-noches.png" },
    { kichwa: "Imanalla", spanish: "Hola", imageExample: "https://i.pinimg.com/736x/d0/5c/49/d05c490462edd8f16e9ca52b9c00976a.jpg" },
    { kichwa: "Alli puncha", spanish: "Buenos días", imageExample: "https://norfipc.com/fotos/saludar/imagenes-frases-bonitas-dar-buenos-dias.jpg" },
    { kichwa: "Alli chishi", spanish: "Buenas tardes", imageExample: "https://i.ytimg.com/vi/dxiXGsduluI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHIgZigRMA8=&rs=AOn4CLBTXlaXBix4yzVhPCYf1kpBMXNfow" },
    { kichwa: "Alli tuta", spanish: "Buenas noches", imageExample: "https://media.tenor.com/0ZiuJYfyQ2wAAAAe/buenas-noches-noches.png" },
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
                                <ImageContainer uri={selectedGreet.imageExample} style={styles.imageModal} />
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
