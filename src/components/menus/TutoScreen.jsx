import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../../../styles/globalStyles';
import { buttonStyles } from '../../../styles/buttonStyles';
import { cardStyles } from '../../../styles/cardStyles';

import { FloatingHumu } from '../animations/FloatingHumu';

import { CardDefault } from '../ui/cards/CardDefault';
import { ImageContainer } from '../ui/imageContainers/ImageContainer';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';

const TutoScreen = () => {
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
        
        <CardDefault title="La aplicación y Humu:" >
          <Text style={styles.cardContentCenter}>
            Yachasun Kichwa es una aplicación para que puedas aprender Kichwa. Está dirigidas a niños y niñas como tú. 
            Queremos que juegues mientras aprendes del Kichwa. La aplicación está dividida en dos secciones: básica e
            intermedia. Cada sección tiene varios módulos y cada módulo tiene varios niveles. Al final de cada módulo
            tendrás la oportunidad de jugar varios juegos donde demostrarás tus grandes habilidades y además tendrás
            una pequeña lección que deberás completar para recibir un trofeo con una insignia y así poder avanzar al 
            siguiente módulo. ¡Diviértete aprendiendo Kichwa!
          </Text>
          <Text style={styles.cardContentCenter}>
            Humu es el mayor conocedor de Kichwa que ha existido. Él te guiará durante tu aventura por la 
            aplicación.
          </Text>
          <FloatingHumu initialValue={10}>
            <ImageContainer path={require('../../../assets/images/humu/humu-talking-question.png')} />
          </FloatingHumu>
        </CardDefault>

        <CardDefault title="Botones:" >
          <Text style={styles.cardContentCenter}>
            Los botones principales de la aplicación son de color café o azul y tienen un texto blanco. Para 
            interactuar con ellos, simplemente presiona sobre ellos.
          </Text>
          <View style={buttonStyles.buttonContainerSpaceAround}>
            <ButtonDefault label="Presiona aquí" />
          </View>
          <Text style={styles.cardContentCenter}>
            Los botones con un signo de interrogación son botones que dan información de cómo completar una lección, 
            módulo o juego. Dan información adicional.
          </Text>
          <ImageContainer path={require('../../../assets/icons/question-mark-help.png')} style={localStyles.iconContainer} />
          <Text style={styles.cardContentCenter}>
            Los botones circulares con íconos de cada sección (básica o intermedia) te permiten entrar a un nivel 
            (amarillos), juego (verdes) o lección (rojos).
          </Text>
          <ImageContainer path={require('../../../assets/icons/levels.png')} style={localStyles.iconContainer} />
        </CardDefault>

        <CardDefault title="Trofeos e insignias:" >
          <Text style={styles.cardContentCenter}>
            Cuando acabes tú primera lección te darás cuenta que desbloquearas más niveles e insignias como trofeos. Puedes 
            aplastar en estas insignias para ver un pequeña descripción. Cada lección desbloqueara una insignia. Es un 
            trofeo bien merecido una vez que lo logres. ¡Colecciona todas las insignias!
          </Text>
          <ImageContainer path={require('../../../assets/icons/insignia.png')} style={localStyles.iconContainerTrophies} />
          <Text style={styles.cardContentCenter}>
            El anillo de progreso muestra cuántas insignias haz completado y cuánto de un módulo haz terminado. 
            Puedes aplastar aquí para ver cuántas insignias tienes.
          </Text>
          <ImageContainer path={require('../../../assets/icons/trophies.png')} style={localStyles.iconContainerTrophies} />
          <Text style={styles.cardContentCenter}>
            El la sección de progreso en los botones de abajo (botón estrella) podrás ver el museo de insignias y admirar 
            tus logros.
          </Text>
          <ImageContainer path={require('../../../assets/icons/insignias-trofeos.png')} style={localStyles.iconContainerTrophies} />
        </CardDefault>

        <CardDefault title="Cartas:" >
          <Text style={styles.cardContentCenter}>
            Las cartas aparecen mucho en Yachasun Kichwa. Puedes presionar en ellas para darles la vuelta y aprender mucho.
            También en ocasiones las cartas no se darán la vuelta sino que mostrarán una nueva venta con muchas más cosas
            para aprender.
          </Text>
          <ImageContainer path={require('../../../assets/icons/card-mini.png')} style={localStyles.iconContainerCards} />
          <Text style={styles.cardContentCenter}>
            La carta grande es algo complicada. Es en realidad una doble carta. Puedes presionar en ella para darle la vuelta
            al igual que la carta pequeña, pero al hacer esto Humu aparecerá con una flecha hacia la derecha. lo que debes hacer
            es deslizar hacia la derecha a Humu para que puedas ver una segunda carta con más información.
          </Text>
          <ImageContainer path={require('../../../assets/icons/card-big.png')} style={localStyles.iconContainerCards} />
          <ImageContainer path={require('../../../assets/icons/card-big-turned.png')} style={localStyles.iconContainerCards} />
        </CardDefault>

        <CardDefault title="Acordión y Chat:" >
          <Text style={styles.cardContentCenter}>
            Te encontrarás casi siempre con un acordión al final de cada nivel. Este acordión te permitirá ver curiosidades 
            relacionadas con el tema que estés aprendiendo. Solo presiona en ellos para que Humu te cuente algo interesante.
          </Text>
          <ImageContainer path={require('../../../assets/icons/accordion.png')} style={localStyles.iconContainerAccordion} />
          <Text style={styles.cardContentCenter}>
            A veces, dentro de un nivel te encontrarás con un botón café que abrirá un chat con Humu. Puedes leer este chat
            para practicar y aprender.
          </Text>
          <ImageContainer path={require('../../../assets/icons/chat.png')} style={localStyles.iconContainerChat} />
        </CardDefault>

        <CardDefault title="Tablas:" >
          <Text style={styles.cardContentCenter}>
            Las tablas serán muy usadas en tu aventura. Muchas de estas tablas tiene pestañas que revelan otra tabla con información.
            Simplemente presiona en cada pestaña para ver cada una de las tablas. La tabla en la que te encuentras tendrá un color
            amarillo.
          </Text>
          <ImageContainer path={require('../../../assets/icons/table-tab.png')} style={localStyles.iconContainerTables} />
          <Text style={styles.cardContentCenter}>
            Existen otras tablas que se encuentran dentro de un cuadro blanco que debes presionar para ver otra tabla que se relaciona
            con la tabla principal que vez a simple vista. No te preocupes si no lo notas en cada nivel Humu te dirá si una tabla puede
            ser presionada.
          </Text>
          <ImageContainer path={require('../../../assets/icons/table-flip.png')} style={localStyles.iconContainerTables} />
        </CardDefault>
        
        <CardDefault title="Carruseles:" >
          <Text style={styles.cardContentCenter}>
            Los carruseles serán otra forma de aprender. Estos carruseles te permitirán aprender de forma rápida deslizando de izquierda
            a derecha entre diferentes dibujos.
          </Text>
          <ImageContainer path={require('../../../assets/icons/carrousel.png')} style={localStyles.iconContainerCarrouselLittle} />
          <Text style={styles.cardContentCenter}>
            En algunas coasiones te encontrarás con un carrusel que dentro de un carrusel. No te preocupes, simplemente desliza de izquierda
            a derecha de la misma forma. Estos dobles carruseles te dará mucha más información que los carrseles normales.
          </Text>
          <ImageContainer path={require('../../../assets/icons/carrouselception.png')} style={localStyles.iconContainerCarrousel} />
        </CardDefault>

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
  iconContainer: {
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',
    width: 80,               // Width of the container
    height: 80,              // Height of the container
  },
  iconContainerTrophies: {
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',
    width: 100,               // Width of the container
    height: 100,              // Height of the container
  },
  iconContainerCards: {
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',
    width: 180,               // Width of the container
    height: 160,              // Height of the container
  },
  iconContainerAccordion: {
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',
    width: 250,               // Width of the container
    height: 100,              // Height of the container
  },
  iconContainerChat: {
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',
    width: 250,               // Width of the container
    height: 400,              // Height of the container
  },
  iconContainerTables: {
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',
    width: 250,               // Width of the container
    height: 180,              // Height of the container
  },
  iconContainerCarrousel: {
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',
    width: 250,               // Width of the container
    height: 350,              // Height of the container
  },
  iconContainerCarrouselLittle: {
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',
    width: 250,               // Width of the container
    height: 250,              // Height of the container
  },
});

export default TutoScreen;
