import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import JuegoCompletarFrases from '../../../ui/JuegoCompletarFrases';
import MatchGame from '../../../ui/MatchGame';
import ImageWordMatchGame from '../../../ui/ImageWordMatchGame';
import HangmanGame from '../../../ui/HangmanGame';
import RuletaGame from '../../../ui/RuletaGame';

const complete_sentence_data = [
    {
        sentenceParts: ["Tankapay", ""],
        correctWords: ["chik"],
        options: ["chik", "chic", "chiq"],
        translation: "Empujen",
    },
];

const match_game_data = [
    { kichwa: "Rimashunk", spanish: "Hablemos", image: "https://st2.depositphotos.com/5471768/8262/v/600/depositphotos_82624828-stock-illustration-two-men-talk-discussion-exchange.jpg" },
    { kichwa: "Llamkapay", spanish: "Trabaje", image: "https://st2.depositphotos.com/3474805/6296/v/600/depositphotos_62960855-stock-illustration-tired-businessman-at-work.jpg" },
];


const match_image_data = [
    { kichwa: "Kanka shañuta tarpunki", spanish: "Tú siembras café", image: "https://st.depositphotos.com/1557418/1838/v/600/depositphotos_18383879-stock-illustration-coffee.jpg" },
    { kichwa: "Payka akapita tarpun", spanish: "Ella siembra cebada", image: "https://static7.depositphotos.com/1168906/739/v/600/depositphotos_7390865-stock-illustration-wheat-ear-vector-illustration.jpg" },
];

const hangman_data = [
    { word: 'Tarpuni', translation: 'Yo siembro' },
];

const roulette_data = [
    { spanish: 'No comas', kichwa: 'Ama mikuychu' },
    { spanish: 'No llamen', kichwa: 'Ama kayaychikchu' },
    { spanish: 'Usted siembra papas', kichwa: 'Kikinka papata tarpunki' },
];

const GamesBasicModule6 = () => {
    const navigation = useNavigation();
    const [currentGame, setCurrentGame] = useState(0);

    const games = [
        <JuegoCompletarFrases navigationTarget="CaminoLevelsBasic" key="frases" data={complete_sentence_data} helpText="En este juego debes completar las frases en kichwa. Arrastra la palabra correcta y colócala en el espacio vacío para formar la frase perfecta."
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <MatchGame navigationTarget="CaminoLevelsBasic" key="match" data={match_game_data} helpText="En este juego debes emparejar las cartas. Encuentra las imágenes que son iguales y haz clic en ellas. Si te equivocas, no te preocupes, las cartas se voltearán para que lo intentes de nuevo."
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <ImageWordMatchGame navigationTarget="CaminoLevelsBasic" key="matching" data={match_image_data} helpText="En este juego debes unir las imágenes con su nombre en kichwa. Mira con atención los dibujos y selecciona la palabra correcta que lo describe. Si te equivocas, ¡no pasa nada! Sigue jugando y aprende cada vez más."
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <HangmanGame navigationTarget="CaminoLevelsBasic" key="hangman" words={hangman_data} helpText="¡Bienvenido al Ahorcado! Debes adivinar las letras de la palabra secreta. Si te equivocas 6 veces, ¡el muñequito se colgará! ¡Piensa rápido y diviértete!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <RuletaGame navigationTarget="CaminoLevelsBasic" key="ruleta" data={roulette_data} helpText="En este juego debes girar la ruleta y adivinar la palabra en kichwa."
            onNext={() => navigation.navigate('EvaluationBasicModule1')} />,
        //Aca iran mas juegos, en el ultimo juego colocar el navigation.navigate('Game') para que diriga a pantalla de evaluacion
        //Caso contrario setCurrentGame(currentGame + 1) para que siga pasando por todos los juegos
    ];

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={styles.container}>
            {games[currentGame]}
        </LinearGradient>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        // backgroundColor: '#18a7ac',
    },
});

export default GamesBasicModule6;
