import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HangmanGame from './HangmanGame';
import MatchGame from './MatchGame';
import { useNavigation } from '@react-navigation/native';
const wordsModule1 = [
    { word: 'shuk', translation: 'uno' },
    { word: 'ishkay', translation: 'dos' },
    { word: 'kimsa', translation: 'tres' },
    { word: 'chusku', translation: 'cuatro' },
    { word: 'pichka', translation: 'cinco' },
];

const foodModule1 = [
    { kichwa: "tutamanta mikuna", spanish: "desayuno", image: "https://img.freepik.com/vector-premium/dibujos-animados-delicioso-desayuno-sabroso_24640-53952.jpg?w=1060" },
    { kichwa: "chawpi puncha mikuna", spanish: "almuerzo", image: "https://i.pinimg.com/originals/fa/23/de/fa23deb5bc1d50dbbc1d91f97283f8b4.jpg" },
    { kichwa: "chishimanta mikuna", spanish: "merienda/cena", image: "https://img.freepik.com/vector-gratis/ilustraciones-comida-kawaii-dibujadas-mano_23-2149415600.jpg" },
    { kichwa: "aycha", spanish: "carne", image: "https://static.vecteezy.com/system/resources/previews/014/296/829/non_2x/steak-food-icon-cartoon-pork-meat-vector.jpg" },
    { kichwa: "kachi", spanish: "sal", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-sal-dibujada-mano_52683-131168.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716854400&semt=ais_user" },
    { kichwa: "haku", spanish: "harina", image: "https://cdn-icons-png.flaticon.com/512/817/817293.png" },
];
const Module1 = () => {
    const navigation = useNavigation();
    const [currentGame, setCurrentGame] = useState(0);

    const games = [
        <HangmanGame key="hangman" words={wordsModule1} onNext={() => setCurrentGame(currentGame + 1)} />,
        <MatchGame key="match" data={foodModule1} onNext={() => navigation.navigate('Game')} />,
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

export default Module1;
