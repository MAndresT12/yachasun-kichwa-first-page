import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Modal, Dimensions } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../../../../../styles/globalStyles';

import { FloatingHumu } from '../../../animations/FloatingHumu';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';

import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');

const { width } = Dimensions.get('window');

const images = {
    orientation1: require('../../../../../assets/images/basic/module4/orientation/orientation1.png'),
    up: require('../../../../../assets/images/basic/module4/orientation/up.jpg'),
    right: require('../../../../../assets/images/basic/module4/orientation/right.jpg'),
    down: require('../../../../../assets/images/basic/module4/orientation/down.jpg'),
    left: require('../../../../../assets/images/basic/module4/orientation/left.jpg'),
};

const orientation_data = [
    { imageCard: images.up, kichwa: "Wichay", spanish: "Arriba" },
    { imageCard: images.down, kichwa: "Uray", spanish: "Abajo" },
    { imageCard: images.left, kichwa: "Lluki", spanish: "Izquierda" },
    { imageCard: images.right, kichwa: "Allawka", spanish: "Derecha" },
];

const renderCard = (item) => (
    <View style={styles.carouselCard}>
        <ImageContainer path={item.imageCard} style={styles.carouselImage} />
        <Text style={styles.translationLabel}>Español:</Text>
        <Text style={styles.spanishText}>{item.spanish}</Text>
        <Text style={styles.translationLabel}>Kichwa:</Text>
        <Text style={styles.kichwaText}>{item.kichwa}</Text>
    </View>
);

const Orientation = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

    const navigation = useNavigation();

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_AnimalsBasic_completed', 'true');
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
                    <CardDefault title="¿Hacia dónde vamos?">
                        <Text style={styles.cardContent}>
                            Es bueno conocer cómo orientarze y saber dirigirnos.{'\n\n'}
                            Para esto te voy a explicar las cuatro orientaciones básicas en Kichwa.
                        </Text>
                    </CardDefault>

                    <View>
                        <Carousel
                            width={width * 0.8}
                            height={310}
                            data={orientation_data}
                            renderItem={({ item }) => renderCard(item)}
                            mode="parallax"
                            pagingEnabled={true}
                        />
                    </View>
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
                                        text='Desliza el carrusel para ver las diferentes orientaciones.'
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
                    <ButtonLevelsInicio label="Inicio"
                        navigationTarget="CaminoLevelsBasic"
                    />
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel();
                            navigation.navigate('AnimalsBasic');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Orientation;