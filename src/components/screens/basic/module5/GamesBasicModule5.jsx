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
        sentenceParts: ["Puyu", "a"],
        correctWords: ["kun"],
        options: ["kun", "qun", "cun"],
        translation: "Nubes",
    },
    {
        sentenceParts: ["", "akuna"],
        correctWords: ["Sis"],
        options: ["Cis", "Sis", "Zis"],
        translation: "Flores",
    },
    {
        sentenceParts: ["K", "una"],
        correctWords: ["uyk"],
        options: ["uyq", "uyc", "uyk"],
        translation: "Cuyes",
    },
];

const match_game_data = [
    { kichwa: "Kari kuchi", spanish: "Chancho", image: "https://st2.depositphotos.com/1724125/46903/v/600/depositphotos_469034328-stock-illustration-strong-boxer-pig-posing-smiling.jpg" },
    { kichwa: "Warmi allku", spanish: "Perra", image: "https://st3.depositphotos.com/4155807/16049/v/600/depositphotos_160493412-stock-illustration-little-cute-dog-with-long.jpg" },
    { kichwa: "Warmi rumi", spanish: "Piedra fina", image: "https://st2.depositphotos.com/18747850/49225/v/600/depositphotos_492254054-stock-illustration-gray-stone-on-white-background.jpg" },
    { kichwa: "Ashalla sisakuna", spanish: "Pocas flores", image: "https://st4.depositphotos.com/1526816/29611/v/600/depositphotos_296113446-stock-illustration-yellow-daffodil-flowers-on-white.jpg" },
];


const match_image_data = [
    { kichwa: "Warmi kuchi", spanish: "Chancha", image: "https://st4.depositphotos.com/1000489/21148/v/600/depositphotos_211488650-stock-illustration-fun-pig-pink-hat-suitcase.jpg" },
    { kichwa: "Kari atallpa", spanish: "Gallo", image: "https://st3.depositphotos.com/1008632/13102/v/600/depositphotos_131026622-stock-illustration-mr-rooster-illustration.jpg" },
    { kichwa: "Warmi sisa", spanish: "Flor delicada", image: "https://st5.depositphotos.com/1007566/68826/v/600/depositphotos_688261274-stock-illustration-japan-sakura-flower-illustration-isolated.jpg" },
    { kichwa: "Tawka runakuna", spanish: "Mucha gente", image: "https://st5.depositphotos.com/2850905/75383/v/600/depositphotos_753834036-stock-illustration-large-group-people-form-square.jpg" },
];

const hangman_data = [
    { word: 'Tantakuna', translation: 'Panes' },
];

const roulette_data = [
    { spanish: 'Hatun', kichwa: 'Grande' },
    { spanish: 'Malta', kichwa: 'Mediano' },
    { spanish: 'Uchilla', kichwa: 'Pequeño' },
];

const GamesBasicModule5 = () => {
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

export default GamesBasicModule5;
