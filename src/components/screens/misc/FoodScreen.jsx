// src/components/FoodScreen.jsx
import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../../../../styles/globalStyles';
import { Card } from '../../ui/Card';

const foodData = [
    { kichwa: "tutamanta mikuna", spanish: "desayuno", image: "https://img.freepik.com/vector-premium/dibujos-animados-delicioso-desayuno-sabroso_24640-53952.jpg?w=1060" },
    { kichwa: "chawpi puncha mikuna", spanish: "almuerzo", image: "https://i.pinimg.com/originals/fa/23/de/fa23deb5bc1d50dbbc1d91f97283f8b4.jpg" },
    { kichwa: "chishimanta mikuna", spanish: "merienda/cena", image: "https://img.freepik.com/vector-gratis/ilustraciones-comida-kawaii-dibujadas-mano_23-2149415600.jpg" },
    { kichwa: "aycha", spanish: "carne", image: "https://static.vecteezy.com/system/resources/previews/014/296/829/non_2x/steak-food-icon-cartoon-pork-meat-vector.jpg" },
    { kichwa: "kachi", spanish: "sal", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-sal-dibujada-mano_52683-131168.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716854400&semt=ais_user" },
    { kichwa: "haku", spanish: "harina", image: "https://cdn-icons-png.flaticon.com/512/817/817293.png" },
    { kichwa: "purutu", spanish: "fréjol", image: "https://img.freepik.com/vector-gratis/pegatina-frijoles-sobre-fondo-blanco_1308-63712.jpg" },
    { kichwa: "makinchu", spanish: "queso", image: "https://i.pinimg.com/736x/75/33/d3/7533d380bbc65467d4cc8dda42791ba2.jpg" },
    { kichwa: "mishki haku", spanish: "azúcar", image: "https://png.pngtree.com/png-clipart/20230913/original/pngtree-sugar-clipart-kawaii-jar-with-sugar-cartoon-vector-png-image_11058250.png" },
    { kichwa: "tanta", spanish: "pan", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-tostadas-dibujadas-mano_23-2150677031.jpg?size=338&ext=jpg&ga=GA1.1.933601817.1717286400&semt=ais_user" },
    { kichwa: "yaku wira", spanish: "aceite", image: "https://img.freepik.com/vector-premium/mascota-personaje-botella-aceite-cocina-fresco-tocando-guitarra-dibujos-animados-aislados-diseno-estilo-plano_574864-269.jpg" },
    { kichwa: "yaku", spanish: "agua", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-gota-agua_23-2150850805.jpg?size=338&ext=jpg&ga=GA1.1.933601817.1717286400&semt=ais_user" },
    { kichwa: "ñuñu", spanish: "leche", image: "https://previews.123rf.com/images/yupiramos/yupiramos1709/yupiramos170900142/85023374-ilustraci%C3%B3n-de-dibujos-animados-de-color-de-vaca-leche-cuadro-icono.jpg" },
    { kichwa: "chuchi aycha", spanish: "pollo", image: "https://img.freepik.com/vector-premium/cute-dibujos-animados-pollo_33070-3147.jpg" },
    { kichwa: "challwa", spanish: "pescado", image: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-pez-payaso_23-2150683251.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1717286400&semt=ais_user" },
    { kichwa: "papa", spanish: "papa", image: "https://e7.pngegg.com/pngimages/28/547/png-clipart-french-fries-potato-cartoon-potato-face-food.png" },
    { kichwa: "palta", spanish: "aguacate", image: "https://images.vexels.com/media/users/3/230816/isolated/preview/dc9e804e2b94a54b12f6984e56e14837-dibujos-animados-de-aguacate-feliz.png?w=360" },
    { kichwa: "sara", spanish: "maíz", image: "https://img.freepik.com/vector-premium/granos-maiz-crudo-semillas-maiz-amarillo-dibujos-animados_81894-6429.jpg" },
    { kichwa: "inchik", spanish: "maní", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-vegetales-mani-ilustracion-icono-vector-dibujos-animados-premium-icono-objeto-comida_138676-6550.jpg" },
    { kichwa: "chukllu", spanish: "choclo", image: "https://w7.pngwing.com/pngs/811/809/png-transparent-corn-on-the-cob-maize-cartoon-painted-yellow-corn-watercolor-painting-cartoon-character-food.png" },
    { kichwa: "kinuwa", spanish: "quinua", image: "https://cheforopeza.com.mx/wp-content/uploads/2017/08/la-magia-de-la-quinua-de-los-andes-para-el-mundo_blog_chef-oropeza.jpg" },
    { kichwa: "lumu", spanish: "yuca", image: "https://i.pinimg.com/736x/b7/77/e6/b777e62953440fb7824f8d1002181899.jpg" },
    { kichwa: "tawri", spanish: "chocho", image: "https://www.tvperu.gob.pe/sites/default/files/styles/note/public/tarwi.jpg?itok=ft8xS3Jq" },
    { kichwa: "wiru", spanish: "caña", image: "https://i.pinimg.com/originals/e8/4b/d9/e84bd927bd8b7a12f730ce21efa9a38e.jpg" },
    { kichwa: "uchu", spanish: "ají", image: "https://w1.pngwing.com/pngs/164/164/png-transparent-vegetable-chili-pepper-bell-pepper-black-pepper-tabasco-pepper-sweet-and-chili-peppers-food-fruit.png" },
];

const renderFoodRows = () => {
    return foodData.map((item, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={localStyles.imageContainer}>
                <Image source={{ uri: item.image }} style={localStyles.foodImage} />
            </View>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.kichwa}</Text>
            <Text style={[styles.tableCell, localStyles.textCenter]}>{item.spanish}</Text>
        </View>
    ));
};

const FoodScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Los Alimentos</Text>
                </View>
                <View style={styles.body}>
                    <Card title="Vocabulario">
                        <View style={styles.vocabularyTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderCell}>Imagen</Text>
                                <Text style={styles.tableHeaderCell}>Kichwa</Text>
                                <Text style={styles.tableHeaderCell}>Spanish</Text>
                            </View>
                            {renderFoodRows()}
                        </View>
                    </Card>
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Animals'); }}>
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

export default FoodScreen;
