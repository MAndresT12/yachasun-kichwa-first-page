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
    { numberPosition: "1", kichwa: "shukniki", spanish: "primero" },
    { numberPosition: "2", kichwa: "ishkayniki", spanish: "segundo" },
    { numberPosition: "3", kichwa: "kimsaniki", spanish: "tercero" },
    { numberPosition: "4", kichwa: "chuskuniki", spanish: "cuarto" },
    { numberPosition: "5", kichwa: "pichkaniki", spanish: "quinto" },
    { numberPosition: "6", kichwa: "suktaniki", spanish: "sexto" },
    { numberPosition: "7", kichwa: "kanchisniki", spanish: "séptimo" },
    { numberPosition: "8", kichwa: "pusakniki", spanish: "octavo" },
    { numberPosition: "9", kichwa: "iskunniki", spanish: "noveno" },
    { numberPosition: "10", kichwa: "chunkaniki", spanish: "décimo" },
    { numberPosition: "11", kichwa: "chunka shukniki", spanish: "undécimo" },
    { numberPosition: "12", kichwa: "chunka ishkayniki", spanish: "duodécimo" },
    { numberPosition: "13", kichwa: "chunka kimsaniki", spanish: "decimotercero" },
    { numberPosition: "14", kichwa: "chunka chuskuniki", spanish: "decimocuarto" },
    { numberPosition: "15", kichwa: "chunka pichkaniki", spanish: "decimoquinto" },
    { numberPosition: "16", kichwa: "chunka suktaniki", spanish: "decimosexto" },
    { numberPosition: "17", kichwa: "chunka kanchisniki", spanish: "decimoséptimo" },
    { numberPosition: "18", kichwa: "chunka pusakniki", spanish: "decimoctavo" },
    { numberPosition: "19", kichwa: "chunka iskunniki", spanish: "decimonoveno" },
    { numberPosition: "20", kichwa: "ishkay chunkaniki", spanish: "vigésimo" }
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
                    <CardDefault title="¿Cómo se hace?" content="Para crear los números ordinales en kichwa, añadimos -niki al número normal según su posición."/>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Números Ordinales en Kichwa">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Posición</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
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
