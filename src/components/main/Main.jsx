// src/components/Main.jsx
import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, TouchableWithoutFeedback, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/globalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { ButtonLevelsInicio } from '../ui/buttons/ButtonLevelsInicio';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { CardDefault } from '../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../headers/ProgressCircleWithTophies';

import { ImageContainer } from '../ui/imageContainers/ImageContainer';

import { FloatingHumu } from '../animations/FloatingHumu';
import { FontAwesome } from '@expo/vector-icons';
import { ComicBubble } from '../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../ui/buttons/AccordionDefault';
import AsyncStorage from '@react-native-async-storage/async-storage';


const numberData = [
    { number: "1000", kichwa: "shuk waranka", spanish: "mil" },
    { number: "1001", kichwa: "shuk waranka shuk", spanish: "mil uno" },
    { number: "1010", kichwa: "shuk waranka chunka", spanish: "mil diez" },
    { number: "1100", kichwa: "shuk waranka patsak", spanish: "mil cien" },
    { number: "1200", kichwa: "shuk waranka ishkay patsak", spanish: "mil doscientos" },
    { number: "2000", kichwa: "ishkay waranka", spanish: "dos mil" },
    { number: "3000", kichwa: "kimsa waranka", spanish: "tres mil" },
    { number: "4000", kichwa: "chunka waranka", spanish: "cuatro mil" },
    { number: "5000", kichwa: "pichka waranka", spanish: "cinco mil" },
    { number: "10000", kichwa: "chunka waranka", spanish: "diez mil" },
    { number: "20000", kichwa: "ishkay chunka waranka", spanish: "veinte mil" },
    { number: "100000", kichwa: "patsak waranka", spanish: "cien mil" },
    { number: "500000", kichwa: "pichka patsak waranka", spanish: "quinientos mil" },
    { number: "1000000", kichwa: "hunu", spanish: "millón" },
];

const curiosity_data = [
    {
        key: '1',
        title: 'Curiosidades - Para que sepas...',
        text: 'Los números son muy importantes para poder contar y ordenar las cosas a nuestro alrededor.',
        imagePath: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png',
    },
    {
        key: '2',
        title: 'Reglas - Sobre formar los números...',
        text: 'Recuerda que se usan combinaciones para formarlos, número "dos" es "ishkay", por ejemplo "dos mil dos" se diría "ishkay waranka iskhay pero cuando estamos en".',
        imagePath: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png',
    },
];

