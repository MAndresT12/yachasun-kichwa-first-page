import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/globalStyles';
import { buttonStyles } from '../../../styles/buttonStyles';
import { cardStyles } from '../../../styles/cardStyles';
import { imageStyles } from '../../../styles/imageStyles';
import { CardDefault } from '../ui/cards/CardDefault';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { ImageContainer } from '../ui/imageContainers/ImageContainer';
import { LinearGradient } from 'expo-linear-gradient';

const Instructions = () => {
    const navigation = useNavigation();

    const handlePressContinue = () => {
        navigation.navigate('CaminoLevelsBasic');
    };

    const handlePressReturn = () => {
        navigation.navigate('Levels');
    };

    return (

        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={[localStyles.gradientBackground, styles.container]}
        >
            <View style={imageStyles.halfImageContainer}>
                <ImageContainer
                    path={require('../../../assets/images/humu/humu-happy.png')}
                    style={imageStyles.halfImage}
                />
            </View>
            <View style={cardStyles.cardContainerInstructions}>

                <CardDefault title="Básico" style={cardStyles.instructionsCardStyle} >
                    <Text style={styles.cardContent}>
                    En este nivel de dificultad, aprenderás los elementos básicos del Kichwa. 
                    Comenzaremos por temas como los números, los colores y los saludos, para 
                    terminar con la creación de oraciones simples. Será una aventura llena de 
                    conocimiento y diversión.
                    {"\n\n"}Sostente fuerte que aquí comienza tu camino por un mundo maravilloso.
                    </Text>
                </CardDefault>
            </View>
            <View style={buttonStyles.buttonContainerSpaceAround}>
                <ButtonDefault label="Continuar" onPress={handlePressContinue} />
                <ButtonDefault label="Regresar" onPress={handlePressReturn} />
            </View>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    instructionsText: {
        fontSize: 18,
        marginRight: 10,
        paddingRight: 105,
        paddingLeft: 10,
    },
    imageContainer: {
        overflow: 'visible',
    },
    image: {
        width: 500,
        height: 500,
        position: 'absolute',
        right: -425,
        top: -500,
        zIndex: -1
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#5B4D28',
        padding: 10,
        borderRadius: 5,
        width: '40%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Instructions;
