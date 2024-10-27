import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';
import { bubbleStyles } from '../../../../styles/bubbleStyles';

export const ComicBubble = ({ text, backgroundColor = '#00B4D8', arrowDirection = 'left' }) => {
    const renderArrow = () => {
        if (arrowDirection === 'leftUp') {
            return (
                <Svg
                    style={bubbleStyles.arrowLeftUp}
                    width={moderateScale(15.5, 0.6)}
                    height={moderateScale(17.5, 0.6)}
                    viewBox="33 17.5 15.515 17.5"
                >
                    <Path d="M38.984,17.5c0,0.75,3,15.5-6,16.5C51.484,35,52.484,10.5,42,0.1z" fill={backgroundColor} />
                </Svg>
            );
        } else if (arrowDirection === 'left') {
            return (
                <Svg
                    style={bubbleStyles.arrowLeft}
                    width={moderateScale(15.5, 0.6)}
                    height={moderateScale(17.5, 0.6)}
                    viewBox="32 17.5 15.515 17.5"
                >
                    <Path d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z" fill={backgroundColor} />
                </Svg>
            );
        }
        return null;
    };

    return (
        <View style={[bubbleStyles.balloon, { backgroundColor }]}>
            <Text style={{ paddingTop: 5, color: 'white' }}>{text}</Text>
            <View style={arrowDirection === 'leftUp' ? bubbleStyles.arrowLeftUpContainer : bubbleStyles.arrowContainer}>
                {renderArrow()}
            </View>
        </View>
    );
};
