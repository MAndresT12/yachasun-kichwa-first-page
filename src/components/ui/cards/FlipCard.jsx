//To Do: Not working right yet, we must implement a way to pass Kichwa and Spanish text and also other variants, 
// not that difficult just copy the code from the FlipCard components on other modules. But if too many modules
// it might become a problematic task. Don't know how many we'll make yet.
import React, { useState } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../../../styles/globalStyles';
import { ImageContainer } from '../../ui/imageContainers/ImageContainer';

const getColorForLetter = (index, colors) => {
    return colors[index % colors.length];
};

export const FlipCard = ({ 
    item, 
    fontsLoaded, 
    variant = 'text', // 'image', 'gradient', 'text'
    colors = [],
    gradientColors = ['#FFD700', '#8B4513']
}) => {
    const [flipped, setFlipped] = useState(false);
    const rotateY = useSharedValue(0);

    const animatedStyleFront = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value}deg` }],
    }));

    const animatedStyleBack = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value + 180}deg` }],
    }));

    const handleFlip = () => {
        rotateY.value = withTiming(flipped ? 0 : 180, { duration: 300 });
        setFlipped(!flipped);
    };

    const renderFrontContent = () => {
        switch (variant) {
            case 'image':
                return (
                    <ImageContainer path={item.image} style={styles.imageCards} />
                );
            case 'gradient':
                return (
                    <LinearGradient colors={gradientColors} style={styles.andesStyleGradientBox}>
                        <Text style={[styles.andesStyleText, { fontFamily: fontsLoaded ? 'RibeyeMarrow_400Regular' : 'sans-serif', flexDirection: 'row' }]}>
                            {item.spanish.split('').map((letter, index) => (
                                <Text key={index} style={{ color: getColorForLetter(index, colors) }}>
                                    {letter}
                                </Text>
                            ))}
                        </Text>
                    </LinearGradient>
                );
            case 'text':
            default:
                return (
                    <Text style={[styles.andesStyleText, { fontFamily: fontsLoaded ? 'RibeyeMarrow_400Regular' : 'sans-serif' }]}>
                        {item.spanish}
                    </Text>
                );
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handleFlip}>
            <View style={styles.flipCard}>
                <Animated.View style={[styles.flipCardInner, styles.flipCardFront, animatedStyleFront]}>
                    {renderFrontContent()}
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <Text style={styles.translationLabel}>Kichwa:</Text>
                    <Text style={styles.translationText}>{item.kichwa}</Text>
                    <View style={[styles.colorBox, { backgroundColor: item.hexadecimalColor }]} />
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};
