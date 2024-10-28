// src/components/VocabularioElTiempoScreen.jsx

import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';
import { FloatingHumu } from '../../animations/FloatingHumu';
import { FontAwesome } from '@expo/vector-icons';
import { ComicBubble } from '../../ui/bubbles/ComicBubble';
import { AccordionDefault } from '../../ui/buttons/AccordionDefault';
import { ImageContainer } from '../../ui/imageContainers/ImageContainer';

const timeVocabulary = [
    { kichwa: "puncha", spanish: "día" },
    { kichwa: "hunkay", spanish: "semana" },
    { kichwa: "killa", spanish: "mes" },
    { kichwa: "wata", spanish: "año" },
    { kichwa: "chishi", spanish: "tarde" },
    { kichwa: "tuta", spanish: "noche" },
    { kichwa: "pakari", spanish: "amanecer" },
    { kichwa: "chawpi puncha", spanish: "medio día" },
    { kichwa: "chawpi tuta", spanish: "media noche" },
    { kichwa: "kayna", spanish: "ayer" },
    { kichwa: "kunan", spanish: "hoy" },
    { kichwa: "kaya", spanish: "mañana" },
    { kichwa: "mincha", spanish: "pasado mañana" },
    { kichwa: "sarun", spanish: "antes de ayer" },
];

const daysOfWeek = [
    { kichwa: "awaki", spanish: "lunes" },
    { kichwa: "awkari", spanish: "martes" },
    { kichwa: "chillay", spanish: "miércoles" },
    { kichwa: "kullka", spanish: "jueves" },
    { kichwa: "chaska", spanish: "viernes" },
    { kichwa: "wacha", spanish: "sábado" },
    { kichwa: "inti", spanish: "domingo" },
];

const months = [
    { kichwa: "kulla", spanish: "enero" },
    { kichwa: "panchi", spanish: "febrero" },
    { kichwa: "pawkar", spanish: "marzo" },
    { kichwa: "ayriwa", spanish: "abril" },
    { kichwa: "aymuray", spanish: "mayo" },
    { kichwa: "raymi", spanish: "junio" },
    { kichwa: "situwa", spanish: "julio" },
    { kichwa: "karwa", spanish: "agosto" },
    { kichwa: "kuski", spanish: "septiembre" },
    { kichwa: "wayra", spanish: "octubre" },
    { kichwa: "sasi", spanish: "noviembre" },
    { kichwa: "kapak", spanish: "diciembre" },
];

const renderRows = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.spanishText]}>{item.spanish}</Text>

            <Text style={[styles.tableCell, styles.kichwaText]}>{item.kichwa}</Text>
        </View>
    ));
};

const VocabularioElTiempoScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [showHelp, setShowHelp] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const toggleAccordion = (key) => {
        if (activeAccordion === key) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(key);
        }
    };

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };
    const navigation = useNavigation();
    const [progress, setProgress] = useState(0);
    const trofeoKeys = [
        'trofeo_modulo1_intermedio',
        'trofeo_modulo2_intermedio',
        'trofeo_modulo3_intermedio',
        'trofeo_modulo4_intermedio',
        'trofeo_modulo5_intermedio',
        'trofeo_modulo6_intermedio',
    ];
    // Función para cargar el estado de los trofeos desde AsyncStorage
    const loadTrophyProgress = async () => {
        let obtainedCount = 0;

        // Verificamos cuántos trofeos están desbloqueados
        for (const key of trofeoKeys) {
            const obtained = await AsyncStorage.getItem(key);
            if (obtained === 'true') {
                obtainedCount++;
            }
        }

        // Actualizamos el progreso basado en el número de trofeos obtenidos
        setProgress(obtainedCount / trofeoKeys.length); // Calcula el progreso como una fracción
    };

    // Cada vez que la pantalla de CaminoLevelsScreen gana foco, recargar el progreso de trofeos
    useFocusEffect(
        React.useCallback(() => {
            loadTrophyProgress();
        }, [])
    );
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_ElPasadoSimple_completed', 'true');

            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };
    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
            style={styles.gradient}
        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="intermedio" />
                </View>
                {/* <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View> */}
                <View style={styles.body}>
                    <CardDefault title="Pacha (El tiempo)">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {renderRows(timeVocabulary)}
                        </View>
                    </CardDefault>
                    <CardDefault title="Hunkay punchakuna (Los días de la semana)">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {renderRows(daysOfWeek)}
                        </View>
                    </CardDefault>
                    <CardDefault title="Killakuna (Los meses)">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                            </View>
                            {renderRows(months)}
                        </View>
                    </CardDefault>
                </View>
                {showHelp && (
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={showHelp}
                        onRequestClose={() => toggleHelpModal()}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <View style={styles.helpModalContent}>
                                    <FloatingHumu >
                                        <ImageContainer path={require('../../../../assets/images/humu/humu-talking.jpg')} style={styles.imageModalHelp} />


                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en cada una las tarjetas para ver su traducción.'
                                        arrowDirection="left"
                                    />
                                </View>
                                <View style={styles.buttonContainerAlphabet}>
                                    <TouchableOpacity onPress={() => toggleHelpModal()}>
                                        <View style={styles.buttonDefaultAlphabet}>
                                            <Text style={styles.buttonTextAlphabet}>Cerrar</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                )}
                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio" />
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel(); // Completar el nivel actual
                            navigation.navigate('ElPasadoSimple');
                        }}
                    />


                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default VocabularioElTiempoScreen;
