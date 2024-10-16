import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttonStyles } from '../../../../styles/buttonStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ButtonLevelsInicio = ({ children, label = 'Inicio', onPress, navigationTarget = 'CaminoLevels', styleContainer, styleButton, showLabel = true }) => {
    const navigation = useNavigation();
    // Función para borrar AsyncStorage excepto "level_Numeros_completed" LECCION 1 DE INTERMEDIO (Santi debe agregar la key de su primera leccion tambien)
    const clearAsyncStorage = async () => {
        const keysToPreserve = ['level_Numeros_completed', 'aqui_clave_santi'];  // Clave que no se va a eliminar

        try {
            // Obtener todas las claves almacenadas en AsyncStorage
            const keys = await AsyncStorage.getAllKeys();

            // Filtrar las claves para eliminar todas excepto "level_Numeros_completed"
            const keysToDelete = keys.filter(key => !keysToPreserve.includes(key));

            // Eliminar todas las claves filtradas
            await AsyncStorage.multiRemove(keysToDelete);

            console.log('AsyncStorage borrado, excepto la clave:', keysToPreserve);
        } catch (error) {
            console.error('Error al borrar AsyncStorage:', error);
        }
    };
    const handlePress = () => {
        if (label === 'ResetAsync') {
            // Si el label es 'ResetAsync', borra los datos de AsyncStorage
            clearAsyncStorage();
        } else if (onPress) {
            onPress();
        } else {
            // Si no se proporciona una función onPress, navega al valor de navigationTarget
            navigation.navigate(navigationTarget);
        }
    };

    return (
        <View style={[buttonStyles.buttonContainer, styleContainer]}>
            <TouchableOpacity onPress={handlePress}>
                <View style={[buttonStyles.buttonDefault, styleButton, { backgroundColor: '#005A9C' }]}>
                    {showLabel && <Text style={buttonStyles.buttonText}>{label}</Text>}
                    {children}
                </View>
            </TouchableOpacity>
        </View>
    );
};
