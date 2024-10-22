import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'; // Importar react-native-reanimated

const TrophyCard = ({ trophyKey, imageSource, isAnimated, isInProgresoScreen }) => {
    const [isObtained, setIsObtained] = useState(false);
    const animationValue = useSharedValue(0); // Valor compartido para animación

    // Cargar el estado del trofeo desde AsyncStorage
    const loadTrophyStatus = async () => {
        const obtained = await AsyncStorage.getItem(trophyKey);
        if (obtained === 'true') {
            setIsObtained(true);
        } else {
            setIsObtained(false);
        }
    };

    // Animación de desbloqueo si isAnimated es true y el trofeo está desbloqueado
    useEffect(() => {
        if (isAnimated && isObtained) {
            animationValue.value = withTiming(1, { duration: 4000 }); // Animar el valor de 0 a 1
        }
    }, [isAnimated, isObtained]);

    // Estilo animado para la transición de bloqueo a desbloqueo
    const animatedStyle = useAnimatedStyle(() => ({
        opacity: animationValue.value, // Controlar la opacidad de la imagen
        filter: animationValue.value === 1 ? 'none' : 'grayscale(100%)', // Aplicar filtro según el valor de animación
    }));

    // Usar useFocusEffect para recargar el estado cuando la pantalla gana foco
    useFocusEffect(
        React.useCallback(() => {
            loadTrophyStatus();
        }, [trophyKey])
    );

    return (
        <View style={isInProgresoScreen ? styles.smallTrophyContainer : styles.largeTrophyContainer}>
            <Animated.Image
                source={imageSource}
                style={[
                    styles.trophyImage,
                    !isObtained && styles.trophyLocked, // Aplica el estilo de bloqueo si no está obtenido
                    isAnimated && isObtained && animatedStyle, // Aplica la animación si es necesario
                ]}
            />
            {!isObtained && (
                <View style={styles.lockOverlay}>
                    <FontAwesome name="question" size={64} color="#FFF" />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    largeTrophyContainer: {
        position: 'relative',
        width: '100%',
        height: 200,
        marginVertical: 20,
    },
    smallTrophyContainer: {
        position: 'relative',
        width: 100,
        height: 100,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    trophyImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    trophyLocked: {
        opacity: 0.45,
        tintColor: 'black',
        filter: 'grayscale(100%)',
    },
    lockOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TrophyCard;
