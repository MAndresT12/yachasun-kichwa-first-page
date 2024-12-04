import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

export const FloatingWelcome = ({ children, style, durationAnimation = 4000 }) => {
    const scale = new Animated.Value(1);
    const rotate = new Animated.Value(0);

    useEffect(() => {
        const infiniteLoop = () => {
            Animated.loop(
                Animated.parallel([
                    // Escalado en loop
                    Animated.sequence([
                        Animated.timing(scale, {
                            toValue: 1.05,
                            duration: durationAnimation / 10,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                        Animated.timing(scale, {
                            toValue: 1,
                            duration: durationAnimation / 10,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                        Animated.timing(scale, {
                            toValue: 1.05,
                            duration: durationAnimation / 10,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                        Animated.timing(scale, {
                            toValue: 1,
                            duration: durationAnimation / 10,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                        Animated.timing(scale, {
                            toValue: 1.05,
                            duration: durationAnimation / 10,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                        Animated.timing(scale, {
                            toValue: 1,
                            duration: durationAnimation / 10,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                        Animated.timing(scale, {
                            toValue: 1.05,
                            duration: durationAnimation / 10,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                        Animated.timing(scale, {
                            toValue: 1,
                            duration: durationAnimation / 10,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                        Animated.timing(scale, {
                            toValue: 1.05,
                            duration: durationAnimation / 10,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                        Animated.timing(scale, {
                            toValue: 1,
                            duration: durationAnimation / 10,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                    ]),
                    Animated.sequence([
                        Animated.timing(rotate, {
                            toValue: 5,
                            duration: durationAnimation / 3,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                        Animated.timing(rotate, {
                            toValue: -5,
                            duration: durationAnimation / 3,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                        Animated.timing(rotate, {
                            toValue: 0,
                            duration: durationAnimation / 3,
                            easing: Easing.inOut(Easing.quad),
                            useNativeDriver: true,
                        }),
                    ]),
                ])
            ).start();
        };

        infiniteLoop();
    }, [scale, rotate, durationAnimation]);

    const animatedStyle = {
        transform: [
            { scale },
            {
                rotate: rotate.interpolate({
                    inputRange: [-5, 0, 5],
                    outputRange: ['-5deg', '0deg', '5deg']
                })
            }
        ],
    };

    return (
        <Animated.View style={[animatedStyle, style]}>
            {children}
        </Animated.View>
    );
};
