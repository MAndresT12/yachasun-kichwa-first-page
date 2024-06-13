// src/components/VocabularyColumn.jsx
import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../styles/globalStyles';

export const VocabularyColumn = ({ title, items, onPressItem }) => (
    <View style={styles.vocabularyColumn}>
        {title && <Text style={styles.vocabularyHeader}>{title}</Text>}
        {items.map((item, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => onPressItem(item)}>
                <View style={styles.pill}>
                    <Text style={styles.pillText}>{item}</Text>
                </View>
            </TouchableWithoutFeedback>
        ))}
    </View>
);
