// src/components/LosVerbosConjugacionesScreen1.jsx

import React from 'react';
import { View, Text, ScrollView, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';

const { width } = Dimensions.get('window');

const conjugationsData = [
    {
        verb: "Kuyana (Amar, Presente)",
        root: "kuya",
        image: "https://img.freepik.com/vector-gratis/pareja-amantes-sosteniendo-corazon-leido-juntos-feliz-dia-san-valentin-ilustracion-personaje-dibujos-animados_56104-389.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728172800&semt=ais_hybrid",
        conjugations: [
            { subject: "Ñuka", root: "kuya", particle: "-", ending: "ni", verb: "Ñuka kuyani", translation: "Yo amo" },
            { subject: "Kan", root: "kuya", particle: "-", ending: "nki", verb: "Kan kuyanki", translation: "Tú amas" },
            { subject: "Pay", root: "kuya", particle: "-", ending: "n", verb: "Pay kuyan", translation: "Él o Ella ama" },
            { subject: "Ñukanchik", root: "kuya", particle: "-", ending: "nchik", verb: "Ñukanchik kuyanchik", translation: "Nosotros amamos" },
            { subject: "Kankuna", root: "kuya", particle: "-", ending: "nkichik", verb: "Kankuna kuyankichik", translation: "Ustedes aman" },
            { subject: "Paykuna", root: "kuya", particle: "-", ending: "nkun", verb: "Paykuna kuyankuna", translation: "Ellos o ellas aman" }
        ]
    },
    {
        verb: "Mikuna (Comer, Presente Progresivo)",
        root: "miku",
        image: "https://st4.depositphotos.com/19351868/21275/v/450/depositphotos_212754504-stock-illustration-little-girl-happy-eat-breakfast.jpg",
        conjugations: [
            { subject: "Ñuka", root: "miku", particle: "ku", ending: "kuni", verb: "Ñuka mikukuni", translation: "Yo estoy comiendo" },
            { subject: "Kan", root: "miku", particle: "ku", ending: "kunkichu", verb: "Kan mikukunichu", translation: "Tú estás comiendo" },
            { subject: "Pay", root: "miku", particle: "ku", ending: "kun", verb: "Pay mikukun", translation: "Él o Ella está comiendo" },
            { subject: "Ñukanchik", root: "miku", particle: "ku", ending: "kunchik", verb: "Ñukanchik mikukunchik", translation: "Nosotros estamos comiendo" },
            { subject: "Kankuna", root: "miku", particle: "ku", ending: "kunkichik", verb: "Kankuna mikukunkichik", translation: "Ustedes están comiendo" },
            { subject: "Paykuna", root: "miku", particle: "ku", ending: "kunkuna", verb: "Paykuna mikukunkuna", translation: "Ellos o ellas están comiendo" }
        ]
    },
    {
        verb: "Tanka (Empujar, Imperativo)",
        root: "tanka",
        image: "https://st.depositphotos.com/1695366/1400/v/450/depositphotos_14001481-stock-illustration-cartoon-man-up-against-a.jpg",
        conjugations: [
            { subject: "Kan", root: "tanka", particle: "-", ending: "y", verb: "Kan tankay", translation: "Empuja" },
            { subject: "Kikin", root: "tanka", particle: "pay", ending: "y", verb: "Kikin tankapay", translation: "Empuja" },
            { subject: "Ñukanchik", root: "tanka", particle: "-", ending: "shun", verb: "Ñukanchik tankashun", translation: "Empujemos" },
            { subject: "Kankuna", root: "tanka", particle: "-", ending: "ychik", verb: "Kankuna tankaychik", translation: "Empujen" },
            { subject: "Kikinkuna", root: "tanka", particle: "pa", ending: "ychik", verb: "Kikinkuna tankapaychik", translation: "Empujen" }
        ]
    }
];

// Función para renderizar la tarjeta de conjugación
const renderConjugationCard = (conjugation) => (
    <View style={styles.carouselCard}>
        <Text style={styles.carouselSubject}>{conjugation.subject}</Text>
        <Text style={styles.carouselDetail}>Raíz: {conjugation.root}</Text>
        <Text style={styles.carouselDetail}>Partícula: {conjugation.particle}</Text>

        <Text style={styles.carouselDetail}>Terminación: {conjugation.ending}</Text>
        <Text style={styles.carouselDetail}>Verbo conjugado: {conjugation.verb}</Text>
        <Text style={styles.carouselDetail}>Traducción: {conjugation.translation}</Text>
    </View>
);

// Función para renderizar los ejemplos
const renderExampleCard = (example) => (
    <View style={styles.carouselExampleCard}>
        <Text style={styles.carouselVerbTitle}>{example.verb}</Text>
        <Image source={{ uri: example.image }} style={styles.carouselExampleImage} />
        <Carousel
            width={width * 0.8}
            height={220}
            data={example.conjugations}
            renderItem={({ item }) => renderConjugationCard(item)}
            mode="parallax"
            pagingEnabled={true}
        />
    </View>
);

const LosVerbosConjugacionesScreen1 = () => {
    const navigation = useNavigation();
    const progress = 0.75;

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="intermedio" />
                </View>

                <View style={styles.body}>
                    <CardDefault title="Conjugaciones de Verbos">
                        <Text style={styles.carouselSubtitle}>Estudia la conjugación de los verbos en Kichwa</Text>
                    </CardDefault>

                    <Carousel
                        width={width}
                        height={530}
                        data={conjugationsData}
                        renderItem={({ item }) => renderExampleCard(item)}
                        mode="parallax"
                        pagingEnabled={true}
                        enabled={true}  // Deshabilita el desplazamiento

                    />
                </View>

                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('LosAdjetivos1'); }}>
                        <View style={styles.buttonDefault}>
                            <Text style={styles.buttonText}>Siguiente</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </View>
    );
};

export default LosVerbosConjugacionesScreen1;
