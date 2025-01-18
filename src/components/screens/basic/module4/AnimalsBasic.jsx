import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal, StyleSheet } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';

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
    cat: require('../../../../../assets/images/basic/module4/animals/cat.jpg'),
    chicken: require('../../../../../assets/images/basic/module4/animals/chicken.jpg'),
    cow: require('../../../../../assets/images/basic/module4/animals/cow.jpg'),
    dog: require('../../../../../assets/images/basic/module4/animals/dog.jpg'),
    guineapig: require('../../../../../assets/images/basic/module4/animals/guineapig.jpg'),
    horse: require('../../../../../assets/images/basic/module4/animals/horse.jpg'),
    pig: require('../../../../../assets/images/basic/module4/animals/pig.jpg'),
    sheep: require('../../../../../assets/images/basic/module4/animals/sheep.jpg'),
};


const animal_data = [
    {
        sound: require('../../../../../assets/sounds/animals/dog.mp3'),
        kichwa: "Allku",
        spanish: "Perro",
        imageCard: images.dog,
    },
    {
        sound: require('../../../../../assets/sounds/animals/cat.mp3'),
        kichwa: "Misi",
        spanish: "Gato",
        imageCard: images.cat,
    },
    {
        sound: require('../../../../../assets/sounds/animals/chicken.mp3'),
        kichwa: "Atallpa",
        spanish: "Gallina",
        imageCard: images.chicken,
    },
    {
        sound: require('../../../../../assets/sounds/animals/guineapig.mp3'),
        kichwa: "Kuy",
        spanish: "Cuy",
        imageCard: images.guineapig,
    },
    {
        sound: require('../../../../../assets/sounds/animals/pig.mp3'),
        kichwa: "Kuchi",
        spanish: "Chancho",
        imageCard: images.pig,
    },
    {
        sound: require('../../../../../assets/sounds/animals/sheep.mp3'),
        kichwa: "Llama",
        spanish: "Oveja",
        imageCard: images.sheep,
    },
    {
        sound: require('../../../../../assets/sounds/animals/horse.mp3'),
        kichwa: "Apyu",
        spanish: "Caballo",
        imageCard: images.horse,
    },
    {
        sound: require('../../../../../assets/sounds/animals/cow.mp3'),
        kichwa: "Wakra",
        spanish: "Ganado",
        imageCard: images.cow,
    },
];


const AnimalsBasic = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAnimal, setSelected] = useState(null);
    const [showHelp, setShowHelp] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

    const navigation = useNavigation();
    const [sound, setSound] = useState(null);

    const handlePress = (data) => {
        setSelected(data);
        setModalVisible(true);
    };

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    const playSound = async (audioFile) => {
        try {
            if (sound) {
                // Detener y descargar el sonido actual si ya existe
                await sound.stopAsync();
                await sound.unloadAsync();
                setSound(null);
            }

            // Crear y cargar un nuevo sonido
            const { sound: newSound } = await Audio.Sound.createAsync(audioFile);
            setSound(newSound);
            await newSound.playAsync();
        } catch (error) {
            console.error("Error al reproducir el sonido:", error);
        }
    };

    const stopSound = async () => {
        try {
            if (sound) {
                const status = await sound.getStatusAsync();
                if (status.isLoaded) {
                    await sound.stopAsync(); // Stop the sound
                    await sound.unloadAsync(); // Unload the sound
                }
                setSound(null); // Reset the state to ensure no further operations
            }
        } catch (error) {
            // Ignore this specific error if it's about an unloaded sound
            if (error.message.includes("Cannot complete operation because sound is not loaded")) {
                console.warn("Sound was already unloaded, ignoring further stop attempts.");
            } else {
                console.error("Error al detener el sonido:", error);
            }
        }
    };

    // Detener el sonido al cerrar el modal
    const closeModal = async () => {
        try {
            await stopSound(); // Detener cualquier sonido en reproducción
        } catch (error) {
            console.error("Error al cerrar el modal:", error);
        }
        setModalVisible(false); // Cerrar el modal
    };

    React.useEffect(() => {
        return sound ? () => stopSound() : undefined;
    }, [sound]);

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
                                        <ImageContainer path={images.animal1} style={styles.imageCards} />
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
                                <TouchableOpacity onPress={() => playSound(selectedAnimal.sound)} style={localStyles.containerSound}>
                                    <FontAwesome name="play-circle" size={50} color="black" />
                                </TouchableOpacity>
                                <ImageContainer path={selectedAnimal.imageCard} style={styles.imageModal} />
                                <View style={styles.buttonContainerAlphabet}>
                                    <TouchableOpacity onPress={() => closeModal()}>
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

const localStyles = StyleSheet.create({
    containerSound: {
        marginTop: 10,
        marginBottom: 10,
    },
});

export default AnimalsBasic;
