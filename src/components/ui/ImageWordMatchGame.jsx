// src/components/ImageWordMatchGame.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

// Función para generar un color aleatorio claro
const getRandomLightColor = () => {
    const r = Math.floor(Math.random() * 156) + 100; // Valores entre 100 y 255 para asegurar que el color sea claro
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;
    return `rgb(${r},${g},${b})`;
};

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const ImageWordMatchGame = ({ data, onNext }) => {
    const [images, setImages] = useState([]);
    const [words, setWords] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedWord, setSelectedWord] = useState(null);
    const [matches, setMatches] = useState([]);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [matchColors, setMatchColors] = useState({});

    useEffect(() => {
        resetGame();
    }, [data]);

    const resetGame = () => {
        const shuffledImages = shuffleArray([...data]);
        const shuffledWords = shuffleArray([...data]);
        setImages(shuffledImages);
        setWords(shuffledWords);
        setSelectedImage(null);
        setSelectedWord(null);
        setMatches([]);
        setShowConfetti(false);
        setShowNextButton(false);
        setMatchColors({});
    };

    const handleImagePress = (imageIndex) => {
        if (selectedWord !== null) {
            checkMatch(imageIndex, selectedWord);
        } else {
            setSelectedImage(imageIndex);
        }
    };

    const handleWordPress = (wordIndex) => {
        if (selectedImage !== null) {
            checkMatch(selectedImage, wordIndex);
        } else {
            setSelectedWord(wordIndex);
        }
    };

    const checkMatch = (imageIndex, wordIndex) => {
        if (images[imageIndex].kichwa === words[wordIndex].kichwa) {
            const color = getRandomLightColor(); // Generar un color claro aleatorio

            setMatches([...matches, { imageIndex, wordIndex }]);
            setMatchColors({
                ...matchColors,
                [matches.length]: color, // Asignar el color al match correspondiente
            });

            setSelectedImage(null);
            setSelectedWord(null);

            if (matches.length + 1 === data.length) {
                setShowConfetti(true);
                setShowNextButton(true);
                setTimeout(() => {
                    Alert.alert("¡Felicidades!", "Has emparejado todas las palabras e imágenes.");
                }, 500);
            }
        } else {
            Alert.alert("Incorrecto", "Inténtalo de nuevo.");
            setSelectedImage(null);
            setSelectedWord(null);
        }
    };

    return (
        <ScrollView contentContainerStyle={stylesGame.container}>
            <Text style={stylesGame.title}>Empareja las Imágenes con las Palabras</Text>
            <View style={stylesGame.gridContainer}>
                <View style={stylesGame.column}>
                    {images.map((item, index) => {
                        const match = matches.find(match => match.imageIndex === index);
                        const matchColor = match ? matchColors[matches.indexOf(match)] : '#ddd';
                        return (
                            <View key={index} style={stylesGame.itemRow}>
                                <TouchableOpacity
                                    style={[
                                        stylesGame.itemContainer,
                                        { backgroundColor: matchColor },
                                    ]}
                                    onPress={() => handleImagePress(index)}
                                >
                                    <Image source={{ uri: item.image }} style={stylesGame.image} />
                                    {match && <Text style={stylesGame.translationText}>{item.spanish}</Text>}
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>
                <View style={stylesGame.column}>
                    {words.map((item, index) => {
                        const match = matches.find(match => match.wordIndex === index);
                        const matchColor = match ? matchColors[matches.indexOf(match)] : '#ddd';
                        return (
                            <View key={index} style={stylesGame.itemRow}>
                                <TouchableOpacity
                                    style={[
                                        stylesGame.itemContainer,
                                        { backgroundColor: matchColor },
                                    ]}
                                    onPress={() => handleWordPress(index)}
                                >
                                    <Text style={stylesGame.text}>{item.kichwa}</Text>
                                    {match && <Text style={stylesGame.translationText}>{item.spanish}</Text>}
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>
            </View>
            <TouchableOpacity style={stylesGame.resetButton} onPress={resetGame}>
                <Text style={stylesGame.resetButtonText}>Reiniciar</Text>
            </TouchableOpacity>
            {showNextButton && (
                <TouchableOpacity style={stylesGame.nextButton} onPress={onNext}>
                    <Text style={stylesGame.nextButtonText}>Siguiente</Text>
                </TouchableOpacity>
            )}
            {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fadeOut />}
        </ScrollView>
    );
};

const stylesGame = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#18a7ac',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    itemContainer: {
        width: 100,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ddd',
        borderRadius: 10,
    },
    matchedItem: {
        backgroundColor: '#a5d6a7',
    },
    image: {
        width: 50,
        height: 50,
    },
    text: {
        fontSize: 16,
    },
    translationText: {
        fontSize: 14,
        color: '#333',
        marginTop: 5,
    },
    nextButton: {
        marginTop: 20,
        backgroundColor: '#822929',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    resetButton: {
        marginTop: 20,
        backgroundColor: '#005A9C',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    resetButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ImageWordMatchGame;





// //Incluido asignación de numeros en contenedores
// // src/components/ImageWordMatchGame.jsx
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
// import ConfettiCannon from 'react-native-confetti-cannon';

// // Función para generar un color aleatorio claro
// const getRandomLightColor = () => {
//     const r = Math.floor(Math.random() * 156) + 100; // Valores entre 100 y 255 para asegurar que el color sea claro
//     const g = Math.floor(Math.random() * 156) + 100;
//     const b = Math.floor(Math.random() * 156) + 100;
//     return `rgb(${r},${g},${b})`;
// };

// const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

// const ImageWordMatchGame = ({ data, onNext }) => {
//     const [images, setImages] = useState([]);
//     const [words, setWords] = useState([]);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [selectedWord, setSelectedWord] = useState(null);
//     const [matches, setMatches] = useState([]);
//     const [showConfetti, setShowConfetti] = useState(false);
//     const [showNextButton, setShowNextButton] = useState(false);
//     const [matchColors, setMatchColors] = useState({});

//     useEffect(() => {
//         resetGame();
//     }, [data]);

//     const resetGame = () => {
//         const shuffledImages = shuffleArray([...data]);
//         const shuffledWords = shuffleArray([...data]);
//         setImages(shuffledImages);
//         setWords(shuffledWords);
//         setSelectedImage(null);
//         setSelectedWord(null);
//         setMatches([]);
//         setShowConfetti(false);
//         setShowNextButton(false);
//         setMatchColors({});
//     };

//     const handleImagePress = (imageIndex) => {
//         if (selectedWord !== null) {
//             checkMatch(imageIndex, selectedWord);
//         } else {
//             setSelectedImage(imageIndex);
//         }
//     };

//     const handleWordPress = (wordIndex) => {
//         if (selectedImage !== null) {
//             checkMatch(selectedImage, wordIndex);
//         } else {
//             setSelectedWord(wordIndex);
//         }
//     };

//     const checkMatch = (imageIndex, wordIndex) => {
//         if (images[imageIndex].kichwa === words[wordIndex].kichwa) {
//             const newMatchNumber = matches.length + 1;
//             const color = getRandomLightColor(); // Generar un color claro aleatorio

//             setMatches([...matches, { imageIndex, wordIndex, matchNumber: newMatchNumber }]);
//             setMatchColors({
//                 ...matchColors,
//                 [newMatchNumber]: color, // Asignar el color al match correspondiente
//             });

//             setSelectedImage(null);
//             setSelectedWord(null);

//             if (newMatchNumber === data.length) {
//                 setShowConfetti(true);
//                 setShowNextButton(true);
//                 setTimeout(() => {
//                     Alert.alert("¡Felicidades!", "Has emparejado todas las palabras e imágenes.");
//                 }, 500);
//             }
//         } else {
//             Alert.alert("Incorrecto", "Inténtalo de nuevo.");
//             setSelectedImage(null);
//             setSelectedWord(null);
//         }
//     };

//     return (
//         <ScrollView contentContainerStyle={stylesGame.container}>
//             <Text style={stylesGame.title}>Empareja las Imágenes con las Palabras</Text>
//             <View style={stylesGame.gridContainer}>
//                 <View style={stylesGame.column}>
//                     {images.map((item, index) => {
//                         const match = matches.find(match => match.imageIndex === index);
//                         const matchColor = match ? matchColors[match.matchNumber] : '#ddd';
//                         return (
//                             <View key={index} style={stylesGame.itemRow}>
//                                 <TouchableOpacity
//                                     style={[
//                                         stylesGame.itemContainer,
//                                         { backgroundColor: matchColor },
//                                     ]}
//                                     onPress={() => handleImagePress(index)}
//                                 >
//                                     <Image source={{ uri: item.image }} style={stylesGame.image} />
//                                     {match && <Text style={stylesGame.translationText}>{item.spanish}</Text>}
//                                 </TouchableOpacity>
//                                 <View style={stylesGame.matchNumberContainer}>
//                                     {match && <Text style={stylesGame.matchNumber}>{match.matchNumber}</Text>}
//                                 </View>
//                             </View>
//                         );
//                     })}
//                 </View>
//                 <View style={stylesGame.column}>
//                     {words.map((item, index) => {
//                         const match = matches.find(match => match.wordIndex === index);
//                         const matchColor = match ? matchColors[match.matchNumber] : '#ddd';
//                         return (
//                             <View key={index} style={stylesGame.itemRow}>
//                                 <View style={stylesGame.matchNumberContainer}>
//                                     {match && <Text style={stylesGame.matchNumber}>{match.matchNumber}</Text>}
//                                 </View>
//                                 <TouchableOpacity
//                                     style={[
//                                         stylesGame.itemContainer,
//                                         { backgroundColor: matchColor },
//                                     ]}
//                                     onPress={() => handleWordPress(index)}
//                                 >
//                                     <Text style={stylesGame.text}>{item.kichwa}</Text>
//                                     {match && <Text style={stylesGame.translationText}>{item.spanish}</Text>}
//                                 </TouchableOpacity>
//                             </View>
//                         );
//                     })}
//                 </View>
//             </View>
//             <TouchableOpacity style={stylesGame.resetButton} onPress={resetGame}>
//                 <Text style={stylesGame.resetButtonText}>Reiniciar</Text>
//             </TouchableOpacity>
//             {showNextButton && (
//                 <TouchableOpacity style={stylesGame.nextButton} onPress={onNext}>
//                     <Text style={stylesGame.nextButtonText}>Siguiente</Text>
//                 </TouchableOpacity>
//             )}
//             {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fadeOut />}
//         </ScrollView>
//     );
// };

// const stylesGame = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 15,
//         backgroundColor: '#18a7ac',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     gridContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//     },
//     column: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     itemRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 10,
//     },
//     itemContainer: {
//         width: 100,
//         height: 90,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//         backgroundColor: '#ddd',
//         borderRadius: 10,
//     },
//     matchedItem: {
//         backgroundColor: '#a5d6a7',
//     },
//     image: {
//         width: 50,
//         height: 50,
//     },
//     text: {
//         fontSize: 16,
//     },
//     translationText: {
//         fontSize: 14,
//         color: '#333',
//         marginTop: 5,
//     },
//     matchNumberContainer: {
//         width: 30, // espacio para el número sin que se reorganice el container
//         alignItems: 'center',
//     },
//     matchNumber: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#000',
//     },
//     nextButton: {
//         marginTop: 20,
//         backgroundColor: '#822929',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 5,
//     },
//     nextButtonText: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     resetButton: {
//         marginTop: 20,
//         backgroundColor: '#005A9C',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 5,
//     },
//     resetButtonText: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default ImageWordMatchGame;
