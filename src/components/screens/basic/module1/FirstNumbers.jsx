import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';

const images = {
    number0: require('../../../../../assets/images/basic/module1/numbers/number0.png'),
    number1: require('../../../../../assets/images/basic/module1/numbers/number1.png'),
    number2: require('../../../../../assets/images/basic/module1/numbers/number2.png'),
    number3: require('../../../../../assets/images/basic/module1/numbers/number3.png'),
    number4: require('../../../../../assets/images/basic/module1/numbers/number4.png'),
    number5: require('../../../../../assets/images/basic/module1/numbers/number5.png'),
    number6: require('../../../../../assets/images/basic/module1/numbers/number6.png'),
    number7: require('../../../../../assets/images/basic/module1/numbers/number7.png'),
    number8: require('../../../../../assets/images/basic/module1/numbers/number8.png'),
    number9: require('../../../../../assets/images/basic/module1/numbers/number9.png'),
    number10: require('../../../../../assets/images/basic/module1/numbers/number10.png'),
    number11: require('../../../../../assets/images/basic/module1/numbers/number11.png'),
    number12: require('../../../../../assets/images/basic/module1/numbers/number12.png'),
    number13: require('../../../../../assets/images/basic/module1/numbers/number13.png'),
    number14: require('../../../../../assets/images/basic/module1/numbers/number14.png'),
    number15: require('../../../../../assets/images/basic/module1/numbers/number15.png'),
    number16: require('../../../../../assets/images/basic/module1/numbers/number16.png'),
    number17: require('../../../../../assets/images/basic/module1/numbers/number17.png'),
    number18: require('../../../../../assets/images/basic/module1/numbers/number18.png'),
    number19: require('../../../../../assets/images/basic/module1/numbers/number19.png'),
    number20: require('../../../../../assets/images/basic/module1/numbers/number20.png'),
    number30: require('../../../../../assets/images/basic/module1/numbers/number30.png'),
    number40: require('../../../../../assets/images/basic/module1/numbers/number40.png'),
    number50: require('../../../../../assets/images/basic/module1/numbers/number50.png'),
    number60: require('../../../../../assets/images/basic/module1/numbers/number60.png'),
    number70: require('../../../../../assets/images/basic/module1/numbers/number70.png'),
    number80: require('../../../../../assets/images/basic/module1/numbers/number80.png'),
    number90: require('../../../../../assets/images/basic/module1/numbers/number90.png'),
    number100: require('../../../../../assets/images/basic/module1/numbers/number100.png'),
    number101: require('../../../../../assets/images/basic/module1/numbers/number101.png'),
    number102: require('../../../../../assets/images/basic/module1/numbers/number102.png'),
    number103: require('../../../../../assets/images/basic/module1/numbers/number103.png'),
    number110: require('../../../../../assets/images/basic/module1/numbers/number110.png'),
    number120: require('../../../../../assets/images/basic/module1/numbers/number120.png'),
    number130: require('../../../../../assets/images/basic/module1/numbers/number130.png'),
    number140: require('../../../../../assets/images/basic/module1/numbers/number140.png'),
    number150: require('../../../../../assets/images/basic/module1/numbers/number150.png'),
    number160: require('../../../../../assets/images/basic/module1/numbers/number160.png'),
    number170: require('../../../../../assets/images/basic/module1/numbers/number170.png'),
    number180: require('../../../../../assets/images/basic/module1/numbers/number180.png'),
    number190: require('../../../../../assets/images/basic/module1/numbers/number190.png'),
    number200: require('../../../../../assets/images/basic/module1/numbers/number200.png'),
    number300: require('../../../../../assets/images/basic/module1/numbers/number300.png'),
    number400: require('../../../../../assets/images/basic/module1/numbers/number400.png'),
    number500: require('../../../../../assets/images/basic/module1/numbers/number500.png'),
};

