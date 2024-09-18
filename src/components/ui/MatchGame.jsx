// src/components/MatchGame.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Image, TouchableWithoutFeedback, Modal } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../../../styles/globalStyles';
import { ComicBubble } from './bubbles/ComicBubble';
import { FloatingHumu } from '../animations/FloatingHumu';
import { ImageContainer } from './imageContainers/ImageContainer';

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const Card = ({ card, isFlipped, onPress }) => {
    const rotateY = useSharedValue(0);

    const animatedStyleFront = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value}deg` }],
    }));

    const animatedStyleBack = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value + 180}deg` }],
    }));

    useEffect(() => {
        rotateY.value = withTiming(isFlipped ? 180 : 0, { duration: 400 });
    }, [isFlipped]);

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={stylesMatch.cardContainer}>
                <Animated.View style={[stylesMatch.cardFace, animatedStyleFront]}>
                    <Image source={{ uri: "https://i.pinimg.com/originals/14/02/72/1402722b43c3c92d51ae2ec0eebdf93a.jpg" }} style={stylesMatch.cardImage} />
                </Animated.View>
                <Animated.View style={[stylesMatch.cardFace, animatedStyleBack, stylesMatch.cardBack]}>
                    <Text style={stylesMatch.cardText}>{card.spanish}</Text>
                    <Image source={{ uri: card.image }} style={stylesMatch.cardImage} />
                    <Text style={stylesMatch.cardText}>{card.kichwa}</Text>
                </Animated.View>
            </View>
        </TouchableOpacity>
    );
};

const MatchGame = ({ data, onNext, helpText }) => {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showHelp, setShowHelp] = useState(false);  // Estado para mostrar la ayuda del juego

    const resetGame = useCallback(() => {
        const shuffledCards = shuffleArray([...data, ...data]);
        setCards(shuffledCards);
        setSelectedCard(null);
        setMatchedPairs([]);
        setShowConfetti(false);
        setShowNextButton(false);
    }, [data]);

    useEffect(() => {
        resetGame();
    }, [resetGame]);

    const handleCardPress = (index) => {
        if (selectedCard === null) {
            setSelectedCard(index);
        } else if (selectedCard !== index && cards[selectedCard].kichwa === cards[index].kichwa) {
            setMatchedPairs([...matchedPairs, selectedCard, index]);
            setSelectedCard(null);
            if (matchedPairs.length + 2 === cards.length) {
                setShowConfetti(true);
                setShowNextButton(true);
                setTimeout(() => {
                    Alert.alert("¡Felicidades!", "Has emparejado todas las cartas.");
                }, 500);
            }
        } else {
            const previousSelectedCard = selectedCard;
            setSelectedCard(index);
            setTimeout(() => {
                setSelectedCard(null);
            }, 500);
        }
    };

    return (
        <ScrollView contentContainerStyle={stylesMatch.container}>
            {/* Icono de ayuda */}
            <TouchableOpacity style={stylesMatch.helpIcon} onPress={() => setShowHelp(true)}>
                <FontAwesome name="question-circle" size={40} color="#fff" />
            </TouchableOpacity>
            <Text style={stylesMatch.title}>Emparejar</Text>
            <View style={stylesMatch.grid}>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        card={card}
                        isFlipped={matchedPairs.includes(index) || selectedCard === index}
                        onPress={() => handleCardPress(index)}
                    />
                ))}
            </View>
            <TouchableOpacity style={stylesMatch.resetButton} onPress={resetGame}>
                <Text style={stylesMatch.resetButtonText}>Reiniciar</Text>
            </TouchableOpacity>
            {/* Modal de ayuda */}
            <Modal animationType="slide" transparent={true} visible={showHelp} onRequestClose={() => setShowHelp(false)}>
                <View style={stylesMatch.modalContainer}>
                    <View style={stylesMatch.modalContent}>
                        <View style={styles.helpModalContent}>
                            <FloatingHumu >
                                <ImageContainer path={require('../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                            </FloatingHumu>
                            <ComicBubble
                                text={helpText}
                                arrowDirection="left"
                            />
                        </View>
                        <View style={styles.buttonContainerAlphabet}>
                            <TouchableOpacity onPress={() => setShowHelp(false)}>
                                <View style={styles.buttonDefaultAlphabet}>
                                    <Text style={styles.buttonTextAlphabet}>Cerrar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={stylesMatch.contentContainer}>
                            <Image source={require('../../../assets/images/humu/humu-talking.png')} style={stylesMatch.image} />
                            <View style={stylesMatch.speechBubble}>
                                <Text style={stylesMatch.bubbleText}>{helpText}</Text>
                                <View style={stylesMatch.bubbleTail} />
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => setShowHelp(false)}>
                            <Text style={stylesMatch.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </Modal>
            {showNextButton && (
                <View style={styles.buttonContainerAlphabet}>
                    <TouchableOpacity onPress={onNext}>
                        <View style={styles.buttonDefaultAlphabet}>
                            <Text style={styles.buttonTextAlphabet}>Siguiente juego</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                // <TouchableOpacity style={stylesMatch.nextButton} onPress={onNext}>
                //     <Text style={stylesMatch.nextButtonText}>Siguiente</Text>
                // </TouchableOpacity>
            )}
            {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fadeOut />}
        </ScrollView>
    );
};

const stylesMatch = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#18a7ac',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    cardContainer: {
        width: 120,
        height: 170,
        margin: 15,
    },
    cardFace: {
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#ddd',
        borderRadius: 10,
    },
    cardBack: {
        transform: [{ rotateY: '180deg' }],
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    cardText: {
        marginTop: 10,
        fontSize: 16,
    },
    nextButton: {
        marginTop: 20,
        backgroundColor: '#822929',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    resetButton: {
        marginTop: 20,
        backgroundColor: '#005A9C',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    resetButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    helpIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 330,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
    },
    speechBubble: {
        marginLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#ddd',
        padding: 15,
        maxWidth: '70%',
        position: 'relative',
    },
    bubbleText: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
    bubbleTail: {
        position: 'absolute',
        left: -20,
        top: '50%',
        width: 0,
        height: 0,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderRightWidth: 20,
        borderStyle: 'solid',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#ddd',
    },
    closeButtonText: {
        marginTop: 20,
        color: '#822929',
        fontSize: 18,
    },
    nextButtonText: {
        color: '#822929',
        fontSize: 18,
        marginTop: 20,
    },
});

export default MatchGame;
