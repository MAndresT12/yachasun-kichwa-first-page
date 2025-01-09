import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    gradient: {
        flex: 1, // El gradiente debe ocupar toda la pantalla
    },
    container: {
        flex: 1,
        // backgroundColor: '#52bcd6', //E0F7FA antes 18a7ac
        justifyContent: 'center',
        // alignItems: 'center',
    },
    scrollView: {
        flexGrow: 1,

    },
    header: {
        // backgroundColor: '#223bb8',
        padding: 10,
        alignItems: 'flex-start',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        // Propiedades de sombra (iOS)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },  // Desplazamiento de la sombra
        shadowOpacity: 0.2,                     // Opacidad de la sombra
        shadowRadius: 3,                        // Radio de difuminado

        // Propiedad para Android
        elevation: 2,  // Aumenta el valor para más sombra en Android
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
    cardContentCenter: {
        paddingTop: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        textAlign: 'center',
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
        // marginTop: 20,
        // marginBottom: 20,
        // alignItems: 'flex-end',
        // marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
        flexDirection: 'row',      // Colocar los elementos en fila
        justifyContent: 'space-between', // Espacio entre los botones
        alignItems: 'center',      // Alineación vertical de los botones
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
        width: 370,
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

    imageModalHelp: {
        width: 120,
        height: 120,
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
        fontSize: 20,
        marginBottom: 10,
    },
    translationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },

    kichwaText: {
        fontSize: 14, //antes 20
        color: 'green',
        textAlign: 'center',
        marginBottom: 6,
    },
    spanishText: {
        fontSize: 14, //antes 20
        color: 'blue',
        textAlign: 'center',
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
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
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
        width: 105,
        height: 55,
        marginTop: 10,
        // borderRadius: 8,
        // borderWidth: 2,
        // borderColor: 'black',
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
    cardTitleGreet: {
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

    accordionContainer: {
        width: "90%",
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: 'red',
        borderWidth: 1
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





    arrowIcon: {
        width: 16,
        height: 16,
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

    curiositiesContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '40%',
    },

    helpModalContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '40%',
    },


    questionIconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: '5%',
        paddingTop: '5%',
    },

    bodyAlphabet: {
        flexDirection: 'row',
        width: '80%',
    },

    imageCards: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },

    islandImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginVertical: 20,
    },

    andesStyleText: {
        fontSize: 20,
        fontWeight: 'bold',
        //color: '#FFD700',
        textShadowColor: '#8B4513',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 6,
        //letterSpacing: 2,
        //borderColor: '#000',
        //borderWidth: 2,
        borderRadius: 8,
        padding: 15,
        textAlign: 'center',
    },
    andesStyleGradientBox: {
        textAlign: 'center',
        borderRadius: 8,
    },

    containerModalChat: {
        flex: 1,
        backgroundColor: '#fff',
    },
    closeButtonModalChat: {
        backgroundColor: '#822929',
        padding: 10,
        alignItems: 'center',
    },
    closeButtonTextModalChat: {
        color: '#fff',
        fontSize: 16,
    },

    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContentChatModal: {
        width: '90%',
        height: '70%',
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
    },



    bodyGreetings2: {
        padding: 10,
        flex: 1,
        //borderColor: '#00796b',
        //borderWidth: 5,
    },

    gridContainerGreetings2: {
        paddingVertical: 10,
        justifyContent: 'center',
        width: '100%',
    },

    flipCardContainerBothCardsGreetings2: {
        flexDirection: 'row',
        position: 'relative',
        width: '100%',
        marginBottom: 20,
        justifyContent: 'space-between',
    },

    flipCardGreetings2: {
        width: '50%',
        height: 150,
        marginVertical: 10,
        perspective: 1000,
    },

    flipCard2ndGreetings2: {
        width: '50%',
        height: 150,
        marginVertical: 10,
        perspective: 1000,
        zIndex: -2,
        opacity: 1,
        padding: 6,
    },

    flipCardSecondCardGreetings2: {
        width: '100%',
        height: '100%',
        perspective: 1000,
        alignItems: 'center',
        justifyContent: 'center',
    },

    flipCardSecondCardContentGreetings2: {
        width: '100%',
        height: '100%',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        perspective: 1000,
        backgroundColor: '#f8f8f8'
    },

    flipCardInnerGreetings2: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backfaceVisibility: 'hidden',
        borderRadius: 8,
    },


    flipCardFrontGreetings2: {
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    flipCardBackGreetings2: {
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

    humuImage: {
        width: width * 0.35,
        height: height * 0.25,
        position: 'absolute',
        top: '-8%',
        left: -width * 0.008,
        resizeMode: 'contain',
        zIndex: -2,
        opacity: 0,
    },

    translationLabelGreetingsCard2: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: '#000000',
    },
    translationTextGreetingsCard2: {
        fontSize: 12,
        textAlign: 'center',
        color: '#004d40',
    },

    textCenter: {
        textAlign: 'center',
        flex: 1,
    },


    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
    },
    overlayContainer: {
        position: 'absolute',
        bottom: 40,
        alignItems: 'center',
        width: '80%',
        height: '18%',
        backgroundColor: '#372948',
        borderRadius: 5,
        borderColor: '#A371A9',
        borderWidth: 2,
        padding: 10,
        margin: 10,
    },
    progressBar: {
        height: 10,
        width: '80%',
        backgroundColor: '#ddd',
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 20,
    },
    progress: {
        height: '100%',
        backgroundColor: '#4caf50',
    },
    loadingText: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },


    containerHome: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    titleHome: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    buttoncontainerHome: {
        width: '80%',
        justifyContent: 'space-around',
        height: 260,
    },

    containerSettings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    titleSettings: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    labelSettings: {
        fontSize: 18,
        marginBottom: 10,
    },
    sliderSettings: {
        width: '80%',
        height: 40,
    },




    pronounSmallFlipCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
    pronounBigFlipCardContainer: {
        width: '94%',
        height: 270,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        perspective: 1000,
    },
    pronounBigFlipCard: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    cardDefaultPronouns: {
        backgroundColor: '#fff',
        borderRadius: 8,
        width: "100%",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    translationLabelPronouns: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 4,
        color: '#000000',
    },
    translationTextPronouns: {
        fontSize: 11,
        textAlign: 'center',
        color: '#004d40',
    },

    pronounsKichwaText: {
        color: 'green',
        textAlign: 'center',
    },

    pronounsSpanishText: {
        color: 'blue',
        textAlign: 'center',
    },

    familyBigFlipCardContainer: {
        width: '94%',
        height: 450,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        perspective: 1000,
    },


    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    animalImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    genderBigFlipCardContainer: {
        width: '94%',
        height: 600,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        perspective: 1000,
    },

    imperative1BigFlipCardContainer: {
        width: '94%',
        height: 270,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        perspective: 1000,
    },
    imperative2BigFlipCardContainer: {
        width: '94%',
        height: 270,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        perspective: 1000,
    },
    imperative3BigFlipCardContainer: {
        width: '94%',
        height: 400,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        perspective: 1000,
    },

    simplePresentBigFlipCardContainer: {
        width: '94%',
        height: 480,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        perspective: 1000,
    },

    titleAlphabet: {
        fontSize: 50,
        fontWeight: 'bold',
    },
});
