import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
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

const initial_chat_messages = [
    {
        _id: 1,
        text: 'Otavalo llaktamantami kani\n\nSoy de Otavalo.',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 2,
        text: 'Puliza llaktamantami kani. Kikinka\n\nSoy de Puliza, ¿y usted?',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 3,
        text: 'Kikinka maymantatak kanki\n\n¿De dónde es usted?',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 4,
        text: 'Ñukapak shutika Antoniomi kan\n\nMi nombre es Antonio',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 5,
        text: 'Ñukapak shutika Sisami kan. Kikinka\n\nMi nombre es Sisa, ¿Y usted?',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 6,
        text: 'Kikinka imashutitak kanki\n\n¿Cómo se llama usted?',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 7,
        text: 'Allimi kani\n\nEstoy bien',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 8,
        text: 'Kikinka imanallatak kanki\n\n¿Cómo está usted?',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 9,
        text: 'Alli puncha mashi\n\nBuenos días',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 10,
        text: 'Imanalla mashi\n\nHola amiga',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
];

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
    { kichwa: "Imanallatak kashkanki", spanish: "¿Cómo has estado tú?", imageCard: images.greeting1 },
    { kichwa: "Imanallatak kankichik", spanish: "¿Cómo están ustedes?", imageCard: images.greeting2 },
    { kichwa: "Kawsankichu", spanish: "Hola, ¿Vives?", imageCard: images.greeting3 },
    { kichwa: "Pakarishkanki", spanish: "¡Has amanecido!", imageCard: images.greeting4 },
    { kichwa: "Alli tutamanta", spanish: "Buena mañana", imageCard: images.greeting5 },
];

const curiosity_data = [
    {
        key: '1',
        title: 'Kawsankichu - Hola, ¿Vives?',
        text: 'Suena diferente, ¿no? Pero es un saludo de pueblos andinos, una pregunta y saludo de cortesía, de amistad y confianza.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
];

const { width } = Dimensions.get('window');

const FlipCard = ({ item }) => {
    const [flipped, setFlipped] = useState(false);
    const rotateY = useSharedValue(0);
    const humuOpacity = useSharedValue(0);
    const humuLeftPosition = useSharedValue(-width * 0.008);

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
        }
        setFlipped(!flipped);
    };

    return (
        <View style={{ position: 'relative', width: '100%', marginBottom: 20 }}>
            <TouchableWithoutFeedback onPress={handleFlip}>
                <View style={styles.flipCardGreetings2}>
                    <Animated.View style={[styles.flipCardInnerGreetings2, styles.flipCardFrontGreetings2, animatedStyleFront]}>
                        <ImageContainer path={item.imageCard} style={styles.imageCards} />
                    </Animated.View>
                    <Animated.View style={[styles.flipCardInnerGreetings2, styles.flipCardBackGreetings2, animatedStyleBack]}>
                        <Text style={styles.translationLabel}>Kichwa:</Text>
                        <Text style={styles.translationText}>{item.kichwa}</Text>
                        <Text style={styles.translationLabel}>Español:</Text>
                        <Text style={styles.translationText}>{item.spanish}</Text>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
            <Animated.Image
                source={require('../../../../../assets/images/humu/humu-talking.png')}
                style={[styles.humuImage, animatedHumuStyle]}
            />
        </View>
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
                <View style={styles.bodyGreetings2}>
                    <CardDefault title="Tengamos un diálogo" content='Ahora que ya sabes cómo decir "Hola" a tus amigos, veámos que otros tipos de saludos existen.' />
                    <View style={styles.gridContainerGreetings2}>
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

                <ChatModal visible={showChat} onClose={toggleChatModal} initialMessages={initial_chat_messages} />

                <View style={styles.footer}>
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('GreetingsPart2')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default GreetingsPart2;
