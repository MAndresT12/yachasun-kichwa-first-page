import React from 'react';
import { View, Text } from 'react-native';
import { cardStyles } from '../../../../styles/cardStyles';

export const CardDefault = ({ title, children, content, styleCard, styleContainer}) => (
    <View style={[cardStyles.cardContainer, styleContainer]}>
        <View style={[cardStyles.card, styleCard]}>
            {title && <Text style={cardStyles.cardTitle}>{title}</Text>}
            {content && <Text style={cardStyles.cardContent}>{content}</Text>}
            {children}
        </View>
    </View>
);
