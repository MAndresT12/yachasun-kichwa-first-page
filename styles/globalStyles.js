// src/globalStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#52bcd6', //E0F7FA antes 18a7ac
        justifyContent: 'center',
        // alignItems: 'center',
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
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
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
    cardContent: {
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
    },
    cardContentCardDefault: {
        marginTop: 10,
        fontSize: 16,
    },
    cardInGrid: {
        width: '40%',
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
        marginBottom: 20,
        alignItems: 'flex-end',
        marginRight: 10,
    },




    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDefault: {
        backgroundColor: '#822929',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 95,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#822929',
        padding: 10,
        borderRadius: 5,
    },





    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    imageModal: {
        width: 150,
        height: 150,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    modalCloseButton: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
    },
    pronunciation: {
        fontSize: 18,
        marginBottom: 10,
    },
    translationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    kichwaText: {
        fontSize: 16,
        color: 'green',
    },
    spanishText: {
        fontSize: 16,
        color: 'blue',
    },



    carouselHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    carouselSubtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 5,
    },
    carouselParticleText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: 'red',
    },
    carouselDescriptionText: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
    carouselExampleCard: {
        flex: 1,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#e0f7fa',
        marginHorizontal: 10,
        alignItems: 'center',
        borderColor: '#00796b',
        borderWidth: 1,
    },
    carouselVerbTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#00796b',
    },
    carouselExampleImage: {
        width: '100%',
        height: 250,
        borderRadius: 8,
        resizeMode: 'contain',

    },
    carouselCard: {
        flex: 1,
        borderRadius: 8,
        padding: 8,
        backgroundColor: '#e0f7fa',
        marginHorizontal: 15,
        alignItems: 'center',
        borderColor: '#00796b',
        borderWidth: 3,
    },
    carouselSubject: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#004d40',
    },
    carouselDetail: {
        fontSize: 16,
        marginVertical: 5,
        color: '#004d40',
    },
    flipCard: {
        width: '40%',
        height: 150,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        perspective: 1000,
    },
    flipCardInner: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backfaceVisibility: 'hidden',
        borderRadius: 8,
    },
    flipCardFront: {
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    flipCardBack: {
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    numberText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    },
    translationLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: '#000000',
    },
    translationText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#004d40',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },






    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 2,
    },


    colorBox: {
        width: 100,
        height: 50,
        marginTop: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'black',
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
        borderRadius: 8,
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
    cardTitleAlphabet: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red',
    },
    cardPopUp: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        perspective: 1000,
    },


    buttonContainerAlphabet: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDefaultAlphabet: {
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
    buttonTextAlphabet: {
        color: '#fff',
        fontSize: 18,
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





    toggleCuriosities: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 20,
    },
    curiositiesText: {
        fontSize: 18,
        textAlign: 'center',
    },
    arrowIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    curiositiesContent: {
        marginTop: 10,
        alignItems: 'center',
    },
    characterImage: {
        width: 100,
        height: 100,
    },
    comicBubble: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        padding: 15,
        position: 'relative',
        width: '80%',
        marginTop: 10,
    },
    comicBubbleBefore: {
        content: '',
        position: 'absolute',
        top: '100%',
        left: '20%',
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 20,
        borderStyle: 'solid',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#fff',
        transform: [{ rotate: '45deg' }],
    },

    bubbleContainer: {
        position: 'relative',
        padding: 10,
    },
    bubble: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20,
        maxWidth: '80%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    bubbleText: {
        fontSize: 16,
        textAlign: 'center',
    },
    bubbleTail: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        left: 10,
        bottom: -15,
        transform: [{ rotate: '45deg' }],
        borderBottomLeftRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
