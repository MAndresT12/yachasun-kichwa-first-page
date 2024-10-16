import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, ScrollView, StatusBar, TouchableOpacity, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native';
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

const locationVocabulary = [
    { kichwa: "karu", spanish: "lejos, distante, lejano", image: "https://img.freepik.com/vector-gratis/explorador-mochila_23-2148146728.jpg?t=st=1728426379~exp=1728429979~hmac=66649f1a102b8e327920096acbf6805e5ea43a65e787566c80e3fa9edddae185&w=740" },
    { kichwa: "kuchulla", spanish: "cerca", image: "https://img.freepik.com/vector-gratis/dibujos-animados-chico-adolescente_24640-47216.jpg?semt=ais_hybrid" },
    { kichwa: "kaypi", spanish: "aquí", image: "https://img.freepik.com/foto-gratis/flechas-planas-moradas-amarillas-sobre-fondo-blanco_23-2148459934.jpg?semt=ais_hybrid" },
    { kichwa: "chaypi", spanish: "allí", image: "https://img.freepik.com/psd-gratis/representacion-3d-viajes-turisticos_23-2149667949.jpg?semt=ais_hybrid" },
    { kichwa: "chayninpi", spanish: "más allá", image: "https://img.freepik.com/vector-gratis/ilustracion-concepto-lider_114360-26760.jpg?semt=ais_hybrid" },
    { kichwa: "manya", spanish: "lado", image: "https://img.freepik.com/vector-gratis/hombre-casi-pisa-mina-terrestre_1308-127950.jpg?semt=ais_hybrid" },
    { kichwa: "chawpi", spanish: "mitad, medio, centro", image: "https://img.freepik.com/vector-gratis/ilustracion-naranja-media-dibujada-mano_23-2150002669.jpg?semt=ais_hybrid" },
    { kichwa: "chinchaysuyu", spanish: "norte", image: "https://cdn-icons-png.flaticon.com/512/16/16797.png" },
    { kichwa: "kullasuyu", spanish: "sur", image: "https://cdn-icons-png.flaticon.com/512/16/16744.png" },
    { kichwa: "antisuyu", spanish: "este", image: "https://cdn-icons-png.flaticon.com/512/17/17259.png" },
    { kichwa: "kuntisuyu", spanish: "oeste", image: "https://cdn-icons-png.flaticon.com/512/17/17276.png" },
    { kichwa: "kuska", spanish: "lugar", image: "https://img.freepik.com/psd-gratis/representacion-3d-icono-camping_23-2151192585.jpg?semt=ais_hybrid" },
    { kichwa: "suyu", spanish: "región", image: "https://img.freepik.com/foto-gratis/ubicacion-alfiler-dibujos-animados-3d_23-2151642222.jpg?semt=ais_hybrid" },
    { kichwa: "llakta", spanish: "comunidad, pueblo", image: "https://img.freepik.com/vector-gratis/ilustracion-pueblo-viejo-degradado_23-2149453258.jpg?semt=ais_hybrid" },
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

const VocabularioLaUbicacionScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const navigation = useNavigation();
    const progress = 0.75;
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_ElTiempo_completed', 'true');

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
                    <TouchableOpacity onPress={() => setShowHelp(true)}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Vocabulario de la Ubicación">
                        <Text style={styles.cardContent}>
                            Hoy aprenderemos algunas palabras en Kichwa relacionadas con la ubicación.{"\n\n"}
                            ¡Explora el vocabulario de la ubicación y diviértete aprendiendo!
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {locationVocabulary.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>
                </View>

                {showHelp && (
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={showHelp}
                        onRequestClose={() => setShowHelp(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <View style={styles.helpModalContent}>
                                    <FloatingHumu>
                                        <ImageContainer uri={'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png'} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en cada tarjeta de ubicación para ver su traducción y nombre en Kichwa.'
                                        arrowDirection="left"
                                    />
                                </View>
                                <View style={styles.buttonContainerAlphabet}>
                                    <TouchableOpacity onPress={() => setShowHelp(false)}>
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
                            navigation.navigate('ElTiempo');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    vocabImage: {
        width: 50,
        height: 50,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default VocabularioLaUbicacionScreen;
