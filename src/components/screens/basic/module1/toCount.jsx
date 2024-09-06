import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, Modal, Image } from 'react-native';
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
    { numeroDePosicion: "1", kichwa: "shukniki", spanish: "primero" },
    { numeroDePosicion: "2", kichwa: "ishkayniki", spanish: "segundo" },
    { numeroDePosicion: "3", kichwa: "kimsaniki", spanish: "tercero" },
    { numeroDePosicion: "4", kichwa: "chuskuniki", spanish: "cuarto" },
    { numeroDePosicion: "5", kichwa: "pichkaniki", spanish: "quinto" },
    { numeroDePosicion: "6", kichwa: "suktaniki", spanish: "sexto" },
    { numeroDePosicion: "7", kichwa: "kanchisniki", spanish: "séptimo" },
    { numeroDePosicion: "8", kichwa: "pusakniki", spanish: "octavo" },
    { numeroDePosicion: "9", kichwa: "iskunniki", spanish: "noveno" },
    { numeroDePosicion: "10", kichwa: "chunkaniki", spanish: "décimo" },
    { numeroDePosicion: "11", kichwa: "chunka shukniki", spanish: "undécimo" },
    { numeroDePosicion: "12", kichwa: "chunka ishkayniki", spanish: "duodécimo" },
    { numeroDePosicion: "13", kichwa: "chunka kimsaniki", spanish: "decimotercero" },
    { numeroDePosicion: "14", kichwa: "chunka chuskuniki", spanish: "decimocuarto" },
    { numeroDePosicion: "15", kichwa: "chunka pichkaniki", spanish: "decimoquinto" },
    { numeroDePosicion: "16", kichwa: "chunka suktaniki", spanish: "decimosexto" },
    { numeroDePosicion: "17", kichwa: "chunka kanchisniki", spanish: "decimoséptimo" },
    { numeroDePosicion: "18", kichwa: "chunka pusakniki", spanish: "decimoctavo" },
    { numeroDePosicion: "19", kichwa: "chunka iskunniki", spanish: "decimonoveno" },
    { numeroDePosicion: "20", kichwa: "ishkay chunkaniki", spanish: "vigésimo" }
];

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
                    <CardDefault title="Números Ordinales en Kichwa">
                        <Text style={styles.cardContent}>Aprende los ordinales números en Kichwa y su correspondencia en español.</Text>
                    </CardDefault>
                </View>
                <View style={styles.footer}>
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('Game1BasicModule1')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default ToCount;