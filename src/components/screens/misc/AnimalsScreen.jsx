// src/components/AnimalsScreen.jsx

import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../ui/imageContainers/ImageContainer';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../animations/FloatingHumu';
import { ComicBubble } from '../../ui/bubbles/ComicBubble';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';
import { AccordionDefault } from '../../ui/buttons/AccordionDefault';
import AsyncStorage from '@react-native-async-storage/async-storage';

const animalsData = [
    { kichwa: "allku", spanish: "perro", image: "https://img.freepik.com/vector-premium/lindo-vector-caricatura-perro-cachorro-sabueso_549857-8253.jpg?w=360" },
    { kichwa: "misi", spanish: "gato", image: "https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg?size=338&ext=jpg&ga=GA1.1.34264412.1717545600&semt=ais_user" },
    { kichwa: "atallpa", spanish: "gallina", image: "https://st2.depositphotos.com/1967477/8228/v/450/depositphotos_82289790-stock-illustration-chicken-hen-waving-hand.jpg" },
    { kichwa: "kulta", spanish: "pato", image: "https://img.freepik.com/vector-premium/pato-dibujos-animados-lindo_160606-389.jpg" },
    { kichwa: "kuy", spanish: "cuy", image: "https://st5.depositphotos.com/11953928/65218/v/450/depositphotos_652183978-stock-illustration-fluffy-rodent-hamster-sitting-icon.jpg" },
    { kichwa: "kuchi", spanish: "chancho", image: "https://img.freepik.com/vector-premium/cerdo-feliz-dibujos-animados-aislado-sobre-fondo-blanco_29190-2671.jpg" },
    { kichwa: "ukucha", spanish: "ratón", image: "https://img.freepik.com/vector-gratis/lindo-ratoncito-personaje-dibujos-animados-orejas-grandes_1308-133011.jpg" },
    { kichwa: "piki", spanish: "pulga", image: "https://st.depositphotos.com/1967477/3507/v/450/depositphotos_35078763-stock-illustration-flea-cartoon.jpg" },
    { kichwa: "wallinku", spanish: "conejo", image: "https://img.freepik.com/vector-premium/conejo-feliz-dibujos-animados-zanahoria_29190-8319.jpg" },
    { kichwa: "atuk", spanish: "lobo", image: "https://img.freepik.com/vector-premium/ilustracion-animal-dibujos-animados-lobo-pequeno_7814-728.jpg" },
    { kichwa: "añas", spanish: "zorrillo", image: "https://img.freepik.com/vector-premium/cute-dibujos-animados-zorrillo-sentado_188253-2809.jpg" },
    { kichwa: "kushillu", spanish: "mono", image: "https://st2.depositphotos.com/2945617/9575/v/450/depositphotos_95757354-stock-illustration-cute-monkey-waving.jpg" },
    { kichwa: "amaru", spanish: "culebra", image: "https://img.freepik.com/vector-premium/serpiente-dibujos-animados-posando-sacando-lengua_70172-1205.jpg" },
    { kichwa: "runa llama", spanish: "llama", image: "https://img.freepik.com/vector-premium/llama-divertida-dibujos-animados-sobre-fondo-blanco_29190-6865.jpg?w=360" },
    { kichwa: "chantazu, ushu", spanish: "burro", image: "https://img.freepik.com/vector-premium/burro-feliz-dibujos-animados_33070-2828.jpg" },
    { kichwa: "llama", spanish: "oveja", image: "https://img.freepik.com/vector-gratis/ilustracion-ovejas-dibujos-animados-dibujados-mano_23-2150375976.jpg?size=338&ext=jpg&ga=GA1.1.933601817.1717545600&semt=ais_user" },
    { kichwa: "apyu", spanish: "caballo", image: "https://us.123rf.com/450wm/zzn/zzn2307/zzn230700371/208804762-lindo-caballo-de-dibujos-animados-personaje-equino-juguet%C3%B3n-ilustraci%C3%B3n-vectorial-para-ni%C3%B1os-y.jpg" },
    { kichwa: "wakra", spanish: "ganado", image: "https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-ganado_1465-201.jpg" },
    { kichwa: "añanku", spanish: "hormiga", image: "https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-hormigas-flor-azul-sobre-fondo-blanco_1308-44198.jpg" },
    { kichwa: "challwa", spanish: "pez", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-pez-payaso_23-2150683251.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1717545600&semt=ais_user" },
    { kichwa: "chuspi", spanish: "mosca", image: "https://img.freepik.com/vector-gratis/mosca-domestica-sobre-fondo-blanco_1308-81423.jpg" },
    { kichwa: "katsu", spanish: "escarabajo", image: "https://static.vecteezy.com/system/resources/previews/006/581/234/non_2x/a-dung-beetle-cartoon-character-free-vector.jpg" },
    { kichwa: "kuru", spanish: "gusano", image: "https://img.freepik.com/vector-gratis/ilustracion-vector-dibujos-animados-lindo-oruga_96037-427.jpg" },
    { kichwa: "puma", spanish: "puma", image: "https://img.freepik.com/vector-premium/puma-animal-coloreado-caricatura-ilustracion_576561-4533.jpg" },
    { kichwa: "yawati", spanish: "tortuga", image: "https://img.freepik.com/vector-premium/tortuga-dibujos-animados-lindo_29190-3852.jpg?w=360" },
    { kichwa: "uru", spanish: "araña", image: "https://img.freepik.com/vector-gratis/ilustracion-arana-dibujos-animados-dibujados-mano_23-2150409558.jpg?size=338&ext=jpg&ga=GA1.1.933601817.1717545600&semt=ais_user" },
    { kichwa: "kuntur", spanish: "cóndor", image: "https://img.freepik.com/vector-premium/personaje-dibujos-animados-condor-o-buitre-sentado-rama_20412-530.jpg" },
    { kichwa: "pishku", spanish: "pájaro, ave", image: "https://illustoon.com/photo/2943.png" },
    { kichwa: "palun", spanish: "abeja", image: "https://img.freepik.com/vector-gratis/cute-bee-flying-cartoon-vector-icono-ilustracion-concepto-icono-naturaleza-animal-aislado-vector-premium_138676-6016.jpg?size=338&ext=jpg&ga=GA1.1.933601817.1717545600&semt=ais_user" },
    { kichwa: "mashu", spanish: "murciélago", image: "https://i.pinimg.com/564x/98/44/fb/9844fbf49ee8c4c765964294e77b713c.jpg" }
];

const curiosity_data = [

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
                    <ImageContainer uri={item.image} style={styles.imageCards} />
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <Text style={styles.translationLabel}>Español:</Text>
                    <Text style={styles.spanishText}>{item.spanish}</Text>
                    <Text style={styles.translationLabel}>Kichwa:</Text>
                    <Text style={styles.kichwaText}>{item.kichwa}</Text>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const AnimalsScreen = () => {
    const progress = 0.75;
    const [showHelp, setShowHelp] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);


    const toggleAccordion = (key) => {
        if (activeAccordion === key) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(key);
        }
    };

    const navigation = useNavigation();

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_ParticlesPart1_completed', 'true');
            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
        >
            <StatusBar barStyle="default" backgroundColor="#003366" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="intermedio" />
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Animales en Kichwa">
                        <Text style={styles.cardContent}>
                            Hoy aprenderemos sobre los nombres de los animales en Kichwa.{"\n\n"}
                            ¡Prepárate para explorar el fascinante mundo de los animales en Kichwa!
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {animalsData.map((item, index) => (
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
                                    <ImageContainer uri={item.imagePath} style={styles.imageModal} />
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
                                    <FloatingHumu>
                                        <ImageContainer path={require('../../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text="Presiona en las tarjetas de animales para ver su traducción y nombre en Kichwa."
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
                    <ButtonLevelsInicio label="Inicio" />

                    <ButtonDefault label="Siguiente" onPress={() => { completeLevel(); navigation.navigate('ParticlesPart1'); }} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default AnimalsScreen;
