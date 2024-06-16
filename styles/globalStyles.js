// src/globalStyles.js
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#18a7ac', //9FC516 //15d19c
    },
    scrollView: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: '#223bb8',
        padding: 10,
        alignItems: 'flex-start',
        width: '100%',
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
    },
    body: {
        padding: 10,
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    titleTema: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
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
        marginTop: 10,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#ddd',
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
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
        width: 95,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
