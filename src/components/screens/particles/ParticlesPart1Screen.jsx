// src/components/ParticlesPart1Screen.jsx

import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CardDefault } from '../../ui/cards/CardDefault';
import { styles } from '../../../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
// Data para la pantalla de partículas parte 1
const particlesData = {
    header: "Las Partículas en Kichwa Parte 1",
    pointsAndLives: "Puntos⭐ Vidas ❤️",
    cards: [
        {
            title: "Para Preguntar",
            particle: "tak",
            content: [
                { text: "tak se utiliza para formular preguntas." },
                { example: "Imatatak mikunki = ¿Qué comes?" }
            ]
        },
        {
            title: "Para Afirmar o Dar Énfasis",
            particle: "ta",
            content: [
                { text: "-ta se utiliza para afirmar o dar énfasis." },
                { example: "Tantata mikuni = Como pan" }
            ]
        },
        {
            title: "Ejemplos con tak y ta",
            table: [
                { kichwa: "Imatatak yanunki", spanish: "¿Qué cocinas?" },
                { kichwa: "Ñukaka aychata yanuni", spanish: "Cocino carne" },
                { kichwa: "Imatatak apamunki", spanish: "¿Qué traes?" },
                { kichwa: "Ñukaka misita apamuni", spanish: "Traigo el gato" }
            ]
        },
        {
            title: "Para Indicar Pertenencia",
            particle: "pak",
            content: [
                { text: "La partícula -pak se utiliza para indicar pertenencia o posición." },
                { text: "Se combina con pronombres personales para formar pronombres posesivos." }
            ],
            table: [
                { pronoun: "Ñuka", particle: "pak", possessive: "ñukapak" },
                { pronoun: "Kan", particle: "pak", possessive: "kanpak" },
                { pronoun: "Kikin", particle: "pak", possessive: "kikinpak" },
                { pronoun: "Pay", particle: "pak", possessive: "paypak" },
                { pronoun: "Ñukanchik", particle: "pak", possessive: "ñukanchikpak" },
                { pronoun: "Kankuna", particle: "pak", possessive: "kankunapak" },
                { pronoun: "Kikinkuna", particle: "pak", possessive: "kikinkunapak" },
                { pronoun: "Paykuna", particle: "pak", possessive: "paykunapak" }
            ]
        },
        {
            title: "Ejemplos con -pak",
            examples: [
                { kichwa: "Ñukapak tayta", spanish: "mi padre" },
                { kichwa: "Paykunapak allku", spanish: "su perro (el perro de ellos)" },
                { kichwa: "Kanpak wasi", spanish: "tu casa" },
                { kichwa: "Kikinpak shuti", spanish: "su nombre (el nombre de usted)" }
            ]
        },
        {
            title: "Para Indicar Objetivo o Razón",
            particle: "nkapak",
            content: [
                { text: "La partícula -nkapak se utiliza para indicar objetivo o razón de una acción." }
            ],
            examples: [
                { kichwa: "Ñukaka mikunkapak shamuni", spanish: "vengo a comer" },
                { kichwa: "Ñukanchik tushunkapak rinchik", spanish: "nos vamos a bailar" }
            ]
        }
    ]
};

// Función para renderizar los ejemplos
const renderExamples = (examples) => {
    return examples.map((item, index) => (
        <View key={index} style={localStyles.exampleBox}>
            <Text style={localStyles.exampleText}>{item.kichwa}</Text>
            <Text style={localStyles.arrow}>→</Text>
            <Text style={localStyles.exampleText}>{item.spanish}</Text>
        </View>
    ));
};

// Función para renderizar las tablas
const renderTable = (table, type = 'normal') => {
    return table.map((row, index) => (
        <View key={index} style={localStyles.tableRow}>
            {type === 'possessive' ? (
                <>
                    <Text style={localStyles.tableCell}>{row.pronoun}</Text>
                    <Text style={localStyles.tableCell}>{row.particle}</Text>
                    <Text style={localStyles.tableCell}>{row.possessive}</Text>
                </>
            ) : (
                <>
                    <Text style={localStyles.tableCell}>{row.kichwa}</Text>
                    <Text style={localStyles.tableCell}>{row.spanish}</Text>
                </>
            )}
        </View>
    ));
};

const ParticlesPart1Screen = () => {
    const navigation = useNavigation();
    const progress = 0.75;

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}

        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="intermedio" />
                </View>

                <View style={styles.body}>
                    {particlesData.cards.map((card, index) => (
                        <CardDefault key={index} title={card.title}>
                            {card.content && card.content.map((content, idx) => (
                                <Text key={idx} style={localStyles.text}>
                                    <Text style={localStyles.highlight}>{content.text}</Text>
                                    {content.example && <Text style={localStyles.example}>{content.example}</Text>}
                                </Text>
                            ))}
                            {card.table && renderTable(card.table, card.title === "Para Indicar Pertenencia" ? 'possessive' : 'normal')}
                            {card.examples && renderExamples(card.examples)}
                        </CardDefault>
                    ))}
                </View>

                <View style={styles.footer}>
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('IntroduccionJuegosScreen1')} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    highlight: {
        fontWeight: 'bold',
        color: '#5B4D28',
    },
    example: {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 10,
    },
    table: {
        marginTop: 10,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
    },
    exampleBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
    },
    exampleText: {
        fontSize: 16,
        flex: 1,
    },
    arrow: {
        fontSize: 20,
        marginHorizontal: 10,
    },
});

export default ParticlesPart1Screen;



//Prueba de nueva pantalla
// // src/components/ParticlesScreen.jsx
// import React from 'react';
// import { View, Text, ScrollView, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Carousel from 'react-native-reanimated-carousel';
// import { styles } from '../../../../styles/globalStyles';
// import { CardDefault } from '../../ui/cards/CardDefault';

