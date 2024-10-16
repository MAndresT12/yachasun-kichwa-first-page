// src/components/LosAdjetivosScreen1.jsx

import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const adjectiveData = [
    { kichwa: "hatun", spanish: "grande, alto", image: "https://img.freepik.com/vector-premium/jirafa-dibujos-animados-midiendo-su-altura-escala-sobre-fondo-beige_98402-204684.jpg?semt=ais_hybrid" },
    { kichwa: "uchilla", spanish: "pequeño, bajo", image: "https://img.freepik.com/vector-premium/ardilla-dibujos-animados-ojos-grandes_61878-1200.jpg" },
    { kichwa: "sumak", spanish: "hermoso, maravilloso, estupendo", image: "https://img.freepik.com/vector-gratis/esta-bien-ilustracion-emoji_23-2151336094.jpg?t=st=1728411728~exp=1728415328~hmac=ca60da359c8f348f5bcc8708f2eb31a76aa557066070ce961bc1d6a6383c99dd&w=740" },
    { kichwa: "mishki", spanish: "dulce", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaISCp18ZAGtJIuRRT3j-y0APWzy-C--4S9Q&s" },
    { kichwa: "chiri", spanish: "frío", image: "https://www.fundacioncnse.org/educa/bancolse/naturaleza/tiempo-atmosferico/descargas/frio-dibujo.jpg" },
    { kichwa: "kunuk", spanish: "caliente", image: "https://www.fundacioncnse.org/educa/bancolse/adjetivos/descargas/caliente-dibujo.jpg" },
    { kichwa: "llashak", spanish: "lento, pesado", image: "https://img.freepik.com/vector-gratis/ilustracion-tortuga-vieja-dibujos-animados-dibujados-mano_23-2150383148.jpg?t=st=1728411657~exp=1728415257~hmac=789827605375257effdeb6c541ff502238205db9ed060e9724ab71cf0fd52fa8&w=740" },
    { kichwa: "ukta", spanish: "rápido", image: "https://img.freepik.com/vector-gratis/coleccion-elementos-cuadros-animacion-dibujados-mano_23-2149754767.jpg?t=st=1728411702~exp=1728415302~hmac=2dc5145561e888c11150b4a3808e0ffac23dc6c365de9083b4948a73d2773a3a&w=900" },
    { kichwa: "kushi", spanish: "feliz", image: "https://img.freepik.com/vector-gratis/ilustracion-dia-mundial-sonrisa-plana_23-2149121467.jpg?t=st=1728411751~exp=1728415351~hmac=5d291ccb943acee415fab86dac0bc27ab098963002e5f0367f8e97d547db0ce9&w=740" },
    { kichwa: "llaki", spanish: "triste", image: "https://img.freepik.com/vector-gratis/icono-vectorial-dibujos-animados-nino-lindo-llorando-ilustracion-personas-icono-naturaleza-vector-plano-aislado_138676-13545.jpg?t=st=1728411765~exp=1728415365~hmac=7950346c8447fd37fc7bdc99221b91d5c0391d9af548bc7d7f4123ffdee18858&w=740" },
    { kichwa: "piña", spanish: "enojado", image: "https://img.freepik.com/vector-gratis/ilustracion-emoji-odio-diseno-plano_23-2151007709.jpg?t=st=1728411784~exp=1728415384~hmac=286746f90a544d5a1c0dbc67ff9b25152f719114699a153ff0d32c44b905a2b9&w=740" },
    { kichwa: "wira", spanish: "gordo", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-persona-gorda_23-2150464936.jpg?t=st=1728411801~exp=1728415401~hmac=a0141a54ced3123f40642782c05b9eac22779bcf6f73102b2e324680d2d2ed2d&w=740" },
    { kichwa: "tsala", spanish: "flaco, delgado", image: "https://fundacioncnse.org/educa/bancolse/adjetivos/descargas/delgado-dibujo.jpg" },
    { kichwa: "sasa", spanish: "difícil", image: "https://previews.123rf.com/images/izakowski/izakowski1006/izakowski100600070/7165754-chica-y-dif%C3%ADcil-prueba.jpg" },
    { kichwa: "pankalla", spanish: "fácil", image: "https://img.freepik.com/vector-gratis/trabajador-feliz_23-2147518729.jpg?t=st=1728411913~exp=1728415513~hmac=90de24932368e0ab44ebc79b83a826627a9f7658c15cdc0d71817fa25362fe5f&w=740" },
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

const LosAdjetivosScreen1 = () => {
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
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_LaCiudad_completed', 'true');

            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
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
                    <CardDefault title="Adjetivos en Kichwa">
                        <Text style={styles.cardContent}>
                            Hoy aprenderemos algunos adjetivos en Kichwa.{"\n\n"}
                            ¡Prepárate para explorar el mundo de los adjetivos en Kichwa!
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {adjectiveData.map((item, index) => (
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
                                        text="Presiona en las tarjetas de adjetivos para ver su traducción y nombre en Kichwa."
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
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel(); // Completar el nivel actual
                            navigation.navigate('LaCiudad');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default LosAdjetivosScreen1;
