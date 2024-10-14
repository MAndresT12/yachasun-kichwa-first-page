// src/components/VocabularioElTiempoScreen.jsx

import React, { useState } from 'react';
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
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
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
    const progress = 0.75;

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
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>spanish</Text>
                            </View>
                            {renderRows(timeVocabulary)}
                        </View>
                    </CardDefault>
                    <CardDefault title="Hunkay punchakuna (Los días de la semana)">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderRows(daysOfWeek)}
                        </View>
                    </CardDefault>
                    <CardDefault title="Killakuna (Los meses)">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
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
                                        <ImageContainer uri={'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png'} style={styles.imageModalHelp} />
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

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('ElPasadoSimple')} />

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
