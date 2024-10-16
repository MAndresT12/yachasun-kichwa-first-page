// src/components/ProfileScreen.jsx

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonLevelsInicio } from '../ui/buttons/ButtonLevelsInicio';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';

const ProgresoScreen = () => {
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('trofeo_modulo1_intermedio', 'true');

            //Agregar mas en caso de ser necesario
            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };
    return (
        <View >
            <Text>Progreso</Text>
            <Text>(Aca irán los trofeos bloqueados y los que se han obtenido)</Text>
            <ButtonLevelsInicio label="ResetAsync" />

            {/* Aca este boton solo lo estaba usando para setear como obtenido el trofeo1 intermedio arriba esta la funcion */}
            <ButtonLevelsInicio
                label="Other"
                onPress={() => {
                    completeLevel(); // Completar el nivel actual
                }}
            />

        </View>
    );
};


export default ProgresoScreen;
