import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { styles } from './styles/globalStyles';

import IntroduccionJuegoScreen from './src/components/screens/misc/IntroduccionJuegosScreen.jsx';
import ProgresoScreen from './src/components/menus/ProgresoScreen.jsx';
import Levels from './src/components/menus/Levels';
import InstructionsBasic from './src/components/main/InstructionsBasic.jsx';
import InstructionsMid from './src/components/main/InstructionsMid.jsx';

//Start screens and menus
import LoadingScreen from './src/components/menus/LoadingScreen';
import Login from './src/components/menus/Login';
import HomeScreen from './src/components/menus/HomeScreen';
import SettingsScreen from './src/components/menus/SettingsScreen';

import CaminoLevelsScreen from './src/components/screens/scrollPaths/CaminoLevelsScreen.jsx';
import CaminoLevelsBasicScreen from './src/components/screens/scrollPaths/CaminoLevelsBasicScreen.jsx';


//Module 1 Basic
import Alphabet from './src/components/screens/basic/module1/Alphabet.jsx';
import FirstNumbers from './src/components/screens/basic/module1/FirstNumbers.jsx';
import Colors from './src/components/screens/basic/module1/Colors.jsx';
import ToCount from './src/components/screens/basic/module1/ToCount.jsx';
import GamesBasicModule1 from './src/components/screens/basic/module1/GamesBasicModule1.jsx';
import EvaluationBasicModule1 from './src/components/screens/basic/module1/EvaluationBasicModule1.jsx';
import EndModule1 from './src/components/screens/basic/module1/EndModule1.jsx';

//Module 2 Basic
import GreetingsPart1 from './src/components/screens/basic/module2/GreetingsPart1.jsx';
import GreetingsPart2 from './src/components/screens/basic/module2/GreetingsPart2.jsx';
import PronounsSentence from './src/components/screens/basic/module2/PronounsSentence.jsx';
import FamilyPart1 from './src/components/screens/basic/module2/FamilyPart1.jsx';
import GamesBasicModule2 from './src/components/screens/basic/module2/GamesBasicModule2.jsx';
import EvaluationBasicModule2 from './src/components/screens/basic/module2/EvaluationBasicModule2.jsx';
import EndModule2 from './src/components/screens/basic/module2/EndModule2.jsx';

//Module 3 Basic
import FamilyPart2 from './src/components/screens/basic/module3/FamilyPart2.jsx';
import BodyParts from './src/components/screens/basic/module3/BodyParts.jsx';
import House from './src/components/screens/basic/module3/House.jsx';
import Classroom from './src/components/screens/basic/module3/Classroom.jsx';
import GamesBasicModule3 from './src/components/screens/basic/module3/GamesBasicModule3.jsx';
import EvaluationBasicModule3 from './src/components/screens/basic/module3/EvaluationBasicModule3.jsx';
import EndModule3 from './src/components/screens/basic/module3/EndModule3.jsx';

//Module 4 Basic
import Nature from './src/components/screens/basic/module4/Nature.jsx';
import Foods from './src/components/screens/basic/module4/Foods.jsx';
import Orientation from './src/components/screens/basic/module4/Orientation.jsx';
import AnimalsBasic from './src/components/screens/basic/module4/AnimalsBasic.jsx';
import GamesBasicModule4 from './src/components/screens/basic/module4/GamesBasicModule4.jsx';
import EvaluationBasicModule4 from './src/components/screens/basic/module4/EvaluationBasicModule4.jsx';
import EndModule4 from './src/components/screens/basic/module4/EndModule4.jsx';

//Module 5 Basic
import Pluralization from './src/components/screens/basic/module5/Pluralization.jsx';
import Gender from './src/components/screens/basic/module5/Gender.jsx';
import Quantity from './src/components/screens/basic/module5/Quantity.jsx';
import Size from './src/components/screens/basic/module5/Size.jsx';
import GamesBasicModule5 from './src/components/screens/basic/module5/GamesBasicModule5.jsx';
import EvaluationBasicModule5 from './src/components/screens/basic/module5/EvaluationBasicModule5.jsx';
import EndModule5 from './src/components/screens/basic/module5/EndModule5.jsx';

//Module 6 Basic
import Imperative from './src/components/screens/basic/module6/Imperative.jsx';
import SimplePresent from './src/components/screens/basic/module6/SimplePresent.jsx';
import GamesBasicModule6 from './src/components/screens/basic/module6/GamesBasicModule6.jsx';
import EvaluationBasicModule6 from './src/components/screens/basic/module6/EvaluationBasicModule6.jsx';
import EndModule6 from './src/components/screens/basic/module6/EndModule6.jsx';

