// src/components/FoodScreen.jsx
import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../styles/globalStyles';
import { CardDefault } from '../../ui/cards/CardDefault';
import { ButtonDefault } from '../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../ui/imageContainers/ImageContainer';
import { FontAwesome } from '@expo/vector-icons';
import { FloatingHumu } from '../../animations/FloatingHumu';
import { ComicBubble } from '../../ui/bubbles/ComicBubble';
import ProgressCircleWithTrophies from '../../headers/ProgressCircleWithTophies';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonLevelsInicio } from '../../ui/buttons/ButtonLevelsInicio';
import { AccordionDefault } from '../../ui/buttons/AccordionDefault';
import AsyncStorage from '@react-native-async-storage/async-storage';

const foodData = [
    { kichwa: "tutamanta mikuna", spanish: "desayuno", image: "https://img.freepik.com/vector-premium/dibujos-animados-delicioso-desayuno-sabroso_24640-53952.jpg?w=1060" },
    { kichwa: "chawpi puncha mikuna", spanish: "almuerzo", image: "https://i.pinimg.com/originals/fa/23/de/fa23deb5bc1d50dbbc1d91f97283f8b4.jpg" },
    { kichwa: "chishimanta mikuna", spanish: "merienda/cena", image: "https://img.freepik.com/vector-gratis/ilustraciones-comida-kawaii-dibujadas-mano_23-2149415600.jpg" },
    { kichwa: "aycha", spanish: "carne", image: "https://static.vecteezy.com/system/resources/previews/014/296/829/non_2x/steak-food-icon-cartoon-pork-meat-vector.jpg" },
    { kichwa: "sara", spanish: "maíz", image: "https://img.freepik.com/vector-premium/granos-maiz-crudo-semillas-maiz-amarillo-dibujos-animados_81894-6429.jpg" },
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
    { kichwa: "inchik", spanish: "maní", image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-vegetales-mani-ilustracion-icono-vector-dibujos-animados-premium-icono-objeto-comida_138676-6550.jpg" },
    { kichwa: "chukllu", spanish: "choclo", image: "https://w7.pngwing.com/pngs/811/809/png-transparent-corn-on-the-cob-maize-cartoon-painted-yellow-corn-watercolor-painting-cartoon-character-food.png" },
    { kichwa: "kinuwa", spanish: "quinua", image: "https://cheforopeza.com.mx/wp-content/uploads/2017/08/la-magia-de-la-quinua-de-los-andes-para-el-mundo_blog_chef-oropeza.jpg" },
    { kichwa: "lumu", spanish: "yuca", image: "https://i.pinimg.com/736x/b7/77/e6/b777e62953440fb7824f8d1002181899.jpg" },
    { kichwa: "tawri", spanish: "chocho", image: "https://www.tvperu.gob.pe/sites/default/files/styles/note/public/tarwi.jpg?itok=ft8xS3Jq" },
    { kichwa: "wiru", spanish: "caña", image: "https://i.pinimg.com/originals/e8/4b/d9/e84bd927bd8b7a12f730ce21efa9a38e.jpg" },
    { kichwa: "uchu", spanish: "ají", image: "https://w1.pngwing.com/pngs/164/164/png-transparent-vegetable-chili-pepper-bell-pepper-black-pepper-tabasco-pepper-sweet-and-chili-peppers-food-fruit.png" },
];

const curiosity_data = [
    {
        key: '1',
        title: 'Curiosidades - El maíz...',
        text: 'En la serranía ecuatoriana la fuente principal de nutrición es el maíz. Considerado como un regalo de Dios, con este alimento se pueden preparar sopas, panes, dulces y bebidas, como por ejemplo, la chica.',
        imagePath: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png',
    },
    {
        key: '2',
        title: 'Curiosidades - La chicha...',
        text: 'La chicha es una bebida tradicional de la cultura indígena elaborada con maíz. En el pasado el chicha era utilizada para la celebración de rituales importantes',
        imagePath: 'https://storage.googleapis.com/yachasun_kichwa_assets/assets/images/humu/humu-talking.png',
    },
];

const FlipCard = ({ item }) => {
    const [flipped, setFlipped] = useState(false);
    const rotateY = useSharedValue(0);

    const animatedStyleFront = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value}deg` }],
    }));

    const animatedStyleBack = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value + 180}deg` }],
    }));

    const handleFlip = () => {
        rotateY.value = withTiming(flipped ? 0 : 180, { duration: 300 });
        setFlipped(!flipped);
    };

    return (
        <TouchableWithoutFeedback onPress={handleFlip}>
            <View style={styles.flipCard}>
                <Animated.View style={[styles.flipCardInner, styles.flipCardFront, animatedStyleFront]}>
                    <ImageContainer uri={item.image} style={styles.imageCards} />
                </Animated.View>
                <Animated.View style={[styles.flipCardInner, styles.flipCardBack, animatedStyleBack]}>
                    <Text style={styles.translationLabel}>Español:</Text>
                    <Text style={styles.spanishText}>{item.spanish}</Text>
                    <Text style={styles.translationLabel}>Kichwa:</Text>
                    <Text style={styles.kichwaText}>{item.kichwa}</Text>

                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const FoodScreen = () => {
    const [progress, setProgress] = useState(0);
    const trofeoKeys = [
        'trofeo_modulo1_intermedio',
        'trofeo_modulo2_intermedio',
        'trofeo_modulo3_intermedio',
        'trofeo_modulo4_intermedio',
        'trofeo_modulo5_intermedio',
        'trofeo_modulo6_intermedio',
    ];
    // Función para cargar el estado de los trofeos desde AsyncStorage
    const loadTrophyProgress = async () => {
        let obtainedCount = 0;

        // Verificamos cuántos trofeos están desbloqueados
        for (const key of trofeoKeys) {
            const obtained = await AsyncStorage.getItem(key);
            if (obtained === 'true') {
                obtainedCount++;
            }
        }

        // Actualizamos el progreso basado en el número de trofeos obtenidos
        setProgress(obtainedCount / trofeoKeys.length); // Calcula el progreso como una fracción
    };

    // Cada vez que la pantalla de CaminoLevelsScreen gana foco, recargar el progreso de trofeos
    useFocusEffect(
        React.useCallback(() => {
            loadTrophyProgress();
        }, [])
    ); const [showHelp, setShowHelp] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isNextLevelUnlocked, setIsNextLevelUnlocked] = useState(false);

    const toggleAccordion = (key) => {
        if (activeAccordion === key) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(key);
        }
    };
    const navigation = useNavigation();

    const toggleHelpModal = () => {
        setShowHelp(!showHelp);
    };
    // Función para marcar el nivel como completado y desbloquear el siguiente
    const completeLevel = async () => {
        try {
            await AsyncStorage.setItem('level_Animals_completed', 'true');
            setIsNextLevelUnlocked(true);
        } catch (error) {
            console.log('Error guardando el progreso', error);
        }
    };

    return (
        <LinearGradient
            colors={['#e9cb60', '#F38181']}

        >
            <StatusBar barStyle="default" backgroundColor="#003366" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <ProgressCircleWithTrophies progress={progress} level="intermedio" />
                </View>
                <View style={styles.questionIconContainer}>
                    <TouchableOpacity onPress={toggleHelpModal}>
                        <FontAwesome name="question-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Alimentos en Kichwa">
                        <Text style={styles.cardContent}>
                            Hoy aprenderemos sobre los alimentos en Kichwa.{"\n\n"}
                            ¡Prepárate para descubrir el delicioso mundo de la comida en Kichwa!
                        </Text>
                    </CardDefault>
                    <View style={styles.gridContainer}>
                        {foodData.map((item, index) => (
                            <FlipCard key={index} item={item} />
                        ))}
                    </View>
                    {curiosity_data.map((item) => (
                        <AccordionDefault
                            key={item.key}
                            title={item.title}
                            isOpen={activeAccordion === item.key}
                            onPress={() => toggleAccordion(item.key)}
                        >
                            <View style={styles.curiositiesContent}>
                                <FloatingHumu >
                                    <ImageContainer uri={item.imagePath} style={styles.imageModal} />
                                </FloatingHumu>
                                <ComicBubble
                                    text={item.text}
                                    arrowDirection="left"
                                />
                            </View>
                        </AccordionDefault>
                    ))}
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
                                    <FloatingHumu>
                                        <ImageContainer path={require('../../../../assets/images/humu/humu-talking.png')} style={styles.imageModalHelp} />
                                    </FloatingHumu>
                                    <ComicBubble
                                        text="Presiona en las tarjetas de comida para ver su traducción y nombre en Kichwa."
                                        arrowDirection="left"
                                    />
                                </View>
                                <View style={styles.buttonContainerAlphabet}>
                                    <TouchableOpacity onPress={toggleHelpModal}>
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

                    <ButtonDefault label="Siguiente" onPress={() => {
                        completeLevel();
                        navigation.navigate('Animals');
                    }} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default FoodScreen;
