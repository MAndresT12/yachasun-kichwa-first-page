import React from 'react';
import { View, Image } from 'react-native';
import { imageStyles } from '../../../../styles/imageStyles';

export const ImageContainer = ({ uri, path, style }) => {
    const source = uri ? { uri } : path;

    return (
        <View style={imageStyles.container}>
            <Image
                source={source}
                style={[imageStyles.imageDefault, style]}
            />
        </View>
    );
};