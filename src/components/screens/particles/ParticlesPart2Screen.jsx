import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CardDefault } from '../../ui/cards/CardDefault';
import { styles } from '../../../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';

const particlesPart2Data = {
    progress: 0.75,
    level: "intermedio",
    cards: [
        {
            title: "-manta",
            description: "La partícula -manta indica origen o procedencia, iniciación de tiempo, o inicio de lugar. También es causativo, indicando el motivo, causa o razón de algo, y puede significar por o a causa de.",
            examples: [
                { kichwa: "San Pablo Urku llaktamanta", spanish: "de San Pablo Urku" },
                { kichwa: "Ñukaka chay urkumantami kani", spanish: "yo soy de ese cerro" },
                { kichwa: "Kunanmanta", spanish: "desde ahora" },
                { kichwa: "Ñukamanta", spanish: "por mí" }
            ]
        },
        {
            title: "-kaman",
            description: "La partícula -kaman indica límite de lugar, tiempo o acción.",
            examples: [
                { kichwa: "Ñukaka washakamankami rini", spanish: "yo voy hasta atrás" },
                { kichwa: "Ñukaka kayakamammi shamusha", spanish: "vendré mañana" },
                { kichwa: "Antawa shamunkakaman shuyasha", spanish: "hasta que venga el carro esperaré" }
            ]
        },
        {
            title: "-wan",
            description: "La partícula -wan indica compañía, y va con sujetos personales.",
            examples: [
                { kichwa: "Ñukapa mamawanmi shamurkani", spanish: "Yo vine con mi mamá" },
                { kichwa: "Miswanchu pukllarkanki", spanish: "¿Jugaste con el gato?" },
                { kichwa: "Ari, ñukami shamurka", spanish: "Sí, yo vine" },
                { kichwa: "Mana, ñukaka mana shamurkachu", spanish: "No, yo no vine" }
            ]
        }
    ]
};

// Renderizar ejemplos
const renderExamples = (examples) => {
    return examples.map((example, index) => (
        <View key={index} style={localStyles.exampleBox}>
            <Text style={localStyles.exampleText}>{example.kichwa}</Text>
            <Text style={localStyles.arrow}>→</Text>
            <Text style={localStyles.exampleText}>{example.spanish}</Text>
        </View>
    ));
};

const ParticlesPart2Screen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={particlesPart2Data.progress} level={particlesPart2Data.level} />
                </View>

                <View style={styles.body}>
                    {particlesPart2Data.cards.map((card, index) => (
                        <CardDefault key={index} title={card.title}>
                            <Text style={localStyles.text}>{card.description}</Text>
                            {renderExamples(card.examples)}
                        </CardDefault>
                    ))}
                </View>

                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('ParticlesPart3'); }}>
                        <View style={styles.buttonDefault}>
                            <Text style={styles.buttonText}>Siguiente</Text>
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
