// src/components/Module1.jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HangmanGame from '../ui/HangmanGame';
import MatchGame from '../ui/MatchGame';
import ImageWordMatchGame from '../ui/ImageWordMatchGame';
import JuegoCompletarFrases from '../ui/JuegoCompletarFrases';
import RuletaGame from '../ui/RuletaGame';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const ahorcadoDataModule1 = [
    { word: 'shuk', translation: 'uno' },
    { word: 'ishkay', translation: 'dos' },
    { word: 'kimsa', translation: 'tres' },
    { word: 'chusku', translation: 'cuatro' },
    { word: 'pichka', translation: 'cinco' },
];

const matchDataModule1 = [
    { kichwa: "tutamanta mikuna", spanish: "desayuno", image: "https://img.freepik.com/vector-premium/dibujos-animados-delicioso-desayuno-sabroso_24640-53952.jpg?w=1060" },
    { kichwa: "chawpi puncha mikuna", spanish: "almuerzo", image: "https://i.pinimg.com/originals/fa/23/de/fa23deb5bc1d50dbbc1d91f97283f8b4.jpg" },
    { kichwa: "chishimanta mikuna", spanish: "merienda/cena", image: "https://img.freepik.com/vector-gratis/ilustraciones-comida-kawaii-dibujadas-mano_23-2149415600.jpg" },
    { kichwa: "aycha", spanish: "carne", image: "https://static.vecteezy.com/system/resources/previews/014/296/829/non_2x/steak-food-icon-cartoon-pork-meat-vector.jpg" },
    { kichwa: "kachi", spanish: "sal", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-sal-dibujada-mano_52683-131168.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716854400&semt=ais_user" },
    { kichwa: "haku", spanish: "harina", image: "https://cdn-icons-png.flaticon.com/512/817/817293.png" },
];


const unirDataModule1 = [
    { kichwa: "allku", spanish: "perro", image: "https://img.freepik.com/vector-premium/lindo-vector-caricatura-perro-cachorro-sabueso_549857-8253.jpg?w=360" },
    { kichwa: "misi", spanish: "gato", image: "https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg?size=338&ext=jpg&ga=GA1.1.34264412.1717545600&semt=ais_user" },
    { kichwa: "atallpa", spanish: "gallina", image: "https://st2.depositphotos.com/1967477/8228/v/450/depositphotos_82289790-stock-illustration-chicken-hen-waving-hand.jpg" },
    { kichwa: "kulta", spanish: "pato", image: "https://img.freepik.com/vector-premium/pato-dibujos-animados-lindo_160606-389.jpg" },
    { kichwa: "kuy", spanish: "cuy", image: "https://st5.depositphotos.com/11953928/65218/v/450/depositphotos_652183978-stock-illustration-fluffy-rodent-hamster-sitting-icon.jpg" },
    { kichwa: "kuchi", spanish: "chancho", image: "https://img.freepik.com/vector-premium/cerdo-feliz-dibujos-animados-aislado-sobre-fondo-blanco_29190-2671.jpg" },
    { kichwa: "ukucha", spanish: "ratón", image: "https://img.freepik.com/vector-gratis/lindo-ratoncito-personaje-dibujos-animados-orejas-grandes_1308-133011.jpg" },
    { kichwa: "piki", spanish: "pulga", image: "https://st.depositphotos.com/1967477/3507/v/450/depositphotos_35078763-stock-illustration-flea-cartoon.jpg" },
    { kichwa: "wallinku", spanish: "conejo", image: "https://img.freepik.com/vector-premium/conejo-feliz-dibujos-animados-zanahoria_29190-8319.jpg" },
];


const sentenceDataModule1 = [
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

const dataRuletaModule2 = [
    { spanish: 'pato', kichwa: 'kulta' },
    { spanish: 'cuy', kichwa: 'kuy' },
    { spanish: 'gallina', kichwa: 'atallpa' },
    { spanish: 'ratón', kichwa: 'ukucha' },
    { spanish: 'pulga', kichwa: 'piki' },
    { spanish: 'conejo', kichwa: 'wallinku' },
    { spanish: 'perro', kichwa: 'allku' },
    { spanish: 'Gato', kichwa: 'misi' },
];

const Module1 = () => {
    const navigation = useNavigation();
    const [currentGame, setCurrentGame] = useState(0);

    const games = [


        <HangmanGame key="hangman" words={ahorcadoDataModule1} helpText="¡Bienvenido al Ahorcado! Debes adivinar las letras de la palabra secreta. Si te equivocas 6 veces, ¡el muñequito se colgará! ¡Piensa rápido y diviértete!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <JuegoCompletarFrases key="frases" data={sentenceDataModule1} helpText="¡Hola pequeño aventurero! En este juego debes completar las frases en kichwa. Arrastra la palabra correcta y colócala en el espacio vacío para formar la frase perfecta. ¡Diviertete aprendiendo mientras juegas!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <MatchGame key="match" data={matchDataModule1} helpText="¡Hola, pequeño aventurero! En este juego debes emparejar las cartas. Encuentra las imágenes que son iguales y haz clic en ellas. ¡Recuerda bien las cartas y diviértete encontrando todos los pares!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <ImageWordMatchGame key="matching" data={unirDataModule1} helpText="¡Bienvenido a la aventura! En este juego debes unir las imágenes con su nombre en kichwa. Mira con atención los dibujos y selecciona la palabra correcta que lo describe. ¡A divertirse mientras aprendes kichwa!"
            onNext={() => setCurrentGame(currentGame + 1)} />,
        <RuletaGame key="ruleta" data={dataRuletaModule2} helpText="¡Hola, pequeño aventurero! En este juego debes girar la ruleta y adivinar la palabra en kichwa. ¡Diviértete aprendiendo mientras juegas!"
            onNext={() => navigation.navigate('Game1')} />,
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

export default Module1;


