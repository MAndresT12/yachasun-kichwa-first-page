import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
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
import { PanGestureHandler } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const ext_fam1_data = [
    { kichwa: "Paniku", spanish: "Cuñada" },
    { kichwa: "Masha", spanish: "Yerno, Cuñado" },
    { kichwa: "Mamayay", spanish: "Suegra" },
    { kichwa: "Yayayay", spanish: "Suegro" },
    { kichwa: "Sapalla", spanish: "Viudo, Viuda" },
    { kichwa: "Kachun", spanish: "Nuera" },
    { kichwa: "Achik - Mama", spanish: "Madrina" },
    { kichwa: "Achik - Yaya", spanish: "Padrino" },
];

const ext_fam2_data = [
    { kichwa: "Kuncha", spanish: "Sobrino" },
    { kichwa: "Wawkiy", spanish: "Primo (Entre Varones)" },
    { kichwa: "Turiy", spanish: "Primo (De Mujer A Varón)" },
    { kichwa: "Ñañay", spanish: "Prima (De Mujer A Mujer)" },
    { kichwa: "Paniy", spanish: "Prima (De Varón A Mujer)" },
    { kichwa: "Mamay", spanish: "Tía" },
    { kichwa: "Yayay", spanish: "Tío" },
    { kichwa: "Ampullu", spanish: "Bisnieto, Bisnieta" },
];

const curiosity_data = [
    {
        key: '1',
        title: 'El Matrimonio',
        text: 'La familia es muy importante en el mundo indígena. Entre padres e hijos, deben compartir conocimientos de cultura, tradición y unidad.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
];

const charina_spanish_data = [
    { spanish: "Yo tengo" },
    { spanish: "Tú tienes" },
    { spanish: "Usted tiene" },
    { spanish: "Él / Ella tiene" },
    { spanish: "Nosotros tenemos" },
    { spanish: "Ustedes tienen" },
    { spanish: "Ustedes tienen" },
    { spanish: "Ellos tienen" },
];

const charina_kichwa_data = [
    { subject: "Ñuka", verb: "charini" },
    { subject: "Kan", verb: "charinki" },
    { subject: "Kikin", verb: "charinki" },
    { subject: "Pay", verb: "charin" },
    { subject: "Ñukanchik", verb: "charinchik" },
    { subject: "Kankuna", verb: "charinkichik" },
    { subject: "Kikinkuna", verb: "charinkichik" },
    { subject: "Paykuna", verb: "charinkuna" },
];

const images = {
    familyConv1: require('../../../../../assets/images/basic/module2/family/family1.png'),
};

const family_convs_data = [
    {
        kichwa: "Ñukaka shuk turita charini",
        spanish: "Yo tengo un hermano",
        imageCard: images.familyConv1,
    },
    {
        kichwa: "Payka ishkay panikunata charin",
        spanish: "Él tiene dos hermanas",
        imageCard: images.familyConv1,
    },
    {
        kichwa: "Ñukanchikka shuk mamata charinchik",
        spanish: "Nosotros tenemos una madre",
        imageCard: images.familyConv1,
    },
    {
        kichwa: "Paykunaka kimsa wawkiykunata charinkuna",
        spanish: "Ellos tienen tres primos",
        imageCard: images.familyConv1,
    },
    {
        kichwa: "Kanka ishkay yayaykunata charinki",
        spanish: "Tú tienes dos tíos",
        imageCard: images.familyConv1,
    },
];

const renderExtendedFam = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const ExtFam1Route = () => (
    <View>
        <Text style={styles.title}>Nuestra familia extendida</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
            </View>
            {renderExtendedFam(ext_fam1_data)}
        </View>
    </View>
);

const ExtFam2Route = () => (
    <View>
        <Text style={styles.title}>Más familia</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
            </View>
            {renderExtendedFam(ext_fam2_data)}
        </View>
    </View>
);

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
                <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            </View>
        ));
    };

    const renderTableKichwa = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.subject}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.verb}</Text>
            </View>
        ));
    };

    return (
        <TouchableWithoutFeedback onPress={handleFlip}>
            <View style={styles.familyBigFlipCardContainer}>
                <Animated.View style={[styles.flipCardInner, styles.flipCardFront, animatedStyleFront]}>
                    <CardDefault title="Español" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Significado</Text>
                            </View>
                            {renderTableSpanish(data1)}
                        </View>
                    </CardDefault>
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <CardDefault title="Kichwa" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Sujeto   (Imak)</Text>
                                <Text style={styles.tableHeaderCell}>Verbo (Imachik)</Text>
                            </View>
                            {renderTableKichwa(data2)}
                        </View>
                    </CardDefault>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const FlipCard = ({ item }) => {
    const [flipped, setFlipped] = useState(false);
    const rotateY = useSharedValue(0);
    const humuOpacity = useSharedValue(0);
    const humuLeftPosition = useSharedValue(-width * 0.008);
    const cardOpacity = useSharedValue(0);
    const cardTranslateX = useSharedValue(-width * 0.43);

    const animatedStyleFront = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value}deg` }],
    }));

    const animatedStyleBack = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value + 180}deg` }],
    }));

    const animatedHumuStyle = useAnimatedStyle(() => ({
        opacity: humuOpacity.value,
        transform: [{ translateX: humuLeftPosition.value }],
    }));

    const animatedCardStyle = useAnimatedStyle(() => ({
        opacity: cardOpacity.value,
        transform: [{ translateX: cardTranslateX.value }],
    }));

    const handleFlip = () => {
        if (!flipped) {
            rotateY.value = withTiming(180, { duration: 300 });
            setTimeout(() => {
                humuOpacity.value = withTiming(1, { duration: 300 });
                humuLeftPosition.value = withTiming(
                    width * 0.2,
                    { duration: 500 },
                    () => {
                        humuLeftPosition.value = withTiming(width * 0.28, {
                            duration: 200,
                            easing: Easing.bounce,
                        });
                    }
                );
            }, 1000);
        } else {
            rotateY.value = withTiming(0, { duration: 300 });
            humuOpacity.value = withTiming(0, { duration: 300 }, () => {
                humuLeftPosition.value = -width * 0.008;
            });
            cardOpacity.value = withTiming(0, { duration: 300 });
            cardTranslateX.value = withTiming(-width * 0.43, { duration: 300 });
        }
        setFlipped(!flipped);
    };

    const handleGesture = (event) => {
        const { translationX } = event.nativeEvent;

        if (translationX > 50) {
            humuLeftPosition.value = withTiming(width, { duration: 300 });
            setTimeout(() => {
                cardOpacity.value = withTiming(1, { duration: 300 });
                cardTranslateX.value = withTiming(0, { duration: 300 });
            }, 300);
        }
    };

    return (
        <View style={styles.flipCardContainerBothCardsGreetings2}>
            <TouchableWithoutFeedback onPress={handleFlip}>
                <View style={styles.flipCardGreetings2}>
                    <Animated.View style={[styles.flipCardInnerGreetings2, styles.flipCardFrontGreetings2, animatedStyleFront]}>
                        <ImageContainer path={item.imageCard} style={styles.imageCards} />
                    </Animated.View>
                    <Animated.View style={[styles.flipCardInnerGreetings2, styles.flipCardBackGreetings2, animatedStyleBack]}>
                        <Text style={styles.translationLabel}>Español:</Text>
                        <Text style={styles.translationText}>{item.spanish}</Text>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>

            <PanGestureHandler onGestureEvent={handleGesture}>
                <Animated.Image
                    source={require('../../../../../assets/images/humu/humu-talking.png')}
                    style={[styles.humuImage, animatedHumuStyle]}
                />
            </PanGestureHandler>

            <Animated.View style={[styles.flipCard2ndGreetings2, animatedCardStyle]}>
                <CardDefault styleContainer={styles.flipCardSecondCardGreetings2} styleCard={styles.flipCardSecondCardContentGreetings2}>
                    <Text style={styles.translationLabelGreetingsCard2}>Kichwa:</Text>
                    <Text style={styles.translationTextGreetingsCard2}>{item.kichwa}</Text>
                </CardDefault>
            </Animated.View>
        </View>
    );
};

