import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export const bubbleStyles = StyleSheet.create({
    container: {
        position: 'relative', // Wrap arrows and bubble
    },
    balloon: {
        maxWidth: moderateScale(250, 2),
        paddingHorizontal: moderateScale(10, 2),
        paddingTop: moderateScale(7, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: 20,
        zIndex: 1, // Ensure bubble is above arrows
    },
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
    arrowLeftUpContainer: {
        position: 'absolute',
        top: moderateScale(2, 0.5),
        left: moderateScale(-12, 0.5),
        zIndex: 0,
    },
    arrowLeftCenterContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '50%', // Match balloon height
        justifyContent: 'center',
        alignItems: 'flex-start',
        zIndex: 0,
    },
    arrowLeft: {
        left: moderateScale(-9, 0.5),
        top: moderateScale(-0.5, 0.5),
        transform: [{ rotate: '25deg' }],
    },
    arrowLeftUp: {
        position: 'absolute',
        top: moderateScale(2.5, 0.5),
        left: moderateScale(0, 0.5),
        transform: [{ rotate: '-75deg' }, { scaleY: -1 }],
    },
    arrowLeftCenter: {
        position: 'absolute',
        top: "50%",
        left: moderateScale(-23, 0.5),
    },
});
