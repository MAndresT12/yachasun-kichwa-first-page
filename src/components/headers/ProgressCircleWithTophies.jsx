import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import Svg, { Circle, G, Path } from 'react-native-svg';

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
        require('../../../assets/images/basic/badges/abc.png'),
        require('../../../assets/images/basic/badges/family.png'),
        require('../../../assets/images/basic/badges/home-food-school.png'),
        require('../../../assets/images/basic/badges/orientation.png'),
        require('../../../assets/images/basic/badges/valley-flowers.png'),
        require('../../../assets/images/basic/badges/valley-flowers.png'),
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
                <View style={styles.container}>
                    <Svg height="50" width="50" viewBox="0 0 100 100">
                        <G>
                            {Array.from({ length: sections }).map((_, index) =>
                                renderSection(index, index < completedSections)
                            )}
                        </G>
                        <Circle cx="50" cy="50" r="28" fill="#FFFFFF" />
                    </Svg>
                    <Text style={styles.label}>Trofeos</Text>
                </View>
            </TouchableOpacity>

            <Modal animationType="slide" transparent={true} visible={showModal} onRequestClose={() => setShowModal(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Desbloquea trofeos completando los módulos</Text>
                        <Text style={styles.modalSubtitle}>Trofeos obtenidos: {completedSections} de {sections}</Text>

                        {/* Mostrar las imágenes de los trofeos obtenidos en una cuadrícula de 3x2 */}
                        <View style={styles.trophyGrid}>
                            {trophyImages.map((image, index) => (
                                <Image
                                    key={index}
                                    source={image}
                                    style={[
                                        styles.trophyImage,
                                        { opacity: index < completedSections ? 1 : 0.3 }, // Mostrar trofeos completados en color, los incompletos en opacidad
                                    ]}
                                />
                            ))}
                        </View>

                        <TouchableOpacity onPress={() => setShowModal(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
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
    trophyImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        margin: 10,
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
