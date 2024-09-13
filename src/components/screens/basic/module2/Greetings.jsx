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

const FloatingHumu = ({ path, style }) => {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation, {
                    toValue: 10,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [animation]);

    const animatedStyle = {
        transform: [{ translateY: animation }],
    };

    return (
        <Animated.View style={[animatedStyle, style]}>
            <ImageContainer path={path} />
        </Animated.View>
    );
};

const Greetings = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedGreet, setselectedGreet] = useState(null);
    const [showHelp, setShowHelp] = useState(null);

    const navigation = useNavigation();

    const handleGreetPress = (greetData) => {
        setselectedGreet(greetData);
        setModalVisible(true);
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
