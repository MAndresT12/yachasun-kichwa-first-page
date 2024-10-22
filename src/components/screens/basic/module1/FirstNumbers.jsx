import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';

const images = {
    number0: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number0.png',
    number1: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number1.png',
    number2: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number2.png',
    number3: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number3.png',
    number4: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number4.png',
    number5: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number5.png',
    number6: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number6.png',
    number7: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number7.png',
    number8: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number8.png',
    number9: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number9.png',
    number10: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number10.png',
    number11: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number11.png',
    number12: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number12.png',
    number13: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number13.png',
    number14: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number14.png',
    number15: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number15.png',
    number16: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number16.png',
    number17: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number17.png',
    number18: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number18.png',
    number19: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number19.png',
    number20: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number20.png',
    number30: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number30.png',
    number40: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number40.png',
    number50: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number50.png',
    number60: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number60.png',
    number70: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number70.png',
    number80: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number80.png',
    number90: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number90.png',
    number100: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number100.png',
    number101: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number101.png',
    number102: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number102.png',
    number103: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number103.png',
    number110: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number110.png',
    number120: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number120.png',
    number130: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number130.png',
    number140: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number140.png',
    number150: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number150.png',
    number160: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number160.png',
    number170: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number170.png',
    number180: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number180.png',
    number190: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number190.png',
    number200: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number200.png',
    number300: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number300.png',
    number400: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number400.png',
    number500: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/Numbers/number500.png'
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
        imagePath: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png',
    },
    {
        key: '2',
        title: 'Reglas - Te muestro un ejemplo',
        text: 'Si queremos decir 231, se combinan los números para formar "Ishkay patsak kimsa chunka shuk".',
        imagePath: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png',
    },
    {
        key: '3',
        title: 'Reglas - Aquí te mando otro',
        text: 'Ahora si queremos decir 117 en Kichwa, se dice "Patsak chunka kanchis".',
        imagePath: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png',
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
                    <ImageContainer uri={item.numberImage} style={styles.imageCards} />
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <Text style={styles.spanishText}>Español:</Text>
                    <Text style={styles.spanishText}>{item.spanish}{'\n'}</Text>
                    <Text style={styles.kichwaText}>Kichwa:</Text>
                    <Text style={styles.kichwaText}>{item.kichwa}</Text>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const FirstNumbers = () => {
    const progress = 1 / 6;

    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);

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
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('ToCount')} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default FirstNumbers;
