// src/components/Instructions.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles as globalStyles } from '../../styles/globalStyles';

const Instructions = () => {
    const navigation = useNavigation();

    const handlePressContinue = () => {
        navigation.navigate('CaminoLevels');
    };

    const handlePressReturn = () => {
        navigation.navigate('Levels');
    };

    return (
        <View style={[globalStyles.container, localStyles.container]}>
            <Text style={localStyles.title}>INSTRUCCIONES</Text>
            <View style={localStyles.content}>
                <Text style={localStyles.title}>BASICO</Text>
                <Text style={localStyles.instructionsText}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </Text>

            </View>
            <View style={localStyles.imageContainer}>
                <Image
                    source={require('../../assets/diablo-prototype.png')}
                    style={localStyles.image}
                />
            </View>
            <View style={localStyles.buttonsContainer}>
                <TouchableOpacity onPress={handlePressContinue} style={localStyles.button}>
                    <Text style={localStyles.buttonText}>Continuar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressReturn} style={localStyles.button}>
                    <Text style={localStyles.buttonText}>Regresar</Text>
                </TouchableOpacity>
            </View>
        </View>
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
