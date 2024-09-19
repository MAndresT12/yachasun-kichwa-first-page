import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { cardStyles } from '../../../../../styles/cardStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import ChatModal from '../../../ui/modals/ChatModal';
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

const GreetingsPart2 = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [showChat, setShowChat] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const navigation = useNavigation();

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

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#5B4D28" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Los Saludos Parte 2</Text>
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Tengamos un diálogo" content='Ahora que ya sabes cómo decir "Hola" a tus amigos, veámos que otros tipos de saludos existen.' />
                    <View style={styles.gridContainer}>
                        {greetings_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>

                    <ButtonDefault label="¡Ejemplos aquí!" onPress={toggleChatModal} />

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
                                        <ImageContainer path={require('../../../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en cada tarjeta de un saludo para ver su pronunciación en Kichwa.'
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

                <ChatModal visible={showChat} onClose={toggleChatModal} />

                <View style={styles.footer}>
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('GreetingsPart2')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default GreetingsPart2;
