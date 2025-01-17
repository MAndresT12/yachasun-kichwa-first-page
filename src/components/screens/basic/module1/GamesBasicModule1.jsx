import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import JuegoCompletarFrases from '../../../ui/JuegoCompletarFrases';
import MatchGame from '../../../ui/MatchGame';
import ImageWordMatchGame from '../../../ui/ImageWordMatchGame';
import HangmanGame from '../../../ui/HangmanGame';
import RuletaGame from '../../../ui/RuletaGame';

const complete_sentence_data = [
    {
        sentenceParts: ["Chawa An", ""],
        correctWords: ["kas"],
        options: ["cish", "kos", "kas"],
        translation: "Celeste",
    },
    {
        sentenceParts: ["Pu", "a"],
        correctWords: ["k"],
        options: ["k", "c", "ñ"],
        translation: "Rojo",
    },
    {
        sentenceParts: ["Chawa", " llu"],
        correctWords: ["Way"],
        options: ["Way", "Uay", "Pay"],
        translation: "Verde Claro",
    },
];

const match_game_data = [
    { kichwa: "/a/", spanish: "A a", image: "https://cdn-icons-png.flaticon.com/512/4552/4552937.png" },
    { kichwa: "/lla/-/sha/", spanish: "Ll ll", image: "https://st4.depositphotos.com/27130226/29524/i/450/depositphotos_295240468-stock-photo-delicious-letter-ll.jpg" },
    { kichwa: "/tsa/", spanish: "Ts ts", image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/a4f16f17522533.562bb204018b8.jpg" },
    { kichwa: "/cha/", spanish: "Ch ch", image: "https://dictaventura.com/wp-content/uploads/2023/08/DICTADOS-SILABAS-4.webp" },
    { kichwa: "/u/", spanish: "U u", image: "https://w7.pngwing.com/pngs/407/6/png-transparent-blue-letter-u-alphabet-letters-letters-and-numbers-icon.png" },
    { kichwa: "/ua/", spanish: "W w", image: "https://as1.ftcdn.net/v2/jpg/02/43/23/54/1000_F_243235478_RD65Ovg86uldR1t3p6aKfUtl7l52SvJj.jpg" },
];


const match_image_data = [
    { kichwa: "Illak", spanish: "Cero", image: "https://i.ytimg.com/vi/keR4Ppw57DY/maxresdefault.jpg" },
    { kichwa: "Pichka", spanish: "Cinco", image: "https://thumbs.dreamstime.com/z/divertido-naranja-n%C3%BAmero-cinco-personaje-de-dibujos-animados-que-muestra-la-mano-ilustraci%C3%B3n-vectorial-dibujada-aislada-sobre-220165915.jpg" },
    { kichwa: "Chunka shuk", spanish: "Once", image: "https://thumbs.dreamstime.com/b/n%C3%BAmero-once-animaci%C3%B3n-de-dibujos-animados-sobre-fondo-blanco-k-v%C3%ADdeo-gr%C3%A1ficos-movimiento-para-elementos-277161101.jpg" },
    { kichwa: "Kimsa", spanish: "Tres", image: "https://cdn-icons-png.flaticon.com/512/1435/1435677.png" },
    { kichwa: "Kanchis chunka", spanish: "Setenta", image: "https://cdn-icons-png.flaticon.com/512/9061/9061673.png" },
    { kichwa: "Ishkay chunka", spanish: "Veinte", image: "https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-20th-golden-anniversary-logo-png-image_4693977.png" },
    { kichwa: "Patsak shuk", spanish: "Ciento uno", image: "https://www.shutterstock.com/shutterstock/photos/1287903910/display_1500/stock-photo-gold-number-isolated-on-white-background-d-illustration-1287903910.jpg" },
    { kichwa: "Pichka patsak", spanish: "Quinientos", image: "https://i.pinimg.com/736x/f4/01/be/f401be73d9508c498e2a2dff05ad0f00.jpg" },
    { kichwa: "Ishkay", spanish: "Dos", image: "https://img.freepik.com/vector-premium/numero-dos-personaje-comico-kawaii_24911-19182.jpg?semt=ais_hybrid" },
];

const hangman_data = [
    { word: 'Puka', translation: 'Rojo' },
    { word: 'Yanalla ankas', translation: 'ASzul marino' },
    { word: 'Waylla', translation: 'Verde' },
    { word: 'Maywa', translation: 'Morado' },
    { word: 'Yurak', translation: 'Blanco' },
];

const roulette_data = [
    { spanish: 'Primero', kichwa: 'Shukniki' },
    { spanish: 'Segundo', kichwa: 'Ishkayniki' },
    { spanish: 'Tercero', kichwa: 'Kimsaniki' },
    { spanish: 'Duodécimo', kichwa: 'Chunka ishkayniki' },
    { spanish: 'Vigésimo', kichwa: 'Ishkay chunkaniki' },
];

const GamesBasicModule1 = () => {
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

export default GamesBasicModule1;
