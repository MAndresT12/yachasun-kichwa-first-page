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
import ChatModal from '../../../ui/modals/ChatModal';

const { width } = Dimensions.get('window');

const images = {
    pronoun1: require('../../../../../assets/images/basic/module6/imperative/imperative1.png'),
};

const imp_informal1_data = [
    { subject: "Kan", root: "miku", ending: "y" },
    { subject: "Ñukanchik", root: "miku", ending: "shun" },
    { subject: "Kankuna", root: "miku", ending: "ychik" },
];

const imp_informal2_data = [
    { conjugation: "Mikuy", spanish: "Come" },
    { conjugation: "Mikushun", spanish: "Comamos" },
    { conjugation: "Mikuychik", spanish: "Coman" },
];

const imp_formal1_data = [
    { subject: "Kikin", root: "tanka", particle: "pa", ending: "y" },
    { subject: "Kikinkuna", root: "tanka", particle: "pa", ending: "ychik" },
];

const imp_formal2_data = [
    { conjugation: "Tankapay", spanish: "Empuje" },
    { conjugation: "Tankapaychik", spanish: "Empujen" },
];

const imp_negative1_data = [
    { verb: "Mikuna", positive: "Mikuy", spanish: "Come" },
    { verb: "Rimana", positive: "Rimashunk", spanish: "Hablemos" },
    { verb: "Kayana", positive: "Kayaychik", spanish: "Llamen" },
    { verb: "Llamkana", positive: "Llamkapay", spanish: "Trabaje" },
    { verb: "Killkana", positive: "Killkapaychik", spanish: "Escriban" },
];

const imp_negative2_data = [
    { verb: "Mikuna", negative: "Ama mikuychu", spanish: "No comas" },
    { verb: "Rimana", negative: "Ama rimashunchikchu", spanish: "No hablemos" },
    { verb: "Kayana", negative: "Ama kayaychikchu", spanish: "No llamen" },
    { verb: "Llamkana", negative: "Ama llamkapaychu", spanish: "No trabaje" },
    { verb: "Killkana", negative: "Ama killkapaychikchu", spanish: "No escriban" },
];

const chat_messages1 = [
    {
        _id: 1,
        text: '(Kankuna) tantata mikuychik\n\nComan pan',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/prototype/nikkiamo.jpeg'),
        },
    },
    {
        _id: 2,
        text: '(Ñukanchik) tantata mikushun\n\nComamos pan',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 3,
        text: '(Kan) tantata mikuy\n\nCome pan',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/prototype/nikkiamo.jpeg'),
        },
    },
];

const chat_messages2 = [
    {
        _id: 1,
        text: '(Kikinkuna) rikupaychik\n\nVean, miren, observen por favor',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../../assets/images/humu/humu-talking.png'),
        },
    },
    {
        _id: 2,
        text: '(Kikin) rikupay\n\nVea, mire, observe por favor',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../../assets/images/prototype/nikkiamo.jpeg'),
        },
    },
];

