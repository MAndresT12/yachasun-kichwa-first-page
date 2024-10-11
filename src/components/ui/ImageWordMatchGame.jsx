// src/components/ImageWordMatchGame.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Image, TouchableWithoutFeedback, Modal } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../../../styles/globalStyles';
import { ComicBubble } from './bubbles/ComicBubble';
import { FloatingHumu } from '../animations/FloatingHumu';
import { ImageContainer } from './imageContainers/ImageContainer';
import { ButtonDefault } from './buttons/ButtonDefault';
// Función para generar un color aleatorio claro
const getRandomLightColor = () => {
    const r = Math.floor(Math.random() * 156) + 100; // Valores entre 100 y 255 para asegurar que el color sea claro
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;
    return `rgb(${r},${g},${b})`;
};

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const ImageWordMatchGame = ({ data, onNext, helpText }) => {
    const [images, setImages] = useState([]);
    const [words, setWords] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedWord, setSelectedWord] = useState(null);
    const [matches, setMatches] = useState([]);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [matchColors, setMatchColors] = useState({});
    const [showHelp, setShowHelp] = useState(false);  // Estado para mostrar la ayuda del juego

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

            <View style={stylesGame.titleContainer}>
                <Text style={stylesGame.title}>Empareja las Imágenes con las Palabras</Text>

            </View>
            {/* Icono de ayuda */}
            <TouchableOpacity style={stylesGame.helpIcon} onPress={() => setShowHelp(true)}>
                <FontAwesome name="question-circle" size={40} color="#fff" />
            </TouchableOpacity>
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
            {/* Modal de ayuda */}
            <Modal animationType="slide" transparent={true} visible={showHelp} onRequestClose={() => setShowHelp(false)}>
                <View style={stylesGame.modalContainer}>
                    <View style={stylesGame.modalContent}>
                        <View style={styles.helpModalContent}>
                            <FloatingHumu >
                                <ImageContainer path={require('../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                            </FloatingHumu>
                            <ComicBubble
                                text={helpText}
                                arrowDirection="left"
                            />
                        </View>
                        <View style={styles.buttonContainerAlphabet}>
                            <TouchableOpacity onPress={() => setShowHelp(false)}>
                                <View style={styles.buttonDefaultAlphabet}>
                                    <Text style={styles.buttonTextAlphabet}>Cerrar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={stylesGame.contentContainer}>
                            <Image source={require('../../../assets/images/humu/humu-talking.png')} style={stylesGame.imageModal} />
                            <View style={stylesGame.speechBubble}>
                                <Text style={stylesGame.bubbleText}>{helpText}</Text>
                                <View style={stylesGame.bubbleTail} />
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => setShowHelp(false)}>
                            <Text style={stylesGame.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </Modal>
            {showNextButton && (
                <ButtonDefault label="Siguiente" onPress={onNext} />

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
        // backgroundColor: '#18a7ac',
    },
    titleContainer: {
        position: 'relative',  // Permite que el icono esté en posición absoluta respecto al contenedor
        alignItems: 'center',  // Centra el contenido horizontalmente dentro del contenedor
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',  // Centra el texto
        paddingHorizontal: 30,  // Deja espacio para el icono
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
    helpIcon: {
        position: 'absolute',  // Posición absoluta respecto al contenedor
        top: 20,
        right: 20,
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 330,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageModal: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
    },
    speechBubble: {
        marginLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#ddd',
        padding: 15,
        maxWidth: '70%',
        position: 'relative',
    },
    bubbleText: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
    bubbleTail: {
        position: 'absolute',
        left: -20,
        top: '50%',
        width: 0,
        height: 0,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderRightWidth: 20,
        borderStyle: 'solid',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#ddd',
    },
    closeButtonText: {
        marginTop: 20,
        color: '#822929',
        fontSize: 18,
    },
    nextButtonText: {
        color: '#822929',
        fontSize: 18,
        marginTop: 20,
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
