// src/components/ElFuturoSimpleScreen.jsx
import React from 'react';
import { View, Text, ScrollView, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';
const { width } = Dimensions.get('window');

const futuroSimpleData = {
    title: "El futuro simple",
    subtitle: "Shamuk pacha",
    description: "Para formar el futuro simple, tomamos la raíz del verbo y añadimos las terminaciones del futuro simple.",
    examples: [
        {
            verb: "Llamkana (Trabajar)",
            root: "llamka",
            image: "https://w7.pngwing.com/pngs/452/534/png-transparent-agriculture-work-rural-field-farmer-poultry-thumbnail.png",
            conjugations: [
                { subject: "Ñuka", root: "llamka", ending: "sha", verb: "llamkasha", translation: "Yo trabajaré" },
                { subject: "Kan", root: "llamka", ending: "nki", verb: "llamkanki", translation: "Tú trabajarás" },
                { subject: "Kikin", root: "llamka", ending: "nki", verb: "llamkanki", translation: "Usted trabajará" },
                { subject: "Pay", root: "llamka", ending: "nka", verb: "llamkanka", translation: "Él/Ella trabajará" },
                { subject: "Ñukanchik", root: "llamka", ending: "shun", verb: "llamkashun", translation: "Nosotros trabajaremos" },
                { subject: "Kankuna", root: "llamka", ending: "nkichik", verb: "llamkankichik", translation: "Ustedes trabajarán" },
                { subject: "Kiinkuna", root: "llamka", ending: "nkichik", verb: "llamkankichik", translation: "Ustedes trabajarán" },
                { subject: "Paykuna", root: "llamka", ending: "nkakuna", verb: "llamkankakuna", translation: "Ellos/Ellas trabajarán" },
            ],
        },
        {
            verb: "Shamuna (Venir)",
            root: "shamu",
            image: "https://globalsymbols.com/uploads/production/image/imagefile/14842/17_14843_c0fad635-a90c-40c3-aff1-50b9fc2c9306.png",
            conjugations: [
                { subject: "Ñuka", root: "shamu", ending: "sha", verb: "shamusha", translation: "Yo vendré" },
                { subject: "Kan", root: "shamu", ending: "nki", verb: "shamunki", translation: "Tú vendrás" },
                { subject: "Kikin", root: "shamu", ending: "nki", verb: "shamunki", translation: "Usted vendrá" },
                { subject: "Pay", root: "shamu", ending: "nka", verb: "shamunka", translation: "Él o Ella vendrá" },
                { subject: "Ñukanchik", root: "shamu", ending: "shun", verb: "shamunshun", translation: "Nosotros vendremos" },
                { subject: "Kankuna", root: "shamu", ending: "nkichik", verb: "shamunkichik", translation: "Ustedes vendrán" },
                { subject: "Kiinkuna", root: "shamu", ending: "nkichik", verb: "shamunkichik", translation: "Ustedes vendrán" },
                { subject: "Paykuna", root: "shamu", ending: "nkakuna", verb: "shamunkakuna", translation: "Ellos o Ellas vendrán" },
            ],
        },
    ],
};

const renderConjugationCard = (conjugation) => (
    <View style={styles.carouselCard}>
        <Text style={styles.carouselSubject}>{conjugation.subject}</Text>
        <Text style={styles.carouselDetail}>Raíz: {conjugation.root}</Text>
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

const ElFuturoSimpleScreen = () => {
    const navigation = useNavigation();
    const progress = 0.75;

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={styles.gradient}
        >

            <ScrollView>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="intermedio" />
                </View>

                <View style={styles.body}>

                    <CardDefault title={futuroSimpleData.title}>
                        <Text style={styles.carouselSubtitle}>{futuroSimpleData.subtitle}</Text>
                        <Text style={styles.carouselDescriptionText}>{futuroSimpleData.description}</Text>
                    </CardDefault>

                    <Carousel
                        width={width}
                        height={500}
                        data={futuroSimpleData.examples}
                        renderItem={({ item }) => renderExampleCard(item)}
                        mode="parallax"
                        pagingEnabled={true}
                    />
                </View>
                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio" />

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('IntroduccionJuegosScreen6')} />

                </View>
            </ScrollView >
        </LinearGradient>
    );
};

export default ElFuturoSimpleScreen;