const curiosity_data = [
    {
        key: '1',
        title: 'La purificación',
        text: 'En las comunidades indígenas, cuando una persona hace algo mal, en lugar de castigarlo, se busca purificar sus acciones.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
    {
        key: '2',
        title: 'Por favor',
        text: 'En kichwa, el uso de la partícula pa en el imperativo puede significar por favor.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
];

const BigFlipCard1 = ({ data1, data2 }) => {
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
            <View style={styles.imperative1BigFlipCardContainer}>
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

const BigFlipCard2 = ({ data1, data2 }) => {
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
                <Text style={[styles.tableCell, styles.textCenter]}>{item.particle}</Text>
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
            <View style={styles.imperative2BigFlipCardContainer}>
                <Animated.View style={[styles.flipCardInner, styles.flipCardFront, animatedStyleFront]}>
                    <CardDefault title="Elementos para formar el verbo" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>1.{"\n\n"}Sujeto</Text>
                                <Text style={styles.tableHeaderCell}>2.{"\n\n"}Raíz</Text>
                                <Text style={styles.tableHeaderCell}>3.{"\n\n"}Partícula</Text>
                                <Text style={styles.tableHeaderCell}>4.{"\n\n"}Termina-{"\n\n"}ción</Text>
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

const BigFlipCard3 = ({ data1, data2 }) => {
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
                <Text style={[styles.tableCell, styles.textCenter]}>{item.verb}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.positive}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            </View>
        ));
    };

    const renderBack = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.verb}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.negative}</Text>
                <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
            </View>
        ));
    };

    return (
        <TouchableWithoutFeedback onPress={handleFlip}>
            <View style={styles.imperative3BigFlipCardContainer}>
                <Animated.View style={[styles.flipCardInner, styles.flipCardFront, animatedStyleFront]}>
                    <CardDefault title="Forma positiva" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Verbo</Text>
                                <Text style={styles.tableHeaderCell}>Positivo</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                            </View>
                            {renderFront(data1)}
                        </View>
                    </CardDefault>
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <CardDefault title="Forma negativa" styleCard={styles.cardDefaultPronouns}>
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Verbo</Text>
                                <Text style={styles.tableHeaderCell}>Negativo</Text>
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

const Imperative = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [showChat1, setShowChat1] = useState(false);
    const [showChat2, setShowChat2] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const navigation = useNavigation();

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

    const toggleChatModal1 = () => {
        setShowChat1(!showChat1);
    };

    const toggleChatModal2 = () => {
        setShowChat2(!showChat2);
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

                    <CardDefault title="Algo más complejo" >
                        <Text style={styles.cardContent}>
                            Mis amigos, este módulo es el final de este nivel básico y requiere
                            de toda tu atención. Es más complejo pero lo haremos juntos.{'\n\n'}
                            En esta lección aprenderemos sobre el imperativo en Kichwa. Esto
                            quiere decir que, entenderemos como se da una orden o mandato.{'\n\n'}
                            Existen varias formas de imperativo. Las veremos todas en esta lección.
                            Pero antes de comenzar es bueno que sepas que, escribir o poner el
                            sujeto es opcional en el imperativo.
                        </Text>
                    </CardDefault>

                    <CardDefault title="Ruray-mañak rimarikuna" >
                        <Text style={styles.cardContent}>
                            Esto quiere decir: La forma informal.{'\n\n'}
                            Para transformar un verbo en imperativo solo tomamos la raíz y aumentamos
                            la terminación (variable). El imperativo no existe para ñuka, pay, y
                            paykuna.
                        </Text>
                    </CardDefault>

                    <BigFlipCard1 data1={imp_informal1_data} data2={imp_informal2_data} />

                    <ButtonDefault label="Ejemplos / Shinakuna" onPress={toggleChatModal1} />

                    <CardDefault title="Mishki shimi rimay" >
                        <Text style={styles.cardContent}>
                            Esto se traduce a: La forma cortés.{'\n\n'}
                            También existe la forma cortes. Para esto utilizamos kikin (usted) y kikinkuna
                            (ustedes), y también anteponemos la partícula -pa antes de la terminación.
                        </Text>
                    </CardDefault>

                    <BigFlipCard2 data1={imp_formal1_data} data2={imp_formal2_data} />

                    <ButtonDefault label="Ejemplos / Shinakuna" onPress={toggleChatModal2} />

                    <CardDefault title="Ama rurachik" >
                        <Text style={styles.cardContent}>
                            Esto significa: El imperativo negativo.{'\n\n'}
                            Para formar el negativo del imperativo, anteponemos la palabra ama, y
                            añadimos la partícula chu al final del verbo.
                        </Text>
                    </CardDefault>

                    <BigFlipCard3 data1={imp_negative1_data} data2={imp_negative2_data} />

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

                <ChatModal visible={showChat1} onClose={toggleChatModal1} initialMessages={chat_messages1} />

                <ChatModal visible={showChat2} onClose={toggleChatModal2} initialMessages={chat_messages2} />

                <View style={styles.footer}>
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('FamilyPart1')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Imperative;
