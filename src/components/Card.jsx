import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../../styles/globalStyles';

/*Preguntar por que usa un empty style en este componente? https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif*/
export const Card = ({ title, children, style }) => (
    <View style={[styles.cardContainer, style]}>
        <View style={styles.card}>
            {title && <Text style={styles.cardTitle}>{title}</Text>}
            {children}
        </View>
    </View>
);
