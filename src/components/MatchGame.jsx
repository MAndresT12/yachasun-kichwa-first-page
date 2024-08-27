// src/components/MatchGame.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

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

const MatchGame = ({ data, onNext }) => {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);

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
            {showNextButton && (
                <TouchableOpacity style={stylesMatch.nextButton} onPress={onNext}>
                    <Text style={stylesMatch.nextButtonText}>Siguiente</Text>
                </TouchableOpacity>
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
});

export default MatchGame;