const first_number_data = [
    { numberImage: images.number0, kichwa: "Illak", spanish: "Cero" },
    { numberImage: images.number1, kichwa: "Shuk", spanish: "Uno" },
    { numberImage: images.number2, kichwa: "Ishkay", spanish: "Dos" },
    { numberImage: images.number3, kichwa: "Kimsa", spanish: "Tres" },
    { numberImage: images.number4, kichwa: "Chusku", spanish: "Cuatro" },
    { numberImage: images.number5, kichwa: "Pichka", spanish: "Cinco" },
    { numberImage: images.number6, kichwa: "Sukta", spanish: "Seis" },
    { numberImage: images.number7, kichwa: "Kanchis", spanish: "Siete" },
    { numberImage: images.number8, kichwa: "Pusak", spanish: "Ocho" },
    { numberImage: images.number9, kichwa: "Iskun", spanish: "Nueve" },
    { numberImage: images.number10, kichwa: "Chunka", spanish: "Diez" },
    { numberImage: images.number11, kichwa: "Chunka shuk", spanish: "Once" },
    { numberImage: images.number12, kichwa: "Chunka ishkay", spanish: "Doce" },
    { numberImage: images.number13, kichwa: "Chunka kimsa", spanish: "Trece" },
    { numberImage: images.number14, kichwa: "Chunka chusku", spanish: "Catorce" },
    { numberImage: images.number15, kichwa: "Chunka pichka", spanish: "Quince" },
    { numberImage: images.number16, kichwa: "Chunka sukta", spanish: "Dieciséis" },
    { numberImage: images.number17, kichwa: "Chunka kanchis", spanish: "Diecisiete" },
    { numberImage: images.number18, kichwa: "Chunka pusak", spanish: "Dieciocho" },
    { numberImage: images.number19, kichwa: "Chunka iskun", spanish: "Diecinueve" },
    { numberImage: images.number20, kichwa: "Ishkay chunka", spanish: "Veinte" },
    { numberImage: images.number30, kichwa: "Kimsa chunka", spanish: "Treinta" },
    { numberImage: images.number40, kichwa: "Chusku chunka", spanish: "Cuarenta" },
    { numberImage: images.number50, kichwa: "Pichka chunka", spanish: "Cincuenta" },
    { numberImage: images.number60, kichwa: "Sukta chunka", spanish: "Sesenta" },
    { numberImage: images.number70, kichwa: "Kanchis chunka", spanish: "Setenta" },
    { numberImage: images.number80, kichwa: "Pusak chunka", spanish: "Ochenta" },
    { numberImage: images.number90, kichwa: "Iskun chunka", spanish: "Noventa" },
    { numberImage: images.number100, kichwa: "Patsak", spanish: "Cien" },
    { numberImage: images.number101, kichwa: "Patsak shuk", spanish: "Ciento uno" },
    { numberImage: images.number102, kichwa: "Patsak ishkay", spanish: "Ciento dos" },
    { numberImage: images.number103, kichwa: "Patsak kimsa", spanish: "Ciento tres" },
    { numberImage: images.number110, kichwa: "Patsak chunka", spanish: "Ciento diez" },
    { numberImage: images.number120, kichwa: "Patsak ishkay chunka", spanish: "Ciento veinte" },
    { numberImage: images.number130, kichwa: "Patsak kimsa chunka", spanish: "Ciento treinta" },
    { numberImage: images.number140, kichwa: "Patsak chusku chunka", spanish: "Ciento cuarenta" },
    { numberImage: images.number150, kichwa: "Patsak pichka chunka", spanish: "Ciento cincuenta" },
    { numberImage: images.number160, kichwa: "Patsak sukta chunka", spanish: "Ciento sesenta" },
    { numberImage: images.number170, kichwa: "Patsak kanchis chunka", spanish: "Ciento setenta" },
    { numberImage: images.number180, kichwa: "Patsak pusak chunka", spanish: "Ciento ochenta" },
    { numberImage: images.number190, kichwa: "Patsak iskun chunka", spanish: "Ciento noventa" },
    { numberImage: images.number200, kichwa: "Ishkay patsak", spanish: "Doscientos" },
    { numberImage: images.number300, kichwa: "Kimsa patsak", spanish: "Trescientos" },
    { numberImage: images.number400, kichwa: "Chusku patsak", spanish: "Cuatrocientos" },
    { numberImage: images.number500, kichwa: "Pichka patsak", spanish: "Quinientos" }
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
                    <ImageContainer path={item.numberImage} style={styles.imageCards} />
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
                                <View style={styles.helpModalContent}>
                                    <FloatingHumu >
                                        <ImageContainer path={require('../../../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona la tarjeta de un número (pintados en rojo) para ver su pronunciación en Kichwa.'
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
