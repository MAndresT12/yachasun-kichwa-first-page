// src/components/Module5.jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HangmanGame from '../ui/HangmanGame';
import MatchGame from '../ui/MatchGame';
import ImageWordMatchGame from '../ui/ImageWordMatchGame';
import JuegoCompletarFrases from '../ui/JuegoCompletarFrases';
import RuletaGame from '../ui/RuletaGame';
import { useNavigation } from '@react-navigation/native';

const ahorcadoDataModule5 = [
    { word: 'puncha', translation: 'Día' },
    { word: 'hunkay', translation: 'Semana' },
    { word: 'killa', translation: 'Mes' },
    { word: 'wata', translation: 'Año' },
    { kichwa: "chishi", spanish: "tarde" },
    { kichwa: "tuta", spanish: "noche" },
    { kichwa: "pakari", spanish: "amanecer" },
    { kichwa: "chawpi puncha", spanish: "medio día" },
    { kichwa: "chawpi tuta", spanish: "media noche" },
];

const matchDataModule5 = [
    { kichwa: "kaypi", spanish: "aquí", image: "https://img.freepik.com/foto-gratis/flechas-planas-moradas-amarillas-sobre-fondo-blanco_23-2148459934.jpg?semt=ais_hybrid" },
    { kichwa: "manya", spanish: "lado", image: "https://img.freepik.com/vector-gratis/hombre-casi-pisa-mina-terrestre_1308-127950.jpg?semt=ais_hybrid" },
    { kichwa: "chaypi", spanish: "allí", image: "https://img.freepik.com/psd-gratis/representacion-3d-viajes-turisticos_23-2149667949.jpg?semt=ais_hybrid" },
    { kichwa: "karu", spanish: "lejos", image: "https://img.freepik.com/vector-gratis/explorador-mochila_23-2148146728.jpg?t=st=1728426379~exp=1728429979~hmac=66649f1a102b8e327920096acbf6805e5ea43a65e787566c80e3fa9edddae185&w=740" },
    { kichwa: "suyu", spanish: "región", image: "https://img.freepik.com/foto-gratis/ubicacion-alfiler-dibujos-animados-3d_23-2151642222.jpg?semt=ais_hybrid" },
    { kichwa: "kuchulla", spanish: "cerca", image: "https://img.freepik.com/vector-gratis/dibujos-animados-chico-adolescente_24640-47216.jpg?semt=ais_hybrid" },

];


const unirDataModule5 = [
    { kichwa: "chinchaysuyu", spanish: "norte", image: "https://cdn-icons-png.flaticon.com/512/16/16797.png" },
    { kichwa: "kullasuyu", spanish: "sur", image: "https://cdn-icons-png.flaticon.com/512/16/16744.png" },
    { kichwa: "antisuyu", spanish: "este", image: "https://cdn-icons-png.flaticon.com/512/17/17259.png" },
    { kichwa: "kuntisuyu", spanish: "oeste", image: "https://cdn-icons-png.flaticon.com/512/17/17276.png" },
    { kichwa: "kuchulla", spanish: "cerca", image: "https://img.freepik.com/vector-gratis/dibujos-animados-chico-adolescente_24640-47216.jpg?semt=ais_hybrid" },
    { kichwa: "chawpi", spanish: "mitad", image: "https://img.freepik.com/vector-gratis/ilustracion-naranja-media-dibujada-mano_23-2150002669.jpg?semt=ais_hybrid" },
];


const sentenceDataModule5 = [
    {
        sentenceParts: ["Ñuña rima", " kani"],
        correctWords: ["shka"],
        options: ["manta", "mantami", "shka"],
        translation: "Yo he hablado",
    },
    {
        sentenceParts: ["Kikin rima", "kani"],
        correctWords: ["shka"],
        options: ["shka", "manta", "nki"],
        translation: "Usted ha hablado",
    },
    {
        sentenceParts: ["Pay rima", ""],
        correctWords: ["rka"],
        options: ["shamusha", "rka", "wan"],
        translation: "El habló",
    },
    {
        sentenceParts: ["Ñukanchik rirka", ""],
        correctWords: ["nchik"],
        options: ["nchik", "mantami", "kuna"],
        translation: "Nosotros fuimos",
    },
    {
        sentenceParts: ["Kankuna ri", "nkichik"],
        correctWords: ["rka"],
        options: ["awanmi", "shka", "rka"],
        translation: "Ustedes fueron",
    },
];


const dataRuletaModule5 = [
    { kichwa: "awaki", spanish: "lunes" },
    { kichwa: "awkari", spanish: "martes" },
    { kichwa: "chillay", spanish: "miércoles" },
    { kichwa: "kullka", spanish: "jueves" },
    { kichwa: "chaska", spanish: "viernes" },
    { kichwa: "wacha", spanish: "sábado" },
    { kichwa: "inti", spanish: "domingo" },
];

const Module5 = () => {
    const navigation = useNavigation();
    const [currentGame, setCurrentGame] = useState(0);

    const games = [


        <JuegoCompletarFrases key="frases" data={sentenceDataModule5} helpText="¡Hola pequeño aventurero! En este juego debes completar las frases en kichwa. Arrastra la palabra correcta y colócala en el espacio vacío para formar la frase perfecta. ¡Diviertete aprendiendo mientras juegas!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <MatchGame key="match" data={matchDataModule5} helpText="¡Hola, pequeño aventurero! En este juego debes emparejar las cartas. Encuentra las imágenes que son iguales y haz clic en ellas. ¡Recuerda bien las cartas y diviértete encontrando todos los pares!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <ImageWordMatchGame key="matching" data={unirDataModule5} helpText="¡Bienvenido a la aventura! En este juego debes unir las imágenes con su nombre en kichwa. Mira con atención los dibujos y selecciona la palabra correcta que lo describe. ¡A divertirse mientras aprendes kichwa!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <HangmanGame key="hangman" words={ahorcadoDataModule5} helpText="¡Bienvenido al Ahorcado! Debes adivinar las letras de la palabra secreta. Si te equivocas 6 veces, ¡el muñequito se colgará! ¡Piensa rápido y diviértete!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <RuletaGame key="ruleta" data={dataRuletaModule5} helpText="¡Hola, pequeño aventurero! En este juego debes girar la ruleta y adivinar la palabra en kichwa. ¡Diviértete aprendiendo mientras juegas!"
            onNext={() => navigation.navigate('Game1')} />,
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

export default Module5;


