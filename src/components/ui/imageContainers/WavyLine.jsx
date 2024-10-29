import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';
import { wavylineStyles } from '../../../../styles/wavylineStyles';

export const WavyLine = ({ color = 'orange', width = 600, height = 100 }) => {
    return (
        <View style={wavylineStyles.container}>
            <Svg width={width} height={height} viewBox="0 0 600 100">
                <Path
                    d="M 0 50 Q 50 0, 100 50 Q 150 100, 200 50 Q 250 0, 300 50 Q 350 100, 400 50 Q 450 0, 500 50 Q 550 100, 600 50"
                    fill="transparent"
                    stroke={color}
                    strokeWidth="3"
                />
            </Svg>
        </View>
    );
};
