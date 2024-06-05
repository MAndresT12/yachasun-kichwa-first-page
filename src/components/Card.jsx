import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../../styles/globalStyles';

export const Card = ({ title, children, style }) => (
    <View style={[styles.cardContainer, style]}>
        <View style={styles.card}>
            {title && <Text style={styles.cardTitle}>{title}</Text>}
            {children}
        </View>
    </View>
);
