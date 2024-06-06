import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles as globalStyles } from '../../styles/globalStyles';
import { Card } from './Card';

const Levels = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Main');
    };

    return (
        <View style={[globalStyles.container, localStyles.container]}>
            <Text style={localStyles.title}>YACHASUN KICHWA</Text>
            <View style={localStyles.cardContainer}>
                <Card style={localStyles.card}>
                    <Image
                        source={{ uri: 'https://static.wikia.nocookie.net/johnnyotgs/images/6/6e/WTNO_BJ_BKAT.jpg/revision/latest?cb=20140801043745' }}
                        style={localStyles.image}
                    />
                    <TouchableOpacity onPress={handlePress} style={localStyles.button}>
                        <Text style={localStyles.buttonText}>Level 1</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={localStyles.card}>
                    <Image
                        source={{ uri: 'https://static.wikia.nocookie.net/johnnyotgs/images/0/0f/WTNO_BJ_BKAT_2.jpg/revision/latest?cb=20140801043755' }}
                        style={localStyles.image}
                    />
                    <TouchableOpacity onPress={handlePress} style={localStyles.button}>
                        <Text style={localStyles.buttonText}>Level 2</Text>
                    </TouchableOpacity>
                </Card>
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
