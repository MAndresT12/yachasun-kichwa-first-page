import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const images = {
    quantity1: require('../../../../../assets/images/basic/module5/quantity/quantity1.png'),
};

const orientation_data = [
    { imageCard: images.quantity1, kichwa: "Tawka runakuna", spanish: "Mucha gente" },
    { imageCard: images.quantity1, kichwa: "Ashalla wawakuna", spanish: "Pocos niños" },
    { imageCard: images.quantity1, kichwa: "Tawka sisakuna", spanish: "Muchas flores" },
    { imageCard: images.quantity1, kichwa: "Ashalla sisakuna", spanish: "Pocas flores" },
];

const renderCard = (item) => (
    <View style={styles.carouselCard}>
        <ImageContainer path={item.imageCard} style={styles.carouselImage} />
        <Text style={styles.carouselTextKichwa}>{item.kichwa}</Text>
        <Text style={styles.carouselTextSpanish}>{item.spanish}</Text>
    </View>
);

const Quantity = () => {
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
                    <CardDefault title="Somos muchos">
                        <Text style={styles.cardContent}>
                            Quiero enseñarte cómo describir la cantidad en Kichwa.
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
                                        text='Mueve el carrusel usando gestos.'
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
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('Size')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Quantity;