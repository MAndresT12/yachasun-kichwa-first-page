import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Modal, Dimensions } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carousel from 'react-native-reanimated-carousel';

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
    size1: require('../../../../../assets/images/basic/module5/size/size1.png'),
    size2: require('../../../../../assets/images/basic/module5/size/sizeElephant.png'),
    size3: require('../../../../../assets/images/basic/module5/size/sizeDog.png'),
    size4: require('../../../../../assets/images/basic/module5/size/sizeBunny.png'),
};

const size_data = [
    { kichwa: "Hatun", spanish: "Grande", imageCard: images.size2, },
    { kichwa: "Malta", spanish: "Mediano", imageCard: images.size3, },
    { kichwa: "Uchilla", spanish: "Pequeño", imageCard: images.size4, },
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

const Size = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

    const navigation = useNavigation();

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_ToCount_completed', 'true');
            await AsyncStorage.setItem('level_IntroGamesBasic5_completed', 'true');
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

                    <CardDefault title="Pequeños y grandes">
                        <Text style={styles.cardContent}>
                            Otros adjetivos que puedes aprender son los que sirven para 
                            calificar el tamaño de los objetos.{'\n\n'}
                            En kichwa, los adjetivos de tamaño son: grande (hatun), mediano 
                            (malta) y pequeño (uchilla). Se ponen antes la palabra que
                            vamos a describir.
                        </Text>
                    </CardDefault>

                    <View>
                        <Carousel
                            width={width * 0.8}
                            height={310}
                            data={size_data}
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
                                        text='Desliza el carrusel para ver las palabras de tamaño.'
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
                            navigation.navigate('IntroGamesBasic5');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Size;