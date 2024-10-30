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
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const { width } = Dimensions.get('window');

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');

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
        title: 'Curiosidades - El Mote',
        text: 'El mote es un alimento esencial en la dieta indígena y es clave en la preparación de comidas tradicionales como el "mediano".',
        imagePath: humuTalking,
    },
    {
        key: '2',
        title: 'Curiosidades - Mashua',
        text: 'La mashua es una planta andina, consumida como verdura y usada medicinalmente.',
        imagePath: humuTalking,
    },
    {
        key: '3',
        title: 'Curiosidades - El Maíz',
        text: 'El maíz es un alimento básico en la sierra ecuatoriana, un regalo de la naturaleza, y es venerado en diferentes celebraciones.',
        imagePath: humuTalking,
    },
    {
        key: '4',
        title: 'Curiosidades - La Chicha',
        text: 'La chicha es una bebida tradicional indígena hecha con maíz y fermentada, utilizada en celebraciones rituales y fiestas importantes.',
        imagePath: humuTalking,
    }
];

const renderDataImages = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={styles.imageContainer}>
                <ImageContainer path={item.imageCard} style={styles.animalImage} />
            </View>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
        </View>
    ));
};

const food1Route = () => (
    <View>
        <Text style={styles.title}>Comida deliciosa</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Imagen</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
            </View>
            {renderDataImages(foods1_data)}
        </View>
    </View>
);

const food2Route = () => (
    <View>
        <Text style={styles.title}>Ven, ¡vamos a comer!</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Imagen</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
            </View>
            {renderDataImages(foods2_data)}
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

const Foods = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

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

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_Orientation_completed', 'true');
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

                    <CardDefault title="Una deliciosa aventura">
                        <Text style={styles.cardContent}>
                            ¿Cuál es tú comida faovrita? La mía es la mapahuira, una manteca de chancho con mote. ¡Es delicioso!{'\n\n'}
                            Quiero que aprendas acerca de cómo se dice algunos alimentos en Kichwa.
                        </Text>
                    </CardDefault>
                    <CardDefault styleContainer={{ flex: 1 }} styleCard={{ flex: 1, height: 1190 }} >
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
                            Un tipo de comida que me encanta son las frutas por su increíble 
                            ¡dulzura! Espero que a tí también te gusten mucho.{'\n\n'}
                            Aquí te dejo algunas frutas y su traducción en Kichwa.
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
                                        text='Presiona en cada tarjeta de una comida para ver su traducción y en cada pestaña para ver las tablas.'
                                        arrowDirection="leftUp"
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
                            navigation.navigate('Orientation');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Foods;