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

const CreditsScreen = () => {
  const navigation = useNavigation();

  const handleHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <LinearGradient
      colors={['#e9cb60', '#F38181']}
      style={[localStyles.gradientBackground, styles.container, localStyles.loginContainer]}

    >
      <ScrollView style={styles.scrollView}>
        <View style={cardStyles.cardContainerInstructions}>

          <CardDefault title="Acerca de:" style={cardStyles.instructionsCardStyle} >
            <Text style={styles.cardContentCenter}>
              Este software es una aplicación móvil que tiene como objetivo enseñar el idioma kichwa a través de juegos y 
              actividades interactivas para un público infantil y preadolecente. Es un trabajo de fin de grado y se desarrollo
              con el objetivo de preservar esta lengua ancestral y poder expandir su uso por el Ecuador. 
            </Text>
          </CardDefault>
        </View>

        <View style={localStyles.floatingHumuBoxLeft}>
          <FloatingHumu initialValue={10}>
            <ImageContainer path={require('../../../assets/images/humu/humu-happy.png')} />
          </FloatingHumu>
        </View>

        <View style={cardStyles.cardContainerInstructions}>

          <CardDefault title="Desarrollado por:" style={cardStyles.instructionsCardStyle} >
            <Text style={styles.cardContentCenter}>
              Milton Heras y
            </Text>
            <Text style={styles.cardContentCenter}>
              Santiago León
            </Text>
          </CardDefault>
        </View>

        <View style={localStyles.floatingHumuBoxRight}>
          <FloatingHumu initialValue={10}>
            <ImageContainer path={require('../../../assets/images/humu/humu-fuckup.png')} />
          </FloatingHumu>
        </View>

        <View style={cardStyles.cardContainerInstructions}>

          <CardDefault title="Tutor:" style={cardStyles.instructionsCardStyle} >
            <Text style={styles.cardContentCenter}>
              PhD. Boris Astudillo
            </Text>
          </CardDefault>
        </View>

        <View style={localStyles.floatingHumuBoxLeft}>
          <FloatingHumu initialValue={10}>
            <ImageContainer path={require('../../../assets/images/humu/humu-talking.png')} />
          </FloatingHumu>
        </View>

        <View style={cardStyles.cardContainerInstructions}>

          <CardDefault title="Proyecto y Carrera:" style={cardStyles.instructionsCardStyle} >
            <Text style={styles.cardContentCenter}>
              Trabajo de Integración Curricular (TIC) de la carrera de Ingeniería de Software
            </Text>
          </CardDefault>
        </View>

        <View style={localStyles.floatingHumuBoxRight}>
          <FloatingHumu initialValue={10}>
            <ImageContainer path={require('../../../assets/images/humu/humu-disappointed.png')} />
          </FloatingHumu>
        </View>

        <View style={cardStyles.cardContainerInstructions}>

          <CardDefault title="Facultad e Institución:" style={cardStyles.instructionsCardStyle} >
            <Text style={styles.cardContentCenter}>
              Facultad de Ingeniería en Sistemas
            </Text>
            <Text style={styles.cardContentCenter}>
              Escuela Politécnica Nacional
            </Text>
          </CardDefault>
        </View>

        <View style={localStyles.floatingHumuBoxLeft}>
          <FloatingHumu initialValue={10}>
            <ImageContainer path={require('../../../assets/images/humu/humu-talking-question.png')} />
          </FloatingHumu>
        </View>

        <View style={cardStyles.cardContainerInstructions}>

          <CardDefault title="Bibliografía:" style={cardStyles.instructionsCardStyle} >
            <Text style={styles.cardContentCenter}>
              KICHWA.net - Curso de Kichwa:
            </Text>
            <Text
              style={[styles.cardContentCenter, { color: 'blue', textDecorationLine: 'underline' }]}
              onPress={() => Linking.openURL('https://libros.kichwa.net/books/curso-de-kichwa/')}
            >
              https://libros.kichwa.net/books/curso-de-kichwa/
            </Text>
          </CardDefault>
        </View>

        <View style={buttonStyles.buttonContainerSpaceAround}>
          <ButtonDefault label="Regresar" onPress={handleHomeScreen} />
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

export default CreditsScreen;
