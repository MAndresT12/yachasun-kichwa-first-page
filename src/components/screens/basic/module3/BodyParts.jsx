import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
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

const { width } = Dimensions.get('window');

const body_parts_data = [
    { kichwa: "Akcha", spanish: "Cabello" },
    { kichwa: "Uma", spanish: "Cabeza" },
    { kichwa: "Kunka", spanish: "Cuello" },
    { kichwa: "Rikra", spanish: "Brazo" },
    { kichwa: "Wiksa", spanish: "Barriga" },
    { kichwa: "Maki", spanish: "Mano" },
    { kichwa: "Ruka", spanish: "Dedo" },
    { kichwa: "Kunkuri", spanish: "Rodilla" },
    { kichwa: "Chanka", spanish: "Pierna" },
    { kichwa: "Chaki", spanish: "Pie" },
    { kichwa: "Washa", spanish: "Espalda" },
];

const face_parts_data = [
    { kichwa: "Ñawi millma", spanish: "Pestaña" },
    { kichwa: "Ñawi lulun", spanish: "Ojo" },
    { kichwa: "Ñawi", spanish: "Cara" },
    { kichwa: "Rinri", spanish: "Oreja" },
    { kichwa: "Shimi", spanish: "Boca" },
    { kichwa: "Kirukuna", spanish: "Diente" },
    { kichwa: "Kashtuna", spanish: "Mandíbula" },
];

const initial_chat_messages = [
    {
        _id: 1,
        text: 'Makikunawan takarinchik\n\nCon las manos tocamos',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/prototype/nikkiamo.jpeg'),
        },
    },
    {
        _id: 2,
        text: 'Shimiwan rimanchik\n\nCon la boca hablamos',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 3,
        text: 'Sinkawan mutkinchik\n\nCon la nariz olemos',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/prototype/nikkiamo.jpeg'),
        },
    },
    {
        _id: 4,
        text: 'Rinrikunawan uyanchik\n\nCon las orejas oímos',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 5,
        text: 'Ñawikunawan rikunchik\n\nCon los ojos vemos',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/prototype/nikkiamo.jpeg'),
        },
    },
];

const images = {
    body1: require('../../../../../assets/images/basic/module3/bodyParts/body1.png'),
};

const clothes_data = [
    { kichwa: "Muchiku", spanish: "Sombrero", imageCard: images.body1 },
    { kichwa: "Wallka", spanish: "Collar", imageCard: images.body1 },
    { kichwa: "Talpa", spanish: "Blusa", imageCard: images.body1 },
    { kichwa: "Washa hatana", spanish: "Bufanda / Tela", imageCard: images.body1 },
    { kichwa: "Chumpi", spanish: "Faja", imageCard: images.body1 },
    { kichwa: "Anaku", spanish: "Falda", imageCard: images.body1 },
    { kichwa: "Ushuta", spanish: "Alpargatas", imageCard: images.body1 },
    { kichwa: "Ruwana", spanish: "Poncho", imageCard: images.body1 },
    { kichwa: "Kushma", spanish: "Camisa", imageCard: images.body1 },
    { kichwa: "Muchiku", spanish: "Sombrero", imageCard: images.body1 },
    { kichwa: "Wara", spanish: "Pantalón de lana", imageCard: images.body1 },
];

const curiosity_data = [
    {
        key: '1',
        title: 'Ushuta',
        text: 'La cabuya es una planta clave en la cultura indígena. Su resistente fibra se utiliza en muchas cosas, ¡incluso para hacer alpargatas!.',
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

const renderData = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const bodyRoute = () => (
    <View>
        <Text style={styles.title}>Todo el cuerpo</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
            </View>
            {renderData(body_parts_data)}
        </View>
    </View>
);

const headRoute = () => (
    <View>
        <Text style={styles.title}>Un zoom a la cabeza</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
            </View>
            {renderData(face_parts_data)}
        </View>
    </View>
);

const BodyParts = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [showChat, setShowChat] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const navigation = useNavigation();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'Body', title: 'Cuerpo' },
        { key: 'Head', title: 'Cabeza' },
    ]);

    const renderScene = SceneMap({
        Body: bodyRoute,
        Head: headRoute,
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
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#003366" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Las Partes del Cuerpo Humano</Text>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Mi cuerpo es precioso" >
                        <Text style={styles.cardContent}>
                            Me gusta cuidar mi cuerpo, es el único que tengo y debo mantenerlo sano y fuerte.
                            Cuídalo, respétalo y ámalo. Para esto debes conocer las partes de tu cuerpo y 
                            cuídarlas.{`\n\n`}
                            Te invito a conocer las partes de tu cuerpo en Kichwa.
                        </Text>
                    </CardDefault>
                    <CardDefault styleContainer={{ flex: 1 }} styleCard={{ flex: 1, height: 560 }} >
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
                    
                    <ButtonDefault label="Mira un poema..." onPress={toggleChatModal} />

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
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('Colors')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default BodyParts;
