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
    { imageCard: "https://st5.depositphotos.com/3369547/68921/v/600/depositphotos_689213938-stock-illustration-meat-product-diet-illustration-isolated.jpg", kichwa: "Aycha", spanish: "Carne" },
    { imageCard: "https://st3.depositphotos.com/11802848/16847/v/600/depositphotos_168476956-stock-illustration-salt-shaker-vector.jpg", kichwa: "Kachi", spanish: "Sal" },
    { imageCard: "https://st5.depositphotos.com/82542826/73057/v/600/depositphotos_730572268-stock-illustration-global-rice-crisis-high-demand.jpg", kichwa: "Haku", spanish: "Harina" },
    { imageCard: "https://static9.depositphotos.com/1669000/1199/v/600/depositphotos_11998763-stock-illustration-funny-mexican-cartoon-bean.jpg", kichwa: "Purutu", spanish: "Fréjol" },
    { imageCard: "https://st5.depositphotos.com/76512116/68766/v/600/depositphotos_687661716-stock-illustration-vector-illustration-piece-cheese-cartoon.jpg", kichwa: "Makinchu", spanish: "Queso" },
    { imageCard: "https://st.depositphotos.com/1041273/4444/v/600/depositphotos_44446059-stock-illustration-sugar-bag.jpg", kichwa: "Mishki Haku", spanish: "Azúcar" },
    { imageCard: "https://st2.depositphotos.com/3864435/8164/v/600/depositphotos_81646670-stock-illustration-bread-and-ears-of-wheat.jpg", kichwa: "Tanta", spanish: "Pan" },
    { imageCard: "https://st.depositphotos.com/2208320/2143/v/600/depositphotos_21439537-stock-illustration-vegetable-oil-plastic-bottle-isolated.jpg", kichwa: "Yaku Wira", spanish: "Aceite" },
    { imageCard: "https://st2.depositphotos.com/1007168/6106/v/600/depositphotos_61064019-stock-illustration-water-drop-holding-water-glass.jpg", kichwa: "Yaku", spanish: "Agua" },
    { imageCard: "https://st2.depositphotos.com/1742172/10198/v/600/depositphotos_101983250-stock-illustration-cartoon-milk-carton.jpg", kichwa: "Ñuñu", spanish: "Leche" },
    { imageCard: "https://st.depositphotos.com/1732591/1280/v/600/depositphotos_12800779-stock-illustration-fried-chicken.jpg", kichwa: "Chuchi Aycha", spanish: "Pollo" },
];

const foods2_data = [
    { imageCard: "https://st5.depositphotos.com/60679122/64578/v/600/depositphotos_645782138-stock-illustration-blue-aquarium-fish-icon-editable.jpg", kichwa: "Challwa", spanish: "Pescado" },
    { imageCard: "https://st3.depositphotos.com/29384342/50556/v/600/depositphotos_505565436-stock-illustration-cartoon-illustration-cute-smiling-potato.jpg", kichwa: "Papa", spanish: "Papa" },
    { imageCard: "https://st5.depositphotos.com/23146722/66685/v/600/depositphotos_666859454-stock-illustration-nice-flat-vector-illustration-green.jpg", kichwa: "Palta", spanish: "Aguacate" },
    { imageCard: "https://st5.depositphotos.com/3977543/71875/v/600/depositphotos_718758174-stock-illustration-vibrant-vector-illustration-golden-corn.jpg", kichwa: "Sara", spanish: "Maíz" },
    { imageCard: "https://st5.depositphotos.com/76834826/70346/v/600/depositphotos_703462726-stock-illustration-cartoon-vector-illustration-peanut.jpg", kichwa: "Inchik", spanish: "Maní" },
    { imageCard: "https://st5.depositphotos.com/1020070/70731/v/600/depositphotos_707318248-stock-illustration-realistic-sweet-boiled-corn-kernels.jpg", kichwa: "Chukllu", spanish: "Choclo" },
    { imageCard: "https://st3.depositphotos.com/1028367/19576/v/600/depositphotos_195760854-stock-illustration-quinoa-cereal-deep-bowl-monochrome.jpg", kichwa: "Kinuwa", spanish: "Quinua" },
    { imageCard: "https://st4.depositphotos.com/5984660/31099/v/600/depositphotos_310994236-stock-illustration-cassava-manioc-plants-with-leaves.jpg", kichwa: "Lumu", spanish: "Yuca" },
    { imageCard: "https://st2.depositphotos.com/36517744/44443/v/600/depositphotos_444437462-stock-illustration-soybean-cartoon-vector-free-space.jpg", kichwa: "Tawri", spanish: "Chocho" },
    { imageCard: "https://st4.depositphotos.com/24292998/29005/v/600/depositphotos_290059400-stock-illustration-realistic-bamboo-sticks-with-leaves.jpg", kichwa: "Wiru", spanish: "Caña" },
    { imageCard: "https://st2.depositphotos.com/4398873/8681/v/600/depositphotos_86816702-stock-illustration-hot-red-pepper.jpg", kichwa: "Uchu", spanish: "Ají" },
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
                <ImageContainer uri={item.imageCard} style={styles.animalImage} />
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