import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttonStyles } from '../../../../styles/buttonStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ButtonLevelsInicio = ({ children, label = 'Inicio', onPress, styleContainer, styleButton, showLabel = true }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            // Si no se proporciona una función onPress, navega a CaminoLevels
            navigation.navigate('CaminoLevels');
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
