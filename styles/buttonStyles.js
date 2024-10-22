import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDefault: {
        backgroundColor: '#822929',
        borderRadius: 40,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 155,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    buttonContainerSpaceAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    buttonFirstNumbers: {
        width: "auto",
        backgroundColor: 'white',
    },
});
