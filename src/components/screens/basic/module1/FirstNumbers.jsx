import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../../../../../styles/globalStyles';

import { FloatingHumu } from '../../../animations/FloatingHumu';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';

import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');

const images = {
    number0: require('../../../../../assets/images/basic/module1/numbers/number0.jpg'),
    number1: require('../../../../../assets/images/basic/module1/numbers/number1.jpg'),
    number2: require('../../../../../assets/images/basic/module1/numbers/number2.jpg'),
    number3: require('../../../../../assets/images/basic/module1/numbers/number3.jpg'),
    number4: require('../../../../../assets/images/basic/module1/numbers/number4.jpg'),
    number5: require('../../../../../assets/images/basic/module1/numbers/number5.jpg'),
    number6: require('../../../../../assets/images/basic/module1/numbers/number6.jpg'),
    number7: require('../../../../../assets/images/basic/module1/numbers/number7.jpg'),
    number8: require('../../../../../assets/images/basic/module1/numbers/number8.jpg'),
    number9: require('../../../../../assets/images/basic/module1/numbers/number9.jpg'),
    number10: require('../../../../../assets/images/basic/module1/numbers/number10.jpg'),
    number11: require('../../../../../assets/images/basic/module1/numbers/number11.jpg'),
    number12: require('../../../../../assets/images/basic/module1/numbers/number12.jpg'),
    number13: require('../../../../../assets/images/basic/module1/numbers/number13.jpg'),
    number14: require('../../../../../assets/images/basic/module1/numbers/number14.jpg'),
    number15: require('../../../../../assets/images/basic/module1/numbers/number15.jpg'),
    number16: require('../../../../../assets/images/basic/module1/numbers/number16.jpg'),
    number17: require('../../../../../assets/images/basic/module1/numbers/number17.jpg'),
    number18: require('../../../../../assets/images/basic/module1/numbers/number18.jpg'),
    number19: require('../../../../../assets/images/basic/module1/numbers/number19.jpg'),
    number20: require('../../../../../assets/images/basic/module1/numbers/number20.jpg'),
    number30: require('../../../../../assets/images/basic/module1/numbers/number30.jpg'),
    number40: require('../../../../../assets/images/basic/module1/numbers/number40.jpg'),
    number50: require('../../../../../assets/images/basic/module1/numbers/number50.jpg'),
    number60: require('../../../../../assets/images/basic/module1/numbers/number60.jpg'),
    number70: require('../../../../../assets/images/basic/module1/numbers/number70.jpg'),
    number80: require('../../../../../assets/images/basic/module1/numbers/number80.jpg'),
    number90: require('../../../../../assets/images/basic/module1/numbers/number90.jpg'),
    number100: require('../../../../../assets/images/basic/module1/numbers/number100.jpg'),
    number101: require('../../../../../assets/images/basic/module1/numbers/number101.jpg'),
    number102: require('../../../../../assets/images/basic/module1/numbers/number102.jpg'),
    number103: require('../../../../../assets/images/basic/module1/numbers/number103.jpg'),
    number110: require('../../../../../assets/images/basic/module1/numbers/number110.jpg'),
    number120: require('../../../../../assets/images/basic/module1/numbers/number120.jpg'),
    number130: require('../../../../../assets/images/basic/module1/numbers/number130.jpg'),
    number140: require('../../../../../assets/images/basic/module1/numbers/number140.jpg'),
    number150: require('../../../../../assets/images/basic/module1/numbers/number150.jpg'),
    number160: require('../../../../../assets/images/basic/module1/numbers/number160.jpg'),
    number170: require('../../../../../assets/images/basic/module1/numbers/number170.jpg'),
    number180: require('../../../../../assets/images/basic/module1/numbers/number180.jpg'),
    number190: require('../../../../../assets/images/basic/module1/numbers/number190.jpg'),
    number200: require('../../../../../assets/images/basic/module1/numbers/number200.jpg'),
    number300: require('../../../../../assets/images/basic/module1/numbers/number300.jpg'),
    number400: require('../../../../../assets/images/basic/module1/numbers/number400.jpg'),
    number500: require('../../../../../assets/images/basic/module1/numbers/number500.jpg'),
};

