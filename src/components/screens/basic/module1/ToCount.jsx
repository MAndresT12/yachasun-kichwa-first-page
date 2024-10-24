import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { Text, View, ScrollView, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../../../../../styles/globalStyles';

import { FloatingHumu } from '../../../animations/FloatingHumu';
import ProgressCircleWithTrophies from '../../../headers/ProgressCircleWithTophies';

import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';
import { ComicBubble } from '../../../ui/bubbles/ComicBubble';
import { ButtonLevelsInicio } from '../../../ui/buttons/ButtonLevelsInicio';

const { width } = Dimensions.get('window');

const humuTalking = require('../../../../../assets/images/humu/humu-talking.jpg');

const to_count_data1to10 = [
    { numberPosition: "1", kichwa: "Shukniki", spanish: "Primero" },
    { numberPosition: "2", kichwa: "Ishkayniki", spanish: "Segundo" },
    { numberPosition: "3", kichwa: "Kimsaniki", spanish: "Tercero" },
    { numberPosition: "4", kichwa: "Chuskuniki", spanish: "Cuarto" },
    { numberPosition: "5", kichwa: "Pichkaniki", spanish: "Quinto" },
    { numberPosition: "6", kichwa: "Suktaniki", spanish: "Sexto" },
    { numberPosition: "7", kichwa: "Kanchisniki", spanish: "Séptimo" },
    { numberPosition: "8", kichwa: "Pusakniki", spanish: "Octavo" },
    { numberPosition: "9", kichwa: "Iskunniki", spanish: "Noveno" },
    { numberPosition: "10", kichwa: "Chunkaniki", spanish: "Décimo" },
];

const to_count_data_11to20 = [
    { numberPosition: "12", kichwa: "Chunka ishkayniki", spanish: "Duodécimo" },
    { numberPosition: "13", kichwa: "Chunka kimsaniki", spanish: "Decimotercero" },
    { numberPosition: "14", kichwa: "Chunka chuskuniki", spanish: "Decimocuarto" },
    { numberPosition: "15", kichwa: "Chunka pichkaniki", spanish: "Decimoquinto" },
    { numberPosition: "16", kichwa: "Chunka suktaniki", spanish: "Decimosexto" },
    { numberPosition: "17", kichwa: "Chunka kanchisniki", spanish: "Decimoséptimo" },
    { numberPosition: "18", kichwa: "Chunka pusakniki", spanish: "Decimoctavo" },
    { numberPosition: "19", kichwa: "Chunka iskunniki", spanish: "Decimonoveno" },
    { numberPosition: "20", kichwa: "Ishkay chunkaniki", spanish: "Vigésimo" },
];

const renderOrdinalRows = (ordinal_data) => {
    return ordinal_data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.numberPosition}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, styles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const Oneto10Route = () => (
    <View>
        <Text style={styles.title}>1 al 10</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Posición</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
            </View>
            {renderOrdinalRows(to_count_data1to10)}
        </View>
    </View>
);

const ElevenTo20Route = () => (
    <View>
        <Text style={styles.title}>11 al 20</Text>
        <View style={styles.vocabularyTable}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Posición</Text>
                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                <Text style={styles.tableHeaderCell}>Español</Text>
            </View>
            {renderOrdinalRows(to_count_data_11to20)}
        </View>
    </View>
);

const ToCount = () => {
    const [showHelp, setShowHelp] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

    const navigation = useNavigation();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'Oneto10', title: 'Ordinales: Parte 1' },
        { key: 'ElevenTo20', title: 'Ordinales: Parte 2' },
    ]);

    const renderScene = SceneMap({
        Oneto10: Oneto10Route,
        ElevenTo20: ElevenTo20Route,
    });

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };

    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_Colors_completed', 'true');
            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };

    const trofeoKeys = [
        'trofeo_modulo1_basic',
        'trofeo_modulo2_basic',
        'trofeo_modulo3_basic',
        'trofeo_modulo4_basic',
        'trofeo_modulo5_basic',
        'trofeo_modulo6_basic',
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

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}
        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="basic" />
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <CardDefault title="¿Cómo se hace?" >
                        <Text style={styles.cardContent}>
                            Ahora que sabes de números en Kichwa.
                            Es importante que aprendamos cómo ordenar o posicionar.
                            Aquí entran los números ordinales.{"\n\n"}
                            Para crear los números ordinales en Kichwa, añadimos -niki
                            al número normal según su posición.
                        </Text>
                    </CardDefault>
                    <CardDefault styleContainer={{ flex: 1 }} styleCard={{ flex: 1, height: 700 }} >
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={width}
                            style={{ height: '100%' }}
                            renderTabBar={(props) => (
                                <TabBar
                                    {...props}
                                    indicatorStyle={{ backgroundColor: 'white' }}
                                    style={{
                                        backgroundColor: '#003366',
                                        borderRadius: 8,
                                        margin: 10,
                                    }}
                                    tabStyle={{
                                        borderRadius: 10,
                                        marginHorizontal: 5,
                                    }}
                                    labelStyle={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                    activeColor="#FFD700"
                                    inactiveColor="#FFFFFF"
                                />
                            )}
                        />
                    </CardDefault>
                    {/* <CardDefault title="Tabla de Posiciones">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Posición</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                            </View>
                            {renderOrdinalRows(to_count_data1to10)}
                        </View>
                    </CardDefault> */}
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
                                        <ImageContainer path={humuTalking} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text='Presiona en cada pestaña para las tablas con la info de esta lección.'
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
                <ButtonLevelsInicio label="Inicio"
                        navigationTarget="CaminoLevelsBasic"
                    />
                    <ButtonDefault
                        label="Siguiente"
                        onPress={() => {
                            completeLevel();
                            navigation.navigate('Colors');
                        }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default ToCount;
