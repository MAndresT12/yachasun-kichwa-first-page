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
        sentenceParts: ["", "willa"],
        correctWords: ["Chi"],
        options: ["Chi", "Qui", "Kill"],
        translation: "Piña",
    },
    {
        sentenceParts: ["Chi", "kan"],
        correctWords: ["wall"],
        options: ["shall", "wall", "call"],
        translation: "Babaco",
    },
    {
        sentenceParts: ["Ka", "ay"],
        correctWords: ["ws"],
        options: ["us", "ls", "ws"],
        translation: "Vida",
    },
];

const match_game_data = [
    { kichwa: "Aycha", spanish: "Carne", image: "https://static8.depositphotos.com/1505860/978/v/600/depositphotos_9780210-stock-illustration-fresh-meat.jpg" },
    { kichwa: "Makinchu", spanish: "Queso", image: "https://st5.depositphotos.com/19075028/71596/v/600/depositphotos_715962096-stock-illustration-piece-tasty-gourmet-cheese-isolated.jpg" },
    { kichwa: "Haku", spanish: "Harina", image: "https://st.depositphotos.com/23654100/60380/v/600/depositphotos_603801318-stock-illustration-sack-wheat-flour-golden-ears.jpg" },
    { kichwa: "Tanta", spanish: "Pan", image: "https://st.depositphotos.com/1526816/1313/v/600/depositphotos_13130709-stock-illustration-bread-slices.jpg" },
    { kichwa: "Sara", spanish: "Maíz", image: "https://st3.depositphotos.com/1724125/17973/v/600/depositphotos_179738808-stock-illustration-happy-cartoon-corn-with-fist.jpg" },
    { kichwa: "Challwa", spanish: "Pescado", image: "https://st5.depositphotos.com/72771704/76627/v/600/depositphotos_766275576-stock-illustration-bluegill-fish-isolated-flat-vector.jpg" },
];


const match_image_data = [
    {
        kichwa: "Allku",
        spanish: "Perro", image: "https://static4.depositphotos.com/1000792/366/v/600/depositphotos_3660872-stock-illustration-running-funny-puppy.jpg"
    },
    {
        kichwa: "Misi",
        spanish: "Gato", image: "https://st5.depositphotos.com/23146722/73880/v/600/depositphotos_738807042-stock-illustration-vector-illustration-white-background-childrens.jpg"
    },
    {
        kichwa: "Atallpa",
        spanish: "Gallina", image: "https://st3.depositphotos.com/1724125/13418/v/600/depositphotos_134186352-stock-illustration-happy-cartoon-chicken.jpg"
    },
    {
        kichwa: "Kuy",
        spanish: "Cuy", image: "https://st5.depositphotos.com/3369547/65830/v/600/depositphotos_658304596-stock-illustration-cheerful-guinea-pig-cute-fluffy.jpg"
    },
    {
        kichwa: "Kuchi",
        spanish: "Chancho", image: "https://st2.depositphotos.com/1000792/5623/v/600/depositphotos_56232093-stock-illustration-very-cute-piggy.jpg"
    },
    {
        kichwa: "Llama",
        spanish: "Oveja", image: "https://st5.depositphotos.com/46060006/65751/v/600/depositphotos_657515552-stock-illustration-cute-sheep-white-background.jpg"
    },
    {
        kichwa: "Apyu",
        spanish: "Caballo", image: "https://st5.depositphotos.com/20923550/70476/v/600/depositphotos_704764502-stock-illustration-horse-running-meadow-vector-illustration.jpg"
    },
    {
        kichwa: "Wakra",
        spanish: "Ganado", image: "https://st5.depositphotos.com/28052602/69001/v/600/depositphotos_690013718-stock-illustration-illustration-milk-cow-grass.jpg"
    },
];

const hangman_data = [
    { word: 'Puyu', translation: 'Nube' },
    { word: 'Pakcha', translation: 'Cascada' },
    { word: 'Kiwa', translation: 'Hierba' },
    { word: 'Tamya', translation: 'Lluvia' },
    { word: 'Sacha', translation: 'Selva' },
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
