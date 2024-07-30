import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { styles } from '../../styles/globalStyles';
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const MatchGame = ({ data, onNext }) => {
    const navigation = useNavigation();
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);

    useEffect(() => {
        resetGame();
    }, [data]);

    const resetGame = () => {
        const shuffledCards = shuffleArray([...data, ...data]);
        setCards(shuffledCards);
        setSelectedCard(null);
        setMatchedPairs([]);
        setShowConfetti(false);
        setShowNextButton(false);
    };

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
            setSelectedCard(null);
        }
    };

    const renderCard = (card, index) => {
        const isFlipped = matchedPairs.includes(index) || selectedCard === index;
        return (
            <TouchableOpacity key={index} style={stylesMatch.card} onPress={() => handleCardPress(index)} disabled={matchedPairs.includes(index)}>
                {isFlipped ? (
                    <View style={stylesMatch.cardContent}>
                        <Image source={{ uri: card.image }} style={stylesMatch.cardImage} />
                        <Text style={stylesMatch.cardText}>{card.spanish}</Text>
                    </View>
                ) : (
                    <View style={stylesMatch.cardContent}>
                        <Image source={{ uri: "https://i.pinimg.com/originals/14/02/72/1402722b43c3c92d51ae2ec0eebdf93a.jpg" }} style={stylesMatch.cardImage} />
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView contentContainerStyle={stylesMatch.container}>
            <Text style={stylesMatch.title}>Emparejar</Text>
            <View style={stylesMatch.grid}>
                {cards.map((card, index) => renderCard(card, index))}
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
    card: {
        width: 100,
        height: 150,
        margin: 10,
        backgroundColor: '#ddd',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        justifyContent: 'center',
        alignItems: 'center',
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
