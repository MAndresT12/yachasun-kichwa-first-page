// src/components/ProgresoScreen.jsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../../../styles/globalStyles';

import TrophyCard from '../ui/cards/TrophyCard';
import { ButtonDefault } from '../ui/buttons/ButtonDefault'; // O cualquier otro botón que quieras usar
import { ButtonLevelsInicio } from '../ui/buttons/ButtonLevelsInicio';

const ProgresoScreen = () => {
    const navigation = useNavigation(); // Acceder a la navegación

    const [selectedTrophy, setSelectedTrophy] = useState(null); // Trofeo seleccionado
    const [showModal, setShowModal] = useState(false); // Estado para el modal
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    // Función para marcar el nivel como completado y desbloquear el siguiente

    // Cada vez que la pantalla de CaminoLevelsScreen gana foco, recargar el progreso de trofeos
    useFocusEffect(
        React.useCallback(() => {
            // loadTrophyProgress();
        }, [])
    );

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('trofeo_modulo1_intermedio', 'false');
            await AsyncStorage.setItem('level_Numeros_completed', 'true');

            await AsyncStorage.setItem('trofeo_modulo1_basic', 'false');
            await AsyncStorage.setItem('level_Alphabet_completed', 'true');

            //Agregar mas en caso de ser necesario
            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };

    // Function for debugging unlocks all levels
    const unlockAllLevels = async () => {
        try {
            await AsyncStorage.setItem('trofeo_modulo1_intermedio', 'true');
            await AsyncStorage.setItem('trofeo_modulo2_intermedio', 'true');
            await AsyncStorage.setItem('trofeo_modulo3_intermedio', 'true');
            await AsyncStorage.setItem('trofeo_modulo4_intermedio', 'true');
            await AsyncStorage.setItem('trofeo_modulo5_intermedio', 'true');
            await AsyncStorage.setItem('trofeo_modulo6_intermedio', 'true');

            await AsyncStorage.setItem('level_Numeros_completed', 'true');
            await AsyncStorage.setItem('level_Food_completed', 'true');
            await AsyncStorage.setItem('level_Animals_completed', 'true');
            await AsyncStorage.setItem('level_ParticlesPart1_completed', 'true');
            await AsyncStorage.setItem('level_IntroduccionJuegosScreen1_completed', 'true');
            await AsyncStorage.setItem('level_Game1_completed', 'true');

            await AsyncStorage.setItem('level_ParticlesPart2_completed', 'true');
            await AsyncStorage.setItem('level_ParticlesPart3_completed', 'true');
            await AsyncStorage.setItem('level_ParticlesPart4_completed', 'true');
            await AsyncStorage.setItem('level_LaNegacion_completed', 'true');
            await AsyncStorage.setItem('level_IntroduccionJuegosScreen2_completed', 'true');
            await AsyncStorage.setItem('level_Game2_completed', 'true');

            await AsyncStorage.setItem('level_LosVerbos1_completed', 'true');
            await AsyncStorage.setItem('level_LosVerbosConjugaciones1_completed', 'true');
            await AsyncStorage.setItem('level_LosAdjetivos1_completed', 'true');
            await AsyncStorage.setItem('level_LaCiudad_completed', 'true');
            await AsyncStorage.setItem('level_IntroduccionJuegosScreen3_completed', 'true');
            await AsyncStorage.setItem('level_Game3_completed', 'true');

            await AsyncStorage.setItem('level_LaCocina_completed', 'true');
            await AsyncStorage.setItem('level_LosVerbos2_completed', 'true');
            await AsyncStorage.setItem('level_LosAdjetivos2_completed', 'true');
            await AsyncStorage.setItem('level_ElDormitorio_completed', 'true');
            await AsyncStorage.setItem('level_IntroduccionJuegosScreen4_completed', 'true');
            await AsyncStorage.setItem('level_Game4_completed', 'true');

            await AsyncStorage.setItem('level_LaUbicacion_completed', 'true');
            await AsyncStorage.setItem('level_ElTiempo_completed', 'true');
            await AsyncStorage.setItem('level_ElPasadoSimple_completed', 'true');
            await AsyncStorage.setItem('level_ElParticipioPasado_completed', 'true');
            await AsyncStorage.setItem('level_IntroduccionJuegosScreen5_completed', 'true');
            await AsyncStorage.setItem('level_Game5_completed', 'true');

            await AsyncStorage.setItem('level_ElPasadoProgresivo_completed', 'true');
            await AsyncStorage.setItem('level_ConjugacionPresenteProgresivo_completed', 'true');
            await AsyncStorage.setItem('level_FuturoProximo_completed', 'true');
            await AsyncStorage.setItem('level_FuturoSimple_completed', 'true');
            await AsyncStorage.setItem('level_IntroduccionJuegosScreen6_completed', 'true');
            await AsyncStorage.setItem('level_Game6_completed', 'true');

            await AsyncStorage.setItem('trofeo_modulo1_basic', 'true');
            await AsyncStorage.setItem('trofeo_modulo2_basic', 'true');
            await AsyncStorage.setItem('trofeo_modulo3_basic', 'true');
            await AsyncStorage.setItem('trofeo_modulo4_basic', 'true');
            await AsyncStorage.setItem('trofeo_modulo5_basic', 'true');
            await AsyncStorage.setItem('trofeo_modulo6_basic', 'true');

            await AsyncStorage.setItem('level_Alphabet_completed', 'true');
            await AsyncStorage.setItem('level_FirstNumbers_completed', 'true');
            await AsyncStorage.setItem('level_ToCount_completed', 'true');
            await AsyncStorage.setItem('level_Colors_completed', 'true');
            await AsyncStorage.setItem('level_IntroGamesBasic1_completed', 'true');
            await AsyncStorage.setItem('level_EvaluationBasicModule1_completed', 'true');

            await AsyncStorage.setItem('level_GreetingsPart1_completed', 'true');
            await AsyncStorage.setItem('level_GreetingsPart2_completed', 'true');
            await AsyncStorage.setItem('level_PronounsSentence_completed', 'true');
            await AsyncStorage.setItem('level_FamilyPart1_completed', 'true');
            await AsyncStorage.setItem('level_IntroGamesBasic2_completed', 'true');
            await AsyncStorage.setItem('level_EvaluationBasicModule2_completed', 'true');

            await AsyncStorage.setItem('level_FamilyPart2_completed', 'true');
            await AsyncStorage.setItem('level_BodyParts_completed', 'true');
            await AsyncStorage.setItem('level_House_completed', 'true');
            await AsyncStorage.setItem('level_Classroom_completed', 'true');
            await AsyncStorage.setItem('level_IntroGamesBasic3_completed', 'true');
            await AsyncStorage.setItem('level_EvaluationBasicModule3_completed', 'true');

            await AsyncStorage.setItem('level_Nature_completed', 'true');
            await AsyncStorage.setItem('level_Foods_completed', 'true');
            await AsyncStorage.setItem('level_Orientation_completed', 'true');
            await AsyncStorage.setItem('level_AnimalsBasic_completed', 'true');
            await AsyncStorage.setItem('level_IntroGamesBasic4_completed', 'true');
            await AsyncStorage.setItem('level_EvaluationBasicModule4_completed', 'true');

            await AsyncStorage.setItem('level_Pluralization_completed', 'true');
            await AsyncStorage.setItem('level_Gender_completed', 'true');
            await AsyncStorage.setItem('level_Quantity_completed', 'true');
            await AsyncStorage.setItem('level_Size_completed', 'true');
            await AsyncStorage.setItem('level_IntroGamesBasic5_completed', 'true');
            await AsyncStorage.setItem('level_EvaluationBasicModule5_completed', 'true');

            await AsyncStorage.setItem('level_Imperative_completed', 'true');
            await AsyncStorage.setItem('level_SimplePresent_completed', 'true');
            await AsyncStorage.setItem('level_IntroGamesBasic6_completed', 'true');
            await AsyncStorage.setItem('level_EvaluationBasicModule6_completed', 'true');

            //Agregar mas en caso de ser necesario
            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };

    // Función para manejar la selección de un trofeo
    const handleTrophyClick = (trophy) => {
        setSelectedTrophy(trophy);
        setShowModal(true);
    };
    const BouncyTextTitulo = ({ children }) => {
        const scale = useSharedValue(1);

        useEffect(() => {
            scale.value = withRepeat(
                withSequence(
                    withTiming(1.1, { duration: 1000 }),
                    withTiming(1, { duration: 1000 })
                ),
                -1,  // Infinite loop
                true // Reverse on repeat
            );
        }, []);

        const animatedStyle = useAnimatedStyle(() => ({
            transform: [{ scale: scale.value }],
        }));

        return (
            <Animated.Text style={[localStyles.bouncyTextTitulo]}>
                {children}
            </Animated.Text>
        );
    };
    const BouncyTextTitulo2 = ({ children }) => {
        const scale = useSharedValue(1);

        useEffect(() => {
            scale.value = withRepeat(
                withSequence(
                    withTiming(1.1, { duration: 1000 }),
                    withTiming(1, { duration: 1000 })
                ),
                -1,  // Infinite loop
                true // Reverse on repeat
            );
        }, []);

        const animatedStyle = useAnimatedStyle(() => ({
            transform: [{ scale: scale.value }],
        }));

        return (
            <Animated.Text style={[localStyles.bouncyTextTitulo2]}>
                {children}
            </Animated.Text>
        );
    };

    // Trofeos y sus descripciones
    const trophiesBasic = [
        {
            key: 'trofeo_modulo1_basic',
            image: require('../../../assets/images/basic/badges/abc.jpg'),
            titulo: '¡ABC!',
            description: '¡Este trofeo marca el comienzo de tu aventura en Kichwa! Ahora conoces el alfabeto, los números y los colores, además, puedes pronunciar palabras básicas ¡todo en Kichwa!',
        },
        {
            key: 'trofeo_modulo2_basic',
            image: require('../../../assets/images/basic/badges/family.jpg'),
            titulo: '¡Familia!',
            description: '¡Felicitaciones! Este trofeo significa que ahora sabes cómo hablar sobre tu familia en Kichwa ¡y puedes presentarlos con orgullo!. También, puedes saludar y despedirte con cortesía, y conoces los pronombres. ¡Sigue así!',
        },
        {
            key: 'trofeo_modulo3_basic',
            image: require('../../../assets/images/basic/badges/home-food-school.jpg'),
            titulo: '¡El hogar, comida y la escuela!',
            description: '¡Lo lograste! Con este trofeo, tienes la capacidad de hablar sobre tu hogar, las partes del cuerpo, las cosas que encuentras en la escuela, y como nombrar a tú familia extendida. Ahora puedes nombrar objetos y lugares cotidianos en Kichwa.',
        },
        {
            key: 'trofeo_modulo4_basic',
            image: require('../../../assets/images/basic/badges/valley-flowers.jpg'),
            titulo: '¡Valle de flores!',
            description: '¡Has conquistado el valle de las flores! Este trofeo demuestra que ya sabes sobre la naturaleza y las maravillas del entorno, los animales, y la comida en Kichwa. Como un extra sabes cómo orientarte. ¡Haz llegado muy lejos!',
        },
        {
            key: 'trofeo_modulo5_basic',
            image: require('../../../assets/images/basic/badges/orientation.jpg'),
            titulo: '¡Simón dice!',
            description: '¡Qué divertido! Este trofeo significa que sabes cómo hablar de los objetos en cuanto a su cantidad, tamaño, cantidad y género. ¡Puedes describir todo a tu alrededor!',
        },
        {
            key: 'trofeo_modulo6_basic',
            image: require('../../../assets/images/basic/badges/present.jpg'),
            titulo: '¡Atardecer!',
            description: '¡Atardecer perfecto! Este trofeo significa que puedes hablar sobre acciones en el presente en Kichwa. También, puedes dar y recibir instrucciones usando el imperativo. Este es el trofeo final de nuestra aventura en el nivel básico. ¡Me llenas de orgullo!',
        },
    ];

    const trophiesIntermedio = [
        {
            key: 'trofeo_modulo1_intermedio',
            image: require('../../../assets/images/animals/zorro.png'),
            titulo: '¡Zorro!',
            description: '¡Este trofeo del zorro es muy especial! Obtenerlo significa que ya puedes contar números grandes como los miles, ¡e incluso un millón! También sobre cómo hablar de la comida y animales. Además, de que ya puedes hacer preguntas, dar respuestas y hablar de cosas que te pertenecen, ¡Todo en Kichwa!',
        },
        {
            key: 'trofeo_modulo2_intermedio',
            image: require('../../../assets/images/animals/jaguar.png'),
            titulo: '¡Jaguar!',
            description: '¡Este trofeo del jaguar es muy poderoso! Obtenerlo significa que ya puedes hablar sobre el origen de las cosas, lo que haces, con quién estás y hasta cómo moverte de un lugar a otro. También ya puedes dar énfasis y hablar de lugares, direcciones y límites. ¡Y lo mejor de todo, saber cómo decir que no en Kichwa!',
        },
        {
            key: 'trofeo_modulo3_intermedio',
            image: require('../../../assets/images/animals/guacamayo.png'),
            titulo: '¡Guacamayo!',
            description: '¡Este trofeo del guacamayo es muy colorido y especial! Obtenerlo significa que ya conoces algunos de los verbos más importantes en Kichwa, como leer, escribir y caminar. También vas a poder conjugar verbos para hablar de lo que tú y los demás hacen. ¡Y no solo eso! Sabrás como describir las cosas con adjetivos como grande, pequeño o hermoso. Además, ya podrás hablar sobre la ciudad y objetos que te rodean, como el carro, la bicicleta y más. ¡Estás listo para volar con todo este conocimiento!',
        },
        {
            key: 'trofeo_modulo4_intermedio',
            image: require('../../../assets/images/animals/cuy2.png'),
            titulo: '¡Cuy!',
            description: '¡Este trofeo del cuy es muy divertido! Obtenerlo significa que ya conoces los nombres de muchos objetos de la cocina, como la cuchara, la olla y el plato. También sabrás cómo decir algunos verbos importantes, como cocinar, hervir y calentar. ¡Pero eso no es todo! Ahora podrás describir cosas con adjetivos como suave, duro o sucio. Además, sabrás cómo hablar sobre el dormitorio, la cama, las cobijas, y hasta los sueños en Kichwa. ',
        },
        {
            key: 'trofeo_modulo5_intermedio',
            image: require('../../../assets/images/animals/llama.png'),
            titulo: '¡Llama!',
            description: '¡Este trofeo de la llama es increíble! Obtenerlo significa que ya sabes cómo hablar de lugares y ubicaciones, como: aquí, allí y más allá. También podrás hablar sobre el tiempo, decir palabras como: ayer, hoy, y hasta los días de la semana en Kichwa. ¡Y eso no es todo! Serás capaz de contar historias sobre lo que sucedió en el pasado, usando el pasado simple y el participio pasado. ¡Este trofeo demuestra que dominas cómo decir dónde, cuándo y qué pasó!',
        },
        {
            key: 'trofeo_modulo6_intermedio',
            image: require('../../../assets/images/animals/condor.png'),
            titulo: '¡Cóndor!',
            description: '¡Este trofeo del cóndor es majestuoso! Obtenerlo significa que ya sabes cómo hablar de cosas que estaban ocurriendo en el pasado. Además podrás decir lo que estás haciendo en este mismo momento. ¡Pero eso no es todo! También serás capaz de contar lo que harás pronto, y hasta lo que harás en el futuro. ¡Con este trofeo habrás completado toda esta gran aventura!',
        },
    ];

    return (
        <LinearGradient colors={['#e9cb60', '#F38181']} style={localStyles.gradientBackground}>
            <ScrollView contentContainerStyle={localStyles.scrollViewContent}>
                <BouncyTextTitulo>Trofeos Obtenidos</BouncyTextTitulo>
                <Text style={localStyles.subtitle}>¡Mira todo lo que has aprendido! Completa cada módulo y gana trofeos como recompensa. ¡Sigue adelante pequeño aventurero!</Text>

                {/* Cuadrícula de trofeos Basico*/}
                <BouncyTextTitulo2>Trofeos Módulo Basico</BouncyTextTitulo2>
                <View style={localStyles.trophyGrid}>
                    {trophiesBasic.map((trophy, index) => (
                        <TouchableOpacity key={index} onPress={() => handleTrophyClick(trophy)}>
                            <TrophyCard trophyKey={trophy.key} imageSource={trophy.image} isInProgresoScreen={true} />
                        </TouchableOpacity>
                    ))}
                </View>
                {/* Cuadrícula de trofeos Intermedio*/}
                <BouncyTextTitulo2>Trofeos Módulo Intermedio</BouncyTextTitulo2>
                <View style={localStyles.trophyGrid}>
                    {trophiesIntermedio.map((trophy, index) => (
                        <TouchableOpacity key={index} onPress={() => handleTrophyClick(trophy)}>
                            <TrophyCard trophyKey={trophy.key} imageSource={trophy.image} isInProgresoScreen={true} />
                        </TouchableOpacity>
                    ))}
                </View>

                <ButtonDefault label="Volver" onPress={() => navigation.navigate('Inicio')} />
                <ButtonLevelsInicio label="ResetAsync" />

                {/* Aca este boton solo lo estaba usando para setear como obtenido el trofeo1 intermedio arriba esta la funcion */}
                <ButtonLevelsInicio
                    label="Other"
                    onPress={() => {
                        completeLevel(); // Completar el nivel actual
                    }}
                />

                {/* This button is used for debugging */}
                <ButtonLevelsInicio
                    label="Unlock All Levels"
                    onPress={() => {
                        unlockAllLevels(); // Unlock all levels
                    }}
                />
            </ScrollView>

            {/* Modal para mostrar la descripción del trofeo */}
            {selectedTrophy && (
                <Modal animationType="slide" transparent={true} visible={showModal} onRequestClose={() => setShowModal(false)}>
                    <View style={localStyles.modalContainer}>
                        <View style={localStyles.modalContent}>
                            <Text style={localStyles.modalTitle}>{selectedTrophy.titulo}</Text>
                            <Text style={localStyles.modalMessage}>{selectedTrophy.description}</Text>

                            <View style={styles.buttonContainerAlphabet}>
                                <TouchableOpacity onPress={() => setShowModal(false)}>
                                    <View style={styles.buttonDefaultAlphabet}>
                                        <Text style={styles.buttonTextAlphabet}>Cerrar</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
    },
    scrollViewContent: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    bouncyTextTitulo: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#212752', // Color similar a globos #212752 antes #212b68
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 4,
        borderRadius: 10,
        padding: 15,
    },
    bouncyTextTitulo2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#212752', // Color similar a globos #212752 antes #212b68
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 4,
        borderRadius: 10,
        padding: 15,
    },
    trophyGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ProgresoScreen;

