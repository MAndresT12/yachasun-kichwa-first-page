import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const WHEEL_SIZE = width * 0.8; // Tamaño adaptable a la pantalla
const NUMBER_OF_SECTORS = 8; // Número de sectores en la ruleta

const RuletaGame = () => {
    const spinValue = useRef(new Animated.Value(0)).current;
    const [rotation, setRotation] = useState(0);

    const handleSpin = () => {
        let newRotation = Math.floor(Math.random() * 3600);
        Animated.timing(spinValue, {
            toValue: rotation + newRotation,
            duration: 5000,
            useNativeDriver: true, // Mejora de rendimiento
        }).start();

        setRotation(rotation + newRotation); // Actualizamos el ángulo acumulado
    };

    const spinInterpolation = spinValue.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg'],
        extrapolate: 'extend',
    });

    const dataRuleta = [
        { spanish: 'Perro', english: 'Dog' },
        { spanish: 'Gato', english: 'Cat' },
        { spanish: 'Casa', english: 'House' },
        { spanish: 'Escuela', english: 'School' },
        { spanish: 'Libro', english: 'Book' },
        { spanish: 'Agua', english: 'Water' },
        { spanish: 'Comida', english: 'Food' },
        { spanish: 'Coche', english: 'Car' },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.pointer} />

            <TouchableOpacity style={styles.spinBtn} onPress={handleSpin}>
                <Text style={styles.spinText}>GIRA</Text>
            </TouchableOpacity>

            <Animated.View style={[styles.wheel, { transform: [{ rotate: spinInterpolation }] }]}>
                {dataRuleta.map((item, index) => (
                    <View
                        key={index}
                        style={[
                            styles.sector,
                            {
                                borderTopColor: item.color,
                                transform: [{ rotate: ${(360 / NUMBER_OF_SECTORS) * index}deg }],
                            },
                        ]}
                    >
                <Text style={[styles.sectorText, { transform: [{ rotate: -${(360 / NUMBER_OF_SECTORS) * index}deg }] }]}>
                {item.spanish}
            </Text>
        </View>
    ))
}
            </Animated.View >
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinBtn: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 30,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'rgba(0, 0, 0, 0.75)',
    },
    spinText: {
        textTransform: 'uppercase',
        fontWeight: '600',
        color: '#333',
        letterSpacing: 1,
    },
    wheel: {
        width: WHEEL_SIZE,
        height: WHEEL_SIZE,
        borderRadius: WHEEL_SIZE / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#5c5858', // Fondo blanco para contraste
        borderWidth: 5,
        borderColor: '#111',
    },
    sector: {
        position: 'relative',
        width: 0,
        height: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectorText: {
        position: 'absolute',
        top: 90, // Ajuste del texto para colocarlo en el sector
        fontSize: 23,
        color: '#fff',
        fontWeight: '700',
    },
    pointer: {
        position: 'absolute',
        top: '44%',
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#ffffff', // Color de la flecha
        zIndex: 15,
    },
});

export default RuletaGame;