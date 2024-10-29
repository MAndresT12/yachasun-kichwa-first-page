import { StyleSheet } from 'react-native';

export const accordionStyles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: '6%',
        paddingVertical: '1%',
        borderRadius: 20,
        backgroundColor: 'white',
        marginBottom: '2%',
    },
    textTitle: {
        fontSize: 16,
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
