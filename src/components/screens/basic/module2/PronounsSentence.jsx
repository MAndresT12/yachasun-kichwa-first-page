import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../../../ui/buttons/AccordionDefault';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';

const { width } = Dimensions.get('window');

const images = {
    pronoun1: require('../../../../../assets/images/basic/module2/pronouns/pronoun1.png'),
};

const singular_pronoun_data = [
    { kichwa: "Ñuka", spanish: "Yo" },
    { kichwa: "Kan", spanish: "Tú" },
    { kichwa: "Kikin", spanish: "Usted (cortesía)" },
    { kichwa: "Pay", spanish: "Ella" },
];

const plural_pronoun_data = [
    { kichwa: "Ñukanchik", spanish: "Nosotros" },
    { kichwa: "Kankuna", spanish: "Ustedes" },
    { kichwa: "Kikinkuna", spanish: "Ustedes (cortesía)" },
    { kichwa: "Paykuna", spanish: "Ellos / Ellas" },
];

const verb_kana_data = [
    { numberImage: images.pronoun1, kichwaPron: "Ñuka", kana: "kani", spanishPron: "Yo", be: "soy / estoy" },
    { numberImage: images.pronoun1, kichwaPron: "Kan", kana: "kanki", spanishPron: "Tú", be: "eres / estás" },
    { numberImage: images.pronoun1, kichwaPron: "Kikin", kana: "kanki", spanishPron: "Usted", be: "es / está" },
    { numberImage: images.pronoun1, kichwaPron: "Pay", kana: "kan", spanishPron: "Él / ella", be: "es / está" },
    { numberImage: images.pronoun1, kichwaPron: "Ñukanchik", kana: "kanchik", spanishPron: "Nosotros", be: "somos / estamos" },
    { numberImage: images.pronoun1, kichwaPron: "Kankuna", kana: "kankichik", spanishPron: "Ustedes", be: "son / están" },
    { numberImage: images.pronoun1, kichwaPron: "Kikinkuna", kana: "kankichik", spanishPron: "Ustedes", be: "son / están" },
    { numberImage: images.pronoun1, kichwaPron: "Paykuna", kana: "kan", spanishPron: "Ellos / ellas", be: "son / están" },
];

const sentence_spanish_struc_data = [
    { subject: "Sisa", verb: "come", complement: "maíz" },
];

const sentence_kichwa_struc_data = [
    { subject: "Sisaka", verb: "sarata", complement: "mikun" },
];

