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
// import { FamilyTree } from '../../../ui/trees/FamilyTree';

const images = {
    family1: require('../../../../../assets/images/basic/module2/family/family1.png'),
};

const family_data = [
    { famliyImage: images.family1, kichwa: "Hatun tayta / Hatun yaya", spanish: "Abuelo" },
    { famliyImage: images.family1, kichwa: "Hatun mama", spanish: "Abuela" },
    { famliyImage: images.family1, kichwa: "Tayta / Yaya", spanish: "Papá" },
    { famliyImage: images.family1, kichwa: "Mama", spanish: "Mamá" },
    { famliyImage: images.family1, kichwa: "Warmi", spanish: "Esposa" },
    { famliyImage: images.family1, kichwa: "Kusa", spanish: "Esposo" },
    { famliyImage: images.family1, kichwa: "Churi", spanish: "Hijo" },
    { famliyImage: images.family1, kichwa: "Ushushi", spanish: "Hija" },
    { famliyImage: images.family1, kichwa: "Hatun churi", spanish: "Nieto" },
    { famliyImage: images.family1, kichwa: "Hatun ushushi", spanish: "Nieta" },
];

const sibling_data = [
    { genero: "De hermana a hermano", kichwa: "Pani" },
    { genero: "De hermano a hermana", kichwa: "Turi" },
    { genero: "De hermano a hermano", kichwa: "Wawki" },
    { genero: "De hermana a hermana", kichwa: "Ñaña" },
];

const curiosity_data = [
    {
        key: '1',
        title: 'La Familia Indígena',
        text: 'La familia es muy importante en el mundo indígena. Entre padres e hijos, deben compartir conocimientos de cultura, tradición y unidad.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
    {
        key: '2',
        title: 'Parte de la familia',
        text: 'También se considerada, como parte de la familia, a las plantas, el agua, los animales y las montañas.',
        imagePath: require('../../../../../assets/images/humu/humu-talking.png'),
    },
];

const renderData = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.genero}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
        </View>
    ));
};

// const familyData = [
//     {
//       name: "Hatun Tayta / Hatun Yaya",
//       spouse: "Hatun Mama",
//       profile: "https://as2.ftcdn.net/v2/jpg/00/53/45/31/1000_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg", // reemplaza con la URL o la ruta de la imagen del abuelo
//       children: [
//         {
//           name: "Tayta / Yaya",
//           spouse: null,
//           profile: "https://as2.ftcdn.net/v2/jpg/00/53/45/31/1000_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg", // imagen del papá
//           children: [
//             {
//               name: "Churi",
//               spouse: null,
//               profile: "https://as2.ftcdn.net/v2/jpg/00/53/45/31/1000_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg", // imagen del hijo
//               children: [
//                 {
//                   name: "Hatun Churi",
//                   spouse: null,
//                   profile: "https://as2.ftcdn.net/v2/jpg/00/53/45/31/1000_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg", // imagen del nieto
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           name: "Mama",
//           spouse: null,
//           profile: "https://as2.ftcdn.net/v2/jpg/00/53/45/31/1000_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg", // imagen de la mamá
//           children: [
//             {
//               name: "Ushushi",
//               spouse: null,
//               profile: "https://as2.ftcdn.net/v2/jpg/00/53/45/31/1000_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg", // imagen de la hija
//               children: [
//                 {
//                   name: "Hatun Ushushi",
//                   spouse: null,
//                   profile: "https://as2.ftcdn.net/v2/jpg/00/53/45/31/1000_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg", // imagen de la nieta
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ];

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
                    <ImageContainer path={item.famliyImage} style={styles.imageCards} />
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

const FamilyPart1 = () => {
    const [showHelp, setShowHelp] = useState(null);
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

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#003366" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>La Familia Parte 1</Text>
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    
                    {/* <FamilyTree
                        data={familyData}
                        title="Your Family Tree"
                        siblingGap={20}
                        familyGap={15}
                        pathColor="blue"
                        strokeWidth={2}
                        nodeTitleStyle={{ fontSize: 16, color: 'red' }}
                    /> */}

                    <CardDefault title="Amor por nuestra familia">
                        <Text style={styles.cardContent}>
                            Nuestra familia siempre nos apoyan y nos hacen felices. Yo mucho amo a mi mamá, y ¿tú? {"\n\n"}
                            Ahora, quiero enseñarte cómo hablar de tú familia en Kichwa.
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {family_data.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>

                    <CardDefault title="Nuestros hermanos">
                        <Text style={styles.cardContent}>
                            ¿No sé si tú tengas hermanos? Yo si los tengo. Somos 2 hermanos y 2 hermanas. 
                            ¡Una gran familia llena de amor! Y es bueno saber cómo dirigirnos a ellos.{"\n\n"}
                            En Kichwa hablar de nuestros hermanos depende del género. De una hermano a una hermana,
                            de un hermano a un hermano, de una hermana a una hermana y de una hermana a un hermano.
                            Muchas formas diferentes de decirlo.{"\n\n"}
                            ¿Quieres saber cómo hace?
                        </Text>
                    </CardDefault>

                    <CardDefault title="Hermanos por su género">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Género</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {renderData(sibling_data)}
                        </View>
                    </CardDefault>

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
                                        text='Presiona en las tarjetas para ver la información.'
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
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('GamesBasicModule2')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default FamilyPart1;