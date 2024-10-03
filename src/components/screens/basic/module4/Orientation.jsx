import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const images = {
    orientation1: require('../../../../../assets/images/basic/module4/orientation/orientation1.png'),
};

const orientation_data = [
    { imageCard: images.orientation1, kichwa: "Wichay", spanish: "Arriba" },
    { imageCard: images.orientation1, kichwa: "Uray", spanish: "Abajo" },
    { imageCard: images.orientation1, kichwa: "Lluki", spanish: "Izquierda" },
    { imageCard: images.orientation1, kichwa: "Allawka", spanish: "Derecha" },
];

const renderCard = (item) => (
    <View style={styles.carouselCard}>
        <ImageContainer path={item.imageCard} style={styles.carouselImage} />
        <Text style={styles.carouselTextKichwa}>{item.kichwa}</Text>
        <Text style={styles.carouselTextSpanish}>{item.spanish}</Text>
    </View>
);

const Orientation = () => {
    const [showHelp, setShowHelp] = useState(null);

    const navigation = useNavigation();

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
                    <CardDefault title="¿Hacia dónde vamos?">
                        <Text style={styles.cardContent}>
                            Es bueno saber orientarze y saber cómo dirigirnos.{'\n\n'}
                            Para esto te voy a explicar las cuatro orientaciones básicas en Kichwa.
                        </Text>
                    </CardDefault>

                    <View>
                        <Carousel
                            width={width * 0.8}
                            height={300}
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
                                        <ImageContainer path={require('../../../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en las tarjetas para ver la información.'
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
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('Orientation')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Orientation;