import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
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

const images = {
    animal1: require('../../../../../assets/images/basic/module4/animals/animal1.png'),
};


const animal_data = [
    {
        sound: "guau", kichwa: "Allku", spanish: "Perro",
        imageCard: images.animal1,
    },
    {
        sound: "miau", kichwa: "Misi", spanish: "Gato",
        imageCard: images.animal1,
    },
    {
        sound: "clo-clo", kichwa: "Atallpa", spanish: "Gallina",
        imageCard: images.animal1,
    },
    {
        sound: "cui-cui", kichwa: "Kuy", spanish: "Cuy",
        imageCard: images.animal1,
    },
    {
        sound: "oink", kichwa: "Kuchi", spanish: "Chancho",
        imageCard: images.animal1,
    },
    {
        sound: "bee", kichwa: "Llama", spanish: "Oveja",
        imageCard: images.animal1,
    },
    {
        sound: "neigh", kichwa: "Apyu", spanish: "Caballo",
        imageCard: images.animal1,
    },
    {
        sound: "muuu", kichwa: "Wakra", spanish: "Ganado",
        imageCard: images.animal1,
    },
];


const AnimalsBasic = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAnimal, setSelected] = useState(null);
    const [showHelp, setShowHelp] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

    const navigation = useNavigation();

    const handlePress = (data) => {
        setSelected(data);
        setModalVisible(true);
    };

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_IntroGamesBasic4_completed', 'true');
            await AsyncStorage.setItem('level_EvaluationBasicModule4_completed', 'true');
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
                    <CardDefault title="Cuidemos de los más indefensos" >
                        <Text style={styles.cardContent}>
                            Los animales merecen nuestro respeto y cuidado. Debemos conocer y aprender
                            a convivir en armonía con ellos. La granja es un lugar donde se encuentran
                            muchos animales domésticos. En la granja existen muchos animales que
                            nos ayudan mucho.{'\n\n'}
                            Te voy a enseñar los nombres de algunos animales que se encuentran en la
                            aquí.
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {animal_data.map((item) => (
                            <TouchableWithoutFeedback key={item.spanish} onPress={() => handlePress(item)}>
                                <View style={styles.cardInGrid}>
                                    <CardDefault styleCard={styles.cardPopUp} styleTitle={styles.cardTitleAlphabet} >
                                        <ImageContainer path={item.imageCard} style={styles.imageCards} />
                                    </CardDefault>
                                </View>
                            </TouchableWithoutFeedback>
                        ))}
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
                                        text='Presiona en cada tarjeta de animales para ver su pronunciación en Kichwa.'
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

                {selectedAnimal && (
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.titleAlphabet}>{selectedAnimal.spanish}</Text>
                                <Text style={styles.translationLabel}>Kichwa:</Text>
                                <Text style={styles.kichwaText}>{selectedAnimal.kichwa}</Text>
                                <Text style={styles.translationLabel}>Sonido:</Text>
                                <Text style={styles.spanishText}>{selectedAnimal.sound}</Text>
                                <ImageContainer path={selectedAnimal.imageCard} style={styles.imageModal} />
                                <View style={styles.buttonContainerAlphabet}>
                                    <TouchableOpacity onPress={() => setModalVisible(false)}>
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
                            navigation.navigate('IntroGamesBasic4');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default AnimalsBasic;
