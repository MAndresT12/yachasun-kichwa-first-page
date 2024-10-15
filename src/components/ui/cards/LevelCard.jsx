// src/components/LevelCard.jsx
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';

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
        <Animated.Text style={[styles.bouncyText, animatedStyle]}>
            {children}
        </Animated.Text>
    );
};

const LevelCard = ({ levelKey, title, iconName, nextScreen, progressKey, type }) => {
    const navigation = useNavigation();
    const [isCompleted, setIsCompleted] = useState(false);

    // Cargar el estado del nivel desde AsyncStorage
    const loadProgress = async () => {
        const completed = await AsyncStorage.getItem(progressKey);
        if (completed === 'true') {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };

    // Cada vez que la pantalla de CaminoLevelsScreen gana foco, recargar el progreso
    useFocusEffect(
        React.useCallback(() => {
            loadProgress();
        }, [progressKey])
    );

    const handlePress = () => {
        if (isCompleted) {
            navigation.navigate(nextScreen);
        }
    };

    // Animación de rebote
    const scale = useSharedValue(1);
    useEffect(() => {
        scale.value = withTiming(1.1, { duration: 500 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: isCompleted ? 1 : 0.5, // Si no está completado, baja la opacidad
    }));
    // Seleccionar estilo dependiendo del tipo
    const getStyle = () => {
        if (type === 'game') {
            return styles.game;
        } else if (type === 'evaluation') {
            return [styles.circle, styles.evaluation]; // Combinación de estilos para "evaluation"
        }
        return styles.circle; // Estilo por defecto
    };
    return (
        <TouchableOpacity
            onPress={handlePress}
            disabled={!isCompleted}
            style={[getStyle(), isCompleted ? null : styles.disabled]}
        >
            <BouncyText><FontAwesome name={iconName} size={24} color="#FFF" /></BouncyText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
    game: {
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
    disabled: {
        opacity: 0.5, // Estilo para niveles bloqueados
    },
    bouncyText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#212752', // Color similar a globos #212752 antes #212b68
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 2,
        borderRadius: 10,
        padding: 2,
    },
});

export default LevelCard;
