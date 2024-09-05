// src/components/Levels.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/globalStyles';
import { imageStyles } from '../../../styles/imageStyles';
import { CardDefault } from '../ui/cards/CardDefault';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { ImageContainer } from '../ui/imageContainers/ImageContainer';

const Levels = () => {
    const navigation = useNavigation();

    const handlePressBasic = () => {
        navigation.navigate('InstructionsBasic');
    };

    const handlePressMid = () => {
        navigation.navigate('InstructionsMid');
    };

    return (
        <View style={[styles.container]}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <CardDefault style={{justifyContent: 'center', alignItems: 'center'}}>
                    <ImageContainer uri={'https://static.wikia.nocookie.net/johnnyotgs/images/6/6e/WTNO_BJ_BKAT.jpg/revision/latest?cb=20140801043745'}/>
                    <ButtonDefault label="Básico" onPress={handlePressBasic} />
                </CardDefault>
                <CardDefault>
                    <ImageContainer uri={'https://static.wikia.nocookie.net/johnnyotgs/images/0/0f/WTNO_BJ_BKAT_2.jpg/revision/latest?cb=20140801043755'}/>
                    <ButtonDefault label="Intermedio" onPress={handlePressMid} />
                </CardDefault>
            </View>
        </View>
    );
};

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    cardContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 5,
    },
    button: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5B4D28',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Levels;
