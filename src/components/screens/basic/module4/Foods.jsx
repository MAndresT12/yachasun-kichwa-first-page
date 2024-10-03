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
    foods1: require('../../../../../assets/images/basic/module4/foods/food1.png'),
};

const foods1_data = [
    { imageCard: images.foods1, kichwa: "Aycha", spanish: "Carne" },
    { imageCard: images.foods1, kichwa: "Kachi", spanish: "Sal" },
    { imageCard: images.foods1, kichwa: "Haku", spanish: "Harina" },
    { imageCard: images.foods1, kichwa: "Purutu", spanish: "Fréjol" },
    { imageCard: images.foods1, kichwa: "Makinchu", spanish: "Queso" },
    { imageCard: images.foods1, kichwa: "Mishki Haku", spanish: "Azúcar" },
    { imageCard: images.foods1, kichwa: "Tanta", spanish: "Pan" },
    { imageCard: images.foods1, kichwa: "Yaku Wira", spanish: "Aceite" },
    { imageCard: images.foods1, kichwa: "Yaku", spanish: "Agua" },
    { imageCard: images.foods1, kichwa: "Ñuñu", spanish: "Leche" },
    { imageCard: images.foods1, kichwa: "Chuchi Aycha", spanish: "Pollo" },
];

const foods2_data = [
    { imageCard: images.foods1, kichwa: "Challwa", spanish: "Pescado" },
    { imageCard: images.foods1, kichwa: "Papa", spanish: "Papa" },
    { imageCard: images.foods1, kichwa: "Palta", spanish: "Aguacate" },
    { imageCard: images.foods1, kichwa: "Sara", spanish: "Maíz" },
    { imageCard: images.foods1, kichwa: "Inchik", spanish: "Maní" },
    { imageCard: images.foods1, kichwa: "Chukllu", spanish: "Choclo" },
    { imageCard: images.foods1, kichwa: "Kinuwa", spanish: "Quinua" },
    { imageCard: images.foods1, kichwa: "Lumu", spanish: "Yuca" },
    { imageCard: images.foods1, kichwa: "Tawri", spanish: "Chocho" },
    { imageCard: images.foods1, kichwa: "Wiru", spanish: "Caña" },
    { imageCard: images.foods1, kichwa: "Uchu", spanish: "Ají" },
];

const fruits_data = [
    { imageCard: images.foods1, kichwa: "Chiwilla", spanish: "Piña" },
    { imageCard: images.foods1, kichwa: "Palanta", spanish: "Plátano" },
    { imageCard: images.foods1, kichwa: "Chilina", spanish: "Naranja" },
    { imageCard: images.foods1, kichwa: "Papaya", spanish: "Papaya" },
    { imageCard: images.foods1, kichwa: "Chiwallkan", spanish: "Babaco" },
    { imageCard: images.foods1, kichwa: "Kita", spanish: "Cacao" },
];

const curiosity_data = [
    {
        key: '1',
        title: 'El Mote',
        text: 'El mote es un alimento esencial en la dieta indígena y es clave en la preparación de comidas tradicionales como el "mediano".',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
    {
        key: '2',
        title: 'Mashua',
        text: 'La mashua es una planta andina, consumida como verdura y usada medicinalmente.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
    {
        key: '3',
        title: 'El Maíz',
        text: 'El maíz es un alimento básico en la sierra ecuatoriana, un regalo de la naturaleza, y es venerado en diferentes celebraciones.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
    {
        key: '4',
        title: 'La Chicha',
        text: 'La chicha es una bebida tradicional indígena hecha con maíz y fermentada, utilizada en celebraciones rituales y fiestas importantes.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    }
];

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

const food1Route = () => (
    <View>
        <Text style={styles.title}>Comida deliciosa</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Imagen</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
            </View>
            {renderDataImages(foods1_data)}
        </View>
    </View>
);

const food2Route = () => (
    <View>
        <Text style={styles.title}>Ven, vamos a comer</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Imagen</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
            </View>
            {renderDataImages(foods2_data)}
        </View>
    </View>
);

const renderFruitCard = (item) => (
    <View style={styles.carouselCard}>
        <ImageContainer path={item.imageCard} style={styles.carouselImage} />
        <Text style={styles.carouselTextKichwa}>{item.kichwa}</Text>
        <Text style={styles.carouselTextSpanish}>{item.spanish}</Text>
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

const Foods = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const navigation = useNavigation();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'table1', title: 'Comida Parte 1' },
        { key: 'table2', title: 'Comida Parte 2' },
    ]);

    const renderScene = SceneMap({
        table1: food1Route,
        table2: food2Route,
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
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>

                    <CardDefault title="Una deliciosa aventura">
                        <Text style={styles.cardContent}>
                            ¿Cuál es tú comida faovrita? La mía es la mapahuira. Es una manteca de chancho con mote. ¡Es delicioso!{'\n\n'}
                            Quiero que aprendas acerca de cómo se dice algunos alimentos en kichwa.
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

                    <CardDefault title="Las frutas">
                        <Text style={styles.cardContent}>
                            Las frutas me encantan porque, ¡son muy dulces! Espero que a tí también te gusten mucho.{'\n\n'}
                            Aquí te dejo algunas frutas y su traducción en kichwa.
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {fruits_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
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
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('Orientation')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Foods;