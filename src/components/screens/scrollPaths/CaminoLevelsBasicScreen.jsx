// src/components/CaminoLevelsScreen.jsx

import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated';
import { styles } from '../../../../styles/globalStyles';
import { ImageContainer } from '../../ui/imageContainers/ImageContainer';

const BouncyText = ({ children }) => {
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withRepeat(
            withSequence(
                withTiming(1.1, { duration: 1000 }),
                withTiming(1, { duration: 1000 })
            ),
            -1,  // Infinite loop
            true // Reverse on repeat
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    return (
        <Animated.Text style={[localStyles.bouncyText, animatedStyle]}>
            {children}
        </Animated.Text>
    );
};

const CaminoLevelsScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
            </View>
            <ScrollView contentContainerStyle={localStyles.scrollViewContent}>

                {/* Modulo 1 */}
                <ImageContainer path={require('../../../../assets/images/prototype/santigod.jpeg')} />

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Alphabet')}
                    >
                        <BouncyText>1</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>El Alfabeto</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Los Primeros Números</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FirstNumbers')}
                    >
                        <BouncyText>2</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ToCount')}
                    >
                        <BouncyText>3</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>¿Cómo se cuenta?</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Los Colores</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Colors')}
                    >
                        <BouncyText>4</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('GamesBasicModule1')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 1</BouncyText>

                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Evaluación 1</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('EvaluationBasicModule1')}
                    >
                    </TouchableOpacity>
                </View>

                {/* Modulo 2 */}
                <ImageContainer path={require('../../../../assets/images/prototype/faustotrabalover.jpeg')} />

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Alphabet')}
                    >
                        <BouncyText>1</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>El Alfabeto</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Los Primeros Números</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FirstNumbers')}
                    >
                        <BouncyText>2</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ToCount')}
                    >
                        <BouncyText>3</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>¿Cómo se cuenta?</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Los Colores</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Colors')}
                    >
                        <BouncyText>4</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('GamesBasicModule1')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 1</BouncyText>

                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Evaluación 1</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('EvaluationBasicModule1')}
                    >
                    </TouchableOpacity>
                </View>

                {/* Modulo 3 */}
                <ImageContainer path={require('../../../../assets/images/prototype/faustotrabalover.jpeg')} />

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Alphabet')}
                    >
                        <BouncyText>1</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>El Alfabeto</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Los Primeros Números</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FirstNumbers')}
                    >
                        <BouncyText>2</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ToCount')}
                    >
                        <BouncyText>3</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>¿Cómo se cuenta?</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Los Colores</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Colors')}
                    >
                        <BouncyText>4</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('GamesBasicModule1')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 1</BouncyText>

                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Evaluación 1</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('EvaluationBasicModule1')}
                    >
                    </TouchableOpacity>
                </View>

                {/* Modulo 4 */}
                <ImageContainer path={require('../../../../assets/images/prototype/faustotrabalover.jpeg')} />

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Alphabet')}
                    >
                        <BouncyText>1</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>El Alfabeto</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Los Primeros Números</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FirstNumbers')}
                    >
                        <BouncyText>2</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ToCount')}
                    >
                        <BouncyText>3</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>¿Cómo se cuenta?</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Los Colores</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Colors')}
                    >
                        <BouncyText>4</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('GamesBasicModule1')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 1</BouncyText>

                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Evaluación 1</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('EvaluationBasicModule1')}
                    >
                    </TouchableOpacity>
                </View>

                {/*Modulo 5 */}
                <ImageContainer path={require('../../../../assets/images/prototype/faustotrabalover.jpeg')} />

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Alphabet')}
                    >
                        <BouncyText>1</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>El Alfabeto</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Los Primeros Números</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FirstNumbers')}
                    >
                        <BouncyText>2</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ToCount')}
                    >
                        <BouncyText>3</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>¿Cómo se cuenta?</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Los Colores</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Colors')}
                    >
                        <BouncyText>4</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('GamesBasicModule1')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 1</BouncyText>

                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Evaluación 1</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('EvaluationBasicModule1')}
                    >
                    </TouchableOpacity>
                </View>

                {/* Modulo 6 */}
                <ImageContainer path={require('../../../../assets/images/prototype/faustotrabalover.jpeg')} />

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Alphabet')}
                    >
                        <BouncyText>1</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>El Alfabeto</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Los Primeros Números</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FirstNumbers')}
                    >
                        <BouncyText>2</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ToCount')}
                    >
                        <BouncyText>3</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>¿Cómo se cuenta?</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Los Colores</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Colors')}
                    >
                        <BouncyText>4</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('GamesBasicModule1')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 1</BouncyText>

                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Evaluación 1</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('EvaluationBasicModule1')}
                    >
                    </TouchableOpacity>
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
        paddingHorizontal: 120,
        marginVertical: 20,
    },
    pathRowRight: {
        justifyContent: 'flex-end',
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#000',
        backgroundColor: '#d9d9d9',
    },
    circleLevel: {
        width: 70,
        height: 70,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 20,
        borderColor: '#000',
        backgroundColor: '#d9d9d9',
    },
    evaluation: {
        backgroundColor: '#000',
        borderColor: '#000000',
    },
    islandImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    bouncyText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#212b68', // Color similar a globos
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 4,
        borderRadius: 10,
        padding: 15,
        elevation: 5,
    },
    topicText: {
        fontSize: 18,
        marginLeft: 10,
    },
});

export default CaminoLevelsScreen;


