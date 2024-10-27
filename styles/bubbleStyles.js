import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export const bubbleStyles = StyleSheet.create({
    balloon: {
        maxWidth: moderateScale(250, 2),
        paddingHorizontal: moderateScale(10, 2),
        paddingTop: moderateScale(5, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: 20,
    },
    // Container to keep arrowLeft aligned with text size changes
    arrowContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    // Specific container for arrowLeftUp to keep it stable
    arrowLeftUpContainer: {
        position: 'absolute',
        top: moderateScale(2, 0.5),
        left: moderateScale(-12, 0.5),
        zIndex: 0,
    },
    arrowLeft: {
        left: moderateScale(-8.5, 0.5),
        top: moderateScale(-0.5, 0.5),
        transform: [{ rotate: '25deg' }],
    },
    arrowLeftUp: {
        position: 'absolute',
        top: moderateScale(2, 0.5),
        left: moderateScale(0, 0.5),
        transform: [{ rotate: '-75deg' }, { scaleY: -1 }],
    },
});
