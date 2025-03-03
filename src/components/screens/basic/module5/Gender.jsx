import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
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
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');

const images = {
    gender1: require('../../../../../assets/images/basic/module5/gender/gender1.png'),
};

const gender_masculine_data = [
    { kichwa: "Kari kuchi", spanish: "Chancho", imageCard: "https://st2.depositphotos.com/1724125/10425/v/600/depositphotos_104258820-stock-illustration-cartoon-pig-coming-out-of.jpg" },
    { kichwa: "Kari atallpa", spanish: "Gallo", imageCard: "https://st5.depositphotos.com/12546280/67665/v/600/depositphotos_676652884-stock-illustration-rooster-head-vector-logo-template.jpg" },
    { kichwa: "Kari allku", spanish: "Perro", imageCard: "https://st2.depositphotos.com/28846920/44203/v/600/depositphotos_442034764-stock-illustration-golden-labrador-retriever-head-vector.jpg" },
    { kichwa: "Kari sisa", spanish: "Flor rústica", imageCard: "https://st3.depositphotos.com/4398873/34470/v/600/depositphotos_344703650-stock-illustration-wilted-rose-flower-faded-plant.jpg" },
    { kichwa: "Kari rumi", spanish: "Piedra rústica", imageCard: "https://st5.depositphotos.com/4097503/61932/v/600/depositphotos_619322180-stock-illustration-stone-solid-natural-building-material.jpg" },
];

const gender_femenine_data = [
    { kichwa: "Warmi kuchi", spanish: "Chancha", imageCard: "https://st4.depositphotos.com/1000489/24772/v/600/depositphotos_247720474-stock-illustration-housewife-pig-female-bakes-pancakes.jpg" },
    { kichwa: "Warmi atallpa", spanish: "Gallina", imageCard: "https://st2.depositphotos.com/3687485/9342/v/600/depositphotos_93423976-stock-illustration-cute-cartoon-chicken-mother-and.jpg" },
    { kichwa: "Warmi allku", spanish: "Perra", imageCard: "https://st3.depositphotos.com/4155807/16049/v/600/depositphotos_160493412-stock-illustration-little-cute-dog-with-long.jpg" },
    { kichwa: "Warmi sisa", spanish: "Flor delicada", imageCard: "https://st5.depositphotos.com/1007566/68826/v/600/depositphotos_688261274-stock-illustration-japan-sakura-flower-illustration-isolated.jpg" },
    { kichwa: "Warmi rumi", spanish: "Piedra fina", imageCard: "https://static6.depositphotos.com/1007682/636/v/600/depositphotos_6366738-stock-illustration-abstract-meditation-background.jpg" },
];


const curiosity_data = [
    {
        key: '1',
        title: 'Curiosidades - El género en el mundo indígena',
        text: 'Dentro de la cultura indígena, todo lo que existe en la tierra y fuera de ella tiene género.',
        imagePath: humuTalking,
    },
];

const BigFlipCard = ({ data1, data2 }) => {
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

    const renderTableMasculine = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <View style={styles.imageContainer}>
                    <ImageContainer uri={item.imageCard} style={styles.animalImage} />
                </View>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
            </View>
        ));
    };

    const renderTableFemenine = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <View style={styles.imageContainer}>
                    <ImageContainer uri={item.imageCard} style={styles.animalImage} />
                </View>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
            </View>
        ));
    };

    return (
        <TouchableWithoutFeedback onPress={handleFlip}>
            <View style={styles.genderBigFlipCardContainer}>
                <Animated.View style={[styles.flipCardInner, styles.flipCardFront, animatedStyleFront]}>
                    <CardDefault title="Masculino" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {renderTableMasculine(data1)}
                        </View>
                    </CardDefault>
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <CardDefault title="Femenino" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {renderTableFemenine(data2)}
                        </View>
                    </CardDefault>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const Gender = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

    const navigation = useNavigation();

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

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_Quantity_completed', 'true');
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

                    <CardDefault title="Artículo y Género">
                        <Text style={styles.cardContent}>
                            En Kichwa no podemos hablar exactamente de los artículos como se lo hace en
                            el Español, ya que en cierta manera no existen.{`\n\n`}
                            En cuanto al género no tenemos terminaciones para identificar si estamos
                            hablando del femenino o masculino, por esta razón utilizamos las palabras
                            warmi o kari para establecer si es femenino o
                            masculino, respectivamente.{`\n\n`}
                            Las palabras warmi y kari las utilizamos antes de cualquier sustantivo 
                            que usemos.{`\n\n`}
                            Presiona en la tabla de abajo para cambiar entre masculino y femenino.
                        </Text>
                    </CardDefault>

                    <BigFlipCard data1={gender_masculine_data} data2={gender_femenine_data} />

                    {curiosity_data.map((item) => (
                        <AccordionDefault
                            key={item.key}
                            title={item.title}
                            isOpen={activeAccordion === item.key}
                            onPress={() => toggleAccordion(item.key)}
                        >
                            <View style={styles.curiositiesContent}>
                                <FloatingHumu >
                                    <ImageContainer path={item.imagePath} style={styles.imageModal} />
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
                                        <ImageContainer path={humuTalking} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en la tarjeta grande para darle la vuelta.'
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
                            navigation.navigate('Quantity');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Gender;