import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ScrollView, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Modal, StyleSheet } from 'react-native';
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

const verbData = [
    { kichwa: "rina", spanish: "ir", image: "https://img.freepik.com/vector-gratis/personaje-dibujos-animados-simple-chico-activo_1308-101456.jpg?semt=ais_hybrid" },
    { kichwa: "tikrana", spanish: "regresar", image: "https://img.freepik.com/vector-gratis/ninos-cole-felices-saludando_23-2147906118.jpg?semt=ais_hybrid" },
    { kichwa: "chayana", spanish: "llegar", image: "https://img.freepik.com/psd-gratis/personaje-femenino-3d-llegando-linea-meta_23-2148938910.jpg?semt=ais_hybrid" },
    { kichwa: "llukshina", spanish: "salir", image: "https://img.freepik.com/vector-gratis/ilustracion-renuncia-dibujada-mano_23-2150336788.jpg?semt=ais_hybrid" },
    { kichwa: "shamuna", spanish: "venir", image: "https://img.freepik.com/vector-gratis/coleccion-estudiantes-universitarios_23-2148180058.jpg?semt=ais_hybrid" },
    { kichwa: "kallpana", spanish: "correr", image: "https://img.freepik.com/vector-gratis/etiqueta-engomada-personaje-dibujos-animados-nina-corriendo-sobre-fondo-blanco_1308-79976.jpg?semt=ais_hybrid" },
    { kichwa: "rimana", spanish: "hablar", image: "https://img.freepik.com/vector-gratis/gente-hablando-telefono_1308-25829.jpg?semt=ais_hybrid" },
    { kichwa: "tapuna", spanish: "preguntar", image: "https://img.freepik.com/vector-gratis/conjunto-personas-planas-organicas-haciendo-preguntas_23-2148914081.jpg?semt=ais_hybrid" },
    { kichwa: "pukllana", spanish: "jugar", image: "https://img.freepik.com/vector-gratis/set-dibujado-mano-ninos-colores-jugando_23-2147607325.jpg?semt=ais_hybrid" },
    { kichwa: "hamuktana", spanish: "comprender", image: "https://img.freepik.com/vector-gratis/ninos-jugando-ipad-bocadillo_1308-100969.jpg?semt=ais_hybrid" },
    { kichwa: "purina", spanish: "caminar", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-caminantes-dibujados-mano_23-2150818427.jpg?semt=ais_hybrid" },
    { kichwa: "rikuna", spanish: "ver, mirar", image: "https://img.freepik.com/foto-gratis/gente-cine-viendo-pelicula_23-2151005486.jpg?semt=ais_hybrid" },
    { kichwa: "shina", spanish: "hacer", image: "https://img.freepik.com/vector-gratis/concepto-taller-creativo-bricolaje_23-2148552121.jpg?semt=ais_hybrid" },
    { kichwa: "tarpuna", spanish: "sembrar", image: "https://img.freepik.com/vector-gratis/agricultor-plantando-pequena-planta-suelo-aislado_1308-135356.jpg?semt=ais_hybrid" },
    { kichwa: "kawsana", spanish: "vivir", image: "https://img.freepik.com/vector-gratis/dibujos-animados-nina-adolescente_24640-47180.jpg?semt=ais_hybrid" },
    { kichwa: "yachachina", spanish: "enseñar", image: "https://img.freepik.com/foto-gratis/vista-3d-macho-profesor_23-2150709996.jpg?semt=ais_hybrid" },
    { kichwa: "llamkana", spanish: "trabajar", image: "https://img.freepik.com/vector-gratis/hombre-negocios-trabajando-oficina_1012-335.jpg?semt=ais_hybrid" },
    { kichwa: "charina", spanish: "tener", image: "https://img.freepik.com/vector-gratis/ilustracion-regreso-casa-dibujada-mano_23-2149414633.jpg?semt=ais_hybrid" },
    { kichwa: "sakina", spanish: "dejar", image: "https://img.freepik.com/vector-gratis/juego-cornhole-diseno-plano-dibujado-mano_23-2149285963.jpg?semt=ais_hybrid" },
    { kichwa: "hapina", spanish: "coger", image: "https://img.freepik.com/vector-gratis/personaje-dibujos-animados-simple-chico-activo_1308-102577.jpg?semt=ais_hybrid" },
    { kichwa: "yanapana", spanish: "ayudar", image: "https://img.freepik.com/vector-gratis/ilustracion-plana-dia-mundial-humanitario-persona-que-ofrece-apoyo-nino_23-2149459773.jpg?semt=ais_hybrid" },
    { kichwa: "kayana", spanish: "llamar", image: "https://img.freepik.com/vector-gratis/hombre-negocios-gritando-megafono_23-2147511376.jpg?semt=ais_hybrid" },
    { kichwa: "rantina", spanish: "comprar", image: "https://img.freepik.com/vector-gratis/gente-dibujada-mano-plana-comprando-venta-ilustracion_23-2148829598.jpg?semt=ais_hybrid" },
    { kichwa: "mañana", spanish: "pedir", image: "https://img.freepik.com/vector-gratis/adolescente-recibiendo-consejos-cuidado-piel-amigo-solidario_1308-133764.jpg?semt=ais_hybrid" },
    { kichwa: "yanuna", spanish: "cocinar", image: "https://img.freepik.com/vector-gratis/etiqueta-engomada-personaje-dibujos-animados-chica-chef-cocinando_1308-63960.jpg?semt=ais_hybrid" },
    { kichwa: "karana", spanish: "dar", image: "https://img.freepik.com/vector-gratis/feliz-nino-nina-regalo_24908-59476.jpg?semt=ais_hybrid" },
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

const LosVerbosScreen2 = () => {
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
            await AsyncStorage.setItem('level_LosAdjetivos2_completed', 'true');

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
                    {/* Imachikkuna */}
                    <CardDefault title="Verbos">
                        <Text style={styles.cardContent}>
                            Hoy aprenderemos más verbos en Kichwa.{"\n\n"}
                            ¡Prepárate para explorar el mundo de los verbos en Kichwa!
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {verbData.map((item, index) => (
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
                                        text="Presiona en las tarjetas de verbos para ver su traducción y nombre en Kichwa."
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
                            navigation.navigate('LosAdjetivos2');
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
        borderRadius: 25,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default LosVerbosScreen2;
