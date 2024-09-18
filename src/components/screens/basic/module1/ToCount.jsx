import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, Modal, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { imageStyles } from '../../../../../styles/imageStyles';
import { buttonStyles } from '../../../../../styles/buttonStyles';
import { cardStyles } from '../../../../../styles/cardStyles';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';

const to_count_data = [
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
    { numberPosition: "11", kichwa: "Chunka shukniki", spanish: "Undécimo" },
    { numberPosition: "12", kichwa: "Chunka ishkayniki", spanish: "Duodécimo" },
    { numberPosition: "13", kichwa: "Chunka kimsaniki", spanish: "Decimotercero" },
    { numberPosition: "14", kichwa: "Chunka chuskuniki", spanish: "Decimocuarto" },
    { numberPosition: "15", kichwa: "Chunka pichkaniki", spanish: "Decimoquinto" },
    { numberPosition: "16", kichwa: "Chunka suktaniki", spanish: "Decimosexto" },
    { numberPosition: "17", kichwa: "Chunka kanchisniki", spanish: "Decimoséptimo" },
    { numberPosition: "18", kichwa: "Chunka pusakniki", spanish: "Decimoctavo" },
    { numberPosition: "19", kichwa: "Chunka iskunniki", spanish: "Decimonoveno" },
    { numberPosition: "20", kichwa: "Ishkay chunkaniki", spanish: "Vigésimo" }
];

const renderOrdinalRows = () => {
    return to_count_data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.numberPosition}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const ToCount = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#5B4D28" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Los Números Ordinales</Text>
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
                </View>
                <View style={styles.body}>
                    <CardDefault title="Tabla de Posiciones">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Posición</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Español</Text>
                            </View>
                            {renderOrdinalRows()}
                        </View>
                    </CardDefault>
                </View>
                <View style={styles.footer}>
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('Colors')} />
                </View>
            </ScrollView>
        </View>
    );
};

const localStyles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    foodImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default ToCount;
