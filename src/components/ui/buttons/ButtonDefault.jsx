import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttonStyles } from '../../../../styles/buttonStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ButtonDefault = ({ children, label = 'Siguiente', onPress, styleContainer, styleButton, showLabel = true }) => {
    const navigation = useNavigation();

    return (
        <View style={[buttonStyles.buttonContainer, styleContainer]}>
            <TouchableOpacity onPress={onPress}>
                <View style={[buttonStyles.buttonDefault, styleButton]}>
                    {showLabel && <Text style={buttonStyles.buttonText}>{label}</Text>}
                    {children}
                </View>
            </TouchableOpacity>
        </View>
    );
};