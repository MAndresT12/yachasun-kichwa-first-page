import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated';
import { styles } from '../../../../styles/globalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { ImageContainer } from '../../ui/imageContainers/ImageContainer';

const BouncyText = ({ children }) => {
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withRepeat(
            withSequence(
                withTiming(1.1, { duration: 1000 }),
                withTiming(1, { duration: 1000 })
            ),
            -1,
            true
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
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={localStyles.gradientBackground}
        >
            <View style={styles.header}>
                <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
            </View>
            <ScrollView contentContainerStyle={localStyles.scrollViewContent}>

                {/* Modulo 1 */}
                <ImageContainer path={require('../../../../assets/images/basic/badges/abc.png')} style={styles.islandImage}/>

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Alphabet')}
                    >
                        <BouncyText><FontAwesome name="book" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                    <BouncyText>El Alfabeto / Llika</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Los Primeros Números / Yupaykuna</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FirstNumbers')}
                    >
                        <BouncyText><FontAwesome name="sort-numeric-desc" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('ToCount')}
                    >
                        <BouncyText><FontAwesome name="trophy" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Los Números Ordinales / Nikichik yupaykuna</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>Los Colores / Tullpukuna</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('Colors')}
                    >
                        <BouncyText><FontAwesome name="paint-brush" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('GamesBasicModule1')}
                    >
                        <FontAwesome name="gamepad" size={28} color="#FFF" />
                    </TouchableOpacity>
                    <BouncyText>Juego: Módulo 1 / Pukllana: Shukniki  Tantachiy Yachay</BouncyText>

                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Evaluación: Módulo 1 / Ruraykuna: Shukniki  Tantachiy Yachay</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('EvaluationBasicModule1')}
                    >
                        <FontAwesome name="pencil" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {/* Modulo 2 */}
                <ImageContainer path={require('../../../../assets/images/basic/badges/family.png')} style={styles.islandImage} />

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('GreetingsPart1')}
                    >
                        <BouncyText><FontAwesome name="handshake-o" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Los Saludos Parte 1: Básicos / Napaykuna</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Los Saludos Parte 2: Diálogos / Napaykuna</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('GreetingsPart2')}
                    >
                        <BouncyText><FontAwesome name="comments-o" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('PronounsSentence')}
                    >
                        <BouncyText><FontAwesome name="address-card" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                    <BouncyText>Los pronombres personales, el verbo kana y la estructura de una oración / Shutipakrantikuna, imachik kana, yuyayki wallpa</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText>La Familia Parte 1: Núcleo / Ayllu</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FamilyPart1')}
                    >
                        <BouncyText><FontAwesome name="users" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                </View>
                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circleLevel, localStyles.game]}
                        onPress={() => navigation.navigate('GamesBasicModule2')}
                    >
                    </TouchableOpacity>
                    <BouncyText>Juego 1</BouncyText>

                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Evaluación 1</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.evaluation]}
                        onPress={() => navigation.navigate('EvaluationBasicModule2')}
                    >
                    </TouchableOpacity>
                </View>

                {/* Modulo 3 */}
                <ImageContainer path={require('../../../../assets/images/basic/badges/home-food-school.png')} style={styles.islandImage} />

                <View style={localStyles.pathRow}>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('FamilyPart2')}
                    >
                        <BouncyText><FontAwesome name="user-plus" size={24} color="#FFF" /></BouncyText>
                    </TouchableOpacity>
                    <BouncyText>La Familia Parte 2: Extendida / Ayllu</BouncyText>
                </View>
                <View style={[localStyles.pathRow, localStyles.pathRowRight]}>
                    <BouncyText >Las partes del cuerpo humano / Aycha ukkunpak shimikuna</BouncyText>
                    <TouchableOpacity
                        style={[localStyles.circle, localStyles.level]}
                        onPress={() => navigation.navigate('BodyParts')}
                    >
                        <BouncyText><FontAwesome name="female" size={24} color="#FFF" /></BouncyText>
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
                <ImageContainer path={require('../../../../assets/images/basic/badges/valley-flowers.png')} style={styles.islandImage} />

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
                <ImageContainer path={require('../../../../assets/images/basic/badges/orientation.png')} style={styles.islandImage} />

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
                {/* <ImageContainer path={require('../../../../assets/images/basic/badges/abc.png')} style={styles.islandImage} />

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
                </View> */}

            </ScrollView>

        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingVertical: 20,
    },
    pathRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 75,
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
        borderWidth: 5,
        borderColor: '#FFC107', // Amarillo brillante para un efecto divertido
        backgroundColor: '#FFEB3B', // Fondo amarillo brillante
    },
    circleLevel: {
        width: 70,
        height: 70,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#8BC34A', // Verde brillante para resaltar niveles
        backgroundColor: '#228825',
    },
    evaluation: {
        backgroundColor: '#F44336', // Rojo para el nivel de evaluación
        borderColor: '#E53935',
        borderWidth: 5,
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
        color: '#212752', // Color similar a globos #212752 antes #212b68
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 4,
        borderRadius: 10,
        padding: 15,
    },
    topicText: {
        fontSize: 18,
        marginLeft: 10,
    },
});

export default CaminoLevelsScreen;


