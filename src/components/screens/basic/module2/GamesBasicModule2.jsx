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
        sentenceParts: ["A", " puncha"],
        correctWords: ["lli"],
        options: ["lli", "yi", "lii"],
        translation: "Buenos días",
    },
    {
        sentenceParts: ["Imana", ""],
        correctWords: ["lla"],
        options: ["sha", "lla", "ña"],
        translation: "Hola, ¿Qué tal?",
    },
    {
        sentenceParts: ["Alli", " kani"],
        correctWords: ["mi"],
        options: ["vi", "yi", "mi"],
        translation: "Estoy bien",
    },
];

const match_game_data = [
    { kichwa: "Ñuka", spanish: "Yo", image: "https://st2.depositphotos.com/1001911/11544/v/380/depositphotos_115445586-stock-illustration-girl-pointing-at-herself.jpg" },
    { kichwa: "Kan", spanish: "Tú", image: "https://static6.depositphotos.com/1157310/657/v/600/depositphotos_6578873-stock-illustration-cartoon-angry-army-drill-sergeant.jpg" },
    { kichwa: "Kikin", spanish: "Usted (cortesía)", image: "https://st2.depositphotos.com/4323461/8433/v/600/depositphotos_84335620-stock-illustration-man-pointing-finger.jpg" },
    { kichwa: "Pay", spanish: "Él / Ella", image: "https://st.depositphotos.com/1373553/2467/v/600/depositphotos_24672577-stock-illustration-discrimination.jpg" },
    { kichwa: "Ñukanchik", spanish: "Nosotros", image: "https://st5.depositphotos.com/2419757/68585/v/600/depositphotos_685852348-stock-illustration-set-people-celebrate-win-goal.jpg" },
    { kichwa: "Kankuna", spanish: "Ustedes", image: "https://img.freepik.com/premium-vector/nonbinary-person-with-posters-with-pronouns_714607-47.jpg?w=740" },
    { kichwa: "Kikinkuna", spanish: "Ustedes (cortesía)", image: "https://img.freepik.com/free-vector/group-happy-smiling-people-looking-up-top-view-white-background-flat-vector-illustration_1284-78599.jpg?t=st=1737132584~exp=1737136184~hmac=b6265683b5f3c2579d96d995b5307876bf20f5292bbe064cd3011b9532894178&w=740" },
    { kichwa: "Paykuna", spanish: "Ellos / Ellas", image: "https://img.freepik.com/free-vector/group-concept-illustration_114360-8541.jpg?t=st=1737132533~exp=1737136133~hmac=1018c3fb0c53b92fd87dd4d7e23fc1cb6b04ecb81ee5f827d5e54db8385631ab&w=740" },
];


const match_image_data = [
    { kichwa: "Hatun tayta", spanish: "Abuelo", image: "https://img.freepik.com/free-vector/cute-grandfather-walking-with-cane-cartoon-vector-icon-illustration-people-health-icon-isolated_138676-6784.jpg?t=st=1737072532~exp=1737076132~hmac=df009ee28e52b3af883a272af2ceaecc7bcc3c8405b109edf0f9a8c39ee48174&w=740" },
    { kichwa: "Kusa", spanish: "Esposo", image: "https://img.freepik.com/free-vector/save-date-pink-background-with-cute-couple_23-2148048278.jpg?t=st=1737125128~exp=1737128728~hmac=7cfe898ffa9e27234739dac64271e678d8615a6ff01b0b4a9eeecc26de2ceef2&w=740" },
    { kichwa: "Churi", spanish: "Hijo", image: "https://img.freepik.com/free-vector/cute-father-son-walking-together-cartoon-vector-icon-illustration-people-holidays-isolated-flat_138676-5718.jpg?t=st=1737130404~exp=1737134004~hmac=c1e91f2585d6d84451ad4f0c9a6c28ba21519e586720729adf4340835ec06c08&w=740" },
    { kichwa: "Hatun ushushi", spanish: "Nieta", image: "https://img.freepik.com/free-vector/grandmother-grandchild-sharing-story_1308-165899.jpg?t=st=1737130447~exp=1737134047~hmac=34e17419aeab10059f69df3fc126c9d1a512e39465acfb12d584f04c3e60d003&w=740" },
    { kichwa: "Wawki", spanish: "Hermano", image: "https://img.freepik.com/free-vector/hand-drawn-siblings-illustration_23-2149604227.jpg?t=st=1737130504~exp=1737134104~hmac=cb376dc661fb0e3129e468b0858e3e17e28ffd5058cad159288cf6657033df8e&w=740" },
    { kichwa: "Mama", spanish: "Mamá", image: "https://img.freepik.com/free-vector/best-mom-ever_603843-3169.jpg?t=st=1737130569~exp=1737134169~hmac=50f5e05f52842c8956f2a0ab0fc63ae79b173f98e0ab3bd52be57c7f794837c3&w=996" },
];

const hangman_data = [
    { word: 'kawsankichu', translation: 'Hola, ¿Vives?' },
    { word: 'chishiyakunimi', translation: 'Estoy atardeciendo' },
    { word: 'shamushunn', translation: '¿Puedo entrar?' },
    { word: 'shamupaylla', translation: 'Ven no más' },
    { word: 'pakarishkanki', translation: '¡Has amanecido!' },
];

const roulette_data = [
    { spanish: 'Somos/Estamos', kichwa: 'kanchik' },
    { spanish: 'Soy/Estoy', kichwa: 'kani' },
    { spanish: 'Eres/Estás', kichwa: 'kanki' },
    { spanish: 'Gracias', kichwa: 'yupaychani' },
    { spanish: 'Son/Están', kichwa: 'kankichik' },
];

const GamesBasicModule2 = () => {
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
            onNext={() => navigation.navigate('EvaluationBasicModule2')} />,
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

export default GamesBasicModule2;
