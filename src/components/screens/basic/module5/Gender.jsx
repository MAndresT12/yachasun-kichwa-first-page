import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';

const images = {
    gender1: require('../../../../../assets/images/basic/module5/gender/gender1.png'),
};

const gender_masculine_data = [
    { kichwa: "Kari kuchi", spanish: "Chancho", imageCard: images.gender1 },
    { kichwa: "Kari atallpa", spanish: "Gallo", imageCard: images.gender1 },
    { kichwa: "Kari allku", spanish: "Perro", imageCard: images.gender1 },
    { kichwa: "Kari sisa", spanish: "Flor rústica", imageCard: images.gender1 },
    { kichwa: "Kari rumi", spanish: "Piedra rústica", imageCard: images.gender1 },
];

const gender_femenine_data = [
    { kichwa: "Warmi kuchi", spanish: "Chancha", imageCard: images.gender1 },
    { kichwa: "Warmi atallpa", spanish: "Gallina", imageCard: images.gender1 },
    { kichwa: "Warmi allku", spanish: "Perra", imageCard: images.gender1 },
    { kichwa: "Warmi sisa", spanish: "Flor delicada", imageCard: images.gender1 },
    { kichwa: "Warmi rumi", spanish: "Piedra fina", imageCard: images.gender1 },
];


const curiosity_data = [
    {
        key: '1',
        title: 'El género en el mundo indígena',
        text: 'Dentro de la cultura indígena, todo lo que existe en la tierra y fuera de ella tiene género.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
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
                    <ImageContainer path={item.imageCard} style={styles.animalImage} />
                </View>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            </View>
        ));
    };

    const renderTableFemenine = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <View style={styles.imageContainer}>
                    <ImageContainer path={item.imageCard} style={styles.animalImage} />
                </View>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
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
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
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
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
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
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#003366" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>

                    <CardDefault title="Artículo y Género">
                        <Text style={styles.cardContent}>
                            En el kichwa no podemos hablar claramente de un artículo como utilizamos en
                            el español ya que en cierta manera no existe.{`\n\n`} 
                            En cuanto al género no tenemos terminaciones para identificar si estamos 
                            hablando de femenino o masculino, por esta razón utilizamos las palabras 
                            warmi (mujer) o kari (hombre) para establecer si es femenino o 
                            masculino.{`\n\n`}
                            Las palabras warmi y kari las utilizamos anteponiendo al sustantivo.
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
                                        <ImageContainer path={require('../../../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
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
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('Quantity')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Gender;