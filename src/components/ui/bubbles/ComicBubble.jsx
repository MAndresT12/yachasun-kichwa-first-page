import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';
import { bubbleStyles } from '../../../../styles/bubbleStyles';

export const ComicBubble = ({ text, backgroundColor = 'grey', arrowDirection = 'left' }) => {
    return (
        <View style={[bubbleStyles.balloon, { backgroundColor }]}>
            <Text style={{ paddingTop: 5, color: 'black' }}>{text}</Text>
            <View style={[bubbleStyles.arrowContainer, arrowDirection === 'left' ? bubbleStyles.arrowLeftContainer : bubbleStyles.arrowRightContainer]}>
                {arrowDirection === 'left' ? (
                    <Svg style={bubbleStyles.arrowLeft} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.484 17.5 15.515 17.5">
                        <Path d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z" fill={backgroundColor}/>
                    </Svg>
                ) : (
                    <Svg style={bubbleStyles.arrowRight} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.485 17.5 15.515 17.5">
                        <Path d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z" fill={backgroundColor}/>
                    </Svg>
                )}
            </View>
        </View>
    );
};
