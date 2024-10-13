// src/components/LosVerbosScreen1.jsx

import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles'
import { CardDefault } from '../../ui/cards/CardDefault';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';

const verbData = [
    { kichwa: "killkakatina", spanish: "leer", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dia-mundial-libro_23-2148871666.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid" },
    { kichwa: "killkana", spanish: "escribir", image: "https://img.freepik.com/vector-gratis/etiqueta-engomada-personaje-dibujos-animados-nina-escribiendo-papel-blanco_1308-67895.jpg?semt=ais_hybrid" },
    { kichwa: "apamuna", spanish: "traer", image: "https://img.freepik.com/vector-gratis/ilustracion-personas-abrumadas-diseno-plano-dibujado-mano_23-2149338760.jpg?semt=ais_hybrid" },
    { kichwa: "apana", spanish: "llevar", image: "https://img.freepik.com/vector-gratis/hombre-feliz-corriendo-caja-carton_23-2147673754.jpg?semt=ais_hybrid" },
    { kichwa: "paskana", spanish: "abrir", image: "https://img.freepik.com/psd-gratis/representacion-3d-chica-afro-aula_23-2150915488.jpg?semt=ais_hybrid" },
    { kichwa: "purina", spanish: "caminar", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-caminantes-dibujados-mano_23-2150818427.jpg?semt=ais_hybrid" },
    { kichwa: "samana", spanish: "descansar", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-libros-lectura-verano_23-2149422809.jpg?semt=ais_hybrid" },
    { kichwa: "tikrana", spanish: "volver", image: "https://img.freepik.com/psd-gratis/representacion-3d-icono-carga-interfaz-usuario_23-2150838963.jpg?semt=ais_hybrid" },
    { kichwa: "upiyana", spanish: "beber", image: "https://img.freepik.com/vector-gratis/chica-diabetes-sedienta_1308-20243.jpg?semt=ais_hybrid" },
    { kichwa: "mikuna", spanish: "comer", image: "https://img.freepik.com/vector-gratis/nino-feliz-disfrutando-comida_1308-133338.jpg?semt=ais_hybrid" },
    { kichwa: "uyana", spanish: "oír", image: "https://img.freepik.com/vector-gratis/chica-auriculares-cancelacion-ruido_1308-52247.jpg?semt=ais_hybrid" },
    { kichwa: "yachakuna", spanish: "aprender", image: "https://img.freepik.com/foto-gratis/dibujos-animados-3d-vuelta-escuela_23-2151676610.jpg?semt=ais_hybrid" },
    { kichwa: "yanapana", spanish: "ayudar", image: "https://img.freepik.com/vector-gratis/ilustracion-plana-dia-mundial-humanitario-persona-que-ofrece-apoyo-nino_23-2149459773.jpg?semt=ais_hybrid" },
    { kichwa: "yupaychana", spanish: "agradecer", image: "https://img.freepik.com/vector-gratis/ilustracion-cumplido-dibujado-mano_23-2150161214.jpg?semt=ais_hybrid" },
    { kichwa: "yuyana", spanish: "pensar", image: "https://img.freepik.com/vector-gratis/chico-nerd-globo-discurso_1308-25312.jpg?semt=ais_hybrid" },
    { kichwa: "shuyuna", spanish: "dibujar", image: "https://img.freepik.com/vector-gratis/escritura-mano-contorno-joven-feliz_1308-49513.jpg?semt=ais_hybrid" },
    { kichwa: "kallarina", spanish: "empezar", image: "https://img.freepik.com/vector-gratis/ilustracion-linea-salida-diseno-plano_23-2149459875.jpg?semt=ais_hybrid" },
    { kichwa: "tukuchina", spanish: "terminar", image: "https://img.freepik.com/vector-gratis/personaje-mujer-negocios-3d_52683-3452.jpg?semt=ais_hybrid" },
    { kichwa: "napana", spanish: "saludar", image: "https://img.freepik.com/vector-gratis/jovenes-dando-cinco-alta_23-2148375159.jpg?semt=ais_hybrid" },
    { kichwa: "nina", spanish: "decir", image: "https://img.freepik.com/vector-gratis/hombre-negocios-gritando-megafono_23-2147511376.jpg?semt=ais_hybrid" },
    { kichwa: "rurana", spanish: "hacer/construir", image: "https://img.freepik.com/vector-gratis/plantilla-plana-construccion_23-2147735122.jpg?semt=ais_hybrid" },
    { kichwa: "shamuna", spanish: "venir", image: "https://img.freepik.com/vector-gratis/ilustracion-regreso-casa-dibujada-mano_23-2149397363.jpg?semt=ais_hybrid" },
    { kichwa: "llukshina", spanish: "salir/subir", image: "https://img.freepik.com/vector-gratis/hombre-subiendo-escaleras_1133-39.jpg?semt=ais_hybrid" },
    { kichwa: "chayana", spanish: "llegar", image: "https://img.freepik.com/psd-gratis/personaje-femenino-3d-llegando-linea-meta_23-2148938910.jpg?semt=ais_hybrid" },
    { kichwa: "tiyarina", spanish: "sentarse", image: "https://img.freepik.com/vector-gratis/chica-feliz-mirando-tablet_1308-107376.jpg?semt=ais_hybrid" },
    { kichwa: "tankana", spanish: "empujar", image: "https://img.freepik.com/vector-gratis/nino-empujando-algo-personaje-dibujos-animados_1308-73463.jpg?semt=ais_hybrid" },
    { kichwa: "yachana", spanish: "saber", image: "https://img.freepik.com/vector-gratis/joven-cientifico-inteligente_1308-82363.jpg?semt=ais_hybrid" },
    { kichwa: "riksina", spanish: "conocer", image: "https://img.freepik.com/foto-gratis/retrato-3d-ninos_23-2150793889.jpg?semt=ais_hybrid" },
    { kichwa: "churana", spanish: "poner", image: "https://previews.123rf.com/images/prettyvectors/prettyvectors1806/prettyvectors180600018/103127699-feliz-cartero-sonriente-car%C3%A1cter-de-poner-carta-en-la-caja-de-la-escritura-de-la-casa-concepto-de.jpg" },
    { kichwa: "rantina", spanish: "comprar", image: "https://previews.123rf.com/images/zhenyakot/zhenyakot1611/zhenyakot161100058/67739741-vector-ilustraci%C3%B3n-de-un-hombre-de-dibujos-animados-con-un-carrito-de-la-compra-lleno-de-comestibles.jpg" },
    { kichwa: "hatuna", spanish: "vender", image: "https://png.pngtree.com/png-clipart/20190906/original/pngtree-cartoon-summer-children-buy-popsicle-png-transparent-bottom-png-image_4563014.jpg" },
    { kichwa: "iñina", spanish: "creer", image: "https://davidmillan.co/wp-content/uploads/2021/06/la-importancia-de-creer-segun-la-psicologia.jpg" },
    { kichwa: "kuyana", spanish: "amar", image: "https://cdn-icons-png.flaticon.com/512/4576/4576136.png" },
    { kichwa: "munana", spanish: "querer", image: "https://cdn-icons-png.flaticon.com/512/12316/12316658.png" },
    { kichwa: "wañuna", spanish: "morir", image: "https://png.pngtree.com/png-vector/20200312/ourmid/pngtree-die-fish-icon-png-image_2158722.jpg" },

];

const renderVerbRows = () => {
    return verbData.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={localStyles.imageContainer}>
                <Image source={{ uri: item.image }} style={localStyles.verbImage} />
            </View>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const LosVerbosScreen1 = () => {
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

                <View style={styles.body}>
                    <CardDefault title="Vocabulario">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderVerbRows()}
                        </View>
                    </CardDefault>
                </View>
                <View style={styles.footer}>
                    <ButtonLevelsInicio label="Inicio" />

                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('LosVerbosConjugaciones1')} />

                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const localStyles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    verbImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
});

export default LosVerbosScreen1;