// Module 1 Intermedio
import Main from './src/components/main/Main';
import FoodScreen from './src/components/screens/misc/FoodScreen.jsx';
import AnimalsScreen from './src/components/screens/misc/AnimalsScreen.jsx';
import ParticlesPart1Screen from './src/components/screens/particles/ParticlesPart1Screen.jsx';
import GameScreen1 from './src/components/screens/games/GameScreen1';
import EvaluationScreen1 from './src/components/screens/evaluations/EvaluationScreen1';


//Module 2 Intermedio
import ParticlesPart2Screen from './src/components/screens/particles/ParticlesPart2Screen';
import ParticlesPart3Screen from './src/components/screens/particles/ParticlesPart3Screen';
import ParticlesPart4Screen from './src/components/screens/particles/ParticlesPart4Screen';
import LaNegacionScreen from './src/components/screens/misc/LaNegacionScreen.jsx';
import GameScreen2 from './src/components/screens/games/GameScreen2';
import EvaluationScreen2 from './src/components/screens/evaluations/EvaluationScreen2';

//Module 3 Intermedio
import LosVerbosScreen1 from './src/components/screens/verbs/LosVerbosScreen1.jsx';
import LosVerbosConjugacionesScreen1 from './src/components/screens/verbs/LosVerbosConjugacionesScreen1.jsx';
import LosAdjetivosScreen1 from './src/components/screens/adjectives/LosAdjetivosScreen1.jsx';
import VocabularioLaCiudadScreen from './src/components/screens/vocabulary/VocabularioLaCiudadScreen.jsx';
import GameScreen3 from './src/components/screens/games/GameScreen3.jsx';
import EvaluationScreen3 from './src/components/screens/evaluations/EvaluationScreen3.jsx';

//Module 4 Intermedio
import VocabularioLaCocinaScreen from './src/components/screens/vocabulary/VocabularioLaCocinaScreen.jsx';
import LosVerbosScreen2 from './src/components/screens/verbs/LosVerbosScreen2.jsx';
import LosAdjetivosScreen2 from './src/components/screens/adjectives/LosAdjetivosScreen2.jsx';
import VocabularioElDormitorioScreen from './src/components/screens/vocabulary/VocabularioElDormitorioScreen.jsx';
import GameScreen4 from './src/components/screens/games/GameScreen4.jsx';
import EvaluationScreen4 from './src/components/screens/evaluations/EvaluationScreen4.jsx';


//Module 5 Intermedio
import VocabularioLaUbicacionScreen from './src/components/screens/vocabulary/VocabularioLaUbicacionScreen.jsx';
import VocabularioElTiempoScreen from './src/components/screens/vocabulary/VocabularioElTiempoScreen.jsx';
import ElPasadoSimpleScreen from './src/components/screens/conjugations/past/ElPasadoSimpleScreen.jsx';
import ElParticipioPasadoScreen from './src/components/screens/conjugations/past/ElParticipioPasadoScreen.jsx';
import GameScreen5 from './src/components/screens/games/GameScreen5.jsx';
import EvaluationScreen5 from './src/components/screens/evaluations/EvaluationScreen5.jsx';

//Module 6 Intermedio
import ElPasadoProgresivoScreen from './src/components/screens/conjugations/past/ElPasadoProgresivoScreen.jsx';
import ConjugacionTiempoPresenteProgresivoScreen from './src/components/screens/conjugations/present/ConjugacionTiempoPresenteProgresivoScreen.jsx';
import ElFuturoSimpleScreen from './src/components/screens/conjugations/future/ElFuturoSimpleScreen.jsx';
import ElFuturoProximoScreen from './src/components/screens/conjugations/future/ElFuturoProximoScreen.jsx';
import GameScreen6 from './src/components/screens/games/GameScreen6.jsx';
import EvaluationScreen6 from './src/components/screens/evaluations/EvaluationScreen6.jsx';

import CarouselExampleScreen from './src/components/ui/CarouselExampleScreen.jsx';
import HangmanGame from './src/components/ui/HangmanGame.jsx';
import MatchGame from './src/components/ui/MatchGame.jsx';
import Module1 from './src/components/modules/Module1.jsx';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      options={{ headerShown: false }}
    >
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = 'home-outline';
          } else if (route.name === 'Progreso') {
            iconName = 'star-outline';
          } else if (route.name === 'Perfil') {
            iconName = 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Progreso"
        component={ProgresoScreen}
        options={{
          headerStyle: { backgroundColor: '#003366' }, //5B4D28
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          cardStyle: { backgroundColor: '#9FC516' },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          headerStyle: { backgroundColor: '#003366' }, //5B4D28
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          cardStyle: { backgroundColor: '#9FC516' },
        }}
      />
    </Tab.Navigator>
  );
};

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Levels"
      screenOptions={{
        headerStyle: { backgroundColor: '#003366' }, //5B4D28
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        cardStyle: { backgroundColor: '#9FC516' },
      }}
    >
      <Stack.Screen
        name="Levels"
        component={Levels}
        options={{ title: 'Niveles' }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: true, title: 'Configuración' }}
      />
      <Stack.Screen
        name="InstructionsBasic"
        component={InstructionsBasic}
        options={{ title: 'Instrucciones' }}
      />
      <Stack.Screen
        name="InstructionsMid"
        component={InstructionsMid}
        options={{ title: 'Instrucciones' }}
      />
      <Stack.Screen
        name="CaminoLevels"
        component={CaminoLevelsScreen}
        options={{ title: 'Niveles' }}
      />
      <Stack.Screen
        name="CaminoLevelsBasic"
        component={CaminoLevelsBasicScreen}
        options={{ title: 'Niveles' }}
      />
      <Stack.Screen
        name="Alphabet"
        component={Alphabet}
        options={{ title: 'El Alfabeto' }}
      />
      <Stack.Screen
        name="FirstNumbers"
        component={FirstNumbers}
        options={{ title: 'Los Números del 1 al 500' }}
      />
      <Stack.Screen
        name="Colors"
        component={Colors}
        options={{ title: 'Los Colores' }}
      />
      <Stack.Screen
        name="ToCount"
        component={ToCount}
        options={{ title: 'Los Números Ordinales' }}
      />
      <Stack.Screen
        name="GamesBasicModule1"
        component={GamesBasicModule1}
        options={{ title: 'Básico Módulo 1: Juegos de Repaso' }}
      />
      <Stack.Screen
        name="EvaluationBasicModule1"
        component={EvaluationBasicModule1}
        options={{ title: 'Básico Módulo 1: Evaluación' }}
      />
      <Stack.Screen
        name="EndModule1"
        component={EndModule1}
        options={{ title: 'Básico Módulo 1: Puntuación Final' }}
      />
      <Stack.Screen
        name="GreetingsPart1"
        component={GreetingsPart1}
        options={{ title: 'Los Saludos Parte 1' }}
      />
      <Stack.Screen
        name="GreetingsPart2"
        component={GreetingsPart2}
        options={{ title: 'Los Saludos Parte 2' }}
      />
      {/* Modulo 1 */}
      <Stack.Screen
        name="PronounsSentence"
        component={PronounsSentence}
        options={{ title: 'Los Pronombres Personales, el Verbo Kana y la Estructura de una Oración' }}
      />
      <Stack.Screen
        name="FamilyPart1"
        component={FamilyPart1}
        options={{ title: 'La Familia Parte 1' }}
      />
      <Stack.Screen
        name="GamesBasicModule2"
        component={GamesBasicModule2}
        options={{ title: 'Básico Módulo 2: Juegos de Repaso' }}
      />
      <Stack.Screen
        name="EvaluationBasicModule2"
        component={EvaluationBasicModule2}
        options={{ title: 'Básico Módulo 2: Evaluación' }}
      />
      <Stack.Screen
        name="EndModule2"
        component={EndModule2}
        options={{ title: 'Básico Módulo 2: Puntuación Final' }}
      />
      <Stack.Screen
        name="FamilyPart2"
        component={FamilyPart2}
        options={{ title: 'La Familia Parte 2' }}
      />
      <Stack.Screen
        name="BodyParts"
        component={BodyParts}
        options={{ title: 'Las Partes del Cuerpo Humano' }}
      />
      <Stack.Screen
        name="House"
        component={House}
        options={{ title: 'Las Cosas de la Casa' }}
      />
      <Stack.Screen
        name="Classroom"
        component={Classroom}
        options={{ title: 'El Aula' }}
      />
      <Stack.Screen
        name="GamesBasicModule3"
        component={GamesBasicModule3}
        options={{ title: 'Básico Módulo 3: Juegos de Repaso' }}
      />
      <Stack.Screen
        name="EvaluationBasicModule3"
        component={EvaluationBasicModule3}
        options={{ title: 'Básico Módulo 3: Evaluación' }}
      />
      <Stack.Screen
        name="EndModule3"
        component={EndModule3}
        options={{ title: 'Básico Módulo 3: Puntuación Final' }}
      />
      <Stack.Screen
        name="Nature"
        component={Nature}
        options={{ title: 'La Naturaleza' }}
      />
      <Stack.Screen
        name="Foods"
        component={Foods}
        options={{ title: 'Los Alimentos' }}
      />
      <Stack.Screen
        name="Orientation"
        component={Orientation}
        options={{ title: 'La Orientación' }}
      />
      <Stack.Screen
        name="AnimalsBasic"
        component={AnimalsBasic}
        options={{ title: 'Los Animales' }}
      />
      <Stack.Screen
        name="GamesBasicModule4"
        component={GamesBasicModule4}
        options={{ title: 'Básico Módulo 4: Juegos de Repaso' }}
      />
      <Stack.Screen
        name="EvaluationBasicModule4"
        component={EvaluationBasicModule4}
        options={{ title: 'Básico Módulo 4: Evaluación' }}
      />
      <Stack.Screen
        name="EndModule4"
        component={EndModule4}
        options={{ title: 'Básico Módulo 4: Puntuación Final' }}
      />
      <Stack.Screen
        name="Pluralization"
        component={Pluralization}
        options={{ title: 'La Pluralización' }}
      />
      <Stack.Screen
        name="Gender"
        component={Gender}
        options={{ title: 'El Género' }}
      />
      <Stack.Screen
        name="Quantity"
        component={Quantity}
        options={{ title: 'La Cantidad' }}
      />
      <Stack.Screen
        name="Size"
        component={Size}
        options={{ title: 'Tamaño' }}
      />
      <Stack.Screen
        name="GamesBasicModule5"
        component={GamesBasicModule5}
        options={{ title: 'Básico Módulo 5: Juegos de Repaso' }}
      />
      <Stack.Screen
        name="EvaluationBasicModule5"
        component={EvaluationBasicModule5}
        options={{ title: 'Básico Módulo 5: Evaluación' }}
      />
      <Stack.Screen
        name="EndModule5"
        component={EndModule5}
        options={{ title: 'Básico Módulo 5: Puntuación Final' }}
      />
      <Stack.Screen
        name="Imperative"
        component={Imperative}
        options={{ title: 'El Imperativo' }}
      />
      <Stack.Screen
        name="SimplePresent"
        component={SimplePresent}
        options={{ title: 'La Conjugación en Tiempo Presente' }}
      />
      <Stack.Screen
        name="GamesBasicModule6"
        component={GamesBasicModule6}
        options={{ title: 'Básico Módulo 6: Juegos de Repaso' }}
      />
      <Stack.Screen
        name="EvaluationBasicModule6"
        component={EvaluationBasicModule6}
        options={{ title: 'Básico Módulo 6: Evaluación' }}
      />
      <Stack.Screen
        name="EndModule6"
        component={EndModule6}
        options={{ title: 'Básico Módulo 6: Puntuación Final' }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Los Numeros' }}
      />
      <Stack.Screen
        name="Food"
        component={FoodScreen}
        options={{ title: 'Los Alimentos' }}
      />
      <Stack.Screen
        name="Animals"
        component={AnimalsScreen}
        options={{ title: 'Los Animales' }}
      />
      <Stack.Screen
        name="ParticlesPart1"
        component={ParticlesPart1Screen}
        options={{ title: 'Las Partículas en Kichwa Parte 1' }}
      />
      <Stack.Screen
        name="IntroduccionJuegosScreen1"
        component={IntroduccionJuegoScreen}
        options={{ title: 'Games' }}
      />
      <Stack.Screen
        name="Game1"
        component={GameScreen1}
        options={{ title: 'Evaluación - Parte 1' }}
      />
      <Stack.Screen
        name="Evaluation1"
        component={EvaluationScreen1}
        options={{ title: 'Evaluación - Parte 1' }}
      />
      {/* Modulo 2 */}
      <Stack.Screen
        name="ParticlesPart2"
        component={ParticlesPart2Screen}
        options={{ title: 'Las Partículas en Kichwa Parte 2' }}
      />
      <Stack.Screen
        name="ParticlesPart3"
        component={ParticlesPart3Screen}
        options={{ title: 'Las Partículas en Kichwa Parte 3' }}
      />
      <Stack.Screen
        name="ParticlesPart4"
        component={ParticlesPart4Screen}
        options={{ title: 'Las Partículas en Kichwa Parte 4' }}
      />
      <Stack.Screen
        name="LaNegacion"
        component={LaNegacionScreen}
        options={{ title: 'La Negación' }}
      />
      <Stack.Screen
        name="Game2"
        component={GameScreen2}
        options={{ title: 'Evaluacion - Parte 2' }}
      />
      <Stack.Screen
        name="Evaluation2"
        component={EvaluationScreen2}
        options={{ title: 'Evaluación - Parte 2' }}
      />
      {/* Modulo 3 */}
      <Stack.Screen
        name="LosVerbos1"
        component={LosVerbosScreen1}
        options={{ title: 'Los Verbos - Parte 1' }}
      />
      <Stack.Screen
        name="LosVerbosConjugaciones1"
        component={LosVerbosConjugacionesScreen1}
        options={{ title: 'Los Verbos 1 - Conjugaciones' }}
      />
      <Stack.Screen
        name="LosAdjetivos1"
        component={LosAdjetivosScreen1}
        options={{ title: 'Los Adjetivos - Parte 1' }}
      />
      <Stack.Screen
        name="LaCiudad"
        component={VocabularioLaCiudadScreen}
        options={{ title: 'Vocabulario - La Ciudad' }}
      />
      <Stack.Screen
        name="Game3"
        component={GameScreen3}
        options={{ title: 'Evaluación - Parte 3' }}
      />
      <Stack.Screen
        name="Evaluation3"
        component={EvaluationScreen3}
        options={{ title: 'Evaluación - Parte 3' }}
      />
      {/* Modulo 4 */}
      <Stack.Screen
        name="LaCocina"
        component={VocabularioLaCocinaScreen}
        options={{ title: 'Vocabulario - La Cocina' }}
      />
      <Stack.Screen
        name="LosVerbos2"
        component={LosVerbosScreen2}
        options={{ title: 'Los Verbos - Parte 2' }}
      />
      <Stack.Screen
        name="LosAdjetivos2"
        component={LosAdjetivosScreen2}
        options={{ title: 'Los Adjetivos - Parte 2' }}
      />
      <Stack.Screen
        name="ElDormitorio"
        component={VocabularioElDormitorioScreen}
        options={{ title: 'Vocabulario - El Dormitorio' }}
      />
      <Stack.Screen
        name="Game4"
        component={GameScreen4}
        options={{ title: 'Evaluación - Parte 4' }}
      />
      <Stack.Screen
        name="Evaluation4"
        component={EvaluationScreen4}
        options={{ title: 'Evaluación - Parte 4' }}
      />
      {/* Modulo 5 */}
      <Stack.Screen
        name="LaUbicacion"
        component={VocabularioLaUbicacionScreen}
        options={{ title: 'Vocabulario - La Ubicación' }}
      />
      <Stack.Screen
        name="ElTiempo"
        component={VocabularioElTiempoScreen}
        options={{ title: 'Vocabulario - El Tiempo' }}
      />
      <Stack.Screen
        name="ElPasadoSimple"
        component={ElPasadoSimpleScreen}
        options={{ title: 'El Pasado Simple' }}
      />
      <Stack.Screen
        name="ElParticipioPasado"
        component={ElParticipioPasadoScreen}
        options={{ title: 'El Participio Pasado' }}
      />
      <Stack.Screen
        name="Game5"
        component={GameScreen5}
        options={{ title: 'Evaluación - Parte 5' }}
      />
      <Stack.Screen
        name="Evaluation5"
        component={EvaluationScreen5}
        options={{ title: 'Evaluación - Parte 5' }}
      />
      {/* Modulo 6 */}
      <Stack.Screen
        name="ElPasadoProgresivo"
        component={ElPasadoProgresivoScreen}
        options={{ title: 'El Pasado Progresivo' }}
      />
      <Stack.Screen
        name="ConjugacionPresenteProgresivo"
        component={ConjugacionTiempoPresenteProgresivoScreen}
        options={{ title: 'Conjugación Presente Progresivo' }}
      />
      <Stack.Screen
        name="FuturoProximo"
        component={ElFuturoProximoScreen}
        options={{ title: 'Futuro Próximo' }}
      />
      <Stack.Screen
        name="FuturoSimple"
        component={ElFuturoSimpleScreen}
        options={{ title: 'Futuro Simple' }}
      />
      <Stack.Screen
        name="Game6"
        component={GameScreen6}
        options={{ title: 'Evaluación - Parte 6' }}
      />
      <Stack.Screen
        name="Evaluation6"
        component={EvaluationScreen6}
        options={{ title: 'Evaluación - Parte 6' }}
      />
    </Stack.Navigator>
  );
}

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>Perfil</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppNavigator />
    </NavigationContainer>
  );
}
