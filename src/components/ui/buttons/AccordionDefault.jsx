import React, { useRef, useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Text, View, TouchableOpacity, Animated, LayoutAnimation, UIManager, Platform } from 'react-native';
import { accordionStyles } from '../../../../styles/accordionStyles';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const toggleAnimation = {
    duration: 300,
    update: {
        duration: 300,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
        duration: 200,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut,
    },
};

export const AccordionDefault = ({ children, title = 'Datos curiosos', isOpen, onPress, style }) => {
    const animationController = useRef(new Animated.Value(0)).current;
    const [bodyHeight] = useState(new Animated.Value(0));
    const [bodyOpacity] = useState(new Animated.Value(0));

    const [isContentVisible, setIsContentVisible] = useState(isOpen);

    useEffect(() => {
        LayoutAnimation.configureNext(toggleAnimation);

        if (isOpen) {
            setIsContentVisible(true);

            Animated.parallel([
                Animated.timing(bodyHeight, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(bodyOpacity, {
                    toValue: 1,
                    duration: 300,
                    delay: 150,
                    useNativeDriver: false,
                }),
                Animated.timing(animationController, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false,
                })
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(bodyOpacity, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false,
                }),
                Animated.timing(animationController, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(bodyHeight, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
            ]).start(() => {
                setIsContentVisible(false);
            });
        }
    }, [isOpen]);

    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    });

    const bodyHeightInterpolation = bodyHeight.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200],
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

            {isContentVisible && (
                <Animated.View
                    style={[
                        accordionStyles.body,
                        {
                            height: bodyHeightInterpolation, 
                            opacity: bodyOpacity,
                            overflow: 'hidden',
                        },
                    ]}
                >
                    {children}
                </Animated.View>
            )}
        </View>
    );
};
