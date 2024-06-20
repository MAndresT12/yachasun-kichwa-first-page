import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#9FC516',
    },
    scrollView: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: '#5B4D28',
        padding: 10,
        alignItems: 'flex-start'
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
    },
    body: {
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    titleTema: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    cardContainer: {
        width: '100%',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 15,
        marginVertical: 10,
        width: 342,
        height: 271,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardContent: {
        marginTop: 10,
        fontSize: 16,
    },
    vocabulary: {
        marginTop: 20,
    },
    vocabularyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    vocabularyTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    vocabularyColumn: {
        alignItems: 'center',
    },
    vocabularyHeader: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    pill: {
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        width: 70,
        height: 17,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#000',
    },
    pillText: {
        fontSize: 12,
    },
    footer: {
        marginTop: 20,
        alignItems: 'flex-end',
        marginRight: 10,
    },
    footerButton: {
        backgroundColor: '#822929',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 86,
        height: 27,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
