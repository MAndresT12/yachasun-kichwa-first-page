import React, { useRef, useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import { accordionStyles } from '../../../../styles/accordionStyles';

export const AccordionDefault = ({ children, title = 'Datos curiosos', isOpen, onPress, style }) => {
    const animationController = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const config = {
            duration: 300,
            toValue: isOpen ? 1 : 0,
            useNativeDriver: false,
        };
        Animated.timing(animationController, config).start();
    }, [isOpen]);

    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    });

    return (
        <View style={[accordionStyles.container, style]}>
            <TouchableOpacity onPress={onPress}>
                <View style={accordionStyles.titleContainer}>
                    <Text style={accordionStyles.textTitle}>{title}</Text>
                    <Animated.View style={{ transform: [{ rotate: arrowTransform }] }}>
                        <AntDesign name="right" size={16} color="black" />
                    </Animated.View>
                </View>
            </TouchableOpacity>
            {isOpen && (
                <View style={accordionStyles.body}>
                    {children}
                </View>
            )}
        </View>
    );
};
