// src/components/VocabularioLaCocinaScreen.jsx

import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal, StyleSheet } from 'react-native';
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

const kitchenVocabulary = [
    { kichwa: "wisha", spanish: "cuchara", image: "https://img.freepik.com/vector-gratis/diseno-etiqueta-equipo-cocina-cuchara-madera-aislado_1308-77190.jpg?semt=ais_hybrid" },
    { kichwa: "kisa", spanish: "olla grande de barro", image: "https://img.freepik.com/vector-gratis/dibujado-mano-deliciosa-ilustracion-locro_23-2149206072.jpg?semt=ais_hybrid" },
    { kichwa: "mulu", spanish: "plato", image: "https://img.freepik.com/vector-gratis/plato-vacio-tenedor-cuchara-vector_53876-166365.jpg?semt=ais_hybrid" },
    { kichwa: "mati", spanish: "tazón para tomar chicha", image: "https://img.freepik.com/vector-gratis/delicioso-desayuno-avena-manana_1308-167099.jpg?semt=ais_hybrid" },
    { kichwa: "pintu", spanish: "toalla para cocina", image: "https://img.pikbest.com/png-images/qiantu/plaid-tablecloth-picnic-cloth-cartoon-png_2725893.png!w700wp" },
    { kichwa: "kupa, ñuku", spanish: "basura", image: "https://img.freepik.com/vector-gratis/bolsas-basura-sucias-comida-podrida-piso_1308-35416.jpg?semt=ais_hybrid" },
    { kichwa: "manka", spanish: "olla", image: "https://img.freepik.com/vector-gratis/sopa-olla-esta-hirviendo-estufa-gas_1308-76071.jpg?semt=ais_hybrid" },
    { kichwa: "walla", spanish: "litro, jarra", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-te_23-2150866230.jpg?semt=ais_hybrid" },
    { kichwa: "kuchuna", spanish: "cuchillo", image: "https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-cuchillo-flotante-concepto-icono-objeto-comida-aislado-vector-premium_138676-5784.jpg?semt=ais_hybrid" },
    { kichwa: "charichina", spanish: "tenedor", image: "https://img.freepik.com/foto-gratis/composicion-vajilla-ecologica_23-2148902934.jpg?semt=ais_hybrid" },
    { kichwa: "pilchi", spanish: "vaso", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-limonada_23-2150837522.jpg?semt=ais_hybrid" },
    { kichwa: "yanuna tullpa", spanish: "cocina metal", image: "https://img.freepik.com/vector-gratis/estufa-electrica-horno-aislado-sobre-fondo-blanco_1308-59051.jpg?semt=ais_hybrid" },
    { kichwa: "pataku", spanish: "mesa", image: "https://img.freepik.com/vector-gratis/mesa-madera-taburetes-sobre-fondo-blanco_1308-72340.jpg?semt=ais_hybrid" },
    { kichwa: "tiyarina", spanish: "silla", image: "https://img.freepik.com/psd-gratis/ilustracion-muebles-casa-sillon_23-2150983028.jpg?semt=ais_hybrid" },
    { kichwa: "yanta", spanish: "leña", image: "https://img.freepik.com/vector-gratis/pila-troncos-sobre-fondo-blanco_1308-131049.jpg?semt=ais_hybrid" },
    { kichwa: "nina", spanish: "fuego", image: "https://img.freepik.com/vector-gratis/coleccion-hogueras_23-2147608535.jpg?semt=ais_hybrid" },
    { kichwa: "pakuyla", spanish: "fósforo", image: "https://img.freepik.com/vector-gratis/detener-tema-coincidencias-coronavirus_23-2148505974.jpg?semt=ais_hybrid" },
];

const verbs = [
    { kichwa: "yanuna", spanish: "cocinar" },
    { kichwa: "kusana", spanish: "freír, asar" },
    { kichwa: "kamchana", spanish: "tostar" },
    { kichwa: "timpuna", spanish: "hervir" },
    { kichwa: "tupuna", spanish: "medir" },
    { kichwa: "rupana", spanish: "quemar" },
    { kichwa: "kununa", spanish: "calentar" },
    { kichwa: "mayllana", spanish: "lavar los platos" },
    { kichwa: "mikuna", spanish: "comer" },
    { kichwa: "upiyana", spanish: "beber" },
];

const curiosity_data = [

];
const renderVerbRows = () => {
    return verbs.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.spanishText, localStyles.textCenter]}>{item.spanish}</Text>

            <Text style={[styles.kichwaText, localStyles.textCenter]}>{item.kichwa}</Text>
        </View>
    ));
};

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

const VocabularioLaCocinaScreen = () => {
    const [progress, setProgress] = useState(0);
    const trofeoKeys = [
        'trofeo_modulo1_intermedio',
        'trofeo_modulo2_intermedio',
        'trofeo_modulo3_intermedio',
        'trofeo_modulo4_intermedio',
        'trofeo_modulo5_intermedio',
        'trofeo_modulo6_intermedio',
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
            await AsyncStorage.setItem('level_LosVerbos2_completed', 'true');

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
                    <CardDefault title="Vocabulario de la Cocina">
                        <Text style={styles.cardContent}>
                            Hoy aprenderemos algunas palabras en Kichwa relacionadas con la cocina.{"\n\n"}
                            ¡Prepárate para explorar el vocabulario de la cocina en Kichwa!
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {kitchenVocabulary.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>
                    <CardDefault title="Los Verbos">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Español</Text>

                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {renderVerbRows()}
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
                                    <FloatingHumu>
                                        <ImageContainer path={require('../../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text="Presiona en las tarjetas de la cocina para ver su traducción y nombre en Kichwa."
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
                            navigation.navigate('LosVerbos2');
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

export default VocabularioLaCocinaScreen;