const curiosity_data = [
    {
        key: '1',
        title: 'Un cambio de estructura en la oración',
        text: 'Como pudiste ver en Kichwa el complemento viene antes que verbo. En español es al revés.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
    {
        key: '2',
        title: 'Algo lindo de los Apellidos en Kichwa',
        text: 'La palabra Ango significa jefe, señor o gobernador. En el idioma Kayambi, significa espíritu y unidad.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
    {
        key: '3',
        title: 'Personajes importantes',
        text: 'Dolores Cacuango (-ango) es una líder indígena ecuatoriana que luchó por los derechos de los indígenas y campesinos.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
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
                    <ImageContainer path={item.numberImage} style={styles.imageCards} />
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <View style={styles.pronounSmallFlipCard}>
                        <View>
                            <Text style={styles.translationLabelPronouns}>P. Kichwa:</Text>
                            <Text style={styles.translationTextPronouns}>{item.kichwaPron}</Text>
                        </View>
                        <View>
                            <Text style={styles.translationLabelPronouns}>Kana:</Text>
                            <Text style={styles.translationTextPronouns}>{item.kana}</Text>
                        </View>
                    </View>
                    <View style={styles.pronounSmallFlipCard}>
                        <View>
                            <Text style={styles.translationLabelPronouns}>P. Español:</Text>
                            <Text style={styles.translationTextPronouns}>{item.spanishPron}</Text>
                        </View>
                        <View>
                            <Text style={styles.translationLabelPronouns}>Ser / Estar:</Text>
                            <Text style={styles.translationTextPronouns}>{item.be}</Text>
                        </View>
                    </View>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const BigFlipCard = ({ data1, data2 }) => {
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

    const renderTableSpanish = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.subject}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.verb}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.complement}</Text>
            </View>
        ));
    };

    const renderTableKichwa = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.subject}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.complement}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.verb}</Text>
            </View>
        ));
    };

    return (
        <TouchableWithoutFeedback onPress={handleFlip}>
            <View style={styles.pronounBigFlipCardContainer}>
                <Animated.View style={[styles.flipCardInner, styles.flipCardFront, animatedStyleFront]}>
                    <CardDefault title="Español" content="Fíjate en el orden de la estructura. ¿Qué vez?" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>1.{"\n\n"}Sujeto</Text>
                                <Text style={styles.tableHeaderCell}>2.{"\n\n"}Verbo</Text>
                                <Text style={styles.tableHeaderCell}>3.{"\n\n"}Complemento</Text>
                            </View>
                            {renderTableSpanish(data1)}
                        </View>
                    </CardDefault>
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <CardDefault title="Kichwa" content="¡Mira! En Kichwa el verbo va antes que el complemento." styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>1.{"\n\n"}Sujeto   (Imak)</Text>
                                <Text style={styles.tableHeaderCell}>2.{"\n\n"}Complemento (Paktachik)</Text>
                                <Text style={styles.tableHeaderCell}>3.{"\n\n"}Verbo (Imachik)</Text>
                            </View>
                            {renderTableKichwa(data2)}
                        </View>
                    </CardDefault>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const renderPronouns = (pronoun_data) => {
    return pronoun_data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const SingularPronRoute = () => (
    <View>
        <Text style={styles.title}>Pronombres en Singular</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
            </View>
            {renderPronouns(singular_pronoun_data)}
        </View>
    </View>
);

const PluralPronRoute = () => (
    <View>
        <Text style={styles.title}>Pronombres en Plural</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
            </View>
            {renderPronouns(plural_pronoun_data)}
        </View>
    </View>
);

const PronounsSentence = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const navigation = useNavigation();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'SingularPron', title: 'Singular' },
        { key: 'PluralPron', title: 'Plural' },
    ]);

    const renderScene = SceneMap({
        SingularPron: SingularPronRoute,
        PluralPron: PluralPronRoute,
    });

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

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#003366" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>
                        Los pronombres personales, el verbo kana y la estructura de una oración
                    </Text>
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <CardDefault title="¿Cómo podemos hablar con alguien ó de alguien?" >
                        <Text style={styles.cardContent}>
                            Tenemos que conocer como hablarle a las personas para poder comunicarnos.{"\n\n"}
                            Para esto sirven los pronombres personales. Estos vienen el plural y singular.
                            ¡Veámos cuáles son!
                        </Text>
                    </CardDefault>
                    <CardDefault styleContainer={{ flex: 1 }} styleCard={{ flex: 1, height: 320 }} >
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={width}
                            style={{ height: '100%' }}
                            renderTabBar={(props) => (
                                <TabBar
                                    {...props}
                                    indicatorStyle={{ backgroundColor: 'white' }}
                                    style={{
                                        backgroundColor: '#003366',
                                        borderRadius: 8,
                                        margin: 10,
                                    }}
                                    tabStyle={{
                                        borderRadius: 10,
                                        marginHorizontal: 5,
                                    }}
                                    labelStyle={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                    activeColor="#FFD700"
                                    inactiveColor="#FFFFFF"
                                />
                            )}
                        />
                    </CardDefault>

                    <CardDefault title="El verbo kana" >
                        <Text style={styles.cardContent}>
                            Un verbo muy importante en Kichwa es el conocido como verbo "kana" que significa "ser" o "estar".
                            Este verbo es muy importante para formar oraciones en Kichwa.{"\n\n"}
                            Aquí te voy a mostrar su conjugación con los pronombres y como afecta al sujeto de una oración.
                            Abreviaremos el pronombre con un "P".
                        </Text>
                    </CardDefault>

                    <View style={styles.gridContainer}>
                        {verb_kana_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>

                    <CardDefault title="Estructura de una oración" >
                        <Text style={styles.cardContent}>
                            Con todo el conocimiento que tenemos hasta ahora, podemos formar oraciones en Kichwa.
                            Pero antes de esto, debemos conocer la estructura de ellas.{"\n\n"}
                            Presiona en la tabla de abajo para ver lo que te menciono.
                        </Text>
                    </CardDefault>

                    <BigFlipCard data1={sentence_spanish_struc_data} data2={sentence_kichwa_struc_data} />

                    {curiosity_data.map((item) => (
                        <AccordionDefault
                            key={item.key}
                            title={item.title}
                            isOpen={activeAccordion === item.key}
                            onPress={() => toggleAccordion(item.key)}
                        >
                            <View style={styles.curiositiesContent}>
                                <FloatingHumu >
                                    <ImageContainer path={item.imagePath} style={styles.imageModal} />
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
                                        <ImageContainer path={require('../../../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en las tarjetas para darles la vuelta y ver acerca del verbo kana y la oración.'
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
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('FamilyPart1')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default PronounsSentence;
