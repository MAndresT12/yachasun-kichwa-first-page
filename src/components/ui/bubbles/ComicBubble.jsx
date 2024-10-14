import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';
import { bubbleStyles } from '../../../../styles/bubbleStyles';

export const ComicBubble = ({ text, backgroundColor = '#00B4D8', arrowDirection = 'left' }) => {
    const renderArrow = () => {
        switch (arrowDirection) {
            case 'left':
                return (
                    <Svg style={bubbleStyles.arrowLeft} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32 17.5 15.515 17.5">
                        <Path d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z" fill={backgroundColor} />
                    </Svg>
                );
            case 'right':
                return (
                    <Svg style={bubbleStyles.arrowRight} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32 17.5 15.515 17.5">
                        <Path d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z" fill={backgroundColor} />
                    </Svg>
                );
            case 'leftUp':
                return (
                    <Svg style={bubbleStyles.arrowLeftUp} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32 17.5 15.515 17.5">
                        <Path d="M38.484,35c0-8.75,1-13.5-6-17.5C51.484,17.5,52.484,35,38.484,35z" fill={backgroundColor} />
                    </Svg>
                );
            case 'rightUp':
                return (
                    <Svg style={bubbleStyles.arrowRightUp} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32 17.5 15.515 17.5">
                        <Path d="M48,17.5c-7,4-6,8.75-6,17.5C28,35,29,17.5,48,17.5z" fill={backgroundColor} />
                    </Svg>
                );
            case 'leftDown':
                return (
                    <Svg style={bubbleStyles.arrowLeftDown} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32 17.5 15.515 17.5">
                        <Path d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z" fill={backgroundColor} transform="scale(1, -1)" />
                    </Svg>
                );
            case 'rightDown':
                return (
                    <Svg style={bubbleStyles.arrowRightDown} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32 17.5 15.515 17.5">
                        <Path d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z" fill={backgroundColor} transform="scale(1, -1)" />
                    </Svg>
                );
            default:
                return null;
        }
    };

    return (
        <View style={[bubbleStyles.balloon, { backgroundColor }]}>
            <Text style={{ paddingTop: 5, color: 'white' }}>{text}</Text>
            <View style={[bubbleStyles.arrowContainer, arrowDirection.includes('left') ? bubbleStyles.arrowLeftContainer : bubbleStyles.arrowRightContainer]}>
                {renderArrow()}
            </View>
        </View>
    );
};
