// src/components/Main.jsx
import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/globalStyles';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { CardDefault } from '../ui/cards/CardDefault';

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

const Main = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#5B4D28" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Los números</Text>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Números en Kichwa" content="Aprende los números en Kichwa y su correspondencia en español."/>
                    <View style={styles.gridContainer}>
                        {numberData.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Food'); }}>
                        <View style={styles.buttonDefault}>
                            <Text style={styles.buttonText}>Siguiente</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </View>
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
