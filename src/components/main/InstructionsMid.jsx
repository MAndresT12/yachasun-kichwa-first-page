// src/components/Instructions.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles as globalStyles } from '../../../styles/globalStyles';
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
        navigation.navigate('CaminoLevels');
    };

    const handlePressReturn = () => {
        navigation.navigate('Levels');
    };

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={[localStyles.gradientBackground, globalStyles.container]}
        >
            <View style={imageStyles.halfImageContainer}>
                <ImageContainer
                    path={require('../../../assets/images/humu/humu-fuckup.png')}
                    style={imageStyles.halfImage}
                />
            </View>
            <View style={cardStyles.cardContainerInstructions}>

                <CardDefault
                    title="Intermedio"
                    style={cardStyles.instructionsCardStyle}
                >
                    <Text style={globalStyles.cardContent}>
                        En este nivel de dificultad, te adentrarás más en el fascinante mundo del Kichwa, explorando conceptos más avanzados y aplicando todo lo que ya sabes.
                        {"\n\n"}Comenzaremos con temas como los alimentos y los verbos esenciales, para luego aprender a formular preguntas, afirmaciones y expresar razones o pertenencias usando partículas especiales.
                        {"\n\n"}Prepárate para descubrir nuevas maneras de expresarte en esta maravillosa aventura lingüística.
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
