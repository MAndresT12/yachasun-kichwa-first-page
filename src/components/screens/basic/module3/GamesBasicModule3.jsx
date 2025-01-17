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
    { kichwa: "Akcha", spanish: "Cabello", image: "https://st5.depositphotos.com/81999106/73795/v/600/depositphotos_737955416-stock-illustration-woman-hair-shown-stylized-way.jpg" },
    { kichwa: "Rikra", spanish: "Brazo", image: "https://st.depositphotos.com/1887105/1723/v/600/depositphotos_17236893-stock-illustration-human-arm-and-hand-extended.jpg" },
    { kichwa: "Ñawi", spanish: "Cara", image: "https://img.freepik.com/premium-vector/young-woman-face-cartoon_18591-44461.jpg?w=740" },
    { kichwa: "Shimi", spanish: "Boca", image: "https://st5.depositphotos.com/71887754/74197/v/600/depositphotos_741979130-stock-illustration-hand-drawn-woman-mouth-red.jpg" },
    { kichwa: "Chanka", spanish: "Pierna", image: "https://st.depositphotos.com/5775856/57988/v/600/depositphotos_579881314-stock-illustration-beauty-female-legs-barefoot-silhouette.jpg" },
    { kichwa: "Maki", spanish: "Mano", image: "https://st5.depositphotos.com/50120664/71986/v/600/depositphotos_719865796-stock-illustration-illustration-isolated-hand-icon-human.jpg" },
];


const match_image_data = [
    { kichwa: "Nina", spanish: "Fuego", image: "https://st5.depositphotos.com/21922568/74329/v/600/depositphotos_743297976-stock-illustration-flame-fire-flame-icon.jpg" },
    { kichwa: "Kawitu", spanish: "Cama", image: "https://st.depositphotos.com/1302980/1321/v/600/depositphotos_13218669-stock-illustration-cartoon-bed-with-teddy-bear.jpg" },
    { kichwa: "Pataku", spanish: "Mesa", image: "https://st3.depositphotos.com/3997585/16037/v/600/depositphotos_160379042-stock-illustration-wooden-table-isolated-illustration-on.jpg" },
    { kichwa: "Pakuyla", spanish: "Fósforo", image: "https://st3.depositphotos.com/10647962/16642/v/600/depositphotos_166426456-stock-illustration-burning-match-stick-illustration.jpg" },
    { kichwa: "Tuku", spanish: "Ventana", image: "https://st5.depositphotos.com/88151420/74564/v/600/depositphotos_745648868-stock-illustration-set-wooden-windows-illustration-hand.jpg" },
    { kichwa: "Punku", spanish: "Puerta", image: "https://st.depositphotos.com/1302980/2270/v/600/depositphotos_22702133-stock-illustration-doors-closed-and-open.jpg" },
    { kichwa: "Katana", spanish: "Cobija", image: "https://st2.depositphotos.com/3440865/8879/v/600/depositphotos_88798856-stock-illustration-ill-man-shivering-hard-under.jpg" },
    { kichwa: "Manka", spanish: "Olla", image: "https://st5.depositphotos.com/85820519/72570/v/600/depositphotos_725705418-stock-illustration-saucepan-icon-vector-illustration-flat.jpg" },
];

const hangman_data = [
    { word: 'kuncha', translation: 'Sobrino' },
    { word: 'ampullu', translation: 'Bisnieto/Bisnieta' },
    { word: 'paniku', translation: 'Cuñada' },
    { word: 'sapalla', translation: 'Viudo/Viuda' },
    { word: 'mamay', translation: 'Tía' },
];

const roulette_data = [
    { spanish: 'Suelo', kichwa: 'Allpa' },
    { spanish: 'Rodilla', kichwa: 'Kunkuri' },
    { spanish: 'Nuera', kichwa: 'Kachun' },
    { spanish: 'Leer', kichwa: 'Killkakatina' },
    { spanish: 'Alumno', kichwa: 'Yachakuk' },
];

const GamesBasicModule3 = () => {
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

export default GamesBasicModule3;
