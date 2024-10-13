import React from 'react';
import { View, Text, ScrollView, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Carousel from 'react-native-reanimated-carousel';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
const { width } = Dimensions.get('window');
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const futuroProximoData = {
    title: "El futuro próximo",
    subtitle: "Ña shamuk pacha",
    particle: "-kri",
    description: "Para formar el futuro próximo, tomamos la raíz del verbo, añadimos la partícula -kri, y al final, ponemos las terminaciones del presente.",
    examples: [
        {
            verb: "Mikuna (Comer)",
            root: "miku",
            image: "https://st.depositphotos.com/1526816/4648/v/450/depositphotos_46488037-stock-illustration-a-little-girl-eating-her.jpg",
            conjugations: [
                { subject: "Ñuka", root: "miku", particle: "kri", ending: "ni", verb: "mikukrini", translation: "Yo voy a comer" },
                { subject: "Kan", root: "miku", particle: "kri", ending: "nki", verb: "mikukrinki", translation: "Tú vas a comer" },
                { subject: "Kikin", root: "miku", particle: "kri", ending: "nki", verb: "mikukrinki", translation: "Usted va a comer" },
                { subject: "Pay", root: "miku", particle: "kri", ending: "-", verb: "mikukrin", translation: "Él/Ella va a comer" },
                { subject: "Ñukanchik", root: "miku", particle: "kri", ending: "nchik", verb: "mikukrinchik", translation: "Nosotros vamos a comer" },
                { subject: "Kankuna", root: "miku", particle: "kri", ending: "nkichik", verb: "mikukrinkichik", translation: "Ustedes van a comer" },
                { subject: "Kiinkuna", root: "miku", particle: "kri", ending: "nkichik", verb: "mikukrinkichik", translation: "Ustedes van a comer" },
                { subject: "Paykuna", root: "miku", particle: "kri", ending: "kuna", verb: "mikukrinkuna", translation: "Ellos/Ellas van a comer" },
            ],
        },
        {
            verb: "Rimana (Hablar)",
            root: "rima",
            image: "https://img.freepik.com/vector-gratis/nino-nina-mensaje-burbuja-chat_24877-53848.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1713139200&semt=ais",
            conjugations: [
                { subject: "Ñuka", root: "rima", particle: "kri", ending: "ni", verb: "rimakrini", translation: "Yo voy a hablar" },
                { subject: "Kan", root: "rima", particle: "kri", ending: "nki", verb: "rimakrinki", translation: "Tú vas a hablar" },
                { subject: "Kikin", root: "rima", particle: "kri", ending: "nki", verb: "rimakrinki", translation: "Usted va a hablar" },
                { subject: "Pay", root: "rima", particle: "kri", ending: "-", verb: "rimakrin", translation: "Él/Ella va a hablar" },
                { subject: "Ñukanchik", root: "rima", particle: "kri", ending: "nchik", verb: "rimakrinchik", translation: "Nosotros vamos a hablar" },
                { subject: "Kankuna", root: "rima", particle: "kri", ending: "nkichik", verb: "rimakrinkichik", translation: "Ustedes van a hablar" },
                { subject: "Kiinkuna", root: "rima", particle: "kri", ending: "nkichik", verb: "rimakrinkichik", translation: "Ustedes van a hablar" },
                { subject: "Paykuna", root: "rima", particle: "kri", ending: "kuna", verb: "rimakrinkuna", translation: "Ellos/Ellas van a hablar" },
            ],
        },
    ],
};

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

const renderExampleCard = (example) => (
    <View style={styles.carouselExampleCard}>
        <Text style={styles.carouselVerbTitle}>{example.verb}</Text>
        <Image source={{ uri: example.image }} style={styles.carouselExampleImage} />
        <Carousel
            width={width * 0.8}
            height={200}
            data={example.conjugations}
            renderItem={({ item }) => renderConjugationCard(item)}
            mode="parallax"
            pagingEnabled={true}
        />
    </View>
);

const ElFuturoProximoScreen = () => {
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
                    <CardDefault title={futuroProximoData.title}>
                        <Text style={styles.carouselSubtitle}>{futuroProximoData.subtitle}</Text>
                        <Text style={styles.carouselParticleText}>{futuroProximoData.particle}</Text>
                        <Text style={styles.carouselDescriptionText}>{futuroProximoData.description}</Text>
                    </CardDefault>
                    <Carousel
                        width={width}
                        height={500}
                        data={futuroProximoData.examples}
                        renderItem={({ item }) => renderExampleCard(item)}
                        mode="parallax"
                        pagingEnabled={true}
                    />
                </View>

                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio" />

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('FuturoSimple')} />

                </View>
            </ScrollView >
        </LinearGradient >
    );
};

export default ElFuturoProximoScreen;
