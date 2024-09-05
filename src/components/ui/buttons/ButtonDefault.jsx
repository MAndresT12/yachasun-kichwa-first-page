import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttonStyles } from '../../../../styles/buttonStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ButtonDefault = ({ label = 'Siguiente', onPress, style }) => {
    const navigation = useNavigation();

    return (
        <View style={[buttonStyles.buttonContainer, style]}>
            <TouchableOpacity onPress={onPress}>
                <View style={buttonStyles.buttonDefault}>
                    <Text style={buttonStyles.buttonText}>{label}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};