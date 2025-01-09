import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../../../styles/globalStyles';
import { buttonStyles } from '../../../styles/buttonStyles';
import { cardStyles } from '../../../styles/cardStyles';

import { FloatingHumu } from '../animations/FloatingHumu';

import { CardDefault } from '../ui/cards/CardDefault';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';
import { ImageContainer } from '../ui/imageContainers/ImageContainer';

const HistoryScreen = () => {
  const navigation = useNavigation();

  const handleHomeScreen = () => {
    navigation.navigate('Levels');
  };

  return (
    <LinearGradient
      colors={['#e9cb60', '#F38181']}
      style={[localStyles.gradientBackground, styles.container, localStyles.loginContainer]}
    >
      <ScrollView style={styles.scrollView}>
        <View style={cardStyles.cardContainer}>

          <FloatingHumu initialValue={10}>
            <ImageContainer path={require('../../../assets/images/humu/humu-talking.png')} />
          </FloatingHumu>

          <CardDefault title="Pequeño aventurero..." style={cardStyles.instructionsCardStyle} >
            <Text style={styles.cardContent}>
              Yo soy Humu, ¡el mejor hablante del Kichwa que ha existido! Y que nadie te diga lo contrario, mi amigo.
              Estoy aquí para ayudarte a aprender este idioma tan hermoso y lleno de historia. Si aún no te has dado cuenta,
              soy una máscara del diablo huma, un personaje muy conocido en varias festividades del Ecuador.{'\n\n'}

              Aunque yo soy la máscara más especial de entre todas las demás, ¡lo juro!{'\n\n'}

              No te mentiré, compañero, tenemos una misión muy grande frente a nosotros, pero juntos lo lograremos.
              Yo estaré contigo en cada paso del camino, así que no te preocupes, ¡estamos en esto juntos!{'\n\n'}

              Seré tu guía personal y te enseñaré todo lo que sé para que algún día seas "casi" tan bueno como yo.
            </Text>
          </CardDefault>

          <FloatingHumu initialValue={10}>
            <ImageContainer path={require('../../../assets/images/humu/humu-fuckup.png')} />
          </FloatingHumu>

          <CardDefault title="Un poco de historia" style={cardStyles.instructionsCardStyle} >
            <Text style={styles.cardContent}>
              Antes de comenzar, quiero comentarte acerca de qué es el Kichwa. Este idioma se ha hablado en Ecuador durante cientos de años.
              Es muy antiguo, mi aventurero intrépido. También es una lengua cercana al Quechua, la cual fue extendida por el imperio Inca
              hace ya siglos.{'\n\n'}

              Ahora es hablado por más de 2 millones de personas en Ecuador, Perú y Colombia, en especial en la región de los Andes
              por la gente indígena. Se lo reconoce como lengua oficial en Ecuador y es una de las lenguas más habladas en el país.
              Este idioma tiene mucha cultura y tradición, y es por eso que es importante que lo aprendamos juntos y preservemos
              este pasado tan rico.
            </Text>
          </CardDefault>

          <CardDefault title="¡Prepárate!" style={cardStyles.instructionsCardStyle} >
            <Text style={styles.cardContent}>
              ¿Listo para comenzar esta aventura? ¡Vamos a jugar y aprender Kichwa!
            </Text>
          </CardDefault>
        </View>

        <View style={buttonStyles.buttonContainerSpaceAround}>
          <ButtonDefault label="¡A comenzar nuestra aventura!" onPress={handleHomeScreen} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  instructionsText: {
    fontSize: 18,
    marginRight: 10,
    paddingRight: 105,
    paddingLeft: 10,
  },
  imageContainer: {
    overflow: 'visible',
  },
  image: {
    width: 500,
    height: 500,
    position: 'absolute',
    right: -425,
    top: -500,
    zIndex: -1
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5B4D28',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  floatingHumuBoxLeft: {
    width: '100%', // Full width for the box
    padding: 10,   // Padding around the content
    alignItems: 'flex-start', // Align everything inside to the left
  },
  floatingHumuBoxRight: {
    width: '100%', // Full width for the box
    padding: 10,   // Padding around the content
    alignItems: 'flex-end', // Align everything inside to the right
  },
});

export default HistoryScreen;
