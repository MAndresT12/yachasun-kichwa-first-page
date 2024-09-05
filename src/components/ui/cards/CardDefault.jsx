import React from 'react';
import { View, Text } from 'react-native';
import { cardStyles } from '../../../../styles/cardStyles';

export const CardDefault = ({ title, children, content, style }) => (
    <View style={[cardStyles.cardContainer, style]}>
        <View style={cardStyles.card}>
            {title && <Text style={cardStyles.cardTitle}>{title}</Text>}
            {content && <Text style={cardStyles.cardContent}>{content}</Text>}
            {children}
        </View>
    </View>
);
