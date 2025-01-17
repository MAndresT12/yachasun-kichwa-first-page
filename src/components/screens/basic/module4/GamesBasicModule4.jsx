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
        sentenceParts: ["Killkana ", "pi"],
        correctWords: ["kas"],
        options: ["kas", "qus", "pas"],
        translation: "Lápiz",
    },
    {
        sentenceParts: ["Ti", "ina"],
        correctWords: ["yar"],
        options: ["kar", "yar", "par"],
        translation: "Silla",
    },
    {
        sentenceParts: ["Yacha", ""],
        correctWords: ["kuna"],
        options: ["shuna", "puna", "kuna"],
        translation: "Aprender",
    },
];

const match_game_data = [
    { kichwa: "Aycha", spanish: "Carne", image: "https://static8.depositphotos.com/1505860/978/v/600/depositphotos_9780210-stock-illustration-fresh-meat.jpg" },
    { kichwa: "Makinchu", spanish: "Queso", image: "https://st5.depositphotos.com/19075028/71596/v/600/depositphotos_715962096-stock-illustration-piece-tasty-gourmet-cheese-isolated.jpg" },
    { kichwa: "Haku", spanish: "Harina", image: "https://st.depositphotos.com/23654100/60380/v/600/depositphotos_603801318-stock-illustration-sack-wheat-flour-golden-ears.jpg" },
    { kichwa: "Tanta", spanish: "Pan", image: "https://st.depositphotos.com/1526816/1313/v/600/depositphotos_13130709-stock-illustration-bread-slices.jpg" },
    { kichwa: "Yaku", spanish: "Agua", image: "https://st2.depositphotos.com/1007168/6106/v/600/depositphotos_61064019-stock-illustration-water-drop-holding-water-glass.jpg" },
    { kichwa: "Ñuñu", spanish: "Leche", image: "https://st3.depositphotos.com/1007566/13756/v/600/depositphotos_137563310-stock-illustration-milk-box-with-glass.jpg" },
];


const match_image_data = [
    { kichwa: "", spanish: "", image: "" },
    { kichwa: "", spanish: "", image: "" },
    { kichwa: "", spanish: "", image: "" },
    { kichwa: "", spanish: "", image: "" },
    { kichwa: "", spanish: "", image: "" },
    { kichwa: "", spanish: "", image: "" },
    { kichwa: "", spanish: "", image: "" },
    { kichwa: "", spanish: "", image: "" },
];

const hangman_data = [
    { word: '', translation: '' },
    { word: '', translation: '' },
    { word: '', translation: '' },
    { word: '', translation: '' },
    { word: '', translation: '' },
];

const roulette_data = [
    { spanish: 'Wichay', kichwa: 'Arriba' },
    { spanish: 'Uray', kichwa: 'Abajo' },
    { spanish: 'Lluki', kichwa: 'Izquierda' },
    { spanish: 'Allawka', kichwa: 'Derecha' },
];

const GamesBasicModule4 = () => {
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

export default GamesBasicModule4;
