import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import Svg, { Circle, G, Path } from 'react-native-svg';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../../../styles/globalStyles';
const ProgressCircleWithTrophies = ({ progress, level }) => {
    const sections = 6;
    const completedSections = Math.floor(progress * sections); // Progreso basado en el número de secciones completadas
    const [showModal, setShowModal] = useState(false); // Estado para el modal

    const renderSection = (index, isComplete) => {
        const angle = (index / sections) * 360;
        const rotation = `rotate(${angle}, 50, 50)`;
        const color = isComplete ? '#4CAF50' : '#E0E0E0'; // Verde para secciones completadas, gris para incompletas

        return (
            <Path
                key={index}
                d="M50 10 A40 40 0 0 1 90 50 L50 50 Z"
                fill={color}
                transform={rotation}
            />
        );
    };

    // Trofeos de nivel básico
    const basicTrophyImages = [
        require('../../../assets/images/basic/badges/abc.jpg'),
        require('../../../assets/images/basic/badges/family.jpg'),
        require('../../../assets/images/basic/badges/home-food-school.jpg'),
        require('../../../assets/images/basic/badges/orientation.jpg'),
        require('../../../assets/images/basic/badges/valley-flowers.jpg'),
        require('../../../assets/images/basic/badges/present.jpg'),
    ];

    // Trofeos de nivel intermedio
    const intermediateTrophyImages = [
        require('../../../assets/images/animals/tortuga.png'),
        require('../../../assets/images/animals/jaguar.png'),
        require('../../../assets/images/animals/guacamayo.png'),
        require('../../../assets/images/animals/cuy2.png'),
        require('../../../assets/images/animals/llama.png'),
        require('../../../assets/images/animals/condor.png'),
    ];

    // Determinar las imágenes de los trofeos según el nivel
    const trophyImages = level === 'intermedio' ? intermediateTrophyImages : basicTrophyImages;

    return (
        <View>
            <TouchableOpacity onPress={() => setShowModal(true)}>
                <View style={localStyles.container}>
                    <Svg height="50" width="50" viewBox="0 0 100 100">
                        <G>
                            {Array.from({ length: sections }).map((_, index) =>
                                renderSection(index, index < completedSections)
                            )}
                        </G>
                        <Circle cx="50" cy="50" r="28" fill="#FFFFFF" />
                    </Svg>
                    <Text style={localStyles.label}>Trofeos</Text>
                </View>
            </TouchableOpacity>

            <Modal animationType="slide" transparent={true} visible={showModal} onRequestClose={() => setShowModal(false)}>
                <View style={localStyles.modalContainer}>
                    <View style={localStyles.modalContent}>
                        <Text style={localStyles.modalTitle}>Desbloquea trofeos completando los módulos</Text>
                        <Text style={localStyles.modalSubtitle}>Trofeos obtenidos: {completedSections} de {sections}</Text>

                        {/* Mostrar las imágenes de los trofeos obtenidos en una cuadrícula de 3x2 */}
                        <View style={localStyles.trophyGrid}>
                            {trophyImages.map((image, index) => (
                                <View key={index} style={localStyles.trophyContainer}>
                                    <Image
                                        source={image}
                                        style={[
                                            localStyles.trophyImage,
                                            {
                                                opacity: index < completedSections ? 1 : 0.45,
                                                tintColor: index >= completedSections ? 'black' : null, // Tinte negro a trofeos no completados
                                                filter: index >= completedSections ? 'grayscale(100%)' : null,
                                            },
                                        ]}
                                    />
                                    {/* Si el trofeo no está desbloqueado, mostrar el ícono de pregunta */}
                                    {index >= completedSections && (
                                        <View style={localStyles.lockOverlay}>
                                            <FontAwesome name="question" size={40} color="#FFF" />
                                        </View>
                                    )}
                                </View>
                            ))}
                        </View>

                        <View style={styles.buttonContainerAlphabet}>
                            <TouchableOpacity onPress={() => setShowModal(false)}>
                                <View style={styles.buttonDefaultAlphabet}>
                                    <Text style={styles.buttonTextAlphabet}>Cerrar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

const localStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    modalSubtitle: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    trophyGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
    },
    trophyContainer: {
        position: 'relative', // Necesario para posicionar el ícono de pregunta
        margin: 10,
    },
    trophyImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    lockOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ProgressCircleWithTrophies;
