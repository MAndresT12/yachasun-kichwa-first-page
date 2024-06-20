import React from 'react';
import { View, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { styles } from '../../styles/globalStylesEx';

export const VocabularyColumnEx = ({ title, items }) => (
    <View style={styles.vocabularyColumn}>
        <Text style={styles.vocabularyHeader}>{title}</Text>
        {items.map((item, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => Alert.alert('¡Hola kichuanos!')}>
                <View style={styles.pill}>
                    <Text style={styles.pillText}>{item}</Text>
                </View>
            </TouchableWithoutFeedback>
        ))}
    </View>
);
