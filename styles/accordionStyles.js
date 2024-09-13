import { StyleSheet } from 'react-native';

export const accordionStyles = StyleSheet.create({
    container: {
        width: '100%',
        padding: '5%',
        borderRadius: 8,
        backgroundColor: 'white',
        marginBottom: '2%',
        overflow: 'hidden',
    },
    textTitle: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        padding: '5%',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    body: {
        paddingHorizontal: '2%',
        paddingVertical: '3%',
    },
});
