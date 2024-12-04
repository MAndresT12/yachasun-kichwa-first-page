// src/components/Levels.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/globalStyles';
import { CardDefault } from '../ui/cards/CardDefault';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { ImageContainer } from '../ui/imageContainers/ImageContainer';
import { LinearGradient } from 'expo-linear-gradient';

const Levels = () => {
    const navigation = useNavigation();

    const handlePressBasic = () => {
        navigation.navigate('InstructionsBasic');
    };

    const handlePressMid = () => {
        navigation.navigate('InstructionsMid');
    };

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={[localStyles.gradientBackground, styles.container]}
        >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <CardDefault style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ImageContainer path={require('../../../assets/images/humu/humu-happy.jpg')}
                    />
                    <ButtonDefault label="Básico" onPress={handlePressBasic} />
                </CardDefault>
                <CardDefault>
                    <ImageContainer path={require('../../../assets/images/humu/humu-fuckup.jpg')}
                    />
                    <ButtonDefault label="Intermedio" onPress={handlePressMid} />
                </CardDefault>
            </View>
        </LinearGradient>
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
