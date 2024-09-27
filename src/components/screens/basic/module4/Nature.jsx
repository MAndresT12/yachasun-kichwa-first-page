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
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';

const { width } = Dimensions.get('window');

const images = {
    nature1: require('../../../../../assets/images/basic/module4/nature/nature1.png'),
};

const nature1_data = [
    { imageCard: images.nature1, kichwa: "Puyu", spanish: "Nube" },
    { imageCard: images.nature1, kichwa: "Rasu", spanish: "Nevado" },
    { imageCard: images.nature1, kichwa: "Mayu", spanish: "Río" },
    { imageCard: images.nature1, kichwa: "Kuychi", spanish: "Arco iris" },
    { imageCard: images.nature1, kichwa: "Hatun Kucha", spanish: "Laguna" },
    { imageCard: images.nature1, kichwa: "Ñan", spanish: "Camino" },
    { imageCard: images.nature1, kichwa: "Pakcha", spanish: "Cascada" },
    { imageCard: images.nature1, kichwa: "Rumi", spanish: "Piedra" },
    { imageCard: images.nature1, kichwa: "Urku", spanish: "Montaña" },
    { imageCard: images.nature1, kichwa: "Illapa", spanish: "Rayo" },
    { imageCard: images.nature1, kichwa: "Kincha", spanish: "Corral" }
];

const nature2_data = [
    { imageCard: images.nature1, kichwa: "Sacha", spanish: "Selva" },
    { imageCard: images.nature1, kichwa: "Turu", spanish: "Lodo" },
    { imageCard: images.nature1, kichwa: "Uksha", spanish: "Paja" },
    { imageCard: images.nature1, kichwa: "Kiwa", spanish: "Hierba" },
    { imageCard: images.nature1, kichwa: "Inti", spanish: "Sol" },
    { imageCard: images.nature1, kichwa: "Pampa", spanish: "Valle" },
    { imageCard: images.nature1, kichwa: "Tamya", spanish: "Lluvia" },
    { imageCard: images.nature1, kichwa: "Allpa", spanish: "Tierra" },
    { imageCard: images.nature1, kichwa: "Pata", spanish: "Borde, Orilla" },
    { imageCard: images.nature1, kichwa: "Yunka", spanish: "Costa" },
    { imageCard: images.nature1, kichwa: "Mama Kucha", spanish: "Océano, Mar" },
    { imageCard: images.nature1, kichwa: "Wayra", spanish: "Viento" },
];

const nature3_data = [
    { imageCard: images.nature1, kichwa: "Yura", spanish: "Planta" },
    { imageCard: images.nature1, kichwa: "Panka", spanish: "Hoja" },
    { imageCard: images.nature1, kichwa: "Muyu", spanish: "Semilla" },
    { imageCard: images.nature1, kichwa: "Sisa", spanish: "Flor" },
    { imageCard: images.nature1, kichwa: "Sapi", spanish: "Raíz" },
    { imageCard: images.nature1, kichwa: "Kiru", spanish: "Árbol" },
    { imageCard: images.nature1, kichwa: "Killa", spanish: "Luna" },
    { imageCard: images.nature1, kichwa: "Yaku", spanish: "Agua" },
    { imageCard: images.nature1, kichwa: "Kawsay", spanish: "Vida" },
    { imageCard: images.nature1, kichwa: "Warmi", spanish: "Mujer" },
    { imageCard: images.nature1, kichwa: "Kari", spanish: "Hombre" }
];

const weather_data = [
    { kichwa: "Alli Pachachu Kan", spanish: "¿Hace buen tiempo?" },
    { kichwa: "Alli Pacha", spanish: "Hace buen tiempo" },
    { kichwa: "Mana Alli Pacha", spanish: "Hace mal tiempo" },
    { kichwa: "Intikun", spanish: "Hace sol" },
    { kichwa: "Rupakun", spanish: "Hace calor" },
    { kichwa: "Chirikun", spanish: "Hace frío" },
    { kichwa: "Wayrakun", spanish: "Hace viento" },
    { kichwa: "Tamyakun", spanish: "Está lloviendo" },
    { kichwa: "Runtukun", spanish: "Está granizando" },
    { kichwa: "Rasukun", spanish: "Está nevando" }
];

const curiosity_data = [
    {
        key: '1',
        title: 'La naturaleza dentro de nosotros',
        text: 'Para los indígenas, la naturaleza es parte de uno mismo, y cada actividad requiere pedir permiso a la pachamama para lograr la armonía y la paz.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
    {
        key: '2',
        title: 'Adoración a la naturaleza',
        text: 'La cultura indígena respeta y adora la naturaleza, pidiendo permiso antes de usar sus recursos, como cortar un árbol o lavar la ropa.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
];

const renderData = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
        </View>
    ));
};

const renderDataImages = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={styles.imageContainer}>
                <ImageContainer path={item.imageCard} style={styles.animalImage} />
            </View>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const nature1Route = () => (
    <View>
        <Text style={styles.title}>La natulareza indomable</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Imagen</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
            </View>
            {renderDataImages(nature2_data)}
        </View>
    </View>
);

const nature2Route = () => (
    <View>
        <Text style={styles.title}>Más sobre naturaleza</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Imagen</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
            </View>
            {renderDataImages(nature3_data)}
        </View>
    </View>
);

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

const Nature = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const navigation = useNavigation();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'nature1', title: 'Naturaleza Parte 1' },
        { key: 'nature2', title: 'Naturaleza Parte 2' },
    ]);

    const renderScene = SceneMap({
        nature1: nature1Route,
        nature2: nature2Route,
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

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#003366" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>La Naturaleza</Text>
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>

                    <CardDefault title="Tan hermosa">
                        <Text style={styles.cardContent}>
                            Todo lo que nos rodea es naturaleza. Debemos respetarla y cuidarla.
                            Una forma de hacerlo es conociendo las palabras para habalr sobre la naturaleza.{'\n\n'}
                            Te enseño como hablar de la naturaleza en Kichwa.
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {nature1_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>

                    <CardDefault title="Más naturaleza">
                        <Text style={styles.cardContent}>
                            Acá te mando más palabras para que puedas hablar de la naturaleza en el hermoso lenguaje del Kichwa.
                        </Text>
                    </CardDefault>

                    <CardDefault styleContainer={{ flex: 1 }} styleCard={{ flex: 1, height: 1270 }} >
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

                    <CardDefault title="El voraz clima">
                        <Text style={styles.cardContent}>
                            Algo que forma parte de la naturalieza es el clima.{'\n\n'}
                            Quiero enseñarte algunas palabras para hablar sobre el clima.
                        </Text>
                    </CardDefault>

                    <CardDefault title="¡Veamos el clima!">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {renderData(weather_data)}
                        </View>
                    </CardDefault>

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
                                        text='Presiona en las tarjetas para ver la información.'
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

                <View style={styles.footer}>
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('GamesBasicModule2')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Nature;