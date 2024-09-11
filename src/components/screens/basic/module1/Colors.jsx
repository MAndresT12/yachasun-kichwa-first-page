import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';

const colors_data = [
    { kichwa: "puka", spanish: "rojo", hexadecimalColor: "#FF0000" },
    { kichwa: "ankas", spanish: "azul", hexadecimalColor: "#0000FF" },
    { kichwa: "killu", spanish: "amarillo", hexadecimalColor: "#FFFF00" },
    { kichwa: "waylla", spanish: "verde", hexadecimalColor: "#00FF00" },
    { kichwa: "yana", spanish: "negro", hexadecimalColor: "#000000" },
    { kichwa: "yurak", spanish: "blanco", hexadecimalColor: "#FFFFFF" },
    { kichwa: "yanalla ankas", spanish: "azul marino", hexadecimalColor: "#000080" },
    { kichwa: "chawa ankas", spanish: "celeste", hexadecimalColor: "#87CEEB" },
    { kichwa: "chawa killu", spanish: "amarillo claro", hexadecimalColor: "#FFFFE0" },
    { kichwa: "chawa wayllu", spanish: "verde claro", hexadecimalColor: "#90EE90" },
    { kichwa: "paku", spanish: "café", hexadecimalColor: "#8B4513" },
    { kichwa: "waminsi", spanish: "rosado", hexadecimalColor: "#FFC0CB" },
    { kichwa: "maywa", spanish: "morado", hexadecimalColor: "#800080" },
    { kichwa: "suku", spanish: "plomo", hexadecimalColor: "#808080" },
    { kichwa: "kishpu", spanish: "naranja", hexadecimalColor: "#FFA500" },
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
                    <Text style={styles.title}>{item.spanish}</Text>
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <Text style={styles.translationLabel}>Kichwa:</Text>
                    <Text style={styles.translationText}>{item.kichwa}</Text>
                    <View style={[styles.colorBox, { backgroundColor: item.hexadecimalColor }]} />
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const Colors = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#5B4D28" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Los Colores</Text>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Colores en Kichwa" content="Aprende los colores en Kichwa y su correspondencia en español.">
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {colors_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>
                </View>
                <View style={styles.footer}>
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('GamesBasicModule1')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Colors;








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
//                 <Text style={styles.tableCell}>{item.numero}</Text>
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
