import React from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';
const { width } = Dimensions.get('window');

const participioData = {
    title: "Yallishka pacha",
    description: "Para formar el participio pasado, después de la raíz del verbo ponemos la partícula -shka y las terminaciones del presente.",
    examples: [
        {
            verb: "Rimana",
            root: "rima",
            image: "https://img.freepik.com/vector-gratis/dibujado-mano-personas-hablando_23-2149067041.jpg?semt=ais_hybrid",
            conjugations: [
                { subject: "Ñuka", root: "rima", particle: "shka", ending: "ni", verb: "Ñuka rimashkani", translation: "Yo he hablado" },
                { subject: "Kan", root: "rima", particle: "shka", ending: "nki", verb: "Kan rimashkanki", translation: "Tú has hablado" },
                { subject: "Kikin", root: "rima", particle: "shka", ending: "nki", verb: "Kikin rimashkanki", translation: "Usted ha hablado" },
                { subject: "Pay", root: "rima", particle: "shka", ending: "-", verb: "Pay rimashka", translation: "Él/Ella ha hablado" },
                { subject: "Ñukanchik", root: "rima", particle: "shka", ending: "nchik", verb: "Ñukanchik rimashkanchik", translation: "Nosotros hemos hablado" },
                { subject: "Kankuna", root: "rima", particle: "shka", ending: "nkichik", verb: "Kankuna rimashkankichik", translation: "Ustedes han hablado" },
                { subject: "Paykuna", root: "rima", particle: "shka", ending: "kuna", verb: "Paykuna rimashkakuna", translation: "Ellos/ellas han hablado" },
            ],
        },
        {
            verb: "Mikuna",
            root: "miku",
            image: "https://img.freepik.com/vector-gratis/nino-feliz-disfrutando-comida_1308-133338.jpg?semt=ais_hybrid",
            conjugations: [
                { subject: "Ñuka", root: "miku", particle: "shka", ending: "ni", verb: "Ñuka mikushkani", translation: "Yo he comido" },
                { subject: "Kan", root: "miku", particle: "shka", ending: "nki", verb: "Kan mikushkanki", translation: "Tú has comido" },
                { subject: "Kikin", root: "miku", particle: "shka", ending: "nki", verb: "Kikin mikushkanki", translation: "Usted ha comido" },
                { subject: "Pay", root: "miku", particle: "shka", ending: "-", verb: "Pay mikushka", translation: "Él/Ella ha comido" },
                { subject: "Ñukanchik", root: "miku", particle: "shka", ending: "nchik", verb: "Ñukanchik mikushkanchik", translation: "Nosotros hemos comido" },
                { subject: "Kankuna", root: "miku", particle: "shka", ending: "nkichik", verb: "Kankuna mikushkankichik", translation: "Ustedes han comido" },
                { subject: "Paykuna", root: "miku", particle: "shka", ending: "kuna", verb: "Paykuna mikushkakuna", translation: "Ellos/Ellas han comido" },
            ],
        },
    ],
};

// Función para renderizar cada conjugación en un carrusel
const renderConjugationCard = (conjugation, index) => (
    <View key={index} style={styles.carouselCard}>
        <Text style={styles.carouselSubject}>{conjugation.subject}</Text>
        <Text style={styles.carouselDetail}>Raíz: {conjugation.root}</Text>
        <Text style={styles.carouselDetail}>Partícula: {conjugation.particle}</Text>
        <Text style={styles.carouselDetail}>Terminación: {conjugation.ending}</Text>
        <Text style={styles.carouselDetail}>Verbo conjugado: {conjugation.verb}</Text>
        <Text style={styles.carouselDetail}>Traducción: {conjugation.translation}</Text>
    </View>
);

// Función para renderizar los ejemplos con carrusel
const renderExampleCard = (example, index) => (
    <CardDefault key={index} title={example.verb}>
        <Image source={{ uri: example.image }} style={localStyles.image} />
        <Carousel
            width={width * 0.8}
            height={220}
            data={example.conjugations}
            renderItem={({ item, index }) => renderConjugationCard(item, index)}
            mode="parallax"
            pagingEnabled={true}
        />
    </CardDefault>
);

const ElParticipioPasadoScreen = () => {
    const navigation = useNavigation();
    const progress = 0.75;

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={styles.gradient}
        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="intermedio" />
                </View>

                <View style={styles.body}>
                    <CardDefault title={participioData.title}>
                        <Text style={localStyles.description}>{participioData.description}</Text>
                    </CardDefault>
                    {participioData.examples.map((example, index) => renderExampleCard(example, index))}
                </View>

                <View style={styles.footer}>

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('Module5')} />

                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    description: {
        fontSize: 16,
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginVertical: 10,
    },
});

export default ElParticipioPasadoScreen;
