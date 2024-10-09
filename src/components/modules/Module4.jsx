// src/components/Module4.jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HangmanGame from '../ui/HangmanGame';
import MatchGame from '../ui/MatchGame';
import ImageWordMatchGame from '../ui/ImageWordMatchGame';
import JuegoCompletarFrases from '../ui/JuegoCompletarFrases';
import RuletaGame from '../ui/RuletaGame';
import { useNavigation } from '@react-navigation/native';

const ahorcadoDataModule4 = [
    { word: 'kawitu', translation: 'cama' },
    { word: 'pacha', translation: 'sábana' },
    { word: 'sawna', translation: 'almohada' },
    { word: 'mantana', translation: 'alfombra' },
    { word: 'puñuna', translation: 'dormir' },
];

const matchDataModule4 = [
    { kichwa: "kallpana", spanish: "correr", image: "https://img.freepik.com/vector-gratis/etiqueta-engomada-personaje-dibujos-animados-nina-corriendo-sobre-fondo-blanco_1308-79976.jpg?semt=ais_hybrid" },
    { kichwa: "pukllana", spanish: "jugar", image: "https://img.freepik.com/vector-gratis/set-dibujado-mano-ninos-colores-jugando_23-2147607325.jpg?semt=ais_hybrid" },
    { kichwa: "shina", spanish: "hacer", image: "https://img.freepik.com/vector-gratis/concepto-taller-creativo-bricolaje_23-2148552121.jpg?semt=ais_hybrid" },
    { kichwa: "kayana", spanish: "llamar", image: "https://img.freepik.com/vector-gratis/hombre-negocios-gritando-megafono_23-2147511376.jpg?semt=ais_hybrid" },
    { kichwa: "yanuna", spanish: "cocinar", image: "https://img.freepik.com/vector-gratis/etiqueta-engomada-personaje-dibujos-animados-chica-chef-cocinando_1308-63960.jpg?semt=ais_hybrid" },
    { kichwa: "rina", spanish: "ir", image: "https://img.freepik.com/vector-gratis/personaje-dibujos-animados-simple-chico-activo_1308-101456.jpg?semt=ais_hybrid" },
];


const unirDataModule4 = [
    { kichwa: "ruku", spanish: "viejo (personas)", image: "https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-abuelos_1308-135128.jpg?semt=ais_hybrid" },
    { kichwa: "mawka", spanish: "viejo (objetos)", image: "https://img.freepik.com/vector-gratis/cartel-dibujos-animados-caballeros-hombres-ropa-estilo-antiguo-e-ilustracion-retro-auto-sepia-vectro_1284-78720.jpg?semt=ais_hybrid" },
    { kichwa: "maltun", spanish: "joven", image: "https://img.freepik.com/vector-gratis/muchacho-lindo-ejemplo-icono-vector-historieta-signo-paz-concepto-icono-moda-personas-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3946.jpg?semt=ais_hybrid" },
    { kichwa: "manka", spanish: "olla", image: "https://img.freepik.com/vector-gratis/sopa-olla-esta-hirviendo-estufa-gas_1308-76071.jpg?semt=ais_hybrid" },
    { kichwa: "pataku", spanish: "mesa", image: "https://img.freepik.com/vector-gratis/mesa-madera-taburetes-sobre-fondo-blanco_1308-72340.jpg?semt=ais_hybrid" },
    { kichwa: "nina", spanish: "fuego", image: "https://img.freepik.com/vector-gratis/coleccion-hogueras_23-2147608535.jpg?semt=ais_hybrid" },
    { kichwa: "wisha", spanish: "cuchara", image: "https://img.freepik.com/vector-gratis/diseno-etiqueta-equipo-cocina-cuchara-madera-aislado_1308-77190.jpg?semt=ais_hybrid" },
    { kichwa: "charichina", spanish: "tenedor", image: "https://img.freepik.com/foto-gratis/composicion-vajilla-ecologica_23-2148902934.jpg?semt=ais_hybrid" },
    { kichwa: "kuchuna", spanish: "cuchillo", image: "https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-cuchillo-flotante-concepto-icono-objeto-comida-aislado-vector-premium_138676-5784.jpg?semt=ais_hybrid" },

];


const sentenceDataModule4 = [
    {
        sentenceParts: ["Apyuka yanami ", ""],
        correctWords: ["kan"],
        options: ["kan", "anak", "pak"],
        translation: "El caballo es negro",
    },
    {
        sentenceParts: ["", " ka waminsimi kan"],
        correctWords: ["kuchi"],
        options: ["kuchi", "allku", "sisa"],
        translation: "El chancho es rosa",
    },
    {
        sentenceParts: ["Rasu", " yurakmi kan"],
        correctWords: ["ka"],
        options: ["shamusha", "wan", "ka"],
        translation: "La nieve es blanca",
    },
    {
        sentenceParts: ["Chillinaka ", "mi kan"],
        correctWords: ["kishpu"],
        options: ["kishpu", "mantami", "ka"],
        translation: "La naranja es naranja",
    },
];


const dataRuletaModule4 = [
    { spanish: 'Cobija', kichwa: 'katana' },
    { spanish: 'Soñar', kichwa: 'muskuna' },
    { spanish: 'Comer', kichwa: 'mikuni' },
    { spanish: 'Sucio', kichwa: 'mapa' },
    { spanish: 'Crudo', kichwa: 'chawa' },
    { spanish: 'Duro', kichwa: 'anak' },
    { spanish: 'Mushuk', kichwa: 'nuevo' },
    { spanish: 'Feliz', kichwa: 'kushi' },
];

const Module4 = () => {
    const navigation = useNavigation();
    const [currentGame, setCurrentGame] = useState(0);

    const games = [


        <JuegoCompletarFrases key="frases" data={sentenceDataModule4} helpText="¡Hola pequeño aventurero! En este juego debes completar las frases en kichwa. Arrastra la palabra correcta y colócala en el espacio vacío para formar la frase perfecta. ¡Diviertete aprendiendo mientras juegas!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <MatchGame key="match" data={matchDataModule4} helpText="¡Hola, pequeño aventurero! En este juego debes emparejar las cartas. Encuentra las imágenes que son iguales y haz clic en ellas. ¡Recuerda bien las cartas y diviértete encontrando todos los pares!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <ImageWordMatchGame key="matching" data={unirDataModule4} helpText="¡Bienvenido a la aventura! En este juego debes unir las imágenes con su nombre en kichwa. Mira con atención los dibujos y selecciona la palabra correcta que lo describe. ¡A divertirse mientras aprendes kichwa!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <HangmanGame key="hangman" words={ahorcadoDataModule4} helpText="¡Bienvenido al Ahorcado! Debes adivinar las letras de la palabra secreta. Si te equivocas 6 veces, ¡el muñequito se colgará! ¡Piensa rápido y diviértete!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <RuletaGame key="ruleta" data={dataRuletaModule4} helpText="¡Hola, pequeño aventurero! En este juego debes girar la ruleta y adivinar la palabra en kichwa. ¡Diviértete aprendiendo mientras juegas!"
            onNext={() => navigation.navigate('Game4')} />,
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


