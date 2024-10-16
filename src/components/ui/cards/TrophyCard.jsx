// src/components/TrophyCard.jsx
import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const TrophyCard = ({ trophyKey, imageSource }) => {
    const [isObtained, setIsObtained] = useState(false);

    // Cargar el estado del trofeo desde AsyncStorage
    const loadTrophyStatus = async () => {
        const obtained = await AsyncStorage.getItem(trophyKey);
        if (obtained === 'true') {
            setIsObtained(true);
        } else {
            setIsObtained(false);
        }
    };

    // Usar useFocusEffect para recargar el estado cuando la pantalla gana foco
    useFocusEffect(
        React.useCallback(() => {
            loadTrophyStatus();
        }, [trophyKey])
    );

    return (
        <View style={styles.trophyContainer}>
            <Image
                source={imageSource}
                style={[
                    styles.trophyImage,
                    !isObtained && styles.trophyLocked // Aplica el estilo de bloqueo si no está obtenido
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
    trophyContainer: {
        position: 'relative', // Necesario para posicionar el ícono de pregunta
        width: '100%',
        height: 200,
        marginVertical: 20,
    },
    trophyImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    trophyLocked: {
        opacity: 0.45, // Aplica opacidad oscura
        //Comentar el tintColor y filter a ver como esta mejor
        tintColor: 'black', // Añade un tinte negro a la imagen

        filter: 'grayscale(100%)', // Aplica escala de grises para dar efecto de "silueta"
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
