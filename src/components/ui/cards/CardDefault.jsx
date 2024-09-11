import React from 'react';
import { View, Text } from 'react-native';
import { cardStyles } from '../../../../styles/cardStyles';
import { styles } from '../../../../styles/globalStyles';

export const CardDefault = ({ title, children, content, styleCard, styleContainer, styleTitle}) => (
    <View style={[styles.cardContainer, styleContainer]}>
        <View style={[styles.cardDefault, styleCard]}>
            {title && <Text style={[styles.cardTitle, styleTitle]}>{title}</Text>}
            {content && <Text style={styles.cardContent}>{content}</Text>}
            {children}
        </View>
    </View>
);
