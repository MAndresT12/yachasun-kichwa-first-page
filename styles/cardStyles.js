import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    cardContainerInstructions: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
    },
    instructionsCardStyle: {
        width: '50%',
        alignItems: 'flex-start',
        padding: 5,
    },
    cardDefault: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 15,
        marginVertical: 10,
        width: 342,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cardContent: {
        marginTop: 10,
        fontSize: 16,
    },
    cardPopUp: {
        width: 100,
        textAlign: 'center',
    },
});