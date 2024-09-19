import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts, RibeyeMarrow_400Regular } from '@expo-google-fonts/ribeye-marrow';
import { LinearGradient } from 'expo-linear-gradient';
import { FloatingHumu } from '../../../animations/FloatingHumu';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';

const colors = ['#FF6347', '#4682B4', '#FFD700', '#32CD32', '#8A2BE2', '#FF4500'];

const colors_data = [
    { kichwa: "Puka", spanish: "Rojo", hexadecimalColor: "#FF0000" },
    { kichwa: "Ankas", spanish: "Azul", hexadecimalColor: "#0000FF" },
    { kichwa: "Killu", spanish: "Amarillo", hexadecimalColor: "#FFFF00" },
    { kichwa: "Waylla", spanish: "Verde", hexadecimalColor: "#00FF00" },
    { kichwa: "Yana", spanish: "Negro", hexadecimalColor: "#000000" },
    { kichwa: "Yurak", spanish: "Blanco", hexadecimalColor: "#FFFFFF" },
    { kichwa: "Yanalla Ankas", spanish: "Azul Marino", hexadecimalColor: "#000080" },
    { kichwa: "Chawa Ankas", spanish: "Celeste", hexadecimalColor: "#87CEEB" },
    { kichwa: "Chawa Killu", spanish: "Amarillo Claro", hexadecimalColor: "#FFFFE0" },
    { kichwa: "Chawa Wayllu", spanish: "Verde Claro", hexadecimalColor: "#90EE90" },
    { kichwa: "Paku", spanish: "Café", hexadecimalColor: "#8B4513" },
    { kichwa: "Waminsi", spanish: "Rosado", hexadecimalColor: "#FFC0CB" },
    { kichwa: "Maywa", spanish: "Morado", hexadecimalColor: "#800080" },
    { kichwa: "Suku", spanish: "Plomo", hexadecimalColor: "#808080" },
    { kichwa: "Kishpu", spanish: "Naranja", hexadecimalColor: "#FFA500" },
];

const getColorForLetter = (index) => {
    return colors[index % colors.length];
};

const FlipCard = ({ item, fontsLoaded }) => {
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
                    <View style={styles.andesStyleGradientBox}>
                        <Text style={[styles.andesStyleText, { fontFamily: fontsLoaded ? 'RibeyeMarrow_400Regular' : 'sans-serif', flexDirection: 'row' }]}>
                            {item.spanish.split('').map((letter, index) => (
                                <Text key={index} style={{ color: getColorForLetter(index) }}>
                                    {letter}
                                </Text>
                            ))}
                        </Text>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <Text style={styles.translationLabel}>Kichwa:</Text>
                    <Text style={styles.translationText}>{item.kichwa}</Text>
                    <View style={[styles.colorBox, { backgroundColor: item.hexadecimalColor }]} />
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const Colors = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [fontsLoaded] = useFonts({
        RibeyeMarrow_400Regular,
    });

    const navigation = useNavigation();

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    const content = fontsLoaded ? (
        <View style={styles.body}>
            <CardDefault title="Un arcoíris al cielo">
                <Text style={styles.cardContent}>
                    Los colores nos permiten ver lo bello de este mundo.{"\n\n"}
                    Ahora hablaremos de los colores y los mostraremos en pequeñas tarjetas.
                    Diviértete aprendiendo.
                </Text>
            </CardDefault>
            <View style={styles.gridContainer}>
                {colors_data.map((item, index) => (
                    <FlipCard key={index} item={item} fontsLoaded={fontsLoaded} />
                ))}
            </View>
        </View>
    ) : (
        <ActivityIndicator size="large" color="#0000ff" />
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#5B4D28" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Los Colores</Text>
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                {content}

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
                                        text='Presiona en cada tarjeta de un color para ver su pronunciación en Kichwa.'
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
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('GamesBasicModule1')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Colors;
