// src/components/VocabularioLaCiudadScreen.jsx

import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../ui/imageContainers/ImageContainer';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../animations/FloatingHumu';
import { ComicBubble } from '../../ui/bubbles/ComicBubble';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';
import { AccordionDefault } from '../../ui/buttons/AccordionDefault';

const cityVocabulary = [
    { kichwa: "antawa", spanish: "carro, camioneta", image: "https://img.freepik.com/vector-gratis/coche-sedan-rojo-estilo-dibujos-animados-aislado-sobre-fondo-blanco_1308-64900.jpg?t=st=1728411182~exp=1728414782~hmac=d4c27ae2915397cacd5cb9cfc3f0176513598eadf3d66133eb85500614c8461a&w=1380" },
    { kichwa: "antanka", spanish: "avión", image: "https://img.freepik.com/vector-gratis/feliz-avion-dibujos-animados-listo-despegue_1308-165126.jpg?t=st=1728411214~exp=1728414814~hmac=b9fc8416fe0437121d0731884195cb0cd60bd09babed7830ed08c327496a9794&w=1380" },
    { kichwa: "antara", spanish: "bus", image: "https://img.freepik.com/vector-gratis/autobus-escolar-ninos-dibujos-animados-diseno-plano_23-2147840786.jpg?t=st=1728416441~exp=1728420041~hmac=9a7013c9699916a28c21ee0adff980faf571ef6d0cd297b6d1ae47b2ddb05e22&w=740" },
    { kichwa: "antatinku", spanish: "moto", image: "https://img.freepik.com/vector-gratis/caricatura-corredor-motocross-sobre-fondo-blanco_1308-116511.jpg?semt=ais_hybrid" },
    { kichwa: "wanpuna", spanish: "barco", image: "https://img.freepik.com/vector-gratis/vela-barco-libro-abierto_1308-171919.jpg?semt=ais_hybrid" },
    { kichwa: "chaka", spanish: "puente", image: "https://img.freepik.com/vector-gratis/puente-sobre-pared_1308-30669.jpg?semt=ais_hybrid" },
    { kichwa: "ñan", spanish: "calle", image: "https://img.freepik.com/vector-gratis/edificio-escuela-cerca-ilustracion-carretera_1262-16602.jpg?semt=ais_hybrid" },
    { kichwa: "rantina uku", spanish: "tienda", image: "https://img.freepik.com/foto-gratis/vista-edificio-arquitectura-estilo-dibujos-animados_23-2151154897.jpg?semt=ais_hybrid" },
    { kichwa: "hatun wasi", spanish: "edificio", image: "https://img.freepik.com/foto-gratis/vista-edificio-arquitectura-estilo-dibujos-animados_23-2151154978.jpg?semt=ais_hybrid" },
    { kichwa: "antakuru", spanish: "tren", image: "https://img.freepik.com/vector-gratis/tren-dibujos-animados-alegre-sobre-vias_1308-161855.jpg?semt=ais_hybrid" },
    { kichwa: "rumpa antawa", spanish: "bicicleta", image: "https://img.freepik.com/vector-gratis/nino-montando-personaje-dibujos-animados-bicicleta-aislado-blanco_1308-55468.jpg?semt=ais_hybrid" },
    { kichwa: "uyachik anta", spanish: "radio", image: "https://img.freepik.com/foto-gratis/notas-musicales-estilo-dibujos-animados_23-2151056815.jpg?semt=ais_hybrid" },
    { kichwa: "rikuchik anta", spanish: "televisión", image: "https://img.freepik.com/vector-gratis/alegre-personaje-television-dibujos-animados_1308-164448.jpg?semt=ais_hybrid" },
    { kichwa: "karuyari anta", spanish: "teléfono", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-telefono-dibujado-mano_23-2150616513.jpg?semt=ais_hybrid" },
];

const curiosity_data = [

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
                    <ImageContainer uri={item.image} style={styles.imageCards} />
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

const VocabularioLaCiudadScreen = () => {
    const progress = 0.75;
    const [showHelp, setShowHelp] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (key) => {
        if (activeAccordion === key) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(key);
        }
    };

    const navigation = useNavigation();

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
        >
            <StatusBar barStyle="default" backgroundColor="#003366" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="intermedio" />
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Vocabulario de la Ciudad">
                        <Text style={styles.cardContent}>
                            Hoy aprenderemos algunas palabras en Kichwa relacionadas con la ciudad.{"\n\n"}
                            ¡Prepárate para explorar el vocabulario de la ciudad en Kichwa!
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {cityVocabulary.map((item, index) => (
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
                                <FloatingHumu>
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
                                    <FloatingHumu>
                                        <ImageContainer path={require('../../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text="Presiona en las tarjetas de la ciudad para ver su traducción y nombre en Kichwa."
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
                    <ButtonLevelsInicio label="Inicio" />
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('IntroduccionJuegosScreen3')} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default VocabularioLaCiudadScreen;
