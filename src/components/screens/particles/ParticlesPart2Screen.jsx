// src/components/ParticlesPart2Screen.jsx

import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Card } from '../../ui/Card';
import { styles } from '../../../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

const ParticlesPart2Screen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Las Partículas en Kichwa Parte 2</Text>
                </View>
                <View style={styles.body}>
                    <Card title="-manta">
                        <Text style={localStyles.text}>
                            La partícula <Text style={localStyles.highlight}>-manta</Text> indica origen o procedencia, iniciación de tiempo, o inicio de lugar. También es causativo, indicando el motivo, causa o razón de algo, y puede significar por o a causa de.
                        </Text>
                        <View style={localStyles.exampleContainer}>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>San Pablo Urku llaktamanta</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>de San Pablo Urku</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Ñukaka chay urkumantami kani</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>yo soy de ese cerro</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Kunanmanta</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>desde ahora</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Ñukamanta</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>por mí</Text>
                            </View>
                        </View>
                    </Card>
                    <Card title="-kaman">
                        <Text style={localStyles.text}>
                            La partícula <Text style={localStyles.highlight}>-kaman</Text> indica límite de lugar, tiempo o acción.
                        </Text>
                        <View style={localStyles.exampleContainer}>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Ñukaka washakamankami rini</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>yo voy hasta atrás</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Ñukaka kayakamammi shamusha</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>vendré mañana</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Antawa shamunkakaman shuyasha</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>hasta que venga el carro esperaré</Text>
                            </View>
                        </View>
                    </Card>
                    <Card title="-wan">
                        <Text style={localStyles.text}>
                            La partícula <Text style={localStyles.highlight}>-wan</Text> indica compañía, y va con sujetos personales.
                        </Text>
                        <View style={localStyles.exampleContainer}>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Ñukapa mamawanmi shamurkani</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>Yo vine con mi mamá</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Miswanchu pukllarkanki</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>¿Jugaste con el gato?</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Ari, ñukami shamurka</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>Sí, yo vine</Text>
                            </View>
                            <View style={localStyles.exampleBox}>
                                <Text style={localStyles.exampleText}>Mana, ñukaka mana shamurkachu</Text>
                                <Text style={localStyles.arrow}>→</Text>
                                <Text style={localStyles.exampleText}>No, yo no vine</Text>
                            </View>
                        </View>
                    </Card>
                </View>

                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('ParticlesPart3'); }}>
                        <View style={styles.footerButton}>
                            <Text style={styles.footerButtonText}>Siguiente</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </View>
    );
};

const localStyles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    highlight: {
        fontWeight: 'bold',
        color: '#5B4D28',
    },
    exampleContainer: {
        marginTop: 10,
    },
    exampleBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
    },
    exampleText: {
        fontSize: 16,
        flex: 1,
    },
    arrow: {
        fontSize: 20,
        marginHorizontal: 10,
    },
});

export default ParticlesPart2Screen;
