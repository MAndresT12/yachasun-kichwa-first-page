import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableWithoutFeedback, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../../styles/globalStyles';
import { imageStyles } from '../../../../../styles/imageStyles';
import { buttonStyles } from '../../../../../styles/buttonStyles';
import { CardDefault } from '../../../ui/cards/CardDefault';
import { ButtonDefault } from '../../../ui/buttons/ButtonDefault';
import { ImageContainer } from '../../../ui/imageContainers/ImageContainer';

const first_number_data = [
    { number: "0", kichwa: "illak", spanish: "cero", image: "https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_720/images.spreaker.com/original/4c54be622210597c75a2225670ba9116.jpg" },
    { number: "1", kichwa: "shuk", spanish: "uno", image: "https://images.squarespace-cdn.com/content/v1/54642373e4b024e8934bf4f4/8c711e5f-367a-43a8-8d43-ef18a3a04508/the+citadel.jpg" },
    { number: "2", kichwa: "ishkay", spanish: "dos", image: "https://png.pngtree.com/png-vector/20210823/ourlarge/pngtree-number-two-cartoon-cute-face-png-image_3825153.jpg" },
    { number: "3", kichwa: "kimsa", spanish: "tres", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "4", kichwa: "chusku", spanish: "cuatro", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "5", kichwa: "pichka", spanish: "cinco", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "6", kichwa: "sukta", spanish: "seis", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "7", kichwa: "kanchis", spanish: "siete", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "8", kichwa: "pusak", spanish: "ocho", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "9", kichwa: "iskun", spanish: "nueve", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "10", kichwa: "chunka", spanish: "diez", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "11", kichwa: "chunka shuk", spanish: "once", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "12", kichwa: "chunka ishkay", spanish: "doce", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "13", kichwa: "chunka kimsa", spanish: "trece", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "14", kichwa: "chunka chusku", spanish: "catorce", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "15", kichwa: "chunka pichka", spanish: "quince", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "16", kichwa: "chunka sukta", spanish: "dieciséis", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "17", kichwa: "chunka kanchis", spanish: "diecisiete", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "18", kichwa: "chunka pusak", spanish: "dieciocho", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "19", kichwa: "chunka iskun", spanish: "diecinueve", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "20", kichwa: "ishkay chunka", spanish: "veinte", image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "30", kichwa: "kimsa chunka", spanish: "treinta" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "40", kichwa: "chusku chunka", spanish: "cuarenta" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "50", kichwa: "pichka chunka", spanish: "cincuenta" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "60", kichwa: "sukta chunka", spanish: "sesenta" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "70", kichwa: "kanchis chunka", spanish: "setenta" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "80", kichwa: "pusak chunka", spanish: "ochenta" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "90", kichwa: "iskun chunka", spanish: "noventa" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "100", kichwa: "patsak", spanish: "cien" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "101", kichwa: "patsak shuk", spanish: "ciento uno" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "102", kichwa: "patsak ishkay", spanish: "ciento dos" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "103", kichwa: "patsak kimsa", spanish: "ciento tres" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "110", kichwa: "patsak chunka", spanish: "ciento diez" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "120", kichwa: "patsak ishkay chunka", spanish: "ciento veinte" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "130", kichwa: "patsak kimsa chunka", spanish: "ciento treinta" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "140", kichwa: "patsak chusku chunka", spanish: "ciento cuarenta" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "150", kichwa: "patsak pichka chunka", spanish: "ciento cincuenta" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "160", kichwa: "patsak sukta chunka", spanish: "ciento sesenta" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "170", kichwa: "patsak kanchis chunka", spanish: "ciento setenta" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "180", kichwa: "patsak pusak chunka", spanish: "ciento ochenta" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "190", kichwa: "patsak iskun chunka", spanish: "ciento noventa" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "200", kichwa: "ishkay patsak", spanish: "doscientos" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "300", kichwa: "kimsa patsak", spanish: "trescientos" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "400", kichwa: "chusku patsak", spanish: "cuatrocientos" , image: "https://i.redd.it/xsefg7scrbw61.png" },
    { number: "500", kichwa: "pichka patsak", spanish: "quinientos" , image: "https://i.redd.it/xsefg7scrbw61.png" },
]

const FirstNumbers = () => {
    const navigation = useNavigation();
    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        setCounter((prevCounter) => (prevCounter + 1) % first_number_data.length);
    };

    const handleDecrease = () => {
        setCounter((prevCounter) => (prevCounter - 1 + first_number_data.length) % first_number_data.length);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#5B4D28" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Puntos⭐ Vidas ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Los primeros números</Text>
                </View>
                <View style={styles.body}>
                    <CardDefault title="Primeros Números en Kichwa">
                        <Text style={styles.cardContent}>Aprende los primeros números en Kichwa y su correspondencia en español. Usa los botones de más y menos para navegar entre los números</Text>
                    </CardDefault>
                    <Text style={styles.title}>Número Actual:</Text>
                    <ImageContainer uri={first_number_data[counter].image} />
                    <Text style={styles.title}>{first_number_data[counter].number} (temporal, poner demas fotos)</Text>
                    <View>
                        <Text style={styles.spanishText}>Español: {first_number_data[counter].spanish}</Text>
                    </View>
                    <View>
                        <Text style={styles.kichwaText}>Kichwa: {first_number_data[counter].kichwa}</Text>
                    </View>
                    <View style={styles.row}>
                        <ButtonDefault onPress={handleDecrease} styleButton={buttonStyles.buttonFirstNumbers} showLabel={false}>
                            <ImageContainer uri="https://static.vecteezy.com/system/resources/previews/011/912/005/original/minus-sign-icon-free-png.png" style={imageStyles.iconImage} />
                        </ButtonDefault>
                        <ButtonDefault onPress={handleIncrease} styleButton={buttonStyles.buttonFirstNumbers} showLabel={false}>
                            <ImageContainer uri="https://static.vecteezy.com/system/resources/previews/011/912/003/non_2x/plus-sign-icon-free-png.png" style={imageStyles.iconImage} />
                        </ButtonDefault>
                    </View>
                </View>
                <View style={styles.footer}>
                    <ButtonDefault label="Siguiente" onPress={() => navigation.navigate('Colors')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default FirstNumbers;