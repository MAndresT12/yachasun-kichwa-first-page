import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated';
import ConfettiCannon from 'react-native-confetti-cannon';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../../../../../styles/globalStyles';

import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';
import TrophyCard from '../../../ui/cards/TrophyCard';


const EndModule4 = ({ route }) => {
    const { score, totalQuestions } = route.params;
    const navigation = useNavigation();
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [showModal, setShowModal] = useState(false); // Estado para el modal
    const [showConfetti, setShowConfetti] = useState(false); // Estado para confetti
    const [isTrophyUnlocked, setIsTrophyUnlocked] = useState(false); // Estado para animar el trofeo

    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('trofeo_modulo4_basic', 'true');
            await AsyncStorage.setItem('level_Pluralization_completed', 'true');
            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };

    useEffect(() => {
        if (score >= 4) {
            completeLevel();
            setShowConfetti(true); // Mostrar confetti si el puntaje es 4 o más
        }
    }, [score]);

    const handleRetry = () => {
        navigation.navigate('EvaluationBasicModule4'); // Reintentar evaluación
    };

    // Animación para el botón "Reclamar"
    const scale = useSharedValue(1);
    useEffect(() => {
        if (score >= 4) {
            scale.value = withRepeat(
                withSequence(
                    withTiming(1.2, { duration: 500 }),
                    withTiming(1, { duration: 500 })
                ),
                -1, // Repetición infinita
                true // Reverso en la repetición
            );
        }
    }, [score]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const handleClaim = () => {
        setIsTrophyUnlocked(true); // Desbloquear el trofeo y mostrar la animación
        setShowModal(true); // Mostrar modal de trofeo
    };

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={styles.gradient}
        >
            {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />}

            <ScrollView style={styles.scrollView}>

                <View style={styles.body}>
                    <View style={localStyles.resultContainer}>
                        <Text style={localStyles.resultText}>
                            ¡Has terminado el juego!
                        </Text>
                        <Text style={localStyles.resultText}>
                            Puntuación: {score} / {totalQuestions}
                        </Text>
                    </View>

                    {/* Si el score es mayor o igual a 4, muestra mensaje de éxito y botón "Reclamar" */}
                    {score >= 4 ? (
                        <>
                            <Text style={localStyles.motivationalText}>
                                ¡Genial! Lo has hecho increíble, has completado el Módulo 4. ¡Sigue explorando y aprendiendo, estoy muy orgulloso de ti!
                            </Text>

                            {/* Personaje Humu-Talking */}
                            <View style={localStyles.characterContainer}>
                                <Image
                                    source={require('../../../../../assets/images/humu/humu-talking.png')}
                                    style={localStyles.humuImage}
                                />
                                <Animated.View style={[localStyles.claimButton, animatedStyle]}>
                                    <TouchableOpacity onPress={handleClaim}>
                                        <Text style={localStyles.claimText}>Reclamar</Text>
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>
                            <ButtonDefault
                                label="Siguiente"
                                onPress={() => {
                                    navigation.navigate('Pluralization');
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <Text style={localStyles.motivationalText}>
                                ¡No te desanimes! Vuelve a intentarlo, estoy seguro de que lo lograrás la próxima vez.
                            </Text>
                            <View style={localStyles.characterContainer}>
                                <Image
                                    source={require('../../../../../assets/images/humu/humu-disappointed.png')}
                                    style={localStyles.humuImage}
                                />

                            </View>
                            <ButtonDefault
                                label="Reintentar"
                                onPress={handleRetry}
                            />
                        </>
                    )}

                    {/* El botón de ir al inicio siempre está disponible */}
                    <ButtonLevelsInicio label="Inicio" />
                </View>

                {/* Modal para mostrar el mensaje de trofeo desbloqueado */}
                <Modal
                    visible={showModal}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setShowModal(false)}
                >
                    <View style={localStyles.modalContainer}>
                        <View style={localStyles.modalContent}>
                            <Text style={localStyles.modalTitle}>¡Felicidades!</Text>
                            <Text style={localStyles.modalMessage}>Has desbloqueado este trofeo por completar exitosamente el Módulo 4.</Text>

                            {/* Componente TrophyCard con animación */}
                            <TrophyCard
                                trophyKey="trofeo_modulo4_basic"
                                imageSource={require('../../../../../assets/images/basic/badges/valley-flowers.jpg')}
                                isAnimated={true} // Activar animación
                            />

                            <TouchableOpacity
                                onPress={() => setShowModal(false)}
                                style={localStyles.modalButton}
                            >
                                <Text style={localStyles.modalButtonText}>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    resultContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    motivationalText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333',
        marginVertical: 20,
    },
    characterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    humuImage: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
    },
    claimButton: {
        backgroundColor: '#FFD700',
        marginLeft: 20,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    claimText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
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
    modalButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default EndModule4;
