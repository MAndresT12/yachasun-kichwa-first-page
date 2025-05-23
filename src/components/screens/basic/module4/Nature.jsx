import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal, Dimensions } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../../../../../styles/globalStyles';

import { FloatingHumu } from '../../../animations/FloatingHumu';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';

import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const { width } = Dimensions.get('window');

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');

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
    { imageCard: "https://st5.depositphotos.com/8982612/65190/v/600/depositphotos_651905044-stock-illustration-beautiful-tropical-forest-landscape-vector.jpg", kichwa: "Sacha", spanish: "Selva" },
    { imageCard: "https://st.depositphotos.com/1024345/53680/v/600/depositphotos_536804950-stock-illustration-shovels-in-a-pile-of.jpg", kichwa: "Turu", spanish: "Lodo" },
    { imageCard: "https://st2.depositphotos.com/5777248/10046/v/600/depositphotos_100463390-stock-illustration-haystack-cartoon-icon.jpg", kichwa: "Uksha", spanish: "Paja" },
    { imageCard: "https://st.depositphotos.com/1024232/1876/v/600/depositphotos_18760421-stock-illustration-vector-grass-with-ladybird-isolated.jpg", kichwa: "Kiwa", spanish: "Hierba" },
    { imageCard: "https://st5.depositphotos.com/79395200/76229/v/600/depositphotos_762291830-stock-illustration-sun-bright-sun-icon-white.jpg", kichwa: "Inti", spanish: "Sol" },
    { imageCard: "https://st5.depositphotos.com/50730154/74689/v/600/depositphotos_746891830-stock-illustration-countryside-landscape-scene-green-wheat.jpg", kichwa: "Pampa", spanish: "Valle" },
    { imageCard: "https://st2.depositphotos.com/2507337/12422/v/600/depositphotos_124220334-stock-illustration-cloud-and-rain.jpg", kichwa: "Tamya", spanish: "Lluvia" },
    { imageCard: "https://st2.depositphotos.com/1796420/8408/v/600/depositphotos_84083416-stock-illustration-texture-for-platformers-pixel-art.jpg", kichwa: "Allpa", spanish: "Tierra" },
    { imageCard: "https://st3.depositphotos.com/11615252/17386/v/600/depositphotos_173869946-stock-illustration-businesswoman-fall-cliff.jpg", kichwa: "Pata", spanish: "Borde, Orilla" },
    { imageCard: "https://st5.depositphotos.com/49807348/77224/v/600/depositphotos_772246628-stock-illustration-seascape-sand-dunes-seashore-vector.jpg", kichwa: "Yunka", spanish: "Costa" },
    { imageCard: "https://static8.depositphotos.com/1336457/1016/v/600/depositphotos_10165788-stock-illustration-cartoon-colored-coral-reef-and.jpg", kichwa: "Mama Kucha", spanish: "Océano, Mar" },
    { imageCard: "https://st3.depositphotos.com/1030387/18838/v/600/depositphotos_188380172-stock-illustration-wind-blowing-design-element.jpg", kichwa: "Wayra", spanish: "Viento" },
];