const FamilyPart2 = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const navigation = useNavigation();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'ExtFam1', title: 'Parte 1' },
        { key: 'ExtFam2', title: 'Parte 2' },
    ]);

    const renderScene = SceneMap({
        ExtFam1: ExtFam1Route,
        ExtFam2: ExtFam2Route,
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
                    <Text style={styles.titleTema}>La Familia Parte 2</Text>
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>

                    <CardDefault title="La familia extendida">
                        <Text style={styles.cardContent}>
                            Nuestra familiar puede ser muy grande llena de muchas personas amadas.
                            Aquí te muestro cómo se dice en Kichwa todos los miembros de la familia.
                        </Text>
                    </CardDefault>

                    <CardDefault styleContainer={{ flex: 1 }} styleCard={{ flex: 1, height: 470 }} >
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

                    <CardDefault title="El verbo Charina">
                        <Text style={styles.cardContent}>
                            En español este verbo significa "tener". Antes de crear oraciones simples con la familia, 
                            quiero habalrte de este verbo y sus conjugaciones con los pronombres personales.{`\n\n`}
                            Presiona en la tabla de abajo para ver lo que te menciono.
                        </Text>
                    </CardDefault>

                    <BigFlipCard data1={charina_spanish_data} data2={charina_kichwa_data} />

                    <CardDefault title="Ñukanchik ayllukunamanta rimashun">
                        <Text style={styles.cardContent}>
                            Esto se traduce a: Hablemos sobre nuestras familias.
                        </Text>
                    </CardDefault>

                    <View style={styles.gridContainerGreetings2}>
                        {family_convs_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>

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
                                        text='Presiona en cada tarjeta de un saludo para ver su pronunciación en Kichwa. Desliza a Humu para ver la respuesta al saludo.'
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

export default FamilyPart2;