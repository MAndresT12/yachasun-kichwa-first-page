// src/components/AnimalsScreen.jsx

import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../styles/globalStyles'
import { useNavigation } from '@react-navigation/native';

import { Card } from './Card';

const animalsData = [
    { kichwa: "allku", castellano: "perro", image: "https://img.freepik.com/vector-premium/lindo-vector-caricatura-perro-cachorro-sabueso_549857-8253.jpg?w=360" },
    { kichwa: "misi", castellano: "gato", image: "https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg?size=338&ext=jpg&ga=GA1.1.34264412.1717545600&semt=ais_user" },
    { kichwa: "atallpa", castellano: "gallina", image: "https://st2.depositphotos.com/1967477/8228/v/450/depositphotos_82289790-stock-illustration-chicken-hen-waving-hand.jpg" },
    { kichwa: "kulta", castellano: "pato", image: "https://img.freepik.com/vector-premium/pato-dibujos-animados-lindo_160606-389.jpg" },
    { kichwa: "kuy", castellano: "cuy", image: "https://st5.depositphotos.com/11953928/65218/v/450/depositphotos_652183978-stock-illustration-fluffy-rodent-hamster-sitting-icon.jpg" },
    { kichwa: "kuchi", castellano: "chancho", image: "https://img.freepik.com/vector-premium/cerdo-feliz-dibujos-animados-aislado-sobre-fondo-blanco_29190-2671.jpg" },
    { kichwa: "ukucha", castellano: "ratón", image: "https://img.freepik.com/vector-gratis/lindo-ratoncito-personaje-dibujos-animados-orejas-grandes_1308-133011.jpg" },
    { kichwa: "piki", castellano: "pulga", image: "https://st.depositphotos.com/1967477/3507/v/450/depositphotos_35078763-stock-illustration-flea-cartoon.jpg" },
    { kichwa: "wallinku", castellano: "conejo", image: "https://img.freepik.com/vector-premium/conejo-feliz-dibujos-animados-zanahoria_29190-8319.jpg" },
    { kichwa: "atuk", castellano: "lobo", image: "https://img.freepik.com/vector-premium/ilustracion-animal-dibujos-animados-lobo-pequeno_7814-728.jpg" },
    { kichwa: "añas", castellano: "zorrillo", image: "https://img.freepik.com/vector-premium/cute-dibujos-animados-zorrillo-sentado_188253-2809.jpg" },
    { kichwa: "kushillu", castellano: "mono", image: "https://st2.depositphotos.com/2945617/9575/v/450/depositphotos_95757354-stock-illustration-cute-monkey-waving.jpg" },
    { kichwa: "amaru", castellano: "culebra", image: "https://img.freepik.com/vector-premium/serpiente-dibujos-animados-posando-sacando-lengua_70172-1205.jpg" },
    { kichwa: "runa llama", castellano: "llama", image: "https://img.freepik.com/vector-premium/llama-divertida-dibujos-animados-sobre-fondo-blanco_29190-6865.jpg?w=360" },
    { kichwa: "chantazu, ushu", castellano: "burro", image: "https://img.freepik.com/vector-premium/burro-feliz-dibujos-animados_33070-2828.jpg" },
    { kichwa: "llama", castellano: "oveja", image: "https://img.freepik.com/vector-gratis/ilustracion-ovejas-dibujos-animados-dibujados-mano_23-2150375976.jpg?size=338&ext=jpg&ga=GA1.1.933601817.1717545600&semt=ais_user" },
    { kichwa: "apyu", castellano: "caballo", image: "https://us.123rf.com/450wm/zzn/zzn2307/zzn230700371/208804762-lindo-caballo-de-dibujos-animados-personaje-equino-juguet%C3%B3n-ilustraci%C3%B3n-vectorial-para-ni%C3%B1os-y.jpg" },
    { kichwa: "wakra", castellano: "ganado", image: "https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-ganado_1465-201.jpg" },
    { kichwa: "añanku", castellano: "hormiga", image: "https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-hormigas-flor-azul-sobre-fondo-blanco_1308-44198.jpg" },
    { kichwa: "challwa", castellano: "pez", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-pez-payaso_23-2150683251.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1717545600&semt=ais_user" },
    { kichwa: "chuspi", castellano: "mosca", image: "https://img.freepik.com/vector-gratis/mosca-domestica-sobre-fondo-blanco_1308-81423.jpg" },
    { kichwa: "katsu", castellano: "escarabajo", image: "https://static.vecteezy.com/system/resources/previews/006/581/234/non_2x/a-dung-beetle-cartoon-character-free-vector.jpg" },
    { kichwa: "kuru", castellano: "gusano", image: "https://img.freepik.com/vector-gratis/ilustracion-vector-dibujos-animados-lindo-oruga_96037-427.jpg" },
    { kichwa: "puma", castellano: "puma", image: "https://img.freepik.com/vector-premium/puma-animal-coloreado-caricatura-ilustracion_576561-4533.jpg" },
    { kichwa: "yawati", castellano: "tortuga", image: "https://img.freepik.com/vector-premium/tortuga-dibujos-animados-lindo_29190-3852.jpg?w=360" },
    { kichwa: "uru", castellano: "araña", image: "https://img.freepik.com/vector-gratis/ilustracion-arana-dibujos-animados-dibujados-mano_23-2150409558.jpg?size=338&ext=jpg&ga=GA1.1.933601817.1717545600&semt=ais_user" },
    { kichwa: "kuntur", castellano: "cóndor", image: "https://img.freepik.com/vector-premium/personaje-dibujos-animados-condor-o-buitre-sentado-rama_20412-530.jpg" },
    { kichwa: "pishku", castellano: "pájaro, ave", image: "https://illustoon.com/photo/2943.png" },
    { kichwa: "palun", castellano: "abeja", image: "https://img.freepik.com/vector-gratis/cute-bee-flying-cartoon-vector-icono-ilustracion-concepto-icono-naturaleza-animal-aislado-vector-premium_138676-6016.jpg?size=338&ext=jpg&ga=GA1.1.933601817.1717545600&semt=ais_user" },
    { kichwa: "mashu", castellano: "murciélago", image: "https://i.pinimg.com/564x/98/44/fb/9844fbf49ee8c4c765964294e77b713c.jpg" }
];


const renderAnimalRows = () => {
    return animalsData.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={localStyles.imageContainer}>
                <Image source={{ uri: item.image }} style={localStyles.animalImage} />
            </View>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.castellano}</Text>
        </View>
    ));
};

const AnimalsScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Los Animales</Text>
                </View>
                <View style={styles.body}>
                    <Card title="Vocabulario">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Castellano</Text>
                            </View>
                            {renderAnimalRows()}
                        </View>
                    </Card>
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Particles'); }}>
                        <View style={styles.footerButton}>
                            <Text style={styles.footerButtonText}>Siguiente</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </View>
    );
}

const localStyles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    animalImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default AnimalsScreen;