// const { width } = Dimensions.get('window');

// // Data estructurada
// const particlesData = {
//     title: "Las Partículas en Kichwa Parte 1",
//     examples: [
//         {
//             title: "Para Preguntar",
//             description: "tak se utiliza para formular preguntas.",
//             example: "Imatatak mikunki = ¿Qué comes?",
//             image: "https://example.com/preguntar.png",
//         },
//         {
//             title: "Para Afirmar o Dar Énfasis",
//             description: "-ta se utiliza para afirmar o dar énfasis.",
//             example: "Tantata mikuni = Como pan",
//             image: "https://example.com/afirmar.png",
//         },
//     ],
//     possessionData: {
//         title: "Para Indicar Pertenencia",
//         subtitle: "-pak se utiliza para indicar pertenencia o posición.",
//         pronouns: [
//             { personal: "Ñuka", particle: "pak", possessive: "ñukapak" },
//             { personal: "Kan", particle: "pak", possessive: "kanpak" },
//             { personal: "Kikin", particle: "pak", possessive: "kikinpak" },
//             { personal: "Pay", particle: "pak", possessive: "paypak" },
//             { personal: "Ñukanchik", particle: "pak", possessive: "ñukanchikpak" },
//             { personal: "Kankuna", particle: "pak", possessive: "kankunapak" },
//         ],
//         examples: [
//             { kichwa: "Ñukapak tayta", translation: "mi padre" },
//             { kichwa: "Paykunapak allku", translation: "su perro (el perro de ellos)" },
//             { kichwa: "Kanpak wasi", translation: "tu casa" },
//         ],
//     },
//     purposeExamples: [
//         {
//             title: "Para Indicar Objetivo o Razón",
//             description: "-nkapak se utiliza para indicar objetivo o razón de una acción.",
//             examples: [
//                 { kichwa: "Ñukaka mikunkapak shamuni", translation: "vengo a comer" },
//                 { kichwa: "Ñukanchik tushunkapak rinchik", translation: "nos vamos a bailar" },
//             ],
//         },
//     ],
// };

// // Componente que renderiza las tarjetas de ejemplos
// const renderExampleCard = (example) => (
//     <View style={styles.carouselExampleCard}>
//         <Text style={styles.carouselVerbTitle}>{example.title}</Text>
//         <Image source={{ uri: example.image }} style={styles.carouselExampleImage} />
//         <Text style={styles.carouselDescriptionText}>{example.description}</Text>
//         <Text style={styles.carouselExampleText}>{example.example}</Text>
//     </View>
// );

// // Componente para las pertenencias
// const renderPossessionCarousel = (data) => (
//     <View>
//         <CardDefault title={data.title}>
//             <Text style={styles.carouselSubtitle}>{data.subtitle}</Text>
//             <Carousel
//                 width={width * 0.8}
//                 height={200}
//                 data={data.pronouns}
//                 renderItem={({ item }) => (
//                     <View style={styles.carouselCard}>
//                         <Text style={styles.carouselSubject}>{item.personal}</Text>
//                         <Text style={styles.carouselDetail}>Partícula: {item.particle}</Text>
//                         <Text style={styles.carouselDetail}>Pronombre Posesivo: {item.possessive}</Text>
//                     </View>
//                 )}
//                 mode="parallax"
//                 pagingEnabled={true}
//             />
//         </CardDefault>
//         <CardDefault title="Ejemplos con -pak">
//             <Carousel
//                 width={width * 0.8}
//                 height={200}
//                 data={data.examples}
//                 renderItem={({ item }) => (
//                     <View style={styles.carouselCard}>
//                         <Text style={styles.carouselSubject}>{item.kichwa}</Text>
//                         <Text style={styles.carouselDetail}>Traducción: {item.translation}</Text>
//                     </View>
//                 )}
//                 mode="parallax"
//                 pagingEnabled={true}
//             />
//         </CardDefault>
//     </View>
// );

// const ParticlesScreen = () => {
//     const navigation = useNavigation();

//     return (
//         <View style={styles.container}>
//             <ScrollView>
//                 <View style={styles.header}>
//                     <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
//                 </View>
//                 <View style={styles.header}>
//                     <Text style={styles.titleTema}>{particlesData.title}</Text>
//                 </View>
//                 <View style={styles.body}>
//                     <Carousel
//                         width={width}
//                         height={400}
//                         data={particlesData.examples}
//                         renderItem={({ item }) => renderExampleCard(item)}
//                         mode="parallax"
//                         pagingEnabled={true}
//                     />
//                     {renderPossessionCarousel(particlesData.possessionData)}
//                     <Carousel
//                         width={width}
//                         height={300}
//                         data={particlesData.purposeExamples}
//                         renderItem={({ item }) => (
//                             <View style={styles.carouselCard}>
//                                 <Text style={styles.carouselVerbTitle}>{item.title}</Text>
//                                 <Text style={styles.carouselDescriptionText}>{item.description}</Text>
//                                 {item.examples.map((example, index) => (
//                                     <Text key={index} style={styles.carouselExampleText}>
//                                         {example.kichwa} → {example.translation}
//                                     </Text>
//                                 ))}
//                             </View>
//                         )}
//                         mode="parallax"
//                         pagingEnabled={true}
//                     />
//                 </View>
//                 <View style={styles.footer}>
//                     <TouchableWithoutFeedback onPress={() => navigation.navigate('Game1')}>
//                         <View style={styles.buttonDefault}>
//                             <Text style={styles.buttonText}>Siguiente</Text>
//                         </View>
//                     </TouchableWithoutFeedback>
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// export default ParticlesScreen;

