import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { cardStyles } from '../../../../../styles/cardStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';

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
    const progress = 0.25;

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAnimal, setSelected] = useState(null);
    const [showHelp, setShowHelp] = useState(null);

    const navigation = useNavigation();

    const handlePress = (data) => {
        setSelected(data);
        setModalVisible(true);
    };

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#003366" />
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
                            Los animales merecen nuestro respeto y cuidado. Debemos conocer de ellos
                            y aprender a convivir en armonía con ellos. En la granja existen muchos
                            animales que nos ayudan mucho para comer.{'\n\n'}
                            Te voy a enseñar los nombres de algunos animales que se encuentran en la
                            granja, en Kichwa.
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
                                        <ImageContainer path={require('../../../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en cada tarjeta de una letra del alfabeto para ver su pronunciación en Kichwa.'
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

                {selectedAnimal && (
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.title}>{selectedAnimal.spanish}</Text>
                                <ImageContainer path={selectedAnimal.imageCard} style={styles.imageModal} />
                                <Text style={styles.kichwaText}>Kichwa: {selectedAnimal.kichwa}</Text>
                                <View style={styles.translationContainer}>
                                    <Text style={styles.spanishText}>Sonido: {selectedAnimal.sound}</Text>
                                </View>
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
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('FirstNumbers')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default AnimalsBasic;
