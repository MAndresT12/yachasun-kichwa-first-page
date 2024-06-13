// src/components/CaminoLevelsScreen.jsx

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/globalStyles';

const CaminoLevelsScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
            </View>
            <ScrollView contentContainerStyle={localStyles.scrollViewContent}>
                {/*Modulo 1 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Main')}
                    />
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Food')}
                    />
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Animals')}
                    />
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Particles')}
                    />
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game')}
                    />
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Game')}
                    />
                </View>
                {/*Modulo 2 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ParticlesPart2')}
                    />
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ParticlesPart3')}
                    />
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ParticlesPart4')}
                    />
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LaNegacion')}
                    />
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game2')}
                    />
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Game2')}
                    />
                </View>
                {/*Modulo 3 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosVerbos1')}
                    />
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosVerbosConjugaciones1')}
                    />
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosAdjetivos1')}
                    />
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LaCiudad')}
                    />
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game3')}
                    />
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Evaluation3')}
                    />
                </View>


            </ScrollView>
        </View>
    );
};

const localStyles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        paddingVertical: 20,
    },
    pathRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 135,
        marginVertical: 20,
    },
    pathRowRight: {
        justifyContent: 'flex-end',
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
    },
    circleLevel: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 10,
        borderColor: '#000',
    },
    level: {
        backgroundColor: '#d9d9d9',
    },
    game: {
        backgroundColor: '#d9d9d9',
        borderColor: '#000',
    },
    evaluation: {
        backgroundColor: '#000',
    },
});

export default CaminoLevelsScreen;
