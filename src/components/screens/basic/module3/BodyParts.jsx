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

import ChatModal from '../../../ui/modals/ChatModal';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const { width } = Dimensions.get('window');

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');
const profilePic = require('../../../../../assets/images/prototype/santigod.jpeg');

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
            avatar: profilePic,
        },
    },
    {
        _id: 2,
        text: 'Shimiwan rimanchik\n\nCon la boca hablamos',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: humuTalking,
        },
    },
    {
        _id: 3,
        text: 'Sinkawan mutkinchik\n\nCon la nariz olemos',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: profilePic,
        },
    },
    {
        _id: 4,
        text: 'Rinrikunawan uyanchik\n\nCon las orejas oímos',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: humuTalking,
        },
    },
    {
        _id: 5,
        text: 'Ñawikunawan rikunchik\n\nCon los ojos vemos',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: profilePic,
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
        title: 'Curiosidades - Ushuta',
        text: 'La cabuya es una planta clave en la cultura indígena. Su resistente fibra se utiliza en muchas cosas, ¡incluso para hacer alpargatas!.',
        imagePath: humuTalking,
    },
    {
        key: '2',
        title: 'Curiosidades - Ropa',
        text: 'Los traje típicos indígenas son artesanías con gran detalle y calidad. A veces pueden tener precios altos pero vale la pena.',
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

const bodyRoute = () => (
    <View>
        <Text style={styles.title}>Todo el cuerpo</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Español</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
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
                <Text style={styles.tableHeaderCell}>Español</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
            </View>
            {renderData(face_parts_data)}
        </View>
    </View>
);

const BodyParts = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [showChat, setShowChat] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

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

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_House_completed', 'true');
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
                    <CardDefault title="Mi cuerpo es precioso" >
                        <Text style={styles.cardContent}>
                            Es bueno cuidar de tú cuerpo, solo tienes uno y debes mantenerlo sano y fuerte.
                            Cuídalo, respétalo y ámalo. Una de las formas de hacer esto es, conocer las
                            partes de tu cuerpo y cuídarlas.{`\n\n`}
                            Te invito a conocer las partes de tu cuerpo en Kichwa.
                        </Text>
                    </CardDefault>
                    <CardDefault styleContainer={{ flex: 1 }} styleCard={{ flex: 1, height: 620 }} >
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

                    <CardDefault title="¿Y la ropa?" content="También podríamos de una vez hablar acerca de cómo hablar de la ropa en Kichwa. Es algo muy interesante, ¡comencemos!" />

                    <CardDefault title="Ropa">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {clothes_data.map((item, index) => (
                                <View key={index} style={styles.tableRow}>
                                    <View style={styles.imageContainer}>
                                        <ImageContainer path={item.imageCard} style={styles.animalImage} />
                                    </View>
                                    <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
                                    <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
                                </View>
                            ))}
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
                                        text='Presiona en cada pestaña para ver la info de las diferentes tablas.'
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
                    <ButtonLevelsInicio label="Inicio"
                        navigationTarget="CaminoLevelsBasic"
                    />
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel();
                            navigation.navigate('House');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default BodyParts;