const FlipCard = ({ item }) => {
    const [flipped, setFlipped] = useState(false);


    const rotateY = useSharedValue(0);

    const animatedStyleFront = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value}deg` }],
    }));

    const animatedStyleBack = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value + 180}deg` }],
    }));

    const handleFlip = () => {
        rotateY.value = withTiming(flipped ? 0 : 180, { duration: 300 });
        setFlipped(!flipped);
    };

    return (
        <TouchableWithoutFeedback onPress={handleFlip}>
            <View style={styles.flipCard}>
                <Animated.View style={[styles.flipCardInner, styles.flipCardFront, animatedStyleFront]}>
                    <Text style={styles.numberText}>{item.number}</Text>
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <Text style={styles.translationLabel}>Español:</Text>
                    <Text style={styles.spanishText}>{item.spanish}</Text>
                    <Text style={styles.translationLabel}>Kichwa:</Text>
                    <Text style={styles.kichwaText}>{item.kichwa}</Text>

                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const Main = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);

    const toggleAccordion = (key) => {
        if (activeAccordion === key) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(key);
        }
    };

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_Food_completed', 'true');
            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };
    const navigation = useNavigation();
    const progress = 0.75;

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
        >
            <StatusBar barStyle="default" backgroundColor="#5B4D28" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="intermedio" />

                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Los Números" >
                        <Text style={styles.cardContent}>
                            ¡Hola amigos! Bienvenidos a una nueva aventura llena de aprendizaje.{"\n\n"}
                            Hoy aprenderemos más sobre los números en Kichwa.{"\n\n"}
                            Aquí verás tarjetas que te mostrarán los números en Kichwa, acompañados de su traducción en español.{"\n\n"}
                            ¿Estás listo para contar en Kichwa? ¡Vamos a empezar!
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {numberData.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>

                    {curiosity_data.map((item) => (
                        <AccordionDefault
                            key={item.key}
                            title={item.title}
                            isOpen={activeAccordion === item.key}
                            onPress={() => toggleAccordion(item.key)}
                        >
                            <View style={styles.curiositiesContent}>
                                <FloatingHumu >
                                    <ImageContainer uri={item.imagePath} style={styles.imageModal} />
                                </FloatingHumu>
                                <ComicBubble
                                    text={item.text}
                                    arrowDirection="left"
                                />
                            </View>
                        </AccordionDefault>
                    ))}
                </View>
                {showHelp && (
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={showHelp}
                        onRequestClose={() => toggleHelpModal()}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <View style={styles.helpModalContent}>
                                    <FloatingHumu >
                                        <ImageContainer uri={'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png'} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en cada una las tarjetas para ver su traducción.'
                                        arrowDirection="left"
                                    />
                                </View>
                                <View style={styles.buttonContainerAlphabet}>
                                    <TouchableOpacity onPress={() => toggleHelpModal()}>
                                        <View style={styles.buttonDefaultAlphabet}>
                                            <Text style={styles.buttonTextAlphabet}>Cerrar</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                )}
                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio" />
                    <ButtonDefault
                        title="Siguiente"
                        onPress={() => {
                            completeLevel(); // Completar el nivel actual
                            navigation.navigate('Food');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};



export default Main;








// import React, { useState, useEffect } from 'react';
// import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { styles } from '../../styles/globalStyles';
// import { CardDefault } from './CardDefault';
// import { WORDS_ENDPOINT } from "../../constants"

// const Main = () => {
//     const navigation = useNavigation();
//     const [numberData, setNumberData] = useState([]);

//     useEffect(() => {
//         fetch(WORDS_ENDPOINT)
//             .then(response => response.json())
//             .then(data => {
//                 setNumberData(data); // piloski API debe retornar un array similar al numberData
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const renderNumberRows = () => {
//         return numberData.map((item, index) => (
//             <View key={index} style={styles.tableRow}>
//                 <Text style={styles.tableCell}>{item.number}</Text>
//                 <Text style={styles.tableCell}>{item.kichwa}</Text>
//                 <Text style={styles.tableCell}>{item.spanish}</Text>
//             </View>
//         ));
//     };

//     return (
//         <View style={styles.container}>
//             <StatusBar barStyle="default" backgroundColor="#5B4D28" />
//             <ScrollView style={styles.scrollView}>
//                 <View style={styles.header}>
//                     <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
//                 </View>
//                 <View style={styles.header}>
//                     <Text style={styles.titleTema}>Los números</Text>
//                 </View>
//                 <View style={styles.body}>
//                     <CardDefault title="Números en Kichwa">
//                         <Text style={styles.cardContent}>Aprende los números en Kichwa y su correspondencia en español.</Text>
//                     </CardDefault>
//                     <CardDefault title="Vocabulario">
//                         <Text style={styles.vocabularyTitle}>Vocabulario</Text>
//                         <View style={styles.vocabularyTable}>
//                             <View style={styles.tableHeader}>
//                                 <Text style={styles.tableHeaderCell}>Número</Text>
//                                 <Text style={styles.tableHeaderCell}>Kichwa</Text>
//                                 <Text style={styles.tableHeaderCell}>Spanish</Text>
//                             </View>
//                             {renderNumberRows()}
//                         </View>
//                     </CardDefault>
//                 </View>
//                 <View style={styles.footer}>
//                     <TouchableWithoutFeedback onPress={() => { navigation.navigate('Food'); }}>
//                         <View style={styles.footerButton}>
//                             <Text style={styles.footerButtonText}>Siguiente</Text>
//                         </View>
//                     </TouchableWithoutFeedback>
//                 </View>
//             </ScrollView>
//         </View>
//     );
// }

// export default Main;
