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
    { number: "0", kichwa: "Illak", spanish: "Cero" },
    { number: "1", kichwa: "Shuk", spanish: "Uno" },
    { number: "2", kichwa: "Ishkay", spanish: "Dos" },
    { number: "3", kichwa: "Kimsa", spanish: "Tres" },
    { number: "4", kichwa: "Chusku", spanish: "Cuatro" },
    { number: "5", kichwa: "Pichka", spanish: "Cinco" },
    { number: "6", kichwa: "Sukta", spanish: "Seis" },
    { number: "7", kichwa: "Kanchis", spanish: "Siete" },
    { number: "8", kichwa: "Pusak", spanish: "Ocho" },
    { number: "9", kichwa: "Iskun", spanish: "Nueve" },
    { number: "10", kichwa: "Chunka", spanish: "Diez" },
    { number: "11", kichwa: "Chunka shuk", spanish: "Once" },
    { number: "12", kichwa: "Chunka ishkay", spanish: "Doce" },
    { number: "13", kichwa: "Chunka kimsa", spanish: "Trece" },
    { number: "14", kichwa: "Chunka chusku", spanish: "Catorce" },
    { number: "15", kichwa: "Chunka pichka", spanish: "Quince" },
    { number: "16", kichwa: "Chunka sukta", spanish: "Dieciséis" },
    { number: "17", kichwa: "Chunka kanchis", spanish: "Diecisiete" },
    { number: "18", kichwa: "Chunka pusak", spanish: "Dieciocho" },
    { number: "19", kichwa: "Chunka iskun", spanish: "Diecinueve" },
    { number: "20", kichwa: "Ishkay chunka", spanish: "Veinte" },
    { number: "30", kichwa: "Kimsa chunka", spanish: "Treinta" },
    { number: "40", kichwa: "Chusku chunka", spanish: "Cuarenta" },
    { number: "50", kichwa: "Pichka chunka", spanish: "Cincuenta" },
    { number: "60", kichwa: "Sukta chunka", spanish: "Sesenta" },
    { number: "70", kichwa: "Kanchis chunka", spanish: "Setenta" },
    { number: "80", kichwa: "Pusak chunka", spanish: "Ochenta" },
    { number: "90", kichwa: "Iskun chunka", spanish: "Noventa" },
    { number: "100", kichwa: "Patsak", spanish: "Cien" },
    { number: "101", kichwa: "Patsak shuk", spanish: "Ciento uno" },
    { number: "102", kichwa: "Patsak ishkay", spanish: "Ciento dos" },
    { number: "103", kichwa: "Patsak kimsa", spanish: "Ciento tres" },
    { number: "110", kichwa: "Patsak chunka", spanish: "Ciento diez" },
    { number: "120", kichwa: "Patsak ishkay chunka", spanish: "Ciento veinte" },
    { number: "130", kichwa: "Patsak kimsa chunka", spanish: "Ciento treinta" },
    { number: "140", kichwa: "Patsak chusku chunka", spanish: "Ciento cuarenta" },
    { number: "150", kichwa: "Patsak pichka chunka", spanish: "Ciento cincuenta" },
    { number: "160", kichwa: "Patsak sukta chunka", spanish: "Ciento sesenta" },
    { number: "170", kichwa: "Patsak kanchis chunka", spanish: "Ciento setenta" },
    { number: "180", kichwa: "Patsak pusak chunka", spanish: "Ciento ochenta" },
    { number: "190", kichwa: "Patsak iskun chunka", spanish: "Ciento noventa" },
    { number: "200", kichwa: "Ishkay patsak", spanish: "Doscientos" },
    { number: "300", kichwa: "Kimsa patsak", spanish: "Trescientos" },
    { number: "400", kichwa: "Chusku patsak", spanish: "Cuatrocientos" },
    { number: "500", kichwa: "Pichka patsak", spanish: "Quinientos" },
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
                            Aquí aprenderemos los primeros números de Español a Kichwa.{"\n\n"}
                            ¡Prepárate para tener un tour matemático!
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
