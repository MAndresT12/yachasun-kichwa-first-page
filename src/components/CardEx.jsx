import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/globalStylesEx';

export const CardEx = ({ title, content }) => (
    <View style={styles.cardContainer}>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardContent}>{content}</Text>
        </View>
    </View>
);