const first_number_data = [
    { numberImage: images.number0, kichwa: "Illak", spanish: "Cero" },
    { numberImage: images.number1, kichwa: "Shuk", spanish: "Uno" },
    { numberImage: images.number2, kichwa: "Ishkay", spanish: "Dos" },
    { numberImage: images.number3, kichwa: "Kimsa", spanish: "Tres" },
    { numberImage: images.number4, kichwa: "Chusku", spanish: "Cuatro" },
    { numberImage: images.number5, kichwa: "Pichka", spanish: "Cinco" },
    { numberImage: images.number6, kichwa: "Sukta", spanish: "Seis" },
    { numberImage: images.number7, kichwa: "Kanchis", spanish: "Siete" },
    { numberImage: images.number8, kichwa: "Pusak", spanish: "Ocho" },
    { numberImage: images.number9, kichwa: "Iskun", spanish: "Nueve" },
    { numberImage: images.number10, kichwa: "Chunka", spanish: "Diez" },
    { numberImage: images.number11, kichwa: "Chunka shuk", spanish: "Once" },
    { numberImage: images.number12, kichwa: "Chunka ishkay", spanish: "Doce" },
    { numberImage: images.number13, kichwa: "Chunka kimsa", spanish: "Trece" },
    { numberImage: images.number14, kichwa: "Chunka chusku", spanish: "Catorce" },
    { numberImage: images.number15, kichwa: "Chunka pichka", spanish: "Quince" },
    { numberImage: images.number16, kichwa: "Chunka sukta", spanish: "Dieciséis" },
    { numberImage: images.number17, kichwa: "Chunka kanchis", spanish: "Diecisiete" },
    { numberImage: images.number18, kichwa: "Chunka pusak", spanish: "Dieciocho" },
    { numberImage: images.number19, kichwa: "Chunka iskun", spanish: "Diecinueve" },
    { numberImage: images.number20, kichwa: "Ishkay chunka", spanish: "Veinte" },
    { numberImage: images.number30, kichwa: "Kimsa chunka", spanish: "Treinta" },
    { numberImage: images.number40, kichwa: "Chusku chunka", spanish: "Cuarenta" },
    { numberImage: images.number50, kichwa: "Pichka chunka", spanish: "Cincuenta" },
    { numberImage: images.number60, kichwa: "Sukta chunka", spanish: "Sesenta" },
    { numberImage: images.number70, kichwa: "Kanchis chunka", spanish: "Setenta" },
    { numberImage: images.number80, kichwa: "Pusak chunka", spanish: "Ochenta" },
    { numberImage: images.number90, kichwa: "Iskun chunka", spanish: "Noventa" },
    { numberImage: images.number100, kichwa: "Patsak", spanish: "Cien" },
    { numberImage: images.number101, kichwa: "Patsak shuk", spanish: "Ciento uno" },
    { numberImage: images.number102, kichwa: "Patsak ishkay", spanish: "Ciento dos" },
    { numberImage: images.number103, kichwa: "Patsak kimsa", spanish: "Ciento tres" },
    { numberImage: images.number110, kichwa: "Patsak chunka", spanish: "Ciento diez" },
    { numberImage: images.number120, kichwa: "Patsak ishkay chunka", spanish: "Ciento veinte" },
    { numberImage: images.number130, kichwa: "Patsak kimsa chunka", spanish: "Ciento treinta" },
    { numberImage: images.number140, kichwa: "Patsak chusku chunka", spanish: "Ciento cuarenta" },
    { numberImage: images.number150, kichwa: "Patsak pichka chunka", spanish: "Ciento cincuenta" },
    { numberImage: images.number160, kichwa: "Patsak sukta chunka", spanish: "Ciento sesenta" },
    { numberImage: images.number170, kichwa: "Patsak kanchis chunka", spanish: "Ciento setenta" },
    { numberImage: images.number180, kichwa: "Patsak pusak chunka", spanish: "Ciento ochenta" },
    { numberImage: images.number190, kichwa: "Patsak iskun chunka", spanish: "Ciento noventa" },
    { numberImage: images.number200, kichwa: "Ishkay patsak", spanish: "Doscientos" },
    { numberImage: images.number300, kichwa: "Kimsa patsak", spanish: "Trescientos" },
    { numberImage: images.number400, kichwa: "Chusku patsak", spanish: "Cuatrocientos" },
    { numberImage: images.number500, kichwa: "Pichka patsak", spanish: "Quinientos" }
];

const curiosity_data = [
    {
        key: '1',
        title: 'Reglas - ¿Cómo combinar números en Kichwa?',
        text: 'Se pueden combinar las unidaes, decenas, centenas, etc. para formar números más complejos.',
        imagePath: humuTalking,
    },
    {
        key: '2',
        title: 'Reglas - Te muestro un ejemplo',
        text: 'Si queremos decir 231, se combinan los números para formar "Ishkay patsak kimsa chunka shuk".',
        imagePath: humuTalking,
    },
    {
        key: '3',
        title: 'Reglas - Aquí te mando otro',
        text: 'Ahora si queremos decir 117 en Kichwa, se dice "Patsak chunka kanchis".',
        imagePath: humuTalking,
    },
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
                    <ImageContainer path={item.numberImage} style={styles.imageCards} />
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

const FirstNumbers = () => {
    
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
            await AsyncStorage.setItem('level_ToCount_completed', 'true');
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
                    <CardDefault title="Una aventura numérica">
                        <Text style={styles.cardContent}>
                            Aquí aprenderemos los primeros números de Español a Kichwa.{"\n\n"}
                            ¡Prepárate para tener un tour matemático!
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {first_number_data.map((item, index) => (
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
                                <FloatingHumu >
                                    <ImageContainer path={item.imagePath} style={styles.imageModal} />
                                </FloatingHumu>
                                <ComicBubble
                                    text={item.text}
                                    arrowDirection="leftUp"
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
                                        text='Presiona la tarjeta de un número (pintados en rojo) para ver su pronunciación en Kichwa.'
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
                            navigation.navigate('ToCount');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default FirstNumbers;
