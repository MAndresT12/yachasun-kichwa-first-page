// src/components/Module4.jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HangmanGame from '../ui/HangmanGame';
import MatchGame from '../ui/MatchGame';
import ImageWordMatchGame from '../ui/ImageWordMatchGame';
import JuegoCompletarFrases from '../ui/JuegoCompletarFrases';
import RuletaGame from '../ui/RuletaGame';
import { useNavigation } from '@react-navigation/native';

const ahorcadoDataModule2 = [
    { word: 'kayakaman', translation: 'Hasta mañana' },
    { word: 'taytaman', translation: 'A papi' },
    { word: 'imatatak', translation: '¿Qué?' },
    { word: 'maykantak', translation: '¿Cuál?' },
];

const matchDataModule2 = [
    { kichwa: "Maypitak", spanish: "¿Dónde, en dónde?", image: "https://cdn-icons-png.flaticon.com/512/10176/10176931.png" },
    { kichwa: "Pitak", spanish: "¿Quién? ¿Quién es?", image: "https://img.freepik.com/vector-gratis/ilustracion-dilema-etico_23-2148760320.jpg" },
    { kichwa: "Imatatak", spanish: "¿Qué?", image: "https://img.freepik.com/vector-gratis/nina-pensando-signo-interrogacion-llamadas_1308-94466.jpg" },
    { kichwa: "Imatak kay", spanish: "¿Qué es esto?", image: "https://img.freepik.com/vector-premium/joven-personaje-dibujos-animados-letrero-blanco-alegremente-nino-uniforme-escolar-que-presenta-vacio_101903-4074.jpg" },
    { kichwa: "Imatak chayka", spanish: "¿Qué es eso?", image: "https://png.pngtree.com/element_our/20190603/ourmid/pngtree-pointing-gesture-illustration-image_1436005.jpg" },
    { kichwa: "Maykantak", spanish: "¿Cuál?", image: "https://img.freepik.com/vector-gratis/hombre-dudando-sobre-direccion_1133-21.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid" },
];


const unirDataModule2 = [
    { kichwa: "Maypitak", spanish: "¿Dónde, en dónde?", image: "https://cdn-icons-png.flaticon.com/512/10176/10176931.png" },
    { kichwa: "Pitak", spanish: "¿Quién? ¿Quién es?", image: "https://img.freepik.com/vector-gratis/ilustracion-dilema-etico_23-2148760320.jpg" },
    { kichwa: "Imatatak", spanish: "¿Qué?", image: "https://img.freepik.com/vector-gratis/nina-pensando-signo-interrogacion-llamadas_1308-94466.jpg" },
    { kichwa: "Imatak kay", spanish: "¿Qué es esto?", image: "https://img.freepik.com/vector-premium/joven-personaje-dibujos-animados-letrero-blanco-alegremente-nino-uniforme-escolar-que-presenta-vacio_101903-4074.jpg" },
    { kichwa: "Imatak chayka", spanish: "¿Qué es eso?", image: "https://png.pngtree.com/element_our/20190603/ourmid/pngtree-pointing-gesture-illustration-image_1436005.jpg" },
    { kichwa: "Maykantak", spanish: "¿Cuál?", image: "https://img.freepik.com/vector-gratis/hombre-dudando-sobre-direccion_1133-21.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid" },
];


const sentenceDataModule2 = [
    {
        sentenceParts: ["Ñukaka chay urku", " kani"],
        correctWords: ["mantami"],
        options: ["manta", "mantami", "pak"],
        translation: "Yo soy de ese cerro",
    },
    {
        sentenceParts: ["San Pablo Urku llakta", ""],
        correctWords: ["manta"],
        options: ["wan", "pak", "manta"],
        translation: "De San Pablo Urku",
    },
    {
        sentenceParts: ["Ñukaka kayakamammi ", ""],
        correctWords: ["shamusha"],
        options: ["shamusha", "shamurka", "wan"],
        translation: "Vendré mañana",
    },
    {
        sentenceParts: ["Antawa shamunkaka", " shuyasha"],
        correctWords: ["man"],
        options: ["wan", "mantami", "man"],
        translation: "Esperaré hasta que venga el carro",
    },
    {
        sentenceParts: ["Ñukapa mam", " shamurkani"],
        correctWords: ["awanmi"],
        options: ["awanmi", "mantami", "pak"],
        translation: "Yo vine con mi mamá",
    },
    {
        sentenceParts: ["Miswanchu pukllarka", ""],
        correctWords: ["wan"],
        options: ["pak", "wan", "manta"],
        translation: "¿Jugaste con el gato?",
    },
    {
        sentenceParts: ["Ñukaka mana", " shamurkachu"],
        correctWords: ["wan"],
        options: ["manta", "wan", "pak"],
        translation: "No, yo no vine",
    },
];


const dataRuletaModule2 = [
    { spanish: '¿Qué?', kichwa: 'Imatatak' },
    { spanish: '¿Cuál?', kichwa: 'Maykantak' },
    { spanish: 'Comer', kichwa: 'mikuni' },
    { spanish: 'Trabajar', kichwa: 'llamkanki' },
    { spanish: '¿Quién?', kichwa: 'Pitak' },
    { spanish: '¿Dónde?', kichwa: 'Maypitak' },
    { spanish: 'Por mí', kichwa: 'Ñukamanta' },
    { spanish: '¿Cuántos?', kichwa: 'Mashnakunatak' },
];

const Module4 = () => {
    const navigation = useNavigation();
    const [currentGame, setCurrentGame] = useState(0);

    const games = [


        <JuegoCompletarFrases key="frases" data={sentenceData} helpText="¡Hola pequeño aventurero! En este juego debes completar las frases en kichwa. Arrastra la palabra correcta y colócala en el espacio vacío para formar la frase perfecta. ¡Diviertete aprendiendo mientras juegas!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <MatchGame key="match" data={foodModule1} helpText="¡Hola, pequeño aventurero! En este juego debes emparejar las cartas. Encuentra las imágenes que son iguales y haz clic en ellas. ¡Recuerda bien las cartas y diviértete encontrando todos los pares!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <ImageWordMatchGame key="matching" data={animalsModule1} helpText="¡Bienvenido a la aventura! En este juego debes unir las imágenes con su nombre en kichwa. Mira con atención los dibujos y selecciona la palabra correcta que lo describe. ¡A divertirse mientras aprendes kichwa!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <HangmanGame key="hangman" words={wordsModule1} helpText="¡Bienvenido al Ahorcado! Debes adivinar las letras de la palabra secreta. Si te equivocas 6 veces, ¡el muñequito se colgará! ¡Piensa rápido y diviértete!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <RuletaGame key="ruleta" data={dataRuleta} helpText="¡Hola, pequeño aventurero! En este juego debes girar la ruleta y adivinar la palabra en kichwa. ¡Diviértete aprendiendo mientras juegas!"
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

export default Module4;