const nature3_data = [
    { imageCard: "https://st5.depositphotos.com/88030504/77281/v/600/depositphotos_772818468-stock-illustration-growing-seedling-pot-vector-illustration.jpg", kichwa: "Yura", spanish: "Planta" },
    { imageCard: "https://st5.depositphotos.com/90884748/76338/v/600/depositphotos_763382434-stock-illustration-green-leaf-isolated-white-background.jpg", kichwa: "Panka", spanish: "Hoja" },
    { imageCard: "https://st2.depositphotos.com/1526816/11570/v/600/depositphotos_115707062-stock-illustration-seed-germination-in-clay-pot.jpg", kichwa: "Muyu", spanish: "Semilla" },
    { imageCard: "https://static8.depositphotos.com/1526816/999/v/600/depositphotos_9994393-stock-illustration-flower.jpg", kichwa: "Sisa", spanish: "Flor" },
    { imageCard: "https://img.freepik.com/premium-vector/tree-roots-vector_1119897-5199.jpg?w=740", kichwa: "Sapi", spanish: "Raíz" },
    { imageCard: "https://st.depositphotos.com/2208320/1928/v/600/depositphotos_19281707-stock-illustration-nature-vector-green-tree-banner.jpg", kichwa: "Kiru", spanish: "Árbol" },
    { imageCard: "https://st5.depositphotos.com/82227364/72583/v/600/depositphotos_725832048-stock-illustration-moon-stars-black-background.jpg", kichwa: "Killa", spanish: "Luna" },
    { imageCard: "https://st4.depositphotos.com/11953928/23967/v/600/depositphotos_239679154-stock-illustration-silhouette-kawaii-nice-shy-drop.jpg", kichwa: "Yaku", spanish: "Agua" },
    { imageCard: "https://st2.depositphotos.com/1093689/5333/v/600/depositphotos_53334773-stock-illustration-happy-joyous-people-as-trees.jpg", kichwa: "Kawsay", spanish: "Vida" },
    { imageCard: "https://st5.depositphotos.com/76722222/67148/v/600/depositphotos_671488418-stock-illustration-happy-smiling-woman-purple-clothes.jpg", kichwa: "Warmi", spanish: "Mujer" },
    { imageCard: "https://st5.depositphotos.com/80218270/66272/v/600/depositphotos_662720220-stock-illustration-confident-man-pointing-finger-camera.jpg", kichwa: "Kari", spanish: "Hombre" }
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
        title: 'Curiosidades - La naturaleza dentro de nosotros',
        text: 'Para los indígenas, la naturaleza es parte de uno mismo. La idea es tener paz y armonía con la madre tierra (Pachamama).',
        imagePath: humuTalking,
    },
    {
        key: '2',
        title: 'Curiosidades - Adoración a la naturaleza',
        text: 'La cultura indígena respeta y adora la naturaleza, pidiendo permiso antes de usar sus recursos, como cortar un árbol o lavar la ropa.',
        imagePath: humuTalking,
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
                <ImageContainer uri={item.imageCard} style={styles.animalImage} />
            </View>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
        </View>
    ));
};

const nature1Route = () => (
    <View>
        <Text style={styles.title}>La natulareza indomable</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Imagen</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
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
                <Text style={styles.tableHeaderCell}>Español</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
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
                    <Text style={styles.translationLabel}>Español:</Text>
                    <Text style={styles.spanishText}>{item.spanish}</Text>
                    <Text style={styles.translationLabel}>Kichwa:</Text>
                    <Text style={styles.kichwaText}>{item.kichwa}</Text>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const Nature = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

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

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_Foods_completed', 'true');
            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };

    const trofeoKeys = [
        'trofeo_modulo1_basic',
        'trofeo_modulo2_basic',
        'trofeo_modulo3_basic',
        'trofeo_modulo4_basic',
        'trofeo_modulo5_basic',
        'trofeo_modulo6_basic',
    ];
    // Función para cargar el estado de los trofeos desde AsyncStorage
    const loadTrophyProgress = async () => {
        let obtainedCount = 0;

        // Verificamos cuántos trofeos están desbloqueados
        for (const key of trofeoKeys) {
            const obtained = await AsyncStorage.getItem(key);
            if (obtained === 'true') {
                obtainedCount++;
            }
        }

        // Actualizamos el progreso basado en el número de trofeos obtenidos
        setProgress(obtainedCount / trofeoKeys.length); // Calcula el progreso como una fracción
    };

    // Cada vez que la pantalla de CaminoLevelsScreen gana foco, recargar el progreso de trofeos
    useFocusEffect(
        React.useCallback(() => {
            loadTrophyProgress();
        }, [])
    );

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

                    <CardDefault title="Tan hermosa">
                        <Text style={styles.cardContent}>
                            Todo lo que nos rodea es naturaleza. Debemos respetarla y cuidarla.
                            Una forma de hacerlo es conociendo las palabras indicadas para hablar sobre ella.{'\n\n'}
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
                            Acá, te mando más palabras para que puedas hablar de la naturaleza en el hermoso lenguaje del Kichwa.
                        </Text>
                    </CardDefault>

                    <CardDefault styleContainer={{ flex: 1 }} styleCard={{ flex: 1, height: 1286 }} >
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
                            Algo que forma parte de la naturaleza es el clima.{'\n\n'}
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
                                    arrowDirection="leftUp"
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
                                        <ImageContainer path={humuTalking} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en cada tarjeta de la naturaleza para ver su traducción.'
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
                <ButtonLevelsInicio label="Inicio"
                        navigationTarget="CaminoLevelsBasic"
                    />
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel();
                            navigation.navigate('Foods');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Nature;