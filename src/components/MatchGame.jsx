import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ConfettiCannon from 'react-native-confetti-cannon';

const foodData = [
    { kichwa: "tutamanta mikuna", spanish: "desayuno", image: "https://img.freepik.com/vector-premium/dibujos-animados-delicioso-desayuno-sabroso_24640-53952.jpg?w=1060" },
    { kichwa: "chawpi puncha mikuna", spanish: "almuerzo", image: "https://i.pinimg.com/originals/fa/23/de/fa23deb5bc1d50dbbc1d91f97283f8b4.jpg" },
    { kichwa: "chishimanta mikuna", spanish: "merienda/cena", image: "https://img.freepik.com/vector-gratis/ilustraciones-comida-kawaii-dibujadas-mano_23-2149415600.jpg" },
    { kichwa: "aycha", spanish: "carne", image: "https://static.vecteezy.com/system/resources/previews/014/296/829/non_2x/steak-food-icon-cartoon-pork-meat-vector.jpg" },
    { kichwa: "kachi", spanish: "sal", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-sal-dibujada-mano_52683-131168.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716854400&semt=ais_user" },
    { kichwa: "haku", spanish: "harina", image: "https://cdn-icons-png.flaticon.com/512/817/817293.png" },
];

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const MatchGame = () => {
    const navigation = useNavigation();
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);

    useEffect(() => {
        resetGame();
    }, []);

    const resetGame = () => {
        const shuffledCards = shuffleArray([...foodData, ...foodData]);
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
            <TouchableOpacity key={index} style={styles.card} onPress={() => handleCardPress(index)} disabled={matchedPairs.includes(index)}>
                {isFlipped ? (
                    <View style={styles.cardContent}>
                        <Image source={{ uri: card.image }} style={styles.cardImage} />
                        <Text style={styles.cardText}>{card.spanish}</Text>
                    </View>
                ) : (
                    <View style={styles.cardContent}>
                        <Image source={{ uri: "https://i.pinimg.com/originals/14/02/72/1402722b43c3c92d51ae2ec0eebdf93a.jpg" }} style={styles.cardImage} />
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Emparejar</Text>
            <View style={styles.grid}>
                {cards.map((card, index) => renderCard(card, index))}
            </View>
            <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
                <Text style={styles.resetButtonText}>Reiniciar</Text>
            </TouchableOpacity>
            {showNextButton && (
                <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Game')}>
                    <Text style={styles.nextButtonText}>Siguiente</Text>
                </TouchableOpacity>
            )}
            {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fadeOut />}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
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
