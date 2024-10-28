import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
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

const bedroomVocabulary = [
    { kichwa: "puñuna uku", spanish: "dormitorio", image: "https://img.freepik.com/vector-gratis/plantilla-fondo-interior-dormitorio-dibujos-animados-acogedora-habitacion-moderna-luz-manana_33099-171.jpg?semt=ais_hybrid" },
    { kichwa: "kawitu", spanish: "cama", image: "https://img.freepik.com/vector-gratis/goldilocks-tres-osos-cama_1308-168802.jpg?semt=ais_hybrid" },
    { kichwa: "sawna", spanish: "almohada", image: "https://img.freepik.com/vector-gratis/icono-vectorial-dibujos-animados-ilustracion-icono-objeto-naturaleza-vector-plano-aislado_138676-11986.jpg?semt=ais_hybrid" },
    { kichwa: "pacha", spanish: "sábana", image: "https://img.freepik.com/vector-gratis/plantilla-etiqueta-ropa-doblada-aislada_1308-69238.jpg?semt=ais_hybrid" },
    { kichwa: "katana", spanish: "cobija", image: "https://img.freepik.com/vector-gratis/cama-manta-amarilla-almohada_1308-16767.jpg?semt=ais_hybrid" },
    { kichwa: "churana wakaychina", spanish: "armario", image: "https://img.freepik.com/vector-gratis/ropa-armario_1308-53713.jpg?semt=ais_hybrid" },
    { kichwa: "killka pataku", spanish: "escritorio", image: "https://img.freepik.com/vector-gratis/ilustracion-interior-gabinete_1284-4239.jpg?semt=ais_hybrid" },
    { kichwa: "mantana", spanish: "alfombra", image: "https://img.freepik.com/psd-gratis/renderizacion-3d-icono-muebles_23-2151841310.jpg?semt=ais_hybrid" },
    { kichwa: "puñuna", spanish: "dormir", image: "https://img.freepik.com/vector-gratis/dormido_1308-84115.jpg?semt=ais_hybrid" },
    { kichwa: "muskuna", spanish: "soñar", image: "https://img.freepik.com/vector-gratis/nina-durmiendo-contar-ovejas-su-sueno_1308-34986.jpg?semt=ais_hybrid" },
];

const verbs = [
    { kichwa: "puñuna", spanish: "dormir" },
    { kichwa: "muskuna", spanish: "soñar" },
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

const VocabularioElDormitorioScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const navigation = useNavigation();
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
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_IntroduccionJuegosScreen4_completed', 'true');
            await AsyncStorage.setItem('level_Game4_completed', 'true');

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
                    <CardDefault title="Vocabulario del Dormitorio">
                        <Text style={styles.cardContent}>
                            Hoy aprenderemos algunas palabras en Kichwa relacionadas con el dormitorio.{"\n\n"}
                            ¡Prepárate para explorar el vocabulario del dormitorio en Kichwa!
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {bedroomVocabulary.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>
                    <CardDefault title="Verbos">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Español</Text>

                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {verbs.map((item, index) => (
                                <View key={index} style={styles.tableRow}>
                                    <Text style={[styles.spanishText, localStyles.textCenter]}>{item.spanish}</Text>

                                    <Text style={[styles.kichwaText, localStyles.textCenter]}>{item.kichwa}</Text>
                                </View>
                            ))}
                        </View>
                    </CardDefault>
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
                                        <ImageContainer path={require('../../../../assets/images/humu/humu-talking.jpg')} style={styles.imageModalHelp} />


                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en cada tarjeta del dormitorio para ver su traducción y nombre en Kichwa.'
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
                            navigation.navigate('IntroduccionJuegosScreen4');
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

export default VocabularioElDormitorioScreen;
