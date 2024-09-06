import { StyleSheet } from 'react-native';

export const imageStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },
    halfImageContainer: {
        overflow: 'hidden',
        width: '50%',
        alignSelf: 'flex-end',
    },
    imageDefault: {
        width: 165,
        height: 165,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        margin: 10,
    },
    halfImage: {
        width: 100,
        height: 100,
    },
    iconImage: {
        width: 16,
        height: 16,
    },
});