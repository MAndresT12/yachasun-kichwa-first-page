import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import ChatModal from '../../../ui/modals/ChatModal';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';

const { width } = Dimensions.get('window');

const initial_chat_messages = [
    {
        _id: 1,
        text: 'Otavalo llaktamantami kani\n\nSoy de Otavalo.',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-happy.png',
        },
        image: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/otavalo.jpg',
    },
    {
        _id: 2,
        text: 'Puliza llaktamantami kani. Kikinka\n\nSoy de Puliza, ¿y usted?',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/chat/profile-example.jpeg',
        },
    },
    {
        _id: 3,
        text: 'Kikinka maymantatak kanki\n\n¿De dónde es usted?',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-happy.png',
        },
    },
    {
        _id: 4,
        text: 'Ñukapak shutika Antoniomi kan\n\nMi nombre es Antonio',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/chat/profile-example.jpeg',
        },
    },
    {
        _id: 5,
        text: 'Ñukapak shutika Sisami kan. Kikinka\n\nMi nombre es Sisa, ¿Y usted?',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-happy.png',
        },
    },
    {
        _id: 6,
        text: 'Kikinka imashutitak kanki\n\n¿Cómo se llama usted?',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/chat/profile-example.jpeg',
        },
    },
    {
        _id: 7,
        text: 'Allimi kani\n\nEstoy bien',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-happy.png',
        },
    },
    {
        _id: 8,
        text: 'Kikinka imanallatak kanki\n\n¿Cómo está usted?',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/chat/profile-example.jpeg',
        },
    },
    {
        _id: 9,
        text: 'Alli puncha mashi\n\nBuenos días',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-happy.png',
        },
    },
    {
        _id: 10,
        text: 'Imanalla mashi\n\nHola amiga',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/chat/profile-example.jpeg',
        },
    },
];

const images = {
    greeting1: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Greetings/greeting1.png',
};

const greetings_data = [
    { kichwa: "Imanalla", spanish: "Hola, ¿Qué tal?", imageCard: images.greeting1 },
    { kichwa: "Alli puncha", spanish: "Buenos días", imageCard: images.greeting1 },
    { kichwa: "Alli chishi", spanish: "Buenas tardes", imageCard: images.greeting1 },
    { kichwa: "Alli tuta", spanish: "Buenas noches", imageCard: images.greeting1 },
    { kichwa: "Kikinka imanallatak kanki", spanish: "¿Cómo está usted?", imageCard: images.greeting1 },
    { kichwa: "Allimi kani", spanish: "Estoy bien", imageCard: images.greeting1 },
    { kichwa: "Kikinka imashutitak kanki", spanish: "¿Cómo se llama usted?", imageCard: images.greeting1 },
    { kichwa: "Ñukapak shutika Humumi kan", spanish: "Mi nombre es Humu", imageCard: images.greeting1 },
    { kichwa: "Kikinka maymantatak kanki", spanish: "¿De dónde es usted?", imageCard: images.greeting1 },
    { kichwa: "Ecuador llaktamantami kani", spanish: "Soy de Ecuador", imageCard: images.greeting1 },
    { kichwa: "Kikinka", spanish: "¿Y usted?", imageCard: images.greeting1 },
    { kichwa: "Mashi", spanish: "Amigo", imageCard: images.greeting1 },
];

const courtesy_data = [
    { kichwa: "Uyapay", spanish: "Escuche por favor" },
    { kichwa: "Allipacha", spanish: "Buenísimo / Buen tiempo" },
    { kichwa: "Kaynakunkichu", spanish: "Está pasando el día" },
    { kichwa: "Yaykupashunchu", spanish: "¿Podemos pasar?" },
    { kichwa: "Yupaychani", spanish: "Gracias" },
];

const goodbyes_data = [
    { kichwa: "Chishikaman", spanish: "Hasta la tarde" },
    { kichwa: "Alli punchata charipay", spanish: "¡Qué tenga un buen día!" },
    { kichwa: "Kayakaman", spanish: "Hasta mañana" },
    { kichwa: "Shuk punchapik rikurishun", spanish: "Nos vemos otro día. Adiós" },
    { kichwa: "Ashta kashkaman", spanish: "Hasta pronto, hasta luego" },
];


const curiosity_data = [
    {
        key: '1',
        title: 'Curiosidades - La ciudad de Otavalo',
        text: 'Sabías que Otavalo es una ciudad de Ecuador, conocida por su mercado artesanal.',
        imagePath: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png',
    },
    {
        key: '2',
        title: 'Curiosidades - Kichwa hablantes',
        text: 'En Otavalo, puedes practicar Kichwa con las personas que viven ahí.',
        imagePath: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png',
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
                    <ImageContainer uri={item.imageCard} style={styles.imageCards} />
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <Text style={styles.spanishText}>Español:</Text>
                    <Text style={styles.spanishText}>{item.spanish}{'\n'}</Text>
                    <Text style={styles.kichwaText}>Kichwa:</Text>
                    <Text style={styles.kichwaText}>{item.kichwa}</Text>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const renderCourtesies = () => {
    return courtesy_data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
        </View>
    ));
};

const renderGoodbyes = () => {
    return goodbyes_data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
        </View>
    ));
};

const CourtesyRoute = () => (
    <View>
        <Text style={styles.title}>Frases de cortesía</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Español</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
            </View>
            {renderCourtesies()}
        </View>
    </View>
);

const GoodbyesRoute = () => (
    <View>
        <Text style={styles.title}>Las Despedidas</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Español</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
            </View>
            {renderGoodbyes()}
        </View>
    </View>
);

const GreetingsPart1 = () => {
    const progress = 1 / 6;

    const [showHelp, setShowHelp] = useState(null);
    const [showChat, setShowChat] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const navigation = useNavigation();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'courtesy', title: 'Cortesía' },
        { key: 'goodbyes', title: 'Despedidas' },
    ]);

    const renderScene = SceneMap({
        courtesy: CourtesyRoute,
        goodbyes: GoodbyesRoute,
    });

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
                    <CardDefault title="¿Cómo saludar?" content="Aprendamos a saludar en Kichwa." />
                    <View style={styles.gridContainer}>
                        {greetings_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>

                    <CardDefault title="¿Y cómo me despido? ¿Hay formas de ser amable?" content="Te muestro dos tablas que responden a estas maravillosas preguntas." />

                    <CardDefault styleContainer={{ flex: 1 }} styleCard={{ flex: 1, height: 430 }} >
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={width}
                            style={{ height: '100%' }}
                            renderTabBar={(props) => (
                                <TabBar
                                    {...props}
                                    indicatorStyle={{ backgroundColor: 'white' }}
                                    style={{
                                        backgroundColor: '#003366',
                                        borderRadius: 8,
                                        margin: 10,
                                    }}
                                    tabStyle={{
                                        borderRadius: 10,
                                        marginHorizontal: 5,
                                    }}
                                    labelStyle={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                    activeColor="#FFD700"
                                    inactiveColor="#FFFFFF"
                                />
                            )}
                        />
                    </CardDefault>

                    {/* <CardDefault title="Frases de cortesía">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                            </View>
                            {renderCourtesies()}
                        </View>
                    </CardDefault>

                    <CardDefault title="Las Despedidas">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                            </View>
                            {renderGoodbyes()}
                        </View>
                    </CardDefault> */}

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
        </LinearGradient>
    );
};

export default GreetingsPart1;
