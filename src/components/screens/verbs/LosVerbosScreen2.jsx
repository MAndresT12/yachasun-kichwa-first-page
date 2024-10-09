import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { ImageContainer } from '../../ui/imageContainers/ImageContainer';

const verbData = [
    { kichwa: "rina", spanish: "ir", image: "https://img.freepik.com/vector-gratis/personaje-dibujos-animados-simple-chico-activo_1308-101456.jpg?semt=ais_hybrid" },
    { kichwa: "tikrana", spanish: "regresar", image: "https://img.freepik.com/vector-gratis/ninos-cole-felices-saludando_23-2147906118.jpg?semt=ais_hybrid" },
    { kichwa: "chayana", spanish: "llegar", image: "https://img.freepik.com/psd-gratis/personaje-femenino-3d-llegando-linea-meta_23-2148938910.jpg?semt=ais_hybrid" },
    { kichwa: "llukshina", spanish: "salir", image: "https://img.freepik.com/vector-gratis/ilustracion-renuncia-dibujada-mano_23-2150336788.jpg?semt=ais_hybrid" },
    { kichwa: "shamuna", spanish: "venir", image: "https://img.freepik.com/vector-gratis/coleccion-estudiantes-universitarios_23-2148180058.jpg?semt=ais_hybrid" },
    { kichwa: "kallpana", spanish: "correr", image: "https://img.freepik.com/vector-gratis/etiqueta-engomada-personaje-dibujos-animados-nina-corriendo-sobre-fondo-blanco_1308-79976.jpg?semt=ais_hybrid" },
    { kichwa: "rimana", spanish: "hablar", image: "https://img.freepik.com/vector-gratis/gente-hablando-telefono_1308-25829.jpg?semt=ais_hybrid" },
    { kichwa: "tapuna", spanish: "preguntar", image: "https://img.freepik.com/vector-gratis/conjunto-personas-planas-organicas-haciendo-preguntas_23-2148914081.jpg?semt=ais_hybrid" },
    { kichwa: "pukllana", spanish: "jugar", image: "https://img.freepik.com/vector-gratis/set-dibujado-mano-ninos-colores-jugando_23-2147607325.jpg?semt=ais_hybrid" },
    { kichwa: "hamuktana", spanish: "comprender", image: "https://img.freepik.com/vector-gratis/ninos-jugando-ipad-bocadillo_1308-100969.jpg?semt=ais_hybrid" },
    { kichwa: "purina", spanish: "caminar", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-caminantes-dibujados-mano_23-2150818427.jpg?semt=ais_hybrid" },
    { kichwa: "rikuna", spanish: "ver, mirar", image: "https://img.freepik.com/foto-gratis/gente-cine-viendo-pelicula_23-2151005486.jpg?semt=ais_hybrid" },
    { kichwa: "shina", spanish: "hacer", image: "https://img.freepik.com/vector-gratis/concepto-taller-creativo-bricolaje_23-2148552121.jpg?semt=ais_hybrid" },
    { kichwa: "tarpuna", spanish: "sembrar", image: "https://img.freepik.com/vector-gratis/agricultor-plantando-pequena-planta-suelo-aislado_1308-135356.jpg?semt=ais_hybrid" },
    { kichwa: "kawsana", spanish: "vivir", image: "https://img.freepik.com/vector-gratis/dibujos-animados-nina-adolescente_24640-47180.jpg?semt=ais_hybrid" },
    { kichwa: "yachachina", spanish: "enseñar", image: "https://img.freepik.com/foto-gratis/vista-3d-macho-profesor_23-2150709996.jpg?semt=ais_hybrid" },
    { kichwa: "llamkana", spanish: "trabajar", image: "https://img.freepik.com/vector-gratis/hombre-negocios-trabajando-oficina_1012-335.jpg?semt=ais_hybrid" },
    { kichwa: "charina", spanish: "tener", image: "https://img.freepik.com/vector-gratis/ilustracion-regreso-casa-dibujada-mano_23-2149414633.jpg?semt=ais_hybrid" },
    { kichwa: "sakina", spanish: "dejar", image: "https://img.freepik.com/vector-gratis/juego-cornhole-diseno-plano-dibujado-mano_23-2149285963.jpg?semt=ais_hybrid" },
    { kichwa: "hapina", spanish: "coger", image: "https://img.freepik.com/vector-gratis/personaje-dibujos-animados-simple-chico-activo_1308-102577.jpg?semt=ais_hybrid" },
    { kichwa: "yanapana", spanish: "ayudar", image: "https://img.freepik.com/vector-gratis/ilustracion-plana-dia-mundial-humanitario-persona-que-ofrece-apoyo-nino_23-2149459773.jpg?semt=ais_hybrid" },
    { kichwa: "kayana", spanish: "llamar", image: "https://img.freepik.com/vector-gratis/hombre-negocios-gritando-megafono_23-2147511376.jpg?semt=ais_hybrid" },
    { kichwa: "rantina", spanish: "comprar", image: "https://img.freepik.com/vector-gratis/gente-dibujada-mano-plana-comprando-venta-ilustracion_23-2148829598.jpg?semt=ais_hybrid" },
    { kichwa: "mañana", spanish: "pedir", image: "https://img.freepik.com/vector-gratis/adolescente-recibiendo-consejos-cuidado-piel-amigo-solidario_1308-133764.jpg?semt=ais_hybrid" },
    { kichwa: "yanuna", spanish: "cocinar", image: "https://img.freepik.com/vector-gratis/etiqueta-engomada-personaje-dibujos-animados-chica-chef-cocinando_1308-63960.jpg?semt=ais_hybrid" },
    { kichwa: "karana", spanish: "dar", image: "https://img.freepik.com/vector-gratis/feliz-nino-nina-regalo_24908-59476.jpg?semt=ais_hybrid" },
];

const renderRows = () => {
    return verbData.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={localStyles.imageContainer}>
                <ImageContainer uri={item.image} style={localStyles.vocabImage} />
            </View>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const LosVerbosScreen2 = () => {
    const navigation = useNavigation();
    const progress = 0.75;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="intermedio" />
                </View>

                <View style={styles.body}>
                    <CardDefault title="Imachikkuna">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderRows()}
                        </View>
                    </CardDefault>
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('LosAdjetivos2'); }}>
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
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    vocabImage: {
        width: 50,
        height: 50,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default LosVerbosScreen2;
