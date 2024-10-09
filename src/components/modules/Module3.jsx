// src/components/Module3.jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HangmanGame from '../ui/HangmanGame';
import MatchGame from '../ui/MatchGame';
import ImageWordMatchGame from '../ui/ImageWordMatchGame';
import JuegoCompletarFrases from '../ui/JuegoCompletarFrases';
import RuletaGame from '../ui/RuletaGame';
import { useNavigation } from '@react-navigation/native';
const ahorcadoDataModule3 = [
    { word: 'chaka', translation: 'Puente' },
    { word: 'antawa', translation: 'Carro, camioneta' },
    { word: 'antara', translation: 'Bus' },
    { word: 'ñan', translation: 'Calle' },
];

const matchDataModule3 = [
    { kichwa: "Killkakatina", spanish: "leer", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dia-mundial-libro_23-2148871666.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid" },
    { kichwa: "Nina", spanish: "decir", image: "https://img.freepik.com/vector-gratis/hombre-negocios-gritando-megafono_23-2147511376.jpg?semt=ais_hybrid" },
    { kichwa: "Yachana", spanish: "saber", image: "https://img.freepik.com/vector-gratis/joven-cientifico-inteligente_1308-82363.jpg?semt=ais_hybrid" },
    { kichwa: "Apana", spanish: "llevar", image: "https://img.freepik.com/vector-gratis/hombre-feliz-corriendo-caja-carton_23-2147673754.jpg?semt=ais_hybrid" },
    { kichwa: "Purina", spanish: "caminar", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-caminantes-dibujados-mano_23-2150818427.jpg?semt=ais_hybrid" },
    { kichwa: "Killkana", spanish: "escribir", image: "https://img.freepik.com/vector-gratis/etiqueta-engomada-personaje-dibujos-animados-nina-escribiendo-papel-blanco_1308-67895.jpg?semt=ais_hybrid" },
];


const unirDataModule3 = [
    { kichwa: "hatun", spanish: "grande, alto", image: "https://img.freepik.com/vector-premium/jirafa-dibujos-animados-midiendo-su-altura-escala-sobre-fondo-beige_98402-204684.jpg?semt=ais_hybrid" },
    { kichwa: "kunuk", spanish: "caliente", image: "https://www.fundacioncnse.org/educa/bancolse/adjetivos/descargas/caliente-dibujo.jpg" },
    { kichwa: "llaki", spanish: "triste", image: "https://img.freepik.com/vector-gratis/icono-vectorial-dibujos-animados-nino-lindo-llorando-ilustracion-personas-icono-naturaleza-vector-plano-aislado_138676-13545.jpg?t=st=1728411765~exp=1728415365~hmac=7950346c8447fd37fc7bdc99221b91d5c0391d9af548bc7d7f4123ffdee18858&w=740" },
    { kichwa: "wira", spanish: "gordo", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-persona-gorda_23-2150464936.jpg?t=st=1728411801~exp=1728415401~hmac=a0141a54ced3123f40642782c05b9eac22779bcf6f73102b2e324680d2d2ed2d&w=740" },
    { kichwa: "piña", spanish: "enojado", image: "https://img.freepik.com/vector-gratis/ilustracion-emoji-odio-diseno-plano_23-2151007709.jpg?t=st=1728411784~exp=1728415384~hmac=286746f90a544d5a1c0dbc67ff9b25152f719114699a153ff0d32c44b905a2b9&w=740" },
    { kichwa: "sasa", spanish: "difícil", image: "https://previews.123rf.com/images/izakowski/izakowski1006/izakowski100600070/7165754-chica-y-dif%C3%ADcil-prueba.jpg" },
    { kichwa: "tsala", spanish: "flaco, delgado", image: "https://fundacioncnse.org/educa/bancolse/adjetivos/descargas/delgado-dibujo.jpg" },
    { kichwa: "kushi", spanish: "feliz", image: "https://img.freepik.com/vector-gratis/ilustracion-dia-mundial-sonrisa-plana_23-2149121467.jpg?t=st=1728411751~exp=1728415351~hmac=5d291ccb943acee415fab86dac0bc27ab098963002e5f0367f8e97d547db0ce9&w=740" },

];


const sentenceDataModule3 = [
    {
        sentenceParts: ["Ñuka kuya", ""],
        correctWords: ["ni"],
        options: ["manta", "tak", "ni"],
        translation: "Yo amo",
    },
    {
        sentenceParts: ["Ñuka miku", ""],
        correctWords: ["kuni"],
        options: ["ni", "kuni", "na"],
        translation: "Yo estoy comiendo",
    },
    {
        sentenceParts: ["Paykuna miku", ""],
        correctWords: ["kunkuna"],
        options: ["kuni", "na", "kunkuna"],
        translation: "Ellos están comiendo",
    },
    {
        sentenceParts: ["Kikinkuna tankapa", ""],
        correctWords: ["ychik"],
        options: ["ychik", "na", "man"],
        translation: "Empujen",
    },
];


const dataRuletaModule3 = [
    { spanish: 'Carro', kichwa: 'Antawa' },
    { spanish: 'Barco', kichwa: 'wanpuna' },
    { spanish: 'Comer', kichwa: 'mikuni' },
    { spanish: 'Edificio', kichwa: 'hatun wasi' },
    { spanish: 'Tren', kichwa: 'antakuru' },
    { spanish: 'Radio', kichwa: 'uyachik anta' },
    { spanish: 'Televisión', kichwa: 'rikuchik anta' },
    { spanish: 'Teléfono', kichwa: 'Karuyari anta' },
];

const Module3 = () => {
    const navigation = useNavigation();
    const [currentGame, setCurrentGame] = useState(0);

    const games = [


        <JuegoCompletarFrases key="frases" data={sentenceDataModule3} helpText="¡Hola pequeño aventurero! En este juego debes completar las frases en kichwa. Arrastra la palabra correcta y colócala en el espacio vacío para formar la frase perfecta. ¡Diviertete aprendiendo mientras juegas!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <MatchGame key="match" data={matchDataModule3} helpText="¡Hola, pequeño aventurero! En este juego debes emparejar las cartas. Encuentra las imágenes que son iguales y haz clic en ellas. ¡Recuerda bien las cartas y diviértete encontrando todos los pares!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <ImageWordMatchGame key="matching" data={unirDataModule3} helpText="¡Bienvenido a la aventura! En este juego debes unir las imágenes con su nombre en kichwa. Mira con atención los dibujos y selecciona la palabra correcta que lo describe. ¡A divertirse mientras aprendes kichwa!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <HangmanGame key="hangman" words={ahorcadoDataModule3} helpText="¡Bienvenido al Ahorcado! Debes adivinar las letras de la palabra secreta. Si te equivocas 6 veces, ¡el muñequito se colgará! ¡Piensa rápido y diviértete!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <RuletaGame key="ruleta" data={dataRuletaModule3} helpText="¡Hola, pequeño aventurero! En este juego debes girar la ruleta y adivinar la palabra en kichwa. ¡Diviértete aprendiendo mientras juegas!"
            onNext={() => navigation.navigate('Game3')} />,
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

export default Module3;


