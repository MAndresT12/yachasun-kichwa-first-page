import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { FontAwesome } from '@expo/vector-icons';

const first_number_data = [
    { number: "0", kichwa: "illak", spanish: "cero" },
    { number: "1", kichwa: "shuk", spanish: "uno" },
    { number: "2", kichwa: "ishkay", spanish: "dos" },
    { number: "3", kichwa: "kimsa", spanish: "tres" },
    { number: "4", kichwa: "chusku", spanish: "cuatro" },
    { number: "5", kichwa: "pichka", spanish: "cinco" },
    { number: "6", kichwa: "sukta", spanish: "seis" },
    { number: "7", kichwa: "kanchis", spanish: "siete" },
    { number: "8", kichwa: "pusak", spanish: "ocho" },
    { number: "9", kichwa: "iskun", spanish: "nueve" },
    { number: "10", kichwa: "chunka", spanish: "diez" },
    { number: "11", kichwa: "chunka shuk", spanish: "once" },
    { number: "12", kichwa: "chunka ishkay", spanish: "doce" },
    { number: "13", kichwa: "chunka kimsa", spanish: "trece" },
    { number: "14", kichwa: "chunka chusku", spanish: "catorce" },
    { number: "15", kichwa: "chunka pichka", spanish: "quince" },
    { number: "16", kichwa: "chunka sukta", spanish: "dieciséis" },
    { number: "17", kichwa: "chunka kanchis", spanish: "diecisiete" },
    { number: "18", kichwa: "chunka pusak", spanish: "dieciocho" },
    { number: "19", kichwa: "chunka iskun", spanish: "diecinueve" },
    { number: "20", kichwa: "ishkay chunka", spanish: "veinte" },
    { number: "30", kichwa: "kimsa chunka", spanish: "treinta" },
    { number: "40", kichwa: "chusku chunka", spanish: "cuarenta" },
    { number: "50", kichwa: "pichka chunka", spanish: "cincuenta" },
    { number: "60", kichwa: "sukta chunka", spanish: "sesenta" },
    { number: "70", kichwa: "kanchis chunka", spanish: "setenta" },
    { number: "80", kichwa: "pusak chunka", spanish: "ochenta" },
    { number: "90", kichwa: "iskun chunka", spanish: "noventa" },
    { number: "100", kichwa: "patsak", spanish: "cien" },
    { number: "101", kichwa: "patsak shuk", spanish: "ciento uno" },
    { number: "102", kichwa: "patsak ishkay", spanish: "ciento dos" },
    { number: "103", kichwa: "patsak kimsa", spanish: "ciento tres" },
    { number: "110", kichwa: "patsak chunka", spanish: "ciento diez" },
    { number: "120", kichwa: "patsak ishkay chunka", spanish: "ciento veinte" },
    { number: "130", kichwa: "patsak kimsa chunka", spanish: "ciento treinta" },
    { number: "140", kichwa: "patsak chusku chunka", spanish: "ciento cuarenta" },
    { number: "150", kichwa: "patsak pichka chunka", spanish: "ciento cincuenta" },
    { number: "160", kichwa: "patsak sukta chunka", spanish: "ciento sesenta" },
    { number: "170", kichwa: "patsak kanchis chunka", spanish: "ciento setenta" },
    { number: "180", kichwa: "patsak pusak chunka", spanish: "ciento ochenta" },
    { number: "190", kichwa: "patsak iskun chunka", spanish: "ciento noventa" },
    { number: "200", kichwa: "ishkay patsak", spanish: "doscientos" },
    { number: "300", kichwa: "kimsa patsak", spanish: "trescientos" },
    { number: "400", kichwa: "chusku patsak", spanish: "cuatrocientos" },
    { number: "500", kichwa: "pichka patsak", spanish: "quinientos" },
]

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
                    <Text style={styles.translationLabel}>Kichwa:</Text>
                    <Text style={styles.translationText}>{item.kichwa}</Text>
                    <Text style={styles.translationLabel}>Español:</Text>
                    <Text style={styles.translationText}>{item.spanish}</Text>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const FirstNumbers = () => {
    const [showHelp, setShowHelp] = useState(null);

    const navigation = useNavigation();

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#5B4D28" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Los Primeros Números</Text>
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Una aventura numérica">
                        <Text style={styles.cardContent}>
                            Aquí aprenderemos los primeros números de Español a Kichwa.{"\n\n"}¡Prepárate para tener un tour matemático!
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {first_number_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>
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
                                <ImageContainer path={require('../../../../../assets/images/humu/humu-talking.png')} style={styles.imageModal} />
                                <Text style={styles.modalText}>Presiona la tarjeta de un número (pintados en rojo) para ver su pronunciación en Kichwa.</Text>
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
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('ToCount')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default FirstNumbers;

// Previous code with counter for numbers
// const FirstNumbers = () => {
//     const navigation = useNavigation();
//     const [counter, setCounter] = useState(0);

//     const handleIncrease = () => {
//         setCounter((prevCounter) => (prevCounter + 1) % first_number_data.length);
//     };

//     const handleDecrease = () => {
//         setCounter((prevCounter) => (prevCounter - 1 + first_number_data.length) % first_number_data.length);
//     };

//     return (
//         <View style={styles.container}>
//             <StatusBar barStyle="default" backgroundColor="#5B4D28" />
//             <ScrollView style={styles.scrollView}>
//                 <View style={styles.header}>
//                     <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
//                 </View>
//                 <View style={styles.header}>
//                     <Text style={styles.titleTema}>Los primeros números</Text>
//                 </View>
//                 <View style={styles.body}>
//                     <CardDefault title="Primeros Números en Kichwa">
//                         <Text style={styles.cardContent}>Aprende los primeros números en Kichwa y su correspondencia en español. Usa los botones de más y menos para navegar entre los números</Text>
//                     </CardDefault>
//                     <Text style={styles.title}>Número Actual:</Text>
//                     <ImageContainer uri={first_number_data[counter].image} />
//                     <Text style={styles.title}>{first_number_data[counter].number} (temporal, poner demas fotos)</Text>
//                     <View>
//                         <Text style={styles.spanishText}>Español: {first_number_data[counter].spanish}</Text>
//                     </View>
//                     <View>
//                         <Text style={styles.kichwaText}>Kichwa: {first_number_data[counter].kichwa}</Text>
//                     </View>
//                     <View style={styles.row}>
//                         <ButtonDefault onPress={handleDecrease} styleButton={buttonStyles.buttonFirstNumbers} showLabel={false}>
//                             <ImageContainer uri="https://static.vecteezy.com/system/resources/previews/011/912/005/original/minus-sign-icon-free-png.png" style={imageStyles.iconImage} />
//                         </ButtonDefault>
//                         <ButtonDefault onPress={handleIncrease} styleButton={buttonStyles.buttonFirstNumbers} showLabel={false}>
//                             <ImageContainer uri="https://static.vecteezy.com/system/resources/previews/011/912/003/non_2x/plus-sign-icon-free-png.png" style={imageStyles.iconImage} />
//                         </ButtonDefault>
//                     </View>
//                 </View>
//                 <View style={styles.footer}>
//                     <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('Colors')} />
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };
