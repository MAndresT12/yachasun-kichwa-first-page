# Cosas que conversar con Milton o para que le veas, para luego hacerle

- El Tab navigator para el home cacho que no sirve mucho porque o taca cambiar, porque te retorna al login cuando aplastas y estas en medio de un juego o leccion. Y mas que todo es que no tenemos un home screen cuando entras te lleva de una a escoger niveles de dificultad.
- Cuando te logeas, escoges la dificultad, pasas a la intro y luego a los niveles en em mapa no esta conectado con el tab navigator del progreso, no se hace highlight y mas bien parecene pantallas duplicadas porque tiene diferetnes titulos.
- Perfil no tiene nada pero eso creo que es ha de ser despues
- Los componentes de imágenes, botones ver qué hacer que no son iguales, hacer lo de Milton
- Que dar de acuerdo con el color de fondo
- Poner todos los estilos en el global para luego cambiar


- En los números en vez de mas y menos flechas [N/A]
- Login no en ingles el "welcome" [x]
- Poner las tarjetas del alfabeto como la de los números [x]
- No se ve el blanco en los colores [x]
- El personaje no se ve en el fondo [x]
- Quitar lo de azul repetido [x]
- Poner boton de ayuda para que diga pulsa y gira (un texto así) [x]
- Los primeros numeros es en el 4 y colores en el 3 en el camino levels, poner en kichwa y espanol los niveles [x]
- Usar los mismos juegos y las mismas evaluaciones [x]
- Para números no queda el contador porque toca moverse full no vale [x]
- Spanish dice en la tabla en vez de español en ordinales [x]
- Idea de hacer un chat para los saludos [x]
- Poner tablas en componente de tabs o pestañas [x]
- La paleta de colores como una mancha de pintura envez de un cuadrado [x]
- Completar contenido [x]
- Poner el mismo estilo de tarjeta para el alfabeto, para poner las reglas, dar una seccion de datos curiosos, consideraciones, reglas algo? Sale el bicho diciendo sabías que en el kichwa no existe..... [Mejorar_faltan_animaciones]
- imagenes animadas un estadar, si vamos a usar ai el mismo prompt [Mejorar]
- Poner animaciones a las letras o cambiar el font, poner diseño en las cards [Mejorar]
- Completar el contenido [X]
- Empezar a incorporar el personaje, añadir a los juegos cuando te equivocas y eso [Continuar_Otros_Modulos]
- Hay que poner Text bubles en todos los elementos donde aparezca humu y los signos de interrogación [Continuar_Demas_Juegos_Milton]
- HomePage screen hacer que sea la del inicio y se cuenta la historia de la aplicacion y se introduce al bicho jaja (voz de dora la exploradora o voz de botas IA o de Zabumafoo, niño generico ecuatoriano, perro bau veo veo) [Mejorar]
- Completar lecciones y juegos para modulos 2 al 6
- Configuracion en el Home Screen y icono de config en toda la app (quitar volumen porque no sirve y poner otra cosa)
- Letras de colores animadas y más grandes y que las letras no sean arcoíris. (hablarlo con los demás)
- Cuando emparejas algo suena cómo se pronuncia (juegos)
- Poner la animación de palpitar para humu en saludos parte 2 y family part 2 además hay que bloquear a humu cuando se hace el flip al front porque se queda ahí y se pudre
- Hacer animales con sonidos
- Problemas con implementar el carousel no permite estar antes de algún otro elemento
- En cosas de la casa poner un carrusel en vez de flip cards
- Poner los mismo colores del texto de kichwa-español, se quita el título en kichwa y se hace más grande el texto de traduccion
- Puntos y vidas no está implementado, en vez de puntos y vidas que te dirija a una modal de cómo desbloquear insignias o trofeos, que explique, los trofeos que vas obteniendo y que se pinten cuando obtienes uno y eso.
- Hacer una barra de carga de verdad
- Para family poner un árbol genealógico en vez de cartas. Ver react-native-family-tree aunque es muy vieja la librería
- En family poner emojis de género para que se vea mejor la tabla de hermanos
- Conectar con el Backend


### Correcciones con el inge
- Pantalla de inicio con los integrantes y de qué se trata el software o en el video, algo que diga esto es un juego direcccionado a estoa de la POli, se hizo porque. Que explique que es Yachasun Kichwa
- En menu de inicio, poner creditos, la poli, facu, estudiantes y tutor para el título
- Usar el personaje desde el menu de inicio
- Debe salir el nombre del usuario al ingresar, en niveles tambien
- Progreso falta y perfil también
- En pantalla de inicio que diga hola soy hummu y estoy listo para jogar, aquí una descrpción del Kichwa, una intro al idioma (hacer componente para luego ver cómo poner)
- Redactar mejor instrucciones básicas lo de un mundo maravilloso mejor por este lenguaje ancestral
- Falta un tutorial de toda la aplicación, que pasa con cada botón, como desbloquear trofeso, como entrar a lecciones, etc. también debe decir que cuando pulses en interrogacion te da info
- En los scrollpaths deshabilitar todos los módulos que no sean el primero e ir habilitando según pase los niveles
- Cuando se aplasta la insignia que diga por qué se desbloqueo y una frase info que se vea bonito
- Poner el Kichwa en verdey espanol en azul todos los textos.  
- Definir la paleta de colores de la app, dejar en amarillo y naranja siempre
- Cambiar a todos los puntos de vida por los trofeos
- Alfabeto: Redactar mejor, hacer la A a del modal más grande para todo el alfabeto, en el modal, la A a primero, luego pronunciacion, Ejemplo, y imagen. En curiosidades en conoce las vocales (cambiar el título a esto <-) y quitar a, solo es e y o. Redactar mejor las curiosidades.
- Los numeros: Resaltar más los números (opcional), poner curiosidades para que sepan que combinando salen los números, cómo se dice por ejemplo 421 o algo así, al menos dos ejemplos
- Colores: Curiosidades, aquí están los colores básico, no existen los colores más complejos, y otra para decir que para decir claro se añade el chawa y el yanaka (buscar que es en diccionario)
- Juegos: Info ayuda poner varios bubbles de comic para humu
- End Evaluation: POner haz desbloqueado la insignia y que aparezca o algo





Aquí te ayudo con un guion más detallado para el video de introducción y te explico cómo implementar la secuencia de video, pantalla de carga, y navegación hacia la pantalla de inicio de sesión y el home screen.

### 1. **Guion detallado para el video de introducción**

**Escena 1: Bienvenida**
- **Descripción visual:** El personaje aparece en pantalla, sonriente y saludando al usuario con un fondo colorido y animado.
- **Diálogo (voz del personaje):** “¡Hola! Bienvenido a *Yachasun Kichwa*, la aplicación que te ayudará a aprender Kichwa, el idioma de nuestros ancestros. Soy [nombre del personaje], y estaré contigo en esta increíble aventura.”

**Escena 2: Presentación del propósito**
- **Descripción visual:** Aparece una animación simple con ilustraciones de números y colores deslizándose por la pantalla, mientras el personaje sigue hablando.
- **Diálogo (voz del personaje):** “Aquí aprenderás los números, los colores, y mucho más en Kichwa de una manera divertida y sencilla. ¿Listo para empezar?”

**Escena 3: Progreso y logros**
- **Descripción visual:** La pantalla muestra barras de progreso y medallas de logros que pueden desbloquearse. El personaje señala hacia estos elementos.
- **Diálogo (voz del personaje):** “A medida que avances, irás desbloqueando logros y viendo tu progreso en cada lección. ¡Aprender nunca fue tan divertido!”

**Escena 4: Invitación a comenzar**
- **Descripción visual:** El personaje hace un gesto animado de invitación (por ejemplo, señalando hacia adelante o haciendo un gesto de ánimo).
- **Diálogo (voz del personaje):** “¡Vamos! Estoy aquí para ayudarte en cada paso. Pulsa ‘Iniciar’ y comencemos este viaje juntos.”

**Escena 5: Cierre**
- **Descripción visual:** El personaje desaparece mientras la pantalla muestra el logotipo de la app y el texto “Comenzamos en breve”.
- **Diálogo (voz del personaje):** “Nos vemos pronto. ¡Vamos a aprender Kichwa!”

### 2. **Implementar el video de introducción y la barra de carga**

#### **Paso 1: Crear la pantalla de carga con video**
Debemos agregar una pantalla inicial que se muestre cuando la app se está cargando. En esta pantalla pondremos el video de introducción y la barra de carga.

1. **Instalar dependencias necesarias para video y animación:**
   Necesitarás `expo-av` para reproducir el video y una barra de carga personalizada.

   ```bash
   expo install expo-av
   ```

2. **Pantalla de carga:**

   ```jsx
   import React, { useEffect, useState } from 'react';
   import { View, Text, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
   import { Video } from 'expo-av';
   import { useNavigation } from '@react-navigation/native';

   const LoadingScreen = () => {
     const [videoFinished, setVideoFinished] = useState(false);
     const [loadingProgress, setLoadingProgress] = useState(0); // Para manejar la barra de progreso
     const navigation = useNavigation();
     const video = React.useRef(null);

     useEffect(() => {
       // Simulación de la carga de recursos
       const loadingInterval = setInterval(() => {
         setLoadingProgress((prev) => {
           if (prev < 100) {
             return prev + 1; // Incrementa la barra de progreso
           }
           return prev;
         });
       }, 50); // 50ms para incrementar la barra de carga

       return () => clearInterval(loadingInterval);
     }, []);

     useEffect(() => {
       if (videoFinished && loadingProgress === 100) {
         navigation.replace('Login'); // Redirigir a la pantalla de login después de cargar
       }
     }, [videoFinished, loadingProgress]);

     return (
       <View style={styles.container}>
         <Video
           ref={video}
           style={styles.video}
           source={{ uri: 'https://path-to-your-video.mp4' }} // Ruta del video
           resizeMode="contain"
           shouldPlay
           onPlaybackStatusUpdate={(status) => {
             if (status.didJustFinish) {
               setVideoFinished(true);
             }
           }}
         />
         <View style={styles.progressBar}>
           <View style={[styles.progress, { width: `${loadingProgress}%` }]} />
         </View>
         <Text style={styles.loadingText}>Cargando... {loadingProgress}%</Text>
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#fff',
     },
     video: {
       width: Dimensions.get('window').width,
       height: Dimensions.get('window').height * 0.6,
     },
     progressBar: {
       height: 10,
       width: '80%',
       backgroundColor: '#ddd',
       borderRadius: 5,
       overflow: 'hidden',
       marginTop: 20,
     },
     progress: {
       height: '100%',
       backgroundColor: '#4caf50',
     },
     loadingText: {
       marginTop: 10,
       fontSize: 16,
       fontWeight: 'bold',
     },
   });

   export default LoadingScreen;
   ```

#### **Paso 2: Configurar la navegación**
Asegúrate de tener configurado tu stack de navegación para redirigir al usuario de la pantalla de carga al login y luego al home screen.

```jsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './screens/LoadingScreen'; // Pantalla de carga
import LoginScreen from './screens/LoginScreen'; // Pantalla de login
import HomeScreen from './screens/HomeScreen'; // Pantalla principal

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
```

#### **Paso 3: Pantalla de inicio de sesión y pantalla de inicio (Home Screen)**

**Pantalla de inicio de sesión:**
- Pantalla simple con campos para el nombre de usuario y contraseña.
- Botón para iniciar sesión que redirige al `HomeScreen`.

**Pantalla principal (Home Screen):**
Aquí puedes incluir:
- **Menú de navegación:** Para que el usuario pueda elegir entre diferentes módulos (números, colores, logros, configuraciones).
- **Barra de progreso:** Que muestre el avance del usuario.
- **Configuración:** Un lugar para cambiar opciones como el idioma, el sonido, etc.
  
### Ejemplo de pantalla Home Screen:

```jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Yachasun Kichwa</Text>
      <View style={styles.buttonContainer}>
        <Button title="Aprender Números" onPress={() => navigation.navigate('Numbers')} />
        <Button title="Aprender Colores" onPress={() => navigation.navigate('Colors')} />
        <Button title="Configuración" onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-around',
    height: 200,
  },
});

export default HomeScreen;
```

### **Conclusión:**
1. **Pantalla de carga con video y barra de progreso:** Muestra un video explicativo mientras se carga la app y, cuando termina el video y la carga llega al 100%, navega a la pantalla de login.
2. **Pantalla de login:** Permite al usuario iniciar sesión.
3. **Pantalla principal (Home Screen):** Proporciona acceso a las principales funcionalidades de la aplicación.

Esto te permitirá tener una transición fluida entre la carga, el video de introducción y las diferentes secciones de la app.