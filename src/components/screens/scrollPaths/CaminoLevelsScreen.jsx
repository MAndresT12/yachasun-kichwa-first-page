// src/components/CaminoLevelsScreen.jsx

import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated';
import { styles } from '../../../../styles/globalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
//import { FontAwesomeIcon } from '@fontawesome/react-native-fontawesome'


const BouncyText = ({ children }) => {
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
        <Animated.Text style={[localStyles.bouncyText, animatedStyle]}>
            {children}
        </Animated.Text>
    );
};

const CaminoLevelsScreen = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={localStyles.gradientBackground}
        >
            <View style={styles.header}>
                <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
            </View>
            <ScrollView contentContainerStyle={localStyles.scrollViewContent}>
                <Image source={require('../../../../assets/images/animals/tortuga.png')} style={localStyles.islandImage} />

                {/* Modulo 1 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Main')}
                    >
                        <BouncyText><FontAwesome name="star" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Números / Yupaykuna</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Alimentos / Mikunakuna</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Food')}
                    >
                        <BouncyText><FontAwesome name="cutlery" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Animals')}
                    >
                        <BouncyText><FontAwesome name="paw" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Animales / Mikunakuna</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Partículas: Preguntas, Afirmación, Pertenencia, Razón / Shimikukuna: tak, ta, pak, nkapak</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ParticlesPart1')}
                    >
                        <BouncyText><FontAwesome name="question" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('IntroduccionJuegosScreen1')}
                    >
                        <FontAwesome name="gamepad" size={28} color="#FFF" />
                    </TouchableOpacity>
                    <BouncyText>Juego: Módulo 1 / Pukllana: Shukniki  Tantachiy Yachay</BouncyText>

                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Evaluación: Módulo 1 / Ruraykuna: Shukniki  Tantachiy Yachay</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Game1')}
                    >
                        <FontAwesome name="pencil" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>

                <Image source={require('../../../../assets/images/animals/jaguar.png')} style={localStyles.islandImage} />

                {/* Modulo 2 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ParticlesPart2')}
                    >
                        <BouncyText><FontAwesome name="flag" size={24} color="#ffffff" />
                        </BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Partículas: Origen, Acción, Compañia / Shimikukuna: manta, kaman, wan</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Partículas: Preguntas, Énfasis / Shimikukuna: tak,  ka, chu, mi</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ParticlesPart3')}
                    >
                        <BouncyText><FontAwesome name="bullhorn" size={24} color="#ffffff" />
                        </BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ParticlesPart4')}
                    >
                        <BouncyText><FontAwesome name="map" size={24} color="#ffffff" />
                        </BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Partículas: Localización, Dirección, Límite / Shimikukuna: pi, man</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Negación / Mana ninkapak</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LaNegacion')}
                    >
                        <BouncyText><FontAwesome name="times-circle" size={24} color="#ffffff" />
                        </BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game2')}
                    >
                        <FontAwesome name="gamepad" size={28} color="#FFF" />

                    </TouchableOpacity>
                    <BouncyText>Juego: Módulo 2 / Pukllana: Ishkayniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 2 / Ruraykuna: Ishkayniki Tantachiy Yachay</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Game2')}
                    >
                        <FontAwesome name="pencil" size={24} color="#FFF" />

                    </TouchableOpacity>
                </View>

                <Image source={require('../../../../assets/images/animals/guacamayo.png')} style={localStyles.islandImage} />

                {/* Modulo 3 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosVerbos1')}
                    >
                        <BouncyText><FontAwesome name="exchange" size={24} color="#fff" />
                        </BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Verbos / Imachikkuna</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Conjugación Verbos / Rimarikunata</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosVerbosConjugaciones1')}
                    >
                        <BouncyText><FontAwesome name="repeat" size={24} color="#fff" />

                        </BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosAdjetivos1')}
                    >
                        <BouncyText><FontAwesome name="list" size={24} color="#fff" />
                        </BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Adjetivos / Shutillikuna</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Ciudad / Llakta</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LaCiudad')}
                    >

                        <BouncyText><FontAwesome name="building" size={24} color="#fff" />

                        </BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game3')}
                    >
                        <FontAwesome name="gamepad" size={28} color="#FFF" />

                    </TouchableOpacity>
                    <BouncyText>Juego: Módulo 3 / Pukllana: Kimsaniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 3 / Ruraykuna: Kimsaniki Tantachiy Yachay</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Evaluation3')}
                    >
                        <FontAwesome name="pencil" size={24} color="#FFF" />

                    </TouchableOpacity>
                </View>

                <Image source={require('../../../../assets/images/animals/cuy2.png')} style={localStyles.islandImage} />

                {/* Modulo 4 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LaCocina')}
                    >
                        <BouncyText><FontAwesome name="cutlery" size={24} color="#fff" />
                        </BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Cocina / Yanuna uku</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Verbos / Imachikkuna</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosVerbos2')}
                    >
                        <BouncyText><FontAwesome name="exchange" size={24} color="#fff" />
                        </BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosAdjetivos2')}
                    >
                        <BouncyText><FontAwesome name="list" size={24} color="#fff" />
                        </BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Adjetivos / Shutillikuna</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Dormitorio / Puñuna uku</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ElDormitorio')}
                    >
                        <BouncyText><FontAwesome name="bed" size={24} color="#fff" />
                        </BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game4')}
                    >
                        <FontAwesome name="gamepad" size={28} color="#FFF" />

                    </TouchableOpacity>
                    <BouncyText>Juego: Módulo 4 / Pukllana: Chuskuniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 4 / Ruraykuna: Chuskuniki Tantachiy Yachay</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Evaluation4')}
                    >
                        <FontAwesome name="pencil" size={24} color="#FFF" />

                    </TouchableOpacity>
                </View>

                <Image source={require('../../../../assets/images/animals/llama.png')} style={localStyles.islandImage} />

                {/*Modulo 5 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LaUbicacion')}
                    >
                        <BouncyText><FontAwesome name="map-marker" size={24} color="#fff" />
                        </BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Ubicación / Kuska rimaykuna</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Tiempo / Pacha</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ElTiempo')}
                    >
                        <BouncyText><FontAwesome name="clock-o" size={24} color="#fff" />
                        </BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ElPasadoSimple')}
                    >
                        <BouncyText><FontAwesome name="arrow-left" size={24} color="#fff" />

                        </BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Pasado Simple / Yallirka pacha</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Participio Pasado / Yallishka pacha</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ElParticipioPasado')}
                    >
                        <BouncyText><FontAwesome name="history" size={24} color="#fff" />
                        </BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game5')}
                    >
                        <FontAwesome name="gamepad" size={28} color="#FFF" />

                    </TouchableOpacity>
                    <BouncyText>Juego: Módulo 5 / Pukllana: Pichkaniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 5 / Ruraykuna: Pichkaniki Tantachiy Yachay</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Evaluation5')}
                    >
                        <FontAwesome name="pencil" size={24} color="#FFF" />

                    </TouchableOpacity>
                </View>

                <Image source={require('../../../../assets/images/animals/condor.png')} style={localStyles.islandImage} />

                {/* Modulo 6 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ElPasadoProgresivo')}
                    >
                        <BouncyText><FontAwesome name="spinner" size={24} color="#fff" />
                        </BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Pasado Progresivo / Yallirka katiy pacha</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Conjugación Presente Progresivo / Kunan pacha katiymanta rimarikuna</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ConjugacionPresenteProgresivo')}
                    >
                        <BouncyText><FontAwesome name="hourglass-half" size={24} color="#fff" />

                        </BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FuturoProximo')}
                    >
                        <BouncyText><FontAwesome name="arrow-circle-right" size={24} color="#fff" />
                        </BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Futuro Próximo / Ña shamuk pacha</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Futuro Simple / Shamuk pacha</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FuturoSimple')}
                    >
                        <BouncyText><FontAwesome name="calendar" size={24} color="#fff" />
                        </BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game6')}
                    >
                        <FontAwesome name="gamepad" size={28} color="#FFF" />

                    </TouchableOpacity>
                    <BouncyText>Juego: Módulo 6 / Pukllana: Suktaniki Tantachiy Yachay</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación: Módulo 6 / Ruraykuna: Suktaniki Tantachiy Yachay</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Evaluation6')}
                    >
                        <FontAwesome name="pencil" size={24} color="#FFF" />

                    </TouchableOpacity>
                </View>


            </ScrollView>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingVertical: 20,
    },
    pathRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 75,
        marginVertical: 20,
    },
    pathRowRight: {
        justifyContent: 'flex-end',
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#FFC107', // Amarillo brillante para un efecto divertido
        backgroundColor: '#FFEB3B', // Fondo amarillo brillante
    },
    circleLevel: {
        width: 70,
        height: 70,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 12,
        borderColor: '#8BC34A', // Verde brillante para resaltar niveles
        backgroundColor: '#C8E6C9',
    },
    evaluation: {
        backgroundColor: '#F44336', // Rojo para el nivel de evaluación
        borderColor: '#E53935',
    },
    islandImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    bouncyText: {
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
    topicText: {
        fontSize: 18,
        marginLeft: 10,
    },
});

export default CaminoLevelsScreen;


