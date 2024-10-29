import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../../animations/FloatingHumu';
import ChatModal from '../../../ui/modals/ChatModal';

const simp_pres_ejem1a_data = [
    { subject: "Ñuka", root: "rima", ending: "ni" },
    { subject: "Kan", root: "rima", ending: "nki" },
    { subject: "Kikin", root: "rima", ending: "nki" },
    { subject: "Pay", root: "rima", ending: "n" },
    { subject: "Ñukanchik", root: "rima", ending: "nchik" },
    { subject: "Kankuna", root: "rima", ending: "nkichik" },
    { subject: "Kikinkuna", root: "rima", ending: "nkichik" },
    { subject: "Paykuna", root: "rima", ending: "nkuna" },
];

const simp_pres_ejem1b_data = [
    { conjugation: "Rimani", spanish: "Yo hablo" },
    { conjugation: "Rimanki", spanish: "Tú hablas" },
    { conjugation: "Rimanki", spanish: "Usted habla" },
    { conjugation: "Riman", spanish: "Él o Ella habla" },
    { conjugation: "Rimanchik", spanish: "Nosotros hablamos" },
    { conjugation: "Rimankichik", spanish: "Ustedes hablan" },
    { conjugation: "Rimankichik", spanish: "Ustedes hablan" },
    { conjugation: "Rimankuna", spanish: "Ellos o ellas hablan" },
];

const simp_pres_ejem2a_data = [
    { subject: "Ñuka", root: "tarpu", ending: "ni" },
    { subject: "Kan", root: "tarpu", ending: "nki" },
    { subject: "Kikin", root: "tarpu", ending: "nki" },
    { subject: "Pay", root: "tarpu", ending: "n" },
    { subject: "Ñukanchik", root: "tarpu", ending: "nchik" },
    { subject: "Kankuna", root: "tarpu", ending: "nkichik" },
    { subject: "Kikinkuna", root: "tarpu", ending: "nkichik" },
    { subject: "Paykuna", root: "tarpu", ending: "nkuna" },
];

const simp_pres_ejem2b_data = [
    { conjugation: "Tarpuni", spanish: "Yo siembro" },
    { conjugation: "Tarpunki", spanish: "Tú siembras" },
    { conjugation: "Tarpunki", spanish: "Usted siembra" },
    { conjugation: "Tarpun", spanish: "Él o Ella siembra" },
    { conjugation: "Tarpunchik", spanish: "Nosotros sembramos" },
    { conjugation: "Tarpunkichik", spanish: "Ustedes siembran" },
    { conjugation: "Tarpunkichik", spanish: "Ustedes siembran" },
    { conjugation: "Tarpunkuna", spanish: "Ellos o ellas siembran" },
];

const chat_messages = [
    {
        _id: 1,
        text: 'Paykunaka ayapata tarpunkuna\n\nEllos/ellas siembran fréjol.',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 2,
        text: 'Kikinkunaka awashta tarpunkichik\n\nUstedes siembran habas.',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/prototype/nikkiamo.jpeg'),
        },
    },
    {
        _id: 3,
        text: 'Kankunaka ananasta tarpunkichik\n\nUstedes siembran chirimoya.',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 4,
        text: 'Ñukanchikka kitata tarpunchik\n\nNosotros sembramos cacao.',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/prototype/nikkiamo.jpeg'),
        },
    },
    {
        _id: 5,
        text: 'Payka akapita tarpun\n\nÉl o ella siembra cebada.',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 6,
        text: 'Kikinka papata tarpunki\n\nUsted siembra papas.',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/prototype/nikkiamo.jpeg'),
        },
    },
    {
        _id: 7,
        text: 'Kanka shañuta tarpunki\n\nTú siembras café.',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 8,
        text: 'Ñukaka sarata tarpuni\n\nYo siembro maíz.',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/prototype/nikkiamo.jpeg'),
        },
    },
];

const ending_data = [
    { subject: "Ñuka", ending: "ni" },
    { subject: "Kan", ending: "nki" },
    { subject: "Kikin", ending: "nki" },
    { subject: "Pay", ending: "n" },
    { subject: "Ñukanchik", ending: "nchik" },
    { subject: "Kankuna", ending: "nkichik" },
    { subject: "Kikinkuna", ending: "nkichik" },
    { subject: "Paykuna", ending: "nkuna" },
];

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

    const renderFront = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.subject}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.root}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.ending}</Text>
            </View>
        ));
    };

    const renderBack = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.conjugation}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            </View>
        ));
    };

    return (
        <TouchableWithoutFeedback onPress={handleFlip}>
            <View style={styles.simplePresentBigFlipCardContainer}>
                <Animated.View style={[styles.flipCardInner, styles.flipCardFront, animatedStyleFront]}>
                    <CardDefault title="Elementos para formar el verbo" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>1.{"\n\n"}Sujeto</Text>
                                <Text style={styles.tableHeaderCell}>2.{"\n\n"}Raíz</Text>
                                <Text style={styles.tableHeaderCell}>3.{"\n\n"}Terminación</Text>
                            </View>
                            {renderFront(data1)}
                        </View>
                    </CardDefault>
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <CardDefault title="El Verbo completo" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Conjugación</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                            </View>
                            {renderBack(data2)}
                        </View>
                    </CardDefault>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const renderData = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.subject}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.ending}</Text>
        </View>
    ));
};

const SimplePresent = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [showChat, setShowChat] = useState(false);

    const navigation = useNavigation();

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    const toggleChatModal = () => {
        setShowChat(!showChat);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#003366" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>

                    <CardDefault title="La prueba final" >
                        <Text style={styles.cardContent}>
                            Esta será la última lección de este nivel básico. ¿Preparados?{'\n\n'}
                            Tranquilos no yo estaré aquí acompañándolos, en cada paso. Pasamos algo
                            más complejo. Vamos a crear oraciones simples en el tiempo presente.{'\n\n'}
                            Es importante que aprendas esto para poder comenzar a formar oraciones
                            y comunicarte con otras personas.{'\n\n'}
                            En kichwa, todos los verbos son regulares, por lo cual se hace más fácil la
                            conjugación de los verbos. Lo más importante es recordar las terminaciones. En
                            el infinitivo, todos los verbos terminan con –na.{'\n\n'}
                            Para formar el presente, tomamos la raíz del verbo (el infinitivo menos -na) y
                            añadimos las terminaciones del presente.
                        </Text>
                    </CardDefault>

                    <CardDefault title="Puchukay shimikukuna / Las terminaciones">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Género</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {renderData(ending_data)}
                        </View>
                    </CardDefault>

                    <CardDefault title="Rimana" >
                        <Text style={styles.cardContent}>
                            Veamos la conjugación para el verbo hablar (rimana).
                        </Text>
                    </CardDefault>

                    <BigFlipCard data1={simp_pres_ejem1a_data} data2={simp_pres_ejem1b_data} />

                    <CardDefault title="Tarpuna" >
                        <Text style={styles.cardContent}>
                            También demos otro ejemplo usando la conjugación para el verbo sembrar (tarpuna).
                        </Text>
                    </CardDefault>

                    <BigFlipCard data1={simp_pres_ejem2a_data} data2={simp_pres_ejem2b_data} />

                    <ButtonDefault label="Oraciones / Yuyaykuna" onPress={toggleChatModal} />
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

                <ChatModal visible={showChat} onClose={toggleChatModal} initialMessages={chat_messages} />

                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio"
                        navigationTarget="CaminoLevelsBasic"
                    />
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel();
                            navigation.navigate('IntroGamesBasic6');
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default SimplePresent;
