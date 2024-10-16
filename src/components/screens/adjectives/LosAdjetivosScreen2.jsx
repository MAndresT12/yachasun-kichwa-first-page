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

const adjectives = [
    { kichwa: "ruku", spanish: "viejo (personas)", image: "https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-abuelos_1308-135128.jpg?semt=ais_hybrid" },
    { kichwa: "maltun", spanish: "joven", image: "https://img.freepik.com/vector-gratis/muchacho-lindo-ejemplo-icono-vector-historieta-signo-paz-concepto-icono-moda-personas-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3946.jpg?semt=ais_hybrid" },
    { kichwa: "kushi", spanish: "feliz", image: "https://img.freepik.com/vector-gratis/ilustracion-dia-mundial-sonrisa-plana_23-2149121467.jpg?semt=ais_hybrid" },
    { kichwa: "anak", spanish: "duro", image: "https://img.freepik.com/foto-gratis/personaje-doctor-dibujos-animados-3d_1048-12986.jpg?semt=ais_hybrid" },
    { kichwa: "amukilla", spanish: "suave", image: "https://img.freepik.com/vector-gratis/lindo-pinguino-durmiendo-abrazo-almohada-dibujos-animados_138676-3024.jpg?semt=ais_hybrid" },
    { kichwa: "chawa", spanish: "crudo", image: "https://img.freepik.com/vector-gratis/etiqueta-engomada-carne-cruda-blanco_1308-60724.jpg?semt=ais_hybrid" },
    { kichwa: "mapa", spanish: "sucio", image: "https://img.freepik.com/vector-gratis/bolsas-basura-rata-sucia_1308-70975.jpg?semt=ais_hybrid" },
    { kichwa: "mushuk", spanish: "nuevo", image: "https://previews.123rf.com/images/kencor/kencor1801/kencor180100016/92812767-un-nuevo-y-brillante-coche-de-dibujos-animados-est%C3%A1-listo-para-alejarse.jpg" },
    { kichwa: "mawka", spanish: "viejo (objetos)", image: "https://img.freepik.com/vector-gratis/cartel-dibujos-animados-caballeros-hombres-ropa-estilo-antiguo-e-ilustracion-retro-auto-sepia-vectro_1284-78720.jpg?semt=ais_hybrid" },
];

const descriptions = [
    { kichwa: "Kuchika waminsimi kan", spanish: "El chancho es rosa", image: "https://img.freepik.com/psd-gratis/renderizado-3d-icono-animal-kawaii_23-2151646213.jpg?semt=ais_hybrid" },
    { kichwa: "Apyuka yanami kan", spanish: "El caballo es negro", image: "https://img.freepik.com/vector-gratis/ilustracion-elegante-caballo-negro_1308-174987.jpg?semt=ais_hybrid" },
    { kichwa: "Allkuka pakumi kan", spanish: "El perro es café", image: "https://img.freepik.com/vector-gratis/cute-pug-dog-durmiendo-libro-vector-dibujos-animados-icono-ilustracion-educacion-animales-vector-plano-aislado_138676-12280.jpg?semt=ais_hybrid" },
    { kichwa: "Rasuka yurakmi kan", spanish: "La nieve es blanca", image: "https://img.freepik.com/vector-gratis/concepto-paisaje-invierno-mano-dibujado_23-2148348472.jpg?semt=ais_hybrid" },
    { kichwa: "Puyuka sukumi kan", spanish: "La nube es ploma", image: "https://img.freepik.com/vector-gratis/icono-vectorial-dibujos-animados-ilustracion-naturaleza-icono-vacaciones-aislado-plano_138676-13305.jpg?semt=ais_hybrid" },
    { kichwa: "Kiwaka wayllami kan", spanish: "La hierba es verde", image: "https://img.freepik.com/vector-gratis/hierba-verde-estilo-dibujos-animados_1308-78736.jpg?semt=ais_hybrid" },
    { kichwa: "Hawa pachaka ankasmikan", spanish: "El cielo es azul", image: "https://img.freepik.com/vector-gratis/fondo-cielo-videoconferencia_23-2148657081.jpg?semt=ais_hybrid" },
    { kichwa: "Sisaka maywami kan", spanish: "La flor es morada", image: "https://img.freepik.com/vector-gratis/naturaleza-margarita-morada_24877-81723.jpg?semt=ais_hybrid" },
    { kichwa: "Chilinaka kishpumi kan", spanish: "La naranja es naranja", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-comida_23-2150758808.jpg?semt=ais_hybrid" },
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

const LosAdjetivosScreen2 = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);
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
    const navigation = useNavigation();
    const progress = 0.75;
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_ElDormitorio_completed', 'true');

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
                    <CardDefault title="Adjetivos">
                        <Text style={styles.cardContent}>
                            Hoy aprenderemos algunos adjetivos en Kichwa que nos ayudarán a describir personas y objetos.{"\n\n"}
                            ¡Explora los adjetivos y diviértete aprendiendo!
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {adjectives.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>

                    <CardDefault title="Descripciones">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>

                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {descriptions.map((item, index) => (
                                <View key={index} style={styles.tableRow}>
                                    <View style={localStyles.imageContainer}>
                                        <ImageContainer uri={item.image} style={localStyles.vocabImage} />
                                    </View>
                                    <Text style={[styles.spanishText, localStyles.textCenter]}>{item.spanish}</Text>

                                    <Text style={[styles.kichwaText, localStyles.textCenter]}>{item.kichwa}</Text>
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
                                    <FloatingHumu >
                                        <ImageContainer uri={'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png'} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en cada una las tarjetas para ver su traducción.'
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
                            navigation.navigate('ElDormitorio');
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

export default LosAdjetivosScreen2;
