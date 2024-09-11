// src/components/CaminoLevelsScreen.jsx

import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated';
import { styles } from '../../../../styles/globalStyles';

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
                <Image source={require('../../../../assets/images/myths/huma3.png')} style={localStyles.islandImage} />

                {/* Modulo 1 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Main')}
                    >
                        <BouncyText>1</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Los Números</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Los Alimentos</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Food')}
                    >
                        <BouncyText>2</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Animals')}
                    >
                        <BouncyText>3</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Los Animales</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Las Partículas 1</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ParticlesPart1')}
                    >
                        <BouncyText>4</BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('IntroduccionJuegosScreen1')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 1</BouncyText>

                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Evaluación 1</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Game1')}
                    >
                    </TouchableOpacity>
                </View>

                <Image source={require('../../../../assets/images/prototype/diablo-prototype.png')} style={localStyles.islandImage} />

                {/* Modulo 2 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ParticlesPart2')}
                    >
                        <BouncyText>6</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Las Partículas 2</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Las Partículas 3</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ParticlesPart3')}
                    >
                        <BouncyText>7</BouncyText>
                    </TouchableOpacity>
                </View>
                {/* Continuar con el mismo patrón... */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ParticlesPart4')}
                    >
                        <BouncyText>8</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Las Partículas 4</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>La Negación</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LaNegacion')}
                    >
                        <BouncyText>9</BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game2')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 2</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación 2</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Game2')}
                    >
                    </TouchableOpacity>
                </View>

                <Image source={require('../../../../assets/images/myths/huma2.png')} style={localStyles.islandImage} />

                {/* Modulo 3 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosVerbos1')}
                    >
                        <BouncyText>10</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Los Verbos 1</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Conjugación de Verbos</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosVerbosConjugaciones1')}
                    >
                        <BouncyText>11</BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosAdjetivos1')}
                    >
                        <BouncyText>12</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Los Adjetivos 1</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>La Ciudad</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LaCiudad')}
                    >
                        <BouncyText>13</BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game3')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 3</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación 3</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Evaluation3')}
                    >
                    </TouchableOpacity>
                </View>

                <Image source={require('../../../../assets/images/myths/huma4.png')} style={localStyles.islandImage} />

                {/* Modulo 4 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LaCocina')}
                    >
                        <BouncyText>14</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>La Cocina</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Los Verbos 2</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosVerbos2')}
                    >
                        <BouncyText>15</BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LosAdjetivos2')}
                    >
                        <BouncyText>16</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Los Adjetivos 2</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>El Dormitorio</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ElDormitorio')}
                    >
                        <BouncyText>17</BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game4')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 4</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación 4</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Evaluation4')}
                    >
                    </TouchableOpacity>
                </View>

                <Image source={require('../../../../assets/images/myths/huma5.png')} style={localStyles.islandImage} />

                {/*Modulo 5 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('LaUbicacion')}
                    >
                        <BouncyText>18</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>La Ubicación</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>El Tiempo</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ElTiempo')}
                    >
                        <BouncyText>19</BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ElPasadoSimple')}
                    >
                        <BouncyText>20</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Pasado Simple</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Participio Pasado</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ElParticipioPasado')}
                    >
                        <BouncyText>21</BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game5')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 5</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación 5</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Evaluation5')}
                    >
                    </TouchableOpacity>
                </View>

                <Image source={require('../../../../assets/images/myths/huma6.png')} style={localStyles.islandImage} />

                {/* Modulo 6 */}
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ElPasadoProgresivo')}
                    >
                        <BouncyText>22</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Pasado Progresivo</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Conjugación Presente Progresivo</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ConjugacionPresenteProgresivo')}
                    >
                        <BouncyText>23</BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FuturoProximo')}
                    >
                        <BouncyText>24</BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Futuro Próximo</BouncyText>
                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Futuro Simple</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FuturoSimple')}
                    >
                        <BouncyText>25</BouncyText>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('Game6')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 6</BouncyText>

                </View>

                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Evaluación 6</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('Evaluation6')}
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


