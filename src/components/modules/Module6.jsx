// src/components/Module6.jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HangmanGame from '../ui/HangmanGame';
import MatchGame from '../ui/MatchGame';
import ImageWordMatchGame from '../ui/ImageWordMatchGame';
import JuegoCompletarFrases from '../ui/JuegoCompletarFrases';
import RuletaGame from '../ui/RuletaGame';
import { useNavigation } from '@react-navigation/native';




const sentenceDataModule6 = [
    {
        sentenceParts: ["Ñuka ", ""],
        correctWords: ["karakurkani"],
        options: ["karakurkani", "mikukurkanki", "karakurka"],
        translation: "Yo estaba dando",
    },
    {
        sentenceParts: ["Kankuna ", ""],
        correctWords: ["karakurkankichik"],
        options: ["Pay", "karakurkankichik", "karakurkani"],
        translation: "Ustedes estaban dando",
    },
    {
        sentenceParts: ["Kan ", ""],
        correctWords: ["mikukurkanki"],
        options: ["shamusha", "mikukurkanki", "Ñukanchik"],
        translation: "Tú estabas comiendo",
    },
    {
        sentenceParts: [" ", " mikukurka"],
        correctWords: ["Pay"],
        options: ["Ñuka", "Man", "Pay"],
        translation: "Él estaba comiendo",
    },
    {
        sentenceParts: [" ", " mikukurkanki"],
        correctWords: ["Kikin"],
        options: ["Kikin", "Ñuka", "Pay"],
        translation: "Usted estaba comiendo",
    },
    {
        sentenceParts: ["Paykuna ", " "],
        correctWords: ["karakurkakuna"],
        options: ["pak", "wan", "karakurkakuna"],
        translation: "Ellos estaban dando",
    },
    {
        sentenceParts: [" ", " mikukurkakuna"],
        correctWords: ["Paykuna"],
        options: ["Paykuna", "Ñuka", "Kan"],
        translation: "Ellos estaban comiendo",
    },
];



const Module6 = () => {
    const navigation = useNavigation();
    const [currentGame, setCurrentGame] = useState(0);

    const games = [


        <JuegoCompletarFrases key="frases" data={sentenceDataModule6} helpText="¡Hola pequeño aventurero! En este juego debes completar las frases en kichwa. Arrastra la palabra correcta y colócala en el espacio vacío para formar la frase perfecta. ¡Diviertete aprendiendo mientras juegas!"
            onNext={() => navigation.navigate('Game6')} />,
        //Aca iran mas juegos, en el ultimo juego colocar el navigation.navigate('Game') para que diriga a pantalla de evaluacion
        //Caso contrario setCurrentGame(currentGame + 1) para que siga pasando por todos los juegos
    ];

    return (
        <View style={styles.container}>
            {games[currentGame]}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#18a7ac',
    },
});

export default Module6;


