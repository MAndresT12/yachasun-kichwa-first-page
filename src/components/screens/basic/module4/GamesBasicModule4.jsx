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
        sentenceParts: ["Ñukaka aycha", " yanuni"],
        correctWords: ["ta"],
        options: ["tak", "ta", "pak"],
        translation: "Cocino carne",
    },
    {
        sentenceParts: ["Kan", " wasi"],
        correctWords: ["pak"],
        options: ["pak", "ta", "ñuka"],
        translation: "Tu casa",
    },
    {
        sentenceParts: ["Ñukanchik tushu", ""],
        correctWords: ["nkapak"],
        options: ["nkapak", "pak", "ta"],
        translation: "Nos vamos a bailar",
    },
];

const match_game_data = [
    { kichwa: "/a/", spanish: "A a", image: "https://cdn-icons-png.flaticon.com/512/4552/4552937.png" },
    { kichwa: "/lla/-/sha/", spanish: "Ll ll", image: "https://st4.depositphotos.com/27130226/29524/i/450/depositphotos_295240468-stock-photo-delicious-letter-ll.jpg" },
    { kichwa: "/tsa/", spanish: "Ts ts", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { kichwa: "/cha/", spanish: "Ch ch", image: "https://dictaventura.com/wp-content/uploads/2023/08/DICTADOS-SILABAS-4.webp" },
    { kichwa: "/u/", spanish: "U u", image: "https://w7.pngwing.com/pngs/407/6/png-transparent-blue-letter-u-alphabet-letters-letters-and-numbers-icon.png" },
    { kichwa: "/ua/", spanish: "W w", image: "https://as1.ftcdn.net/v2/jpg/02/43/23/54/1000_F_243235478_RD65Ovg86uldR1t3p6aKfUtl7l52SvJj.jpg" },
];


const match_image_data = [
    { kichwa: "illak", spanish: "cero", image: "https://i.ytimg.com/vi/keR4Ppw57DY/maxresdefault.jpg" },
    { kichwa: "pichka", spanish: "cinco", image: "https://thumbs.dreamstime.com/z/divertido-naranja-n%C3%BAmero-cinco-personaje-de-dibujos-animados-que-muestra-la-mano-ilustraci%C3%B3n-vectorial-dibujada-aislada-sobre-220165915.jpg" },
    { kichwa: "chunka shuk", spanish: "once", image: "https://thumbs.dreamstime.com/b/n%C3%BAmero-once-animaci%C3%B3n-de-dibujos-animados-sobre-fondo-blanco-k-v%C3%ADdeo-gr%C3%A1ficos-movimiento-para-elementos-277161101.jpg" },
    { kichwa: "kimsaniki", spanish: "tercero", image: "https://cdn-icons-png.flaticon.com/512/1435/1435677.png" },
    { kichwa: "kanchis chunka", spanish: "setenta", image: "https://cdn-icons-png.flaticon.com/512/9061/9061673.png" },
    { kichwa: "ishkay chunkaniki", spanish: "vigésimo", image: "https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-20th-golden-anniversary-logo-png-image_4693977.png" },
    { kichwa: "patsak shuk", spanish: "ciento uno", image: "https://www.shutterstock.com/shutterstock/photos/1287903910/display_1500/stock-photo-gold-number-isolated-on-white-background-d-illustration-1287903910.jpg" },
    { kichwa: "pichka patsak", spanish: "quinientos", image: "https://i.pinimg.com/736x/f4/01/be/f401be73d9508c498e2a2dff05ad0f00.jpg" },
    { kichwa: "ishkay", spanish: "dos", image: "https://img.freepik.com/vector-premium/numero-dos-personaje-comico-kawaii_24911-19182.jpg?semt=ais_hybrid" },
];

const hangman_data = [
    { word: 'puka', translation: 'rojo' },
    { word: 'yanalla ankas', translation: 'azul marino' },
    { word: 'waylla', translation: 'verde' },
    { word: 'maywa', translation: 'morado' },
    { word: 'yurak', translation: 'blanco' },
];

const roulette_data = [
    { spanish: 'pato', kichwa: 'kulta' },
    { spanish: 'cuy', kichwa: 'kuy' },
    { spanish: 'gallina', kichwa: 'atallpa' },
    { spanish: 'ratón', kichwa: 'ukucha' },
    { spanish: 'pulga', kichwa: 'piki' },
    { spanish: 'conejo', kichwa: 'wallinku' },
    { spanish: 'perro', kichwa: 'allku' },
    { spanish: 'Gato', kichwa: 'misi' },
];

const GamesBasicModule4 = () => {
    const navigation = useNavigation();
    const [currentGame, setCurrentGame] = useState(0);

    const games = [
        <JuegoCompletarFrases key="frases" data={complete_sentence_data} helpText="¡Hola pequeño aventurero! En este juego debes completar las frases en kichwa. Arrastra la palabra correcta y colócala en el espacio vacío para formar la frase perfecta. ¡Diviertete aprendiendo mientras juegas!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <MatchGame key="match" data={match_game_data} helpText="¡Hola, pequeño aventurero! En este juego debes emparejar las cartas. Encuentra las imágenes que son iguales y haz clic en ellas. Si te equivocas, no te preocupes, las cartas se voltearán para que lo intentes de nuevo. ¡Recuerda bien las cartas y diviértete encontrando todos los pares!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <ImageWordMatchGame key="matching" data={match_image_data} helpText="¡Bienvenido a la aventura de palabras y dibujos! En este juego debes unir las imágenes con su nombre en kichwa. Mira con atención los dibujos y selecciona la palabra correcta que lo describe. Si te equivocas, ¡no pasa nada! Sigue jugando y aprende cada vez más. ¡A divertirse mientras aprendes kichwa!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <HangmanGame key="hangman" words={hangman_data} helpText="¡Bienvenido al Ahorcado! Debes adivinar las letras de la palabra secreta. Si te equivocas 6 veces, ¡el muñequito se colgará! ¡Piensa rápido y diviértete!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <RuletaGame key="ruleta" data={roulette_data} helpText="¡Hola, pequeño aventurero! En este juego debes girar la ruleta y adivinar la palabra en kichwa. ¡Diviértete aprendiendo mientras juegas!"
            onNext={() => navigation.navigate('EvaluationBasicModule4')} />,
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
