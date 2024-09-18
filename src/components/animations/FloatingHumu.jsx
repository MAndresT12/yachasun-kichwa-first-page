import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { ImageContainer } from '../ui/imageContainers/ImageContainer';

export const FloatingHumu = ({ children, style, durationAnimation = 1000, initialValue = 6, EndValue = 0 }) => {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation, {
                    toValue: initialValue,
                    duration: durationAnimation,
                    useNativeDriver: true,
                }),
                Animated.timing(animation, {
                    toValue: EndValue,
                    duration: durationAnimation,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [animation]);

    const animatedStyle = {
        transform: [{ translateY: animation }],
    };

    return (
        <Animated.View style={[animatedStyle, style]}>
            {children}
        </Animated.View>
    );
};